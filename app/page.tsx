import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Artist from '../components/Artist';
import FAQ from '../components/FAQ';
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
        <FAQ />
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
