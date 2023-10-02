import React from "react";
import style from './Button.module.scss';

interface MyProps { }

function Button (props: React.PropsWithChildren<MyProps>) {

  return (
    <button className={style.botao}>
      {props.children}
    </button>
  )
}

export default Button;