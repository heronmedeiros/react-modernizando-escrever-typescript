import PropsButton from '../types/PropsButton';
import style from './Button.module.scss';

const Button = ({ tipo, onClick, children }: PropsButton) => {

  tipo = (tipo === undefined) ? "button": tipo;

    return (
      <button onClick={onClick} type={tipo} className={style.botao}>
        {children}
      </button>
    )

}

export default Button;