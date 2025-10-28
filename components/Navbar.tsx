"use client";
import logo from "@/app/images/zoocial-logo.png";
import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  Link as ChakraLink,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";

export const Navbar = () => {
  const purple = "#5626C4";
  const orange = "#E7B15B";

  const categories = ["PETSITTING", "SKLEP", "BLOG", "ADOPCJE", "WYSZUKIWARKA RAS"];

  return (
    <Box w="100%" position="relative" zIndex={100} bg="white">
      {/* === GÓRNA: pasek promocyjny === */}
      <Flex
        bg={purple}
        color="white"
        justify="center"
        align="center"
        py={1}
        px={4}
        fontSize="sm"
        fontWeight="medium"
      >
        <Text textAlign="center">
          🎁 Pomysł na prezent last minute:{" "}
          <ChakraLink href="#" textDecor="underline" fontWeight="semibold">
            bon na konsultację behawiorystyczną online →
          </ChakraLink>
        </Text>
      </Flex>

      {/* === ŚRODKOWA: logo + wyśrodkowane kategorie === */}
      <Box bg="white" borderBottom="1px solid" borderColor="gray.200">
        <Flex
          align="center"
          maxW="1280px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          py={3}
          gap={4}
        >
          {/* lewa kolumna: logo */}
          <Flex align="center" gap={2} flexBasis={{ base: "160px", md: "220px" }} flexShrink={0}>
            <Link href="/" aria-label="Strona główna">
              <Image src={logo.src} alt="Zoocial logo" w="120" h="24px" />
            </Link>
          </Flex>

          {/* środek: kategorie */}
          <Flex flex="1" justify="center">
            <HStack spacing={3}>
              {categories.map((label, i) => (
                <Button
                  key={label}
                  size="sm"
                  fontWeight="bold"
                  variant={i === 0 ? "solid" : "outline"}
                  bg={i === 0 ? orange : "white"}
                  color={i === 0 ? "gray.800" : purple}
                  borderColor={i === 0 ? orange : "gray.200"}
                  _hover={{ bg: i === 0 ? orange : "gray.100" }}
                  rounded="md"
                  minW="130px"
                  justifyContent="center"
                >
                  {label}
                </Button>
              ))}
            </HStack>
          </Flex>

          {/* prawa kolumna „pusta”, żeby środek był idealnie wycentrowany względem sumy prawej sekcji niżej */}
          <Box flexBasis={{ base: "160px", md: "360px" }} flexShrink={0} />
        </Flex>
      </Box>

      {/* === DOLNA: linki + CTA === */}
      <Box bg="white" borderTop="1px solid" borderColor="gray.200">
        <Flex
          align="center"
          justify="space-between"
          maxW="1280px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          py={3}
          gap={4}
        >
          {/* lewa strona: Usługi / Pomoc / Kontakt */}
          <HStack spacing={6} color="gray.800">
            <Menu isLazy>
              <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                Usługi
              </MenuButton>
              <MenuList>
                {["Domowy hotel dla psa", "Spacer z psem", "Karmienie", "Opieka dzienna"].map(
                  (s) => (
                    <MenuItem
                      key={s}
                      display="flex"
                      justifyContent="space-between"
                      _hover={{ bg: "gray.50" }}
                    >
                      {s}
                      <Icon as={ChevronRightIcon} />
                    </MenuItem>
                  )
                )}
              </MenuList>
            </Menu>
            <ChakraLink href="#" fontWeight="medium" _hover={{ textDecor: "underline" }}>
              Pomoc
            </ChakraLink>
            <ChakraLink href="#" fontWeight="medium" _hover={{ textDecor: "underline" }}>
              Kontakt
            </ChakraLink>
          </HStack>

          {/* prawa strona: CTA */}
          <HStack spacing={3}>
            <Button bg={purple} color="white" _hover={{ bg: "#451FA3" }} size="sm" rounded="md">
              Zostań Opiekunem
            </Button>
            <Button bg={purple} color="white" _hover={{ bg: "#451FA3" }} size="sm" rounded="md">
              Zarejestruj się
            </Button>
            <Button bg={purple} color="white" _hover={{ bg: "#451FA3" }} size="sm" rounded="md">
              Zaloguj się
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};
