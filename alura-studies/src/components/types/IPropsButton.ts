// import React, { PropsWithChildren } from "react";


// type PropsButton = PropsWithChildren<{
interface IPropsButton  {
  tipo?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: React.ReactNode,
}

export default IPropsButton;