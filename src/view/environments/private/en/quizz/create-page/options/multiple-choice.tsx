import { TextAa } from 'phosphor-react';
import { FieldArray } from 'react-final-form-arrays';

import { SlideToggle } from '@/view/components/form/slide-toggle';
import { GroupForm } from '@/view/components/form/styles';
import { Textarea } from '@/view/components/form/textarea';
import { AccordionStep } from '@/view/components/ui/accordion-step';
import { AddButton } from '@/view/components/ui/button/add-button';

import * as S from '../styles';

export const MultipleChoice = () => {
  return (
    <FieldArray
      name="questions"
      subscription={{}}
      render={(fieldsProps) => (
        <>
          <S.ContainerAccordion>
            {fieldsProps.fields.map((name, index) => (
              <AccordionStep
                stepName="Pergunta"
                totalItems={fieldsProps.fields.length ?? 0}
                key={name}
                index={index}
                callbackDelete={() => fieldsProps.fields.remove(index)}
                content={
                  <>
                    <GroupForm align="center">
                      <Textarea
                        title="Pergunta:"
                        name={`${name}.title`}
                        placeholder="Escreva a pergunta"
                        icon={<TextAa />}
                      />
                    </GroupForm>
                    <GroupForm align="center">
                      <Textarea
                        title="Observações:"
                        name={`${name}.content`}
                        placeholder="Escreva uma descrição"
                        icon={<TextAa />}
                      />
                    </GroupForm>
                    <FieldArray
                      name={`${name}.answers`}
                      subscription={{}}
                      render={(fieldsPropsAnswer) => (
                        <>
                          {fieldsPropsAnswer.fields.map((name2, index2) => (
                            <GroupForm
                              gridColumns="23px 1fr"
                              key={index2}
                              align="center">
                              <SlideToggle
                                description="Alternativa correta"
                                variant="vertical"
                                name={`${name2}.is_correct`}
                              />
                              <Textarea
                                title="Resposta:"
                                name={`${name2}.title`}
                                placeholder="Digite uma descrição"
                                icon={<TextAa />}
                              />
                            </GroupForm>
                          ))}
                          <GroupForm minHeight={50}>
                            <AddButton
                              title="Adicionar Resposta"
                              onClick={() =>
                                fieldsPropsAnswer.fields.push('answer')
                              }
                            />
                          </GroupForm>
                        </>
                      )}></FieldArray>
                  </>
                }
              />
            ))}
          </S.ContainerAccordion>
          <GroupForm minHeight={50}>
            <AddButton
              title="Adicionar Pergunta"
              onClick={() => fieldsProps.fields.push('questions')}
            />
          </GroupForm>
        </>
      )}
    />
  );
};
