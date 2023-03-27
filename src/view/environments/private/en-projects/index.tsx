import React, { useEffect } from 'react';
import { FiChevronRight, FiFolder } from 'react-icons/fi';

import { useProjects } from '@/hooks/projects';

import { Header } from '../layout/header';
import {
  Button,
  Container,
  ContainerFooter,
  ContainerHeader,
  Content,
  Item,
  ItemButton,
  ItemDescription,
  ItemIcon,
  ItemTitle,
  List,
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
          <List>
            {projects?.results.map((project) => (
              <Item key={project.id} href={`/en/projects/${project.id}`}>
                <ItemIcon>
                  <FiFolder />
                </ItemIcon>
                <ItemTitle>{project.title}</ItemTitle>
                <ItemDescription>
                  {project.description || 'Sem descrição'}
                </ItemDescription>
                <ItemButton>
                  <FiChevronRight />
                </ItemButton>
              </Item>
            ))}
          </List>
          <ContainerFooter>
            <Button href="/en/projects/create/">Novo Projeto</Button>
          </ContainerFooter>
        </Content>
      </Container>
    </>
  );
};
