import questions from '@/data/questions';
import Accordion from './Accordion';

function Faq() {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-2xl font-medium text-gray-400'>FAQ</h2>
      <Accordion questions={questions} />
    </section>
  );
}

export default Faq;
