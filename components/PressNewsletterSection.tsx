"use client";
import forbes from "@/app/images/forbes.svg";
import trojmiasto from "@/app/images/trojmiasto.png";
import esopot from "@/app/images/esopot.png";
import choragiew from "@/app/images/gdansk.png"; 
import gdansk from "@/app/images/gdańsk.png";

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
} from "@chakra-ui/react";

export const PressNewsletterSection = () => {
  const purple = "#5626C4";

  const logos = [forbes, trojmiasto, esopot, choragiew, gdansk].filter(Boolean);

  return (
    <Box bg="#F7FAFC" py={16} px={6}>
      <VStack spacing={10} maxW="1100px" mx="auto">
        {/* Tytuł */}
        <Heading
          as="h2"
          fontSize="24px"
          fontWeight="semibold"
          color="gray.800"
          textAlign="center"
        >
          Napisali o nas coś miłego
        </Heading>

        {/* Logotypy */}
        <HStack
          spacing={14}
          justify="center"
          align="center"
          w="full"
          flexWrap="wrap"
        >
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={`media-logo-${i}`}
              h="34px"
              objectFit="contain"
              filter="grayscale(100%)"
              opacity={0.9}
            />
          ))}
        </HStack>

        {/* Karta newslettera */}
        <Flex
          direction="column"
          w="full"
          maxW="840px"
          bg="white"
          borderRadius="14px"
          boxShadow="0 12px 34px rgba(0,0,0,0.08)"
          p="22px"
          gap={4}
        >
          <Heading
            as="h3"
            fontSize="16px"
            fontWeight="semibold"
            color="gray.800"
          >
            Chcesz otrzymywać od nas informacje o nowych opiekunach?
          </Heading>

          <HStack w="full" spacing={3}>
            <Input
              placeholder="Twój adres e-mail"
              bg="white"
              borderColor="gray.200"
              _focus={{ borderColor: purple, boxShadow: `0 0 0 1px ${purple}` }}
              h="48px"
              borderRadius="9999px"
              px={5}
            />
            <Button
              bg={purple}
              color="white"
              _hover={{ bg: "#451FA3" }}
              h="48px"
              px={7}
              borderRadius="9999px"
              fontWeight="bold"
            >
              Zapisz się
            </Button>
          </HStack>

          <Checkbox size="sm" colorScheme="purple">
            Zapisz się do newslettera
          </Checkbox>

          <Text fontSize="12px" color="gray.600" lineHeight="1.5">
            Zapisując się wyrażasz zgodę na otrzymywanie wiadomości e-mail od
            Zoocial. Możesz wypisać się w każdej chwili.
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
};
