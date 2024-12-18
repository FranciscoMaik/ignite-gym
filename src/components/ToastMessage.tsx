import {
  ToastDescription,
  ToastTitle,
  Toast,
  Pressable,
  Icon,
  VStack,
} from "@gluestack-ui/themed";
import { X } from "lucide-react-native";

type Props = {
  id: string;
  title: string;
  onClose: (id: string) => void;
  description?: string;
  action?: "error" | "success";
};

export function ToastMessage({
  id,
  title,
  description,
  onClose,
  action = "success",
}: Props) {
  return (
    <Toast
      nativeID={`toast-${id}`}
      action={action}
      bgColor={action === "success" ? "$green500" : "$red500"}
      mt={"$10"}
    >
      <VStack space="xs" w={"$full"}>
        <Pressable onPress={() => onClose(id)} alignSelf="flex-end">
          <Icon as={X} size={"md"} color="$coolGray50" />
        </Pressable>
        <ToastTitle color="$white" fontFamily="$heading">
          {title}
        </ToastTitle>
        {description && (
          <ToastDescription color="$white" fontFamily="$body">
            {description}
          </ToastDescription>
        )}
      </VStack>
    </Toast>
  );
}
