import {
  InputField,
  Input as InputGluestack,
  FormControl,
  FormControlErrorText,
  FormControlError,
} from "@gluestack-ui/themed";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField> & {
  errorMessage?: string | null;
  isInvalid?: boolean;
  isReadOnly?: boolean;
};

export function Input({
  isReadOnly = false,
  errorMessage = null,
  isInvalid = false,
  ...props
}: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} w={"$full"} mb={"$4"}>
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

      <FormControlError>
        <FormControlErrorText color="$red500">
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
