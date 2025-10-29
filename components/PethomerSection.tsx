"use client";
import pet1 from "@/app/images/pet1.png";
import pet2 from "@/app/images/pet2.png";
import pet3 from "@/app/images/pet3.jpg";
import pet4 from "@/app/images/pet4.png";
import baner from "@/app/images/ad.png";

import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  VStack,
  HStack,
  SimpleGrid,
  Image,
  Button,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaPaw } from "react-icons/fa";

const OutlineCheck = chakra((props: any) => (
  <Box
    as="span"
    display="inline-flex"
    alignItems="center"
    justifyContent="center"
    boxSize="22px"
    borderWidth="2px"
    borderColor="#E7B15B"
    borderRadius="full"
    {...props}
  >
    <CheckIcon boxSize="12px" color="#E7B15B" />
  </Box>
));

export const PethomerSection = () => {
  const orange = "#E7B15B";
  const purple = "#5626C4";
  const cardBg = "white";
  const cardRadius = "16px";
  const cardShadow = "0 6px 20px rgba(0,0,0,0.08)";

  const features = [
    "Sprawdzamy Opiekunów i weryfikujemy ich profile.",
    "Każda rezerwacja objęta jest Programem Ochrony Pethomer.",
    "Znamy naszych Opiekunów i ich dane osobowe.",
    "Możesz umówić się z Opiekunem na spotkanie zapoznawcze przed przekazaniem mu zwierzaka, aby być pewnym, że się polubią.",
  ];

  const services = [
    { title: "Domowy Hotel dla Psów", img: pet1.src, desc: "Pupil nie wraca sam do domu, gdy Ty musisz wyjechać na kilka dni." },
    { title: "Szybkie karmienie", img: pet2.src, desc: "Twój pupil sam w domu? Opiekun przyjedzie do niego na karmienie i głaski." },
    { title: "Spacer z psem", img: pet3.src, desc: "Opiekun zabierze Twojego psa na 30-minutowy spacer." },
    { title: "Opieka dzienna", img: pet4.src, desc: "Opiekun zajmie się psem w ciągu dnia, kiedy jesteś zajęty." },
  ];

  return (
    <Box py={16} px={6} bg="white">
      <Flex
        maxW="1100px"
        mx="auto"
        align="flex-start"
        justify="space-between"
        gap={12}
        direction={{ base: "column", lg: "row" }}
      >
        {/* lewa kolumna */}
        <VStack align="flex-start" flexBasis={{ lg: "360px" }} spacing={5}>
          <HStack spacing={3}>
            <Icon as={FaPaw} boxSize={7} color={orange} />
            <Heading size="md" color="gray.800">
              Pethomer dba o Twojego zwierzaka
            </Heading>
          </HStack>

          <VStack align="flex-start" spacing={3}>
            {features.map((f) => (
              <HStack key={f} align="flex-start" spacing={3}>
                <OutlineCheck mt="2px" />
                <Text color="gray.700" fontSize="sm" lineHeight="1.6">
                  {f}
                </Text>
              </HStack>
            ))}
          </VStack>
        </VStack>

        {/* siatka usług */}
        <SimpleGrid
          columns={{ base: 1, sm: 2 }}
          spacing={6}
          flex="1"
          minW={{ lg: "680px" }}
        >
          {services.map((item) => (
            <Box
              key={item.title}
              border="1px solid"
              borderColor="gray.200"
              borderRadius={cardRadius}
              overflow="hidden"
              bg={cardBg}
              boxShadow={cardShadow}
              transition="box-shadow .2s ease"
              _hover={{ boxShadow: "0 10px 28px rgba(0,0,0,0.12)" }}
            >
              <Image
                src={item.img}
                alt={item.title}
                w="100%"
                h="180px"           // trochę większe niż 160px – jak na screenie
                objectFit="cover"
              />
              <Box p={4}>
                <Heading as="h3" size="sm" mb={1} color="gray.800">
                  {item.title}
                </Heading>
                <Text fontSize="sm" color="gray.600" lineHeight="1.5">
                  {item.desc}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>

      {/* baner + CTA */}
      <Flex mt={10} direction="column" align="center" maxW="1100px" mx="auto" gap={4}>
        <Image
          src={baner.src}
          alt="Feliway & Adaptil Banner"
          w="100%"
          borderRadius="14px"
          boxShadow="0 14px 40px rgba(0,0,0,0.12)"
          objectFit="cover"
        />
        <Button
          bg={purple}
          color="white"
          _hover={{ bg: "#451FA3" }}
          size="md"
          px={8}
          h="40px"
          borderRadius="full"
          boxShadow="0 8px 20px rgba(86,38,196,0.35)"
        >
          Dowiedz się więcej
        </Button>
      </Flex>
    </Box>
  );
};
