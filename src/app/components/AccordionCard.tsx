'use client';

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import type IQuestion from '@/types/question';

type AccordionCardProps = {
  question: IQuestion;
};

function AccordionCard({ question }: AccordionCardProps) {
  const [selectedQuestion, setSelectedQuestion] = useState<IQuestion | null>(
    null
  );

  const handleToggle = (id: number) => {
    if (selectedQuestion?.id === id) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(question);
    }
  };

  return (
    <li
      className='flex flex-col gap-4 bg-white p-4 border rounded cursor-pointer select-none transition-all'
      onClick={() => handleToggle(question.id)}
    >
      <div className='flex flex-row justify-between items-center'>
        <h2 className='text-xl font-semibold'>{question.question}</h2>
        {question.id === selectedQuestion?.id ? (
          <FiChevronUp className='text-2xl shrink-0 self-start' />
        ) : (
          <FiChevronDown className='text-2xl shrink-0 self-start' />
        )}
      </div>

      {question.id === selectedQuestion?.id ? (
        <>
          <p>{question.answer}</p>
        </>
      ) : null}
    </li>
  );
}

export default AccordionCard;
