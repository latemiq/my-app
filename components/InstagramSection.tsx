"use client";

import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  VStack,
  HStack,
  Icon,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

export const InstagramSection = () => {
  return (
    <Box bg="gray.50" py={16} px={6}>
      <VStack spacing={8} maxW="7xl" mx="auto" textAlign="center">
        {/* 🔹 Nagłówek sekcji */}
        <HStack justify="center" spacing={2}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="semibold"
            color="gray.800"
          >
            Poznaj naszych Opiekunów
          </Heading>
          <HStack spacing={1}>
            <Text fontSize={{ base: "2xl", md: "3xl" }} color="gray.800">
              z
            </Text>
            <Icon as={FaInstagram} boxSize={6} color="#E1306C" />
            <Text
              as={ChakraLink}
              href="https://www.instagram.com/"
              isExternal
              color="#E1306C"
              fontWeight="bold"
            >
              Instagram
            </Text>
          </HStack>
        </HStack>

        {/* 🔹 Siatka 3 postów */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={6}
          w="100%"
          justifyItems="center"
        >
          {/* Karta 1 */}
          <Box
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            overflow="hidden"
            maxW="sm"
            transition="all 0.2s"
            _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
          >
            <Image
              src="/images/insta1.jpg"
              alt="Opiekun Kasia"
              w="100%"
              h="200px"
              objectFit="cover"
            />
            <Box p={4}>
              <Heading as="h3" size="sm" mb={2}>
                Opiekunka Kasia
              </Heading>
              <Text fontSize="sm" color="gray.600">
                🐾 „Cudowna opiekunka! Mój pies wrócił szczęśliwy po weekendzie
                w domu Kasi. Widać, że kocha zwierzęta 💜”
              </Text>
            </Box>
          </Box>

          {/* Karta 2 */}
          <Box
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            overflow="hidden"
            maxW="sm"
            transition="all 0.2s"
            _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
          >
            <Image
              src="/images/insta2.jpg"
              alt="Opiekun Adam"
              w="100%"
              h="200px"
              objectFit="cover"
            />
            <Box p={4}>
              <Heading as="h3" size="sm" mb={2}>
                Opiekun Adam
              </Heading>
              <Text fontSize="sm" color="gray.600">
                🦮 Adam codziennie wychodzi na spacery z psami swoich podopiecznych.
                Na jego profilu znajdziesz mnóstwo uśmiechniętych mordek!
              </Text>
            </Box>
          </Box>

          {/* Karta 3 */}
          <Box
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            overflow="hidden"
            maxW="sm"
            transition="all 0.2s"
            _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
          >
            <Image
              src="/images/insta3.jpg"
              alt="Opiekun Ola"
              w="100%"
              h="200px"
              objectFit="cover"
            />
            <Box p={4}>
              <Heading as="h3" size="sm" mb={2}>
                Opiekunka Ola
              </Heading>
              <Text fontSize="sm" color="gray.600">
                🐶 Ola prowadzi aktywny tryb życia i chętnie zabiera psy na długie
                spacery po lesie 🌲 Zajrzyj na jej profil, by zobaczyć przygody!
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
