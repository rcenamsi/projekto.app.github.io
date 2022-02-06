import React, { useState } from "react";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styled from "styled-components";

const FormControlContainer = styled(FormControl)``;

const InputLabelComponent = styled(InputLabel)``;

const OutlinedInputComponent = styled(OutlinedInput)``;

const InputAdornmentComponent = styled(InputAdornment)``;

const IconButtonComponent = styled(IconButton)``;

interface MaskedInputProps {
  id: string;
  label: string;
  placeholder: string;
  required: boolean
  variant: "outlined" | "standard" | "filled" ;
}

export const MaskedInput = ({
  id,
  label,
  placeholder,
  required,
  variant,
  ...props
}: MaskedInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState(null);

  const handleChange = (event: any) => {
    const { value } = event.target;
    setValues(value);
    console.log("Values", values);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControlContainer variant={variant}>
      <InputLabelComponent htmlFor={id}>{label}</InputLabelComponent>
      <OutlinedInputComponent
        id={id}
        type={showPassword ? "text" : "password"}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        endAdornment={
          <InputAdornmentComponent position={"end"}>
            <IconButtonComponent
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge={"end"}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButtonComponent>
          </InputAdornmentComponent>
        }
        required={required}
        {...props}
      />
    </FormControlContainer>
  );
};
