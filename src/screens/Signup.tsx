import BackgroundImg from "@assets/background.png";
import LogoImg from "@assets/logo.svg";
import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";

import { Button } from "@components/Button";
import { Input } from "@components/Input";

export default function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="$gray700">
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
            <Heading color="$gray100">Crie sua conta</Heading>

            <Input placeholder="Nome" />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />

            <Button title="Criar e acessar" />
          </Center>

          <Button title="Voltar para o login" variant="outline" mt={"$12"} />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
