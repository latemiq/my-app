"use client";
import insta1 from "@/app/images/insta1.png";
import insta2 from "@/app/images/insta2.png";
import insta3 from "@/app/images/insta3.png";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  VStack,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Skeleton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaHeart, FaRegComment } from "react-icons/fa";
import { useEffect, useState } from "react";

type InstaCard = {
  title: string;
  href: string;
  cover: string;
  alt: string;
  fallbackCaption?: string;
  likes?: number;
  comments?: number;
};

const POSTS: InstaCard[] = [
  {
    title: "Opiekun Przemek C.",
    href: "https://www.instagram.com/p/DC4AgMWKdP1/",
    cover: insta1.src,
    alt: "Opiekun Przemek z psem",
    fallbackCaption:
      "Gratulujemy Przemkowi wspaniałych opinii i wyjątkowej opieki nad czworonogami! ✨",
    likes: 7,
    comments: 1,
  },
  {
    title: "Opiekunka Miriam N",
    href: "https://www.instagram.com/p/C7TpGnksqqB/",
    cover: insta2.src,
    alt: "Opiekunka Miriam z psem",
    fallbackCaption:
      "Miriam szybko znajduje wspólny język z psami — zajrzyj na jej profil!",
    likes: 12,
    comments: 3,
  },
  {
    title: "Opiekunka Aleksandra",
    href: "https://www.instagram.com/p/C6nnCreMcjq/",
    cover: insta3.src,
    alt: "Kolaż zdjęć opiekunki i zwierzaków",
    fallbackCaption:
      "Elastyczny grafik i mnóstwo spacerów — zobacz więcej zdjęć!",
    likes: 20,
    comments: 6,
  },
];

function useInstagramCaption(url: string, fallback?: string) {
  const [caption, setCaption] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`/api/ig-oembed?url=${encodeURIComponent(url)}`);
        const json = await res.json();
        if (!alive) return;
        const raw = (json?.caption as string | null) ?? null;
        const clipped = raw ? (raw.length > 220 ? raw.slice(0, 217) + "…" : raw) : null;
        setCaption(clipped ?? fallback ?? null);
      } catch {
        if (alive) setCaption(fallback ?? null);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [url, fallback]);

  return { caption, loading };
}

export const InstagramSection = () => {
  const overlayBg = useColorModeValue("blackAlpha.700", "blackAlpha.700");
  const cardBg = useColorModeValue("white", "gray.800");
  const titleColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} py={16} px={6}>
      <VStack spacing={10} maxW="1200px" mx="auto" textAlign="center">
        {/* --- Nagłówek --- */}
        <HStack justify="center" spacing={3}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="semibold"
            color={titleColor}
          >
            Poznaj naszych Opiekunów
          </Heading>
          <Heading
            as="span"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="extrabold"
            color="#E1306C"
            fontFamily="'Pacifico', cursive"
          >
            Instagram
          </Heading>
        </HStack>

        {/* --- Karty IG --- */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
          justifyItems="center"
        >
          {POSTS.map((post) => {
            const { caption, loading } = useInstagramCaption(post.href, post.fallbackCaption);
            return (
              <LinkBox
                as="article"
                key={post.href}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="0 10px 30px rgba(0,0,0,0.08)"
                overflow="hidden"
                w="335.99px"
                h="323.99px"
                transition="all .2s ease"
                _hover={{
                  boxShadow: "0 12px 36px rgba(0,0,0,0.12)",
                  transform: "translateY(-4px)",
                }}
                role="group"
                cursor="pointer"
              >
                <Box position="relative" w="full" h="full">
                  <Image
                    src={post.cover}
                    alt={post.alt}
                    w="335.99px"
                    h="323.99px"
                    objectFit="cover"
                  />

                  {/* Overlay na hover */}
                  <Box
                    position="absolute"
                    inset={0}
                    bg={overlayBg}
                    opacity={0}
                    transition="opacity 0.25s ease"
                    _groupHover={{ opacity: 1 }}
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    px={6}
                    textAlign="center"
                  >
                    <HStack spacing={6} color="white" mb={3}>
                      <HStack fontSize="lg">
                        <Icon as={FaHeart} />
                        <Text>{post.likes ?? ""}</Text>
                      </HStack>
                      <HStack fontSize="lg">
                        <Icon as={FaRegComment} />
                        <Text>{post.comments ?? ""}</Text>
                      </HStack>
                    </HStack>

                    {loading ? (
                      <Skeleton
                        height="6"
                        startColor="whiteAlpha.400"
                        endColor="whiteAlpha.600"
                      />
                    ) : (
                      <Text
                        color="white"
                        fontSize="md"
                        fontWeight="semibold"
                        lineHeight="1.4"
                        noOfLines={4}
                      >
                        {caption ?? "Zobacz post na Instagramie"}
                      </Text>
                    )}
                  </Box>
                </Box>

                {/* Cały kafel klikalny */}
                <LinkOverlay
                  href={post.href}
                  isExternal
                  rel="noopener noreferrer"
                />
              </LinkBox>
            );
          })}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
