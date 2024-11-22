import { TouchableOpacity } from "react-native";
import { HStack, Heading, Text, VStack, Icon } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native";

import { UserPhoto } from "@components/UserPhoto";
import { useAuth } from "@hooks/useAuth";

import DefaultUserAvatar from "@assets/userPhotoDefault.png";

export function HomeHeader() {
  const { user, signOut } = useAuth();

  return (
    <HStack
      bg="$gray600"
      pt={"$16"}
      pb={"$5"}
      px={"$8"}
      alignItems="center"
      gap={"$4"}
    >
      <UserPhoto
        source={user.avatar ? { uri: user.avatar } : DefaultUserAvatar}
        alt="Foto do usuário"
        w={"$16"}
        h={"$16"}
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize={"$sm"}>
          Olá,
        </Text>
        <Heading color="$gray100" fontSize={"$md"} textTransform="capitalize">
          {user.name}
        </Heading>
      </VStack>

      <TouchableOpacity onPress={signOut}>
        <Icon as={LogOut} color="$gray200" size="xl" />
      </TouchableOpacity>
    </HStack>
  );
}
