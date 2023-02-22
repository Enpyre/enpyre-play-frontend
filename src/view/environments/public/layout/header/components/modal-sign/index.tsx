import { GitHubHeader } from '@/view/components/svg/github-header';
import Link from 'next/link';
import { GithubLogo, X } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import * as S from './styles';

type Props = {
  isOpen: boolean;
  callbackClose(): void;
};
export const ModalSign = ({ isOpen, callbackClose }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    isOpen &&
      containerRef.current &&
      !containerRef.current.contains(e.target as Node) &&
      callbackClose();
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside, true);
  }, [handleClickOutside]);
  return (
    <>
      {isOpen && (
        <S.Wrapper>
          <S.Container ref={containerRef}>
            <S.Header>
              <GitHubHeader />
            </S.Header>
            <S.CloseButton onClick={() => callbackClose()}>
              <X />
            </S.CloseButton>
            <h1>Welcome!</h1>
            <span>
              You can sing in with GitHub to access your private account.
            </span>
            <Link href="/login/github">
              <GithubLogo /> Sign In With GitHub
            </Link>
            <S.NewToGitHub>
              New to GitHub?{' '}
              <Link
                href="https://github.com/signup?ref_cta=Sign+up"
                target="_blank">
                Create an account.
              </Link>
            </S.NewToGitHub>
          </S.Container>
        </S.Wrapper>
      )}
    </>
  );
};
