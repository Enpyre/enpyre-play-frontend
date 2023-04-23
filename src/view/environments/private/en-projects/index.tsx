import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { useProjects } from '@/hooks/projects';
import { Button } from '@/view/components/ui/button';
import {
  CardList,
  ItemCardLegacy,
  ItemDescription,
  ItemTitle,
} from '@/view/components/ui/card-list';

import { Header } from '../layout/header';
import { PRIVATE_ROUTES } from '../paths.routes';
import { ButtonWrapper, Container, Content } from './styles';

export const Projects: React.FC = () => {
  const { projects, fetchProjects } = useProjects();
  const router = useRouter();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <ButtonWrapper>
            <Button
              href={PRIVATE_ROUTES.PROJECTS.CREATE}
              title="Criar Projeto"
            />
          </ButtonWrapper>
          <CardList>
            {projects?.results.map((project) => (
              <ItemCardLegacy
                href={`${PRIVATE_ROUTES.PROJECTS.VIEW}/${project.id}`}
                key={project.id}>
                <ItemTitle>{project.title}</ItemTitle>
                <ItemDescription>
                  {project.description || 'Sem descrição'}
                </ItemDescription>
              </ItemCardLegacy>
            ))}
          </CardList>
        </Content>
      </Container>
    </>
  );
};
