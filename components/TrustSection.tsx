"use client";

import serv1 from "@/app/images/service1.png";
import serv2 from "@/app/images/service2.png";
import serv3 from "@/app/images/service3.png";
import banner2 from "@/app/images/banner2.png";



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
  const orange = "#E7B15B";

  return (
    <Box bg="white" py={20}>
      <VStack spacing={20} maxW="1100px" mx="auto" align="center">
        {/* === KARTY USŁUG === */}
        <Box w="1052px" mx="auto">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
            {[
              {
                title: "Wyszukaj",
                text: "Specjalnie dla Ciebie zbieramy i weryfikujemy recenzje o naszych opiekunach. Wybierz najlepszego Opiekuna dla swojego pupila.",
                img: serv1.src,
              },
              {
                title: "Zarezerwuj",
                text: "...czas wybranego Opiekuna płacąc bezpiecznie za wybraną usługę.",
                img: serv2.src,
              },
              {
                title: "Ciesz się",
                text: "Bez stresów i wyrzutów sumienia korzystaj z wolnego czasu i ciesz się szczęściem Twojego zwierzaka.",
                img: serv3.src,
              },
            ].map((item) => (
              <Box
                key={item.title}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="16px"
                overflow="hidden"
                bg="white"
                boxShadow="0 8px 20px rgba(0,0,0,0.08)"
                h="420px"
                transition="all .25s ease"
                _hover={{ boxShadow: "0 10px 28px rgba(0,0,0,0.12)", transform: "translateY(-3px)" }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  h="250px"
                  w="100%"
                  objectFit="cover"
                />
                <Box p={5}>
                  <Heading as="h3" size="sm" mb={2} color="gray.800">
                    {item.title}
                  </Heading>
                  <Text color="gray.600" fontSize="sm" lineHeight="1.5">
                    {item.text}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          {/* Przycisk pod gridem */}
          <Flex justify="center" mt={6}>
            <Button
              bg={purple}
              color="white"
              _hover={{ bg: "#451FA3" }}
              borderRadius="50px"
              px={10}
              h="50px"
              fontWeight="bold"
              fontSize="sm"
            >
              Sprawdź naszych Opiekunów
            </Button>
          </Flex>
        </Box>

        {/* === OPINIE === */}
        <Box w="1052px" mx="auto">
          <Heading
            as="h2"
            size="md"
            mb={6}
            color="gray.800"
            textAlign="left"
          >
            Co mówią nasi klienci
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {[
              {
                name: "Katarzyna, Warszawa",
                text: "Jestem bardzo zadowolona z pomocy, byłam w ciągłym kontakcie z Patrycją, zdawała mi na bieżąco relacje.",
              },
              {
                name: "Joanna, Wrocław",
                text: "Ewelina ze wszystkim sobie poradziła. Kenzo był zaopiekowany i wrócił do domu spokojny i zadowolony :) Bardzo polecam!",
              },
            ].map((r) => (
              <Box
                key={r.name}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="16px"
                boxShadow="0 8px 20px rgba(0,0,0,0.08)"
                bg="white"
                h="235px"
                p={8}
                position="relative"
              >
                <Avatar
                  name={r.name}
                  size="lg"
                  position="absolute"
                  top="50%"
                  left="-28px"
                  transform="translateY(-50%)"
                  boxShadow="lg"
                />
                <Box pl="40px">
                  <Box color={orange} fontSize="2xl" mb={3}>
                    ”
                  </Box>
                  <Text color="gray.700" fontSize="sm" lineHeight="1.6">
                    {r.text}
                  </Text>
                  <Text color="gray.500" fontSize="sm" mt={2}>
                    – {r.name}
                  </Text>
                  <HStack spacing={1} mt={3}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon as={StarIcon} key={i} color="yellow.400" boxSize={4} />
                    ))}
                  </HStack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          {/* Przycisk pod opiniami */}
          <Flex justify="center" mt={8}>
            <Button
              bg={purple}
              color="white"
              _hover={{ bg: "#451FA3" }}
              borderRadius="50px"
              px={10}
              h="50px"
              fontWeight="bold"
              fontSize="sm"
            >
              Sprawdź naszych Opiekunów
            </Button>
          </Flex>
        </Box>

        {/* === BANER === */}
        <VStack spacing={4} w="1100px" mx="auto">
          <Image
            src={banner2.src}
            alt="-10% promocja"
            w="1100px"
            h="260px"
            borderRadius="16px"
            objectFit="cover"
            boxShadow="0 14px 34px rgba(0,0,0,0.10)"
          />
          <Button
            bg={purple}
            color="white"
            _hover={{ bg: "#451FA3" }}
            borderRadius="50px"
            px={10}
            h="50px"
            fontWeight="bold"
            fontSize="sm"
          >
            Dowiedz się więcej
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};
