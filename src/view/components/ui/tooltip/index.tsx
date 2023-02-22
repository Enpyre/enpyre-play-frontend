import {
  cloneElement,
  ReactElement,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Content, Wrapper } from './styles';
import { Props } from './types';

export const Tooltip = ({
  sideOffset = 0,
  alignOffset = 0,
  side = 'bottom',
  offsetArrow = 0,
  align = 'center',
  disabled = false,
  notArrow = false,
  defaultView = false,
  children,
  ...props
}: Props) => {
  const [open, setOpen] = useState(defaultView);
  const ref = useRef<HTMLDivElement>(null);
  const [others, setOthers] = useState({
    sizeWidth: null as number | null,
    sizeHeight: null as number | null,
  });

  const [trigger, setTrigger] = useState<ReactElement>(
    cloneElement(props.trigger, {
      className: `tool__trigger ${props.trigger.props.className || ''}`,
    }),
  );

  const handleToggleOpen = useCallback(
    (value: SetStateAction<boolean>) => {
      if (disabled) return;

      if (value) {
        setOpen(value);

        if (ref.current) {
          ref.current.dataset.state = 'open';
        }

        return;
      }

      const content = ref.current?.querySelector('.too__content');
      if (content) {
        content.classList.add('hide');
      }

      setTimeout(() => setOpen(value), 200);

      if (ref.current) {
        ref.current.dataset.state = 'closed';
      }
    },
    [disabled],
  );

  useEffect(() => {
    if (others.sizeWidth === null || props.updateTrigger) {
      const element = ref.current?.lastChild as HTMLElement;

      if (element && element.classList.contains('too__content')) {
        const sizeWidth = element.offsetWidth;
        const sizeHeight = element.offsetHeight;

        if (
          others.sizeWidth !== sizeWidth ||
          others.sizeHeight !== sizeHeight
        ) {
          setOthers({ sizeWidth, sizeHeight });
        }
      }
    }
  }, [open, others.sizeHeight, others.sizeWidth, props.updateTrigger]);

  useEffect(() => {
    if (props.updateTrigger) {
      setTrigger(
        cloneElement(props.trigger, {
          className: `tool__trigger ${props.trigger.props.className || ''}`,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.trigger, props.updateTrigger]);

  return (
    <Wrapper
      ref={ref}
      side={side}
      align={align}
      notArrow={notArrow}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      offsetArrow={offsetArrow}
      className={props.className}
      sizeWidth={others.sizeWidth || 0}
      sizeHeight={others.sizeHeight || 0}
      onMouseEnter={() => handleToggleOpen(true)}
      onMouseLeave={() => handleToggleOpen(false)}>
      {trigger}
      {open && !disabled && (
        <div className="too__content">
          {!props.notDefaultContent ? (
            <Content>{children}</Content>
          ) : (
            <>{children}</>
          )}
        </div>
      )}
    </Wrapper>
  );
};
