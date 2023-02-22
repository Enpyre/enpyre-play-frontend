import { TypeModal } from '../modal/types';
import { Wrapper } from './styles';

type Props = {
  variant?: 'outline' | 'normal';
  icon?: React.ReactNode;
  title: string;
  height?: number;
  outline?: boolean;
  disabled?: boolean;
  color?:
    | 'primary'
    | 'error'
    | 'delete'
    | 'warning'
    | 'success'
    | 'loading'
    | undefined
    | TypeModal;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
};

/**
 * Modelo de botão padrão para uso geral
 * @param title string;
 * @param icon React.ReactNode
 * @param height number;
 * @param outline boolean;
 * @param type 'button' | 'submit' | 'reset'
 * @param color 'primary' | 'error' | 'warning' | 'success'
 */
export const Button = ({
  icon,
  title,
  height = 36,
  variant,
  outline = false,
  color = 'primary',
  disabled,
  type = 'button',
  onClick,
}: Props) => {
  return (
    <Wrapper
      height={height}
      color={color}
      outline={variant === 'outline' || outline}
      disabled={disabled ?? false}
      type={type}
      onClick={onClick}>
      {icon}
      {title}
    </Wrapper>
  );
};
