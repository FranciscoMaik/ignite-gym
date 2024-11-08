import {
  Button as ButtonGluestack,
  ButtonSpinner,
  Text,
} from "@gluestack-ui/themed";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof ButtonGluestack> & {
  title: string;
  variant?: "solid" | "outline";
  isLoading?: boolean;
};

export function Button({
  title,
  isLoading = false,
  variant = "solid",
  ...props
}: Props) {
  return (
    <ButtonGluestack
      w={"$full"}
      h={"$14"}
      bgColor={variant === "outline" ? "transparent" : "$green700"}
      borderWidth={variant === "outline" ? "$1" : "$0"}
      borderColor="$green500"
      borderRadius={"$sm"}
      $active-bg={variant === "outline" ? "$gray500" : "$green500"}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <Text
          color={variant === "outline" ? "$green500" : "$white"}
          fontFamily="$heading"
          fontSize={"$sm"}
        >
          {title}
        </Text>
      )}
    </ButtonGluestack>
  );
}
