"use client";

import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  HStack,
  VStack,
  Divider,
  Text,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  const orange = "#E7B15B";

  const footerLinks = [
    {
      title: "Pethomer",
      links: [
        "Jak to działa",
        "Pomoc / FAQ",
        "Kontakt",
        "Kariera",
        "Regulamin",
        "Polityka prywatności",
      ],
    },
    {
      title: "Usługi",
      links: [
        "Domowy hotel dla psa",
        "Spacer z psem",
        "Karmienie zwierząt",
        "Opieka dzienna",
        "Program Partnerski",
      ],
    },
    {
      title: "Warszawa",
      links: [
        "Hotel dla psów Warszawa",
        "Spacerowanie psów Warszawa",
        "Karmienie psów Warszawa",
        "Opieka dzienna Warszawa",
      ],
    },
    {
      title: "Kraków",
      links: [
        "Hotel dla psów Kraków",
        "Spacerowanie psów Kraków",
        "Karmienie psów Kraków",
        "Opieka dzienna Kraków",
      ],
    },
    {
      title: "Gdańsk",
      links: [
        "Hotel dla psów Gdańsk",
        "Spacerowanie psów Gdańsk",
        "Karmienie psów Gdańsk",
        "Opieka dzienna Gdańsk",
      ],
    },
  ];

  return (
    <Box bg="gray.50" py={12} px={{ base: 6, md: 12 }}>
      <SimpleGrid
        columns={{ base: 2, md: 5 }}
        spacing={10}
        maxW="7xl"
        mx="auto"
        mb={10}
      >
        {footerLinks.map((section, i) => (
          <VStack key={i} align="flex-start" spacing={2}>
            <Heading as="h4" size="sm" color="gray.700" mb={1}>
              {section.title}
            </Heading>
            {section.links.map((link, idx) => (
              <ChakraLink
                key={idx}
                href="#"
                fontSize="sm"
                color="gray.600"
                _hover={{ color: "gray.800", textDecor: "underline" }}
              >
                {link}
              </ChakraLink>
            ))}
          </VStack>
        ))}

        {/* 🔹 Ikony social media */}
        <VStack align="flex-start" spacing={3}>
          <Heading as="h4" size="sm" color="gray.700">
            Śledź nas
          </Heading>
          <HStack spacing={4}>
            <ChakraLink href="#" aria-label="Instagram">
              <Icon as={FaInstagram} boxSize={5} color={orange} />
            </ChakraLink>
            <ChakraLink href="#" aria-label="Facebook">
              <Icon as={FaFacebook} boxSize={5} color={orange} />
            </ChakraLink>
          </HStack>
        </VStack>
      </SimpleGrid>

      <Divider />

      {/* 🔹 Stopka dolna */}
      <Flex
        justify="center"
        align="center"
        mt={6}
        fontSize="sm"
        color="gray.500"
      >
        <Text textAlign="center">
          © {new Date().getFullYear()} Pethomer / Zoocial. Wszelkie prawa zastrzeżone.
        </Text>
      </Flex>
    </Box>
  );
};
