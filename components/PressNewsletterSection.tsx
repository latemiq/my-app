"use client";

import {
  Box,
  Flex,
  Image,
  Heading,
  HStack,
  VStack,
  Input,
  Button,
  Text,
  Checkbox,
  useColorModeValue,
} from "@chakra-ui/react";

export const PressNewsletterSection = () => {
  const purple = "#5626C4";

  return (
    <Box bg="gray.50" py={16} px={6}>
      <VStack spacing={12} maxW="6xl" mx="auto">
        {/* 🔹 Logo mediów */}
        <VStack spacing={6}>
          <Heading
            as="h2"
            size="md"
            textAlign="center"
            color="gray.800"
            fontWeight="medium"
          >
            Napisali o nas coś miłego
          </Heading>

          <HStack
            justify="center"
            spacing={{ base: 6, md: 12 }}
            flexWrap="wrap"
          >
            {[
              "/images/forbes.png",
              "/images/trojmiasto.png",
              "/images/sopot.png",
              "/images/gdansk.png",
            ].map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt={`media-logo-${i}`}
                h="30px"
                objectFit="contain"
                filter="grayscale(100%)"
                opacity={0.8}
              />
            ))}
          </HStack>
        </VStack>

        {/* 🔹 Sekcja newslettera */}
        <Flex
          direction="column"
          align="flex-start"
          bg="white"
          boxShadow="md"
          borderRadius="xl"
          p={6}
          w="full"
          maxW="lg"
          mx="auto"
          gap={4}
        >
          <Heading as="h3" size="sm" color="gray.800" mb={2}>
            Chcesz otrzymywać od nas informacje o nowych opiekunach?
          </Heading>

          <Flex w="full" gap={2}>
            <Input
              placeholder="Twój adres e-mail"
              bg="gray.50"
              borderColor="gray.200"
              _focus={{ borderColor: purple }}
            />
            <Button
              bg={purple}
              color="white"
              _hover={{ bg: "#451FA3" }}
              px={6}
            >
              Zapisz się
            </Button>
          </Flex>

          <Checkbox size="sm" colorScheme="purple">
            Zapisz się do newslettera
          </Checkbox>

          <Text fontSize="xs" color="gray.500">
            Zapisując się wyrażasz zgodę na otrzymywanie wiadomości e-mail od
            Zoocial. Możesz wypisać się w każdej chwili.
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
};
