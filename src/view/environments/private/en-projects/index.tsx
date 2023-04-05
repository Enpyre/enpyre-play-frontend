import React, { useEffect } from 'react';

import { useProjects } from '@/hooks/projects';

import { Header } from '../layout/header';
import {
  Button,
  ButtonWrapper,
  CardList,
  Container,
  ContainerHeader,
  Content,
  ItemCard,
  ItemDescription,
  ItemTitle,
  Title,
} from './styles';

export const Projects: React.FC = () => {
  const { projects, fetchProjects } = useProjects();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <>
      <Header />
      <Container>
        <ContainerHeader>
          <Title>Projetos</Title>
        </ContainerHeader>
        <Content>
          <ButtonWrapper>
            <Button href="/en/projects/create/">Novo Projeto</Button>
          </ButtonWrapper>
          <CardList>
            {projects?.results.map((project) => (
              <ItemCard key={project.id} href={`/en/projects/${project.id}`}>
                <ItemTitle>{project.title}</ItemTitle>
                <ItemDescription>
                  {project.description || 'Sem descrição'}
                </ItemDescription>
              </ItemCard>
            ))}
          </CardList>
        </Content>
      </Container>
    </>
  );
};
