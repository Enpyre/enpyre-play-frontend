import Modal from '@/view/components/ui/modal';
import { BodyAlert } from '@/view/components/ui/modal/body-alert';
import { useToModal } from '@/view/components/ui/modal/hooks/use-to-modal';
import {
  onActionModalType,
  OptionsModalType,
} from '@/view/components/ui/modal/types';
import { useCallback } from 'react';
import * as S from './styles';
export const Header = () => {
  const { modalRef, modalState, setModalState } = useToModal({
    close: true,
    actions: true,
    type: 'warning',
  });

  /**
   * Opções disponíveis de modal
   * @param type 'success' | 'loading' | 'warning' | 'error' | 'scrollable' | 'close
   * @param text ?string
   */
  const onActionModal = useCallback(
    ({ type, title, description, component }: onActionModalType) => {
      const options: Record<OptionsModalType, () => void> = {
        success: () => {
          setModalState((stt) => ({
            ...stt,
            close: true,
            type: 'success',
            actions: false,
          }));

          modalRef.current?.open(
            <BodyAlert
              text={title ?? 'Sucesso'}
              description={
                component ?? <p>{description ?? 'Eba! Deu tudo certo.'}</p>
              }
            />,
          );
        },
        loading: () => {
          setModalState((stt) => ({
            ...stt,
            close: false,
            type: 'loading',
            actions: false,
          }));
          modalRef.current?.open(
            description ? <BodyAlert text={description} /> : null,
          );
        },
        warning: () => {
          setModalState((stt) => ({
            ...stt,
            close: true,
            actions: true,
            type: 'warning',
          }));

          modalRef.current?.open(
            <BodyAlert
              text={title ?? 'Atenção'}
              description={
                <p>{description ?? 'Você realmente desejar fazer isso?'}</p>
              }
            />,
          );
        },
        error: () => {
          setModalState((stt) => ({
            ...stt,
            close: true,
            type: 'error',
            actions: false,
          }));

          modalRef.current?.open(
            <BodyAlert
              text={title ?? 'Erro'}
              description={
                <p>
                  {description ??
                    'Ops... Aconteceu algum problema! Tente novamente.'}
                </p>
              }
            />,
          );
        },
        scrollable: () => {
          setModalState((stt) => ({
            ...stt,
            close: true,
            actions: false,
            type: 'scrollable',
          }));

          modalRef.current?.open(component);
        },
        close: () => {
          modalRef.current?.close();
        },
      };
      const option = options[type];
      option && option();
    },
    [modalRef, setModalState],
  );
  /**
   * Fecha modal
   */
  const onCloseModal = useCallback(() => {
    modalState.type === 'success';
  }, [modalState.type]);

  /**
   * Modal SignIn
   */
  const handleSignIn = () => {
    onActionModal({
      type: 'scrollable',
      component: <p>Teste de modal</p>,
    });
  };
  return (
    <>
      <S.Wrapper>
        <S.Logo />
        <S.Actions>
          <ol>
            <li>
              <button>Login</button>
            </li>
            <li className="primary">
              <button onClick={() => handleSignIn()}>Sign In</button>
            </li>
          </ol>
        </S.Actions>
      </S.Wrapper>
      <Modal
        size="xs"
        ref={modalRef}
        keepConfirmation
        onClose={onCloseModal}
        type={modalState.type}
        close={modalState.close}
        actions={modalState.actions}
      />
    </>
  );
};
