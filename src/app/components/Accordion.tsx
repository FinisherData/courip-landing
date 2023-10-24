import type IQuestion from '@/types/question';
import AccordionCard from './AccordionCard';

type AccordionProps = {
  questions: Array<IQuestion>;
};

function Accordion({ questions }: AccordionProps) {
  return (
    <ul className='flex flex-col gap-4 animate-fade-up'>
      {questions.map((q) => (
        <AccordionCard key={q.id} question={q} />
      ))}
    </ul>
  );
}

export default Accordion;
