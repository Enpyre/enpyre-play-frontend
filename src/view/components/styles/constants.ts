import { css, keyframes } from 'styled-components';

export const animation = (
  from:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'viewOpacity'
    | 'hideOpacity'
    | 'rotate',
  duration = 1,
) => {
  const typesFrom = {
    left: keyframes`
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    `,
    right: keyframes`
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    `,
    top: keyframes`
      from {
        opacity: 0;
        transform: translateY(-50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `,
    bottom: keyframes`
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `,
    viewOpacity: keyframes`
      from {
        opacity: 0;
        visibility: hidden;
      }
      to {
        opacity: 1;
        visibility: visible;
      }
    `,
    hideOpacity: keyframes`
      from {
        opacity: 1;
        visibility: visible;
      }
      to {
        opacity: 0;
        visibility: hidden;
      }
    `,
    rotate: keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `,
  };

  return css`
    animation: ${typesFrom[from]} ${duration}s;
  `;
};

const background = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export const skeleton = (color: 'primary' | 'neutrals' = 'neutrals') => css`
  color: transparent;
  background-size: 200% 100%;
  animation: 1.5s ${background} linear infinite;

  ${color === 'neutrals' &&
  css`
    background-image: linear-gradient(
      110deg,
      #374151 8%,
      #4b5563 18%,
      #374151 33%
    );
  `}

  ${color === 'primary' &&
  css`
    background-image: linear-gradient(
      110deg,
      #0a2a4e 8%,
      #103157 18%,
      #0a2a4e 33%
    );
  `}
`;

export const scrollbar = (isVisible = false) => css`
  &::-webkit-scrollbar {
    width: ${isVisible ? '6px' : 0};
    height: ${isVisible ? '6px' : 0};
    background: ${({ theme }) =>
      isVisible ? theme.colors.neutral.n700 : 'transparent'};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 500px;
    background: ${({ theme }) =>
      isVisible ? theme.colors.neutral.n600 : 'transparent'};
  }
`;
