"use client";
import hero from "@/app/images/pethomer.jpg";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Input,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdOutlineLocationOn, MdPets, MdFastfood, MdHotel } from "react-icons/md";
import { FaWalking, FaSun } from "react-icons/fa";

export const Header = () => {
  const purple = "#5626C4";
  const orange = "#E7B15B";

  return (
    <Box
      position="relative"
      w="100%"
      h={{ base: "auto", md: "600px" }}
      bgImage={`url(${hero.src})`}// podmień na własny obraz
      bgSize="cover"
      bgPos="center"
      color="white"
      overflow="hidden"
    >
      {/* Nakładka półprzezroczysta */}
      <Box position="absolute" inset={0} bg="blackAlpha.600" />

      <Flex
        position="relative"
        zIndex={1}
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        px={4}
        py={{ base: 10, md: 20 }}
        maxW="6xl"
        mx="auto"
      >
        {/* Nagłówki */}
        <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
          Zaufany opiekun dla Twojego psa i kota
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mt={4} color="whiteAlpha.900">
          Znajdź sprawdzonych Opiekunów, którzy zajmą się Twoim pupilem jak członkiem rodziny.
        </Text>

        {/* 🔹 Karty usług */}
        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          spacing={4}
          mt={10}
          bg="white"
          borderRadius="xl"
          p={4}
          boxShadow="xl"
          color="gray.800"
        >
          {[
            { icon: MdHotel, label: "Psi hotel" },
            { icon: FaWalking, label: "Spacer z psem" },
            { icon: MdFastfood, label: "Szybkie karmienie" },
            { icon: FaSun, label: "Opieka dzienna" },
          ].map((item) => (
            <Button
              key={item.label}
              leftIcon={<Icon as={item.icon} boxSize={5} />}
              variant="ghost"
              justifyContent="flex-start"
              fontWeight="semibold"
              fontSize="sm"
              _hover={{ bg: "gray.100" }}
            >
              {item.label}
            </Button>
          ))}
        </SimpleGrid>

        {/* 🔹 Formularz wyszukiwania */}
        <Flex
          direction={{ base: "column", md: "row" }}
          mt={6}
          bg="white"
          p={4}
          rounded="xl"
          boxShadow="xl"
          align="center"
          gap={3}
          color="gray.800"
        >
          {/* Lokalizacja */}
          <InputGroup maxW={{ base: "100%", md: "300px" }}>
            <InputLeftElement pointerEvents="none" children={<MdOutlineLocationOn />} />
            <Input
              placeholder="Adres, np. Gdańsk, ul. Słoneczna"
              bg="white"
              fontSize="sm"
            />
          </InputGroup>

          {/* Data */}
          <Input
            type="date"
            placeholder="Data opieki"
            fontSize="sm"
            bg="white"
            maxW={{ base: "100%", md: "180px" }}
          />

          {/* Rozmiar zwierzaka */}
          <Select placeholder="Wielkość zwierzaka" fontSize="sm" bg="white" maxW={{ base: "100%", md: "180px" }}>
            <option>Mały</option>
            <option>Średni</option>
            <option>Duży</option>
          </Select>

          {/* Przycisk */}
          <Button
            bg={purple}
            color="white"
            px={8}
            fontWeight="bold"
            _hover={{ bg: "#451FA3" }}
            w={{ base: "100%", md: "auto" }}
          >
            Wyszukaj
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
