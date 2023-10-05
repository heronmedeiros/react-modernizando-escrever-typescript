import React, { PropsWithChildren } from "react";

type PropsButton = PropsWithChildren<{
  tipo?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}>

export default PropsButton;

