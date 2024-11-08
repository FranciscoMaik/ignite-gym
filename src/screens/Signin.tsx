import { useNavigation } from "@react-navigation/native";
import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";

import type { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import BackgroundImg from "@assets/background.png";
import LogoImg from "@assets/logo.svg";

import { Button } from "@components/Button";
import { Input } from "@components/Input";

export default function SignIn() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigate("signUp");
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={BackgroundImg}
          alt="Pessoas treinando"
          defaultSource={BackgroundImg}
          w={"$full"}
          h={624}
          position="absolute"
        />

        <VStack flex={1} px={"$10"} pb={"$16"}>
          <Center my={"$24"}>
            <LogoImg />
            <Text color="$gray100" fontSize={"$sm"}>
              Treine sua mente e o seu corpo
            </Text>
          </Center>

          <Center flex={1} gap={"$2"}>
            <Heading color="$gray100">Acesse a conta</Heading>

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />

            <Button title="Acessar" />
          </Center>

          <Center flex={1} justifyContent="flex-end" mt={"$4"}>
            <Text
              color="$gray100"
              fontSize={"$sm"}
              mb={"$3"}
              fontFamily="$body"
            >
              Ainda não tem acesso?
            </Text>

            <Button
              title="Criar conta"
              variant="outline"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
