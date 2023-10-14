import IPropsButton from '../types/IPropsButton';
import style from './Button.module.scss';

const Button = ({ tipo, onClick, children }: IPropsButton) => {

  tipo = (tipo === undefined) ? "button": tipo;

    return (
      <button onClick={onClick} type={tipo} className={style.botao}>
        {children}
      </button>
    )

}

export default Button;