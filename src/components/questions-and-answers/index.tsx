'use client'
import { IQuestionsAndAnswers } from '@/types/user';
import { Accordion } from 'flowbite-react';
import { useState } from 'react';

type QuestionsAndAnswersProps = {
  questions_and_answers: IQuestionsAndAnswers[]
}
export function QuestionsAndAnswers({ questions_and_answers }: QuestionsAndAnswersProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  if (!questions_and_answers.length) return null;

  return (
    <Accordion id="dúvidas" className='my-8 w-[800px] mx-4'>
      {questions_and_answers.map((item) => (
        <Accordion.Panel
          key={item.id}
          isOpen={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          className='w-full max-w-5xl mx-auto focus:border-none outline-none'
        >
          <Accordion.Title className='text-lg font-semibold'>{item.question}</Accordion.Title>
          <Accordion.Content className='text-base'>{item.answer}</Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  )
}