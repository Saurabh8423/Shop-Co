// app/page.js
import Hero from '../components/Hero/Hero';
import BrandBar from '../components/BrandBar/BrandBar';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import BrowseByStyle from '../components/BrowseByStyle/BrowseByStyle';
import Rating from '../components/Rating/Rating';
import Footer from '../components/Footer/Footer';
import data from '../data/products';

export default function Home() {
  return (
    <>
      <Hero />
      <BrandBar />
      <section className="container" style={{ paddingTop: 40 }}>
        <SectionTitle title="NEW ARRIVALS" />
        <ProductGrid products={data.newArrivals} />
        <SectionTitle title="TOP SELLING" />
        <ProductGrid products={data.topSelling} />
        <BrowseByStyle />
        <Rating />
        <Footer />
      </section>
    </>
  );
}
