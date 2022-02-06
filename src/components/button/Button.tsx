import React from "react";
import { Button as MuiButton } from "@mui/material";
import styled from "styled-components";

const ButtonComponent = styled(MuiButton)``;

interface ButtonProps {
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  size?: "small" | "medium" | "large";
  variant: "text" | "contained" | "outlined";
  disabled: boolean;
  label: string;
  startIcon: any;
  endIcon: any;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color,
  size,
  label,
  disabled,
  variant,
  startIcon,
  endIcon,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <ButtonComponent
      color={color}
      disabled={disabled}
      variant={variant}
      size={size}
      onClick={onClick}
      aria-label={label}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {label}
    </ButtonComponent>
  );
};
