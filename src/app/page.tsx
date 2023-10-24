import Faq from './components/Faq';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <Hero />
      <main className='flex-1 mx-10'>
        <h2 className='text-2xl font-medium'>¿Qué es Courip?</h2>
        <Faq />
      </main>
    </div>
  );
}
