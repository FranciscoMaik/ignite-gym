import { useState } from "react";
import { HStack, Heading, Text, VStack } from "@gluestack-ui/themed";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { FlatList } from "react-native";
import { ExerciseCard } from "@components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import type { AppNavigatorRoutesProps } from "@routes/app.routes";

export default function Home() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const [groupSelected, setGroupSelected] = useState<string>("Costas");
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Levantamento terra",
    "Remada baixa",
    "Remada curvada 2",
    "Remada unilateral 2",
    "Remada curvada 3",
    "Remada unilateral 3",
  ]);
  const [groups, setGroups] = useState<string[]>([
    "Costas",
    "Ombros",
    "Biceps",
    "Triceps",
  ]);

  function handleOpenExerciseDetails() {
    navigate("exercise", { exerciseId: "exercise" });
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLowerCase() === item.toLowerCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />

      <VStack flex={1} paddingHorizontal={"$8"}>
        <HStack justifyContent="space-between" mb={"$5"} alignItems="center">
          <Heading color="$gray200" fontSize={"$md"} fontFamily="$heading">
            Exercícios
          </Heading>
          <Text color="$gray200" fontSize={"$sm"} fontFamily="$body">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
