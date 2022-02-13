import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

export const getStaticProps = async () => {
  const res = await fetch("https://assessment-edvora.herokuapp.com");
  const data = await res.json();
  return {
    props: { products: data },
  };
};

export default function Home({ products }) {
  const [currentPro, setCurrentPro] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [brands, setBrands] = useState(null);

  useEffect(() => {
    const brands_set = new Set();
    products.forEach((product) => {
      brands_set.add(product["brand_name"]);
    });
    setBrands([...brands_set]);
  }, [products]);

  useEffect(() => {
    const brands_set = new Set();
    if (!currentPro) {
      products.forEach((product) => {
        brands_set.add(product["brand_name"]);
      });
      setBrands([...brands_set]);
    } else if (currentPro && !currentState && !currentCity) {
      products
        .filter((product) => {
          return product["brand_name"] === currentPro;
        })
        .forEach((product) => {
          brands_set.add(product["brand_name"]);
        });
      setBrands([...brands_set]);
    }
  }, [products, currentPro, currentState, currentCity]);

  return (
    <>
      <Head>
        <title>Edvora</title>
      </Head>
      <StyledEngineProvider injectFirst>
        <div className="App">
          {products && (
            <Sidebar
              products={products}
              currentPro={currentPro}
              setCurrentPro={setCurrentPro}
              currentState={currentState}
              setCurrentState={setCurrentState}
              currentCity={currentCity}
              setCurrentCity={setCurrentCity}
            />
          )}
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
                    product={currentPro}
                    state={currentState}
                    city={currentCity}
                  />
                </div>
              ))}
          </main>
        </div>
      </StyledEngineProvider>
    </>
  );
}
