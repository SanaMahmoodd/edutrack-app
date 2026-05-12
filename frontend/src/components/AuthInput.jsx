import {
  FieldGroup,
  InputBox,
  Icon,
  Input,
  ErrorText,
} from "../ui/AuthInputUI";

export default function AuthInput({
  icon,
  type = "text",
  placeholder,
  register,
  error,
}) {
  return (
    <FieldGroup>
      <InputBox error={error}>
        <Icon>{icon}</Icon>

        <Input
          type={type}
          placeholder={placeholder}
          {...register}
        />
      </InputBox>

      {error && (
        <ErrorText>
          {error.message}
        </ErrorText>
      )}
    </FieldGroup>
  );
}