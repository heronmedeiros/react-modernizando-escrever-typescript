import React, { PropsWithChildren } from "react";

import style from './Button.module.scss';

type Props = PropsWithChildren<{
  tipo?: "button" | "submit" | "reset" | undefined
}>

export const Button = ({ tipo, children }: Props) => {

  tipo = (tipo === undefined) ? "button": tipo;

    return (
      <button type={tipo} className={style.botao}>
        {children}
      </button>
    )

}

export default Button;