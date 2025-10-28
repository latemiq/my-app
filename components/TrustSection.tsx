"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Image,
  Avatar,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const TrustSection = () => {
  const purple = "#5626C4";

  return (
    <Box bg="white" py={20} px={6}>
      <VStack spacing={16} maxW="7xl" mx="auto">
        {/* 🔹 Sekcja kart usług */}
        <Box w="100%">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {[
              {
                title: "Wyjeżdżasz",
                text: "Zostaw swojego Czworonoga w domowym hotelu u sprawdzonego Opiekuna.",
                img: "/images/wyjazd.jpg",
              },
              {
                title: "Zarezerwuj",
                text: "Znajdź opiekuna w swojej okolicy i zarezerwuj usługę przez naszą platformę.",
                img: "/images/rezerwacja.jpg",
              },
              {
                title: "Opieka 🐾",
                text: "Opiekun zajmie się Twoim pupilem, wysyłając Ci codziennie zdjęcia i relacje.",
                img: "/images/opieka2.jpg",
              },
            ].map((item, i) => (
              <Box
                key={i}
                borderWidth="1px"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="md"
                bg="white"
                _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
                transition="all 0.2s"
              >
                <Image src={item.img} alt={item.title} h="180px" w="100%" objectFit="cover" />
                <Box p={5}>
                  <Heading as="h3" size="md" mb={2} color="gray.800">
                    {item.title}
                  </Heading>
                  <Text color="gray.600" fontSize="sm" mb={4}>
                    {item.text}
                  </Text>
                  <Button colorScheme="purple" bg={purple} color="white" size="sm">
                    Sprawdź naszych opiekunów
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* 🔹 Opinie klientów */}
        <Box w="100%">
          <Heading as="h2" size="lg" mb={8} textAlign="center" color="gray.800">
            Co mówią nasi klienci
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} justifyItems="center">
            {[
              {
                name: "Anna, Warszawa",
                text: "Świetna aplikacja, wszystko przebiegło sprawnie, a mój piesek był w dobrych rękach!",
                rating: 5,
              },
              {
                name: "Marek, Gdańsk",
                text: "Znalazłem idealnego opiekuna w kilka minut. Bardzo polecam wszystkim właścicielom!",
                rating: 5,
              },
            ].map((review, i) => (
              <Box
                key={i}
                borderWidth="1px"
                borderRadius="xl"
                boxShadow="md"
                bg="white"
                p={6}
                maxW="md"
              >
                <HStack spacing={3} mb={3}>
                  <Avatar name={review.name} size="md" />
                  <VStack align="flex-start" spacing={0}>
                    <Text fontWeight="semibold" color="gray.800">
                      {review.name}
                    </Text>
                    <HStack spacing={1}>
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <Icon as={StarIcon} key={idx} color="yellow.400" boxSize={4} />
                      ))}
                    </HStack>
                  </VStack>
                </HStack>
                <Text color="gray.600" fontSize="sm">
                  “{review.text}”
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* 🔹 Baner promocyjny */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          bg="#F1E9FE"
          borderRadius="xl"
          p={6}
          w="100%"
          maxW="6xl"
          boxShadow="md"
          gap={6}
        >
          <Flex align="center" gap={6} w="100%">
            <Image
              src="/images/promo.jpg"
              alt="Promocja -10%"
              borderRadius="md"
              h="140px"
              w={{ base: "100%", md: "40%" }}
              objectFit="cover"
            />
            <VStack align="flex-start" spacing={2} flex="1">
              <Text fontSize="xl" fontWeight="bold" color="gray.800">
                Szukasz opiekuna dla swojego pupila?
              </Text>
              <Text fontSize="4xl" fontWeight="bold" color={purple}>
                -10%
              </Text>
              <Text fontSize="sm" color="gray.600">
                Z kodem <strong>LATO10</strong> — ważny do 31.08.2025
              </Text>
            </VStack>
          </Flex>

          <Button bg={purple} color="white" px={8} _hover={{ bg: "#451FA3" }}>
            Zniżka dla znajomych
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};
