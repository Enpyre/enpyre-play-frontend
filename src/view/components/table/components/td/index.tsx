import * as S from './styles';
export type Props = {
  content: React.ReactNode;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  isBold?: boolean;
  isCenter?: boolean;
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  columns?: number;
  gridColumns?: string;
  maxWidth?: number;
};
export const Td = ({
  content,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  columns,
  gridColumns,
  isBold,
  isCenter,
  fontSize,
  maxWidth,
}: Props) => {
  return (
    <>
      {!columns && !gridColumns && (
        <S.Wrapper
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
          isBold={isBold}
          isCenter={isCenter}
          fontSize={fontSize ?? 'sm'}
          maxWidth={maxWidth}>
          {content}
        </S.Wrapper>
      )}
      {(columns || gridColumns) && (
        <S.Wrapper
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          isBold={isBold}
          isCenter={isCenter}
          fontSize={fontSize ?? 'sm'}
          columns={columns}
          gridColumns={gridColumns}
          maxWidth={maxWidth}>
          <div>{content}</div>
        </S.Wrapper>
      )}
    </>
  );
};
