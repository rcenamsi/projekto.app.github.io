import React from "react";
import styled from "styled-components";
import { TextField as MuiTextField } from "@mui/material";

const TextfieldComponent = styled(MuiTextField)``;

interface TextFieldProps {
  id: string;
  label: string;
  helperText: string;
  required: boolean;
  onChange: () => void;
  multiline: boolean;
  rows: number;
}

export const TextField = ({
  id,
  label,
  helperText,
  required,
  onChange,
  multiline,
  rows,
  ...props
}: TextFieldProps) => {
  return (
    <TextfieldComponent
      id={id}
      label={label}
      helperText={helperText}
      required={required}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
      {...props}
    />
  );
};
