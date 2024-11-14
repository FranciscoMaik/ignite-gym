import { ScrollView, TouchableOpacity } from "react-native";
import {
  VStack,
  Icon,
  HStack,
  Heading,
  Text,
  Image,
  Box,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import type { AppNavigatorRoutesProps } from "@routes/app.routes";

import { ArrowLeft } from "lucide-react-native";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";

export default function Exercise() {
  const { goBack } = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={"$8"} bg="$gray600" pt={"$14"}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green500" size={"xl"} />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt={"$4"}
          pb={"$8"}
        >
          <Heading
            color="$gray100"
            fontFamily="$heading"
            fontSize={"$lg"}
            flexShrink={1}
          >
            Puxada frontal
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text color="$gray200" ml={"$1"} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <VStack p={"$8"}>
          <Image
            source={{
              uri: "https://i.pinimg.com/236x/26/a4/31/26a4312ea5c9d9ca5415cef6670f88f0.jpg",
            }}
            alt="Imagem do exercício"
            mb={"$3"}
            resizeMode="cover"
            rounded={"$lg"}
            w={"$full"}
            h={"$80"}
          />

          <Box bg="$gray600" rounded={"$md"} pb={"$4"} px={"$4"}>
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb={"$6"}
              mt={"$5"}
            >
              <HStack alignItems="center">
                <SeriesSvg />
                <Text color="$gray200" ml={"$2"}>
                  3 séries
                </Text>
              </HStack>

              <HStack alignItems="center">
                <RepetitionsSvg />
                <Text color="$gray200" ml={"$2"}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
