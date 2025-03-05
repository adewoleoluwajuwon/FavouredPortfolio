import Nav from "./Components/Nav";
import {
  Hero,
  LearningActivities,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./Sections";

const APP = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 sm:pr-16 pr-8 sm:pb-24 pb-12">
      <Hero />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <LearningActivities />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SuperQuality />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <Services />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SpecialOffer />
    </section>
    <section className="bg-[#edf1f3] sm:px-16 px-8 sm:py-24 py-12">
      <CustomerReviews />
    </section>
    <section className="sm:px-16 px-8 sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black sm:px-16 px-8 sm:pt-24 pt-12 pb-8">
      <Footer />
    </section>
  </main>
);
export default APP;
