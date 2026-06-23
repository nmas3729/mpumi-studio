import Header from '../../components/Header';
import Policies from '../../components/Policies';
import Footer from '../../components/Footer';
import FloatingButton from '../../components/FloatingButton';

export const metadata = {
  title: "Policies | Lolly's Nail Bar",
  description: "Please read our booking policies, cancellation rules, and aftercare instructions before making your appointment.",
};

export default function PoliciesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Policies />
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
}
