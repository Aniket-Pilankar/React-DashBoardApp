/* eslint-disable no-unused-vars */
import {
  FormControl,
  FormControlLabel,
  Input,
  InputBase,
  InputLabel,
  useTheme,
} from "@mui/material";
import { useController } from "react-hook-form";
import { clsx } from "clsx";
import { StyledTextField, styledTextFieldClasses } from "./styles";

const TextField = ({
  name,
  control,
  className,
  helperText,
  characterLimit,
  textCentered,
  ...props
}) => {
  const {
    field: { value, ref, ...fields },
    fieldState: { invalid, error },
  } = useController({ name, control });

  const computedHelperText = invalid ? error?.message : helperText;

  return (
    <StyledTextField
      id={fields.name}
      {...fields}
      {...props}
      name={name}
      value={value}
      inputRef={ref}
      error={invalid}
      helperText={
        characterLimit ? (
          <>
            <span>{computedHelperText}</span>
            <span aria-hidden>{`${value.length}/${characterLimit}`}</span>
          </>
        ) : (
          <span>{computedHelperText}</span>
        )
      }
      FormHelperTextProps={{
        ...props.FormHelperTextProps,
        className: clsx(props.FormHelperTextProps?.className, {
          [styledTextFieldClasses.formHelperText]: Boolean(characterLimit),
          [styledTextFieldClasses.textCenter]: textCentered,
        }),
      }}
      inputProps={{
        ...props.inputProps,
        autoComplete: "off",
        maxLength: characterLimit,
        className: clsx(props.inputProps?.className, {
          [styledTextFieldClasses.textCenter]: textCentered,
        }),
      }}
      className={clsx(props.className)}
    />
  );
};
export default TextField;
