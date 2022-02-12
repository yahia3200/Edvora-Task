import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import Sidebar from "../components/Sidebar";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://assessment-edvora.herokuapp.com");
  const data = await res.json();
  return {
    props: { products: data },
  };
};

export default function Home({ products }) {
  const [brands, setBrands] = useState(null);
  useEffect(() => {
    const brands_set = new Set();
    products.forEach((product) => {
      brands_set.add(product["brand_name"]);
    });
    setBrands([...brands_set]);
  }, [products]);

  return (
    <>
      <Head>
        <title>Edvora</title>
      </Head>
      <div className="App">
        {products && <Sidebar products={products} />}
        <main>
          <h1>Edvora</h1>
          <h2>Products</h2>
          {brands &&
            brands.map((brand, index) => (
              <div key={index}>
                <ProductsList
                  brandName={brand}
                  cards={products.filter(
                    (product) => product["brand_name"] === brand
                  )}
                />
              </div>
            ))}
        </main>
      </div>
    </>
  );
}
