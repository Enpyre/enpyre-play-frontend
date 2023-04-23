import { TypeModal } from '../modal/types';
import { Tooltip } from '../tooltip';
import { Wrapper } from './styles';

type Props = {
  variant?: 'outline' | 'normal';
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  height?: number;
  outline?: boolean;
  disabled?: boolean;
  circle?: boolean;
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
  href?: string;
};

/**
 * Modelo de botão padrão para uso geral
 * @param title string;
 * @param description string -> tooltip
 * @param icon React.ReactNode
 * @param height number;
 * @param outline boolean;
 * @param circle boolean;
 * @param type 'button' | 'submit' | 'reset'
 * @param color 'primary' | 'error' | 'warning' | 'success'
 */
export const Button = ({
  icon,
  title,
  description,
  height = 36,
  variant,
  outline = false,
  circle,
  color = 'primary',
  disabled,
  type = 'button',
  onClick,
  href,
}: Props) => {
  return (
    <>
      {!description ? (
        <Wrapper
          href={href}
          height={height}
          color={color}
          outline={variant === 'outline' || outline}
          circle={circle}
          disabled={disabled ?? false}
          type={type}
          onClick={disabled ? undefined : onClick}>
          <i>{icon}</i>
          {title}
        </Wrapper>
      ) : null}

      {description ? (
        <Tooltip
          side="top"
          trigger={
            <Wrapper
              href={href}
              height={height}
              color={color}
              outline={variant === 'outline' || outline}
              circle={circle}
              disabled={disabled ?? false}
              type={type}
              onClick={disabled ? undefined : onClick}>
              <i>{icon}</i>
              {title}
            </Wrapper>
          }>
          <p>{description}</p>
        </Tooltip>
      ) : null}
    </>
  );
};
