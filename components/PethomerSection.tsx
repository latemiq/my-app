"use client";

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
  Divider,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { FaPaw, FaDog } from "react-icons/fa";

export const PethomerSection = () => {
  const orange = "#E7B15B";
  const purple = "#5626C4";

  const features = [
    "Sprawdzamy Opiekunów i weryfikujemy ich profile.",
    "Każda rezerwacja objęta jest programem ochrony Pethomer.",
    "Znamy naszych Opiekunów i ich dane osobowe.",
    "Możesz umówić się z Opiekunem na spotkanie zapoznawcze przed przekazaniem mu zwierzaka, aby być pewnym, że się polubią.",
  ];

  const services = [
    {
      title: "Domowy Hotel dla Psów",
      img: "/images/hotel.jpg",
      desc: "Pupil nie wraca sam do domu, gdy Ty musisz wyjechać na kilka dni.",
    },
    {
      title: "Szybkie karmienie",
      img: "/images/karmienie.jpg",
      desc: "Twój pupil sam w domu? Opiekun przyjedzie do niego na karmienie i głaski.",
    },
    {
      title: "Spacer z psem",
      img: "/images/spacer.jpg",
      desc: "Opiekun zabierze Twojego psa na 30-minutowy spacer.",
    },
    {
      title: "Opieka dzienna",
      img: "/images/opieka.jpg",
      desc: "Opiekun zajmie się psem w ciągu dnia, kiedy jesteś zajęty.",
    },
  ];

  return (
    <Box py={20} px={6} bg="white">
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="flex-start"
        justify="center"
        gap={10}
        maxW="7xl"
        mx="auto"
      >
        {/* 🔹 Kolumna z tekstem */}
        <VStack align="flex-start" flex="1" spacing={4}>
          <HStack spacing={3}>
            <Icon as={FaPaw} boxSize={6} color={orange} />
            <Heading size="lg" color="gray.800">
              Pethomer dba o Twojego zwierzaka
            </Heading>
          </HStack>

          <VStack align="flex-start" spacing={3}>
            {features.map((f, i) => (
              <HStack key={i} align="flex-start" spacing={3}>
                <Icon as={CheckCircleIcon} color={orange} mt={1} />
                <Text color="gray.700" fontSize="md">
                  {f}
                </Text>
              </HStack>
            ))}
          </VStack>
        </VStack>

        {/* 🔹 Siatka usług */}
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5} flex="1">
          {services.map((item, i) => (
            <Box
              key={i}
              borderWidth="1px"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="md"
              _hover={{ boxShadow: "lg" }}
              transition="all 0.2s"
              bg="white"
            >
              <Image src={item.img} alt={item.title} w="100%" h="160px" objectFit="cover" />
              <Box p={4}>
                <Heading as="h3" size="sm" mb={2} color="gray.800">
                  {item.title}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {item.desc}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>

      {/* 🔹 Baner reklamowy */}
      <Flex
        mt={12}
        direction="column"
        align="center"
        justify="center"
        gap={4}
        maxW="6xl"
        mx="auto"
      >
        <Image
          src="/images/banner-feliway.jpg"
          alt="Feliway & Adaptil Banner"
          borderRadius="md"
          boxShadow="md"
          objectFit="cover"
          w="100%"
        />
        <Button
          bg={purple}
          color="white"
          _hover={{ bg: "#451FA3" }}
          size="lg"
          mt={2}
        >
          Dowiedz się więcej
        </Button>
      </Flex>
    </Box>
  );
};
