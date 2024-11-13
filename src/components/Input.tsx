import { InputField, Input as InputGluestack } from "@gluestack-ui/themed";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
};

export function Input({ isReadOnly = false, ...props }: Props) {
  return (
    <InputGluestack
      h={"$14"}
      borderWidth={"$0"}
      borderRadius={"$md"}
      $focus={{
        borderWidth: "$1",
        borderColor: "$green500",
      }}
      isReadOnly={isReadOnly}
    >
      <InputField
        bg="$gray700"
        px={"$4"}
        color="$white"
        fontFamily="$body"
        placeholderTextColor="$gray300"
        opacity={isReadOnly ? 0.5 : 1}
        {...props}
      />
    </InputGluestack>
  );
}
