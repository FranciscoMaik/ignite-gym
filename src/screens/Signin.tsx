import { VStack, Image, Center, Text } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";
import LogoImg from "@assets/logo.svg";

export function Signin() {
	return (
		<VStack flex={1} bg="$gray700">
			<Image
				source={BackgroundImg}
				alt="Pessoas treinando"
				defaultSource={BackgroundImg}
				w={"$full"}
				h={624}
				position="absolute"
			/>

			<Center my={"$24"}>
				<LogoImg />
				<Text color="$gray100" fontSize={"$sm"}>
					Treine sua mente e o seu corpo
				</Text>
			</Center>
		</VStack>
	);
}
