import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Artist from '../components/Artist';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Artist />
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
