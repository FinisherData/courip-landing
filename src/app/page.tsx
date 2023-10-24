import Faq from './components/Faq';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <Hero />
      <main className='flex-1 mx-10 lg:mx-40 my-10'>
        <Faq />
      </main>
      <footer className='p-4'>
        <p className='text-center text-gray-400'>
          Made with ❤️ by <a href=''>Courip Team</a>
        </p>
      </footer>
    </div>
  );
}
