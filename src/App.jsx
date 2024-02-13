import Hero from './sections/Hero';
import CustomerReviews from './sections/CustomerReviews';
import Nav from './sections/Nav';
import Footer from './sections/Footer';
import Services from './sections/Services';
import PopularProducts from './sections/PopularProducts';
import SuperQuality from './sections/SuperQuality';
import SpecialOffers from './sections/SpecialOffers';
import Subscribe from './sections/Subscribe';
export default function App() {
  return (
    <main className="relative">
      <Nav></Nav>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero></Hero>
      </section>
      <section className="padding">
        <PopularProducts></PopularProducts>
      </section>
      <section className="padding">
        <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10">
        <Services></Services>
      </section>
      <section className="padding">
        <SpecialOffers></SpecialOffers>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews></CustomerReviews>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe></Subscribe>
      </section>
      <section className="padding-x padding-t pb-8 bg-black text-white">
        <Footer></Footer>
      </section>
    </main>
  )
}