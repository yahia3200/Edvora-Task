import { useEffect, useState } from "react";
import SelectList from "./SelectList";
const Sidebar = ({
  products,
  currentPro,
  setCurrentPro,
  currentState,
  setCurrentState,
  currentCity,
  setCurrentCity,
}) => {
  const [proList, setProList] = useState(null);
  const [statesList, setStatesList] = useState(null);
  const [citesList, setCitesList] = useState(null);

  // adding initial values to States and Cites
  useEffect(() => {
    const productsNames = new Set();
    const statesNames = new Set();
    const citesNames = new Set();
    products.forEach((element) => {
      productsNames.add(element["brand_name"]);
      statesNames.add(element["address"]["state"]);
      citesNames.add(element["address"]["city"]);
    });
    setProList([...productsNames]);
    setStatesList([...statesNames]);
    setCitesList([...citesNames]);
  }, [products]);

  // Filter states when user chooses a product
  useEffect(() => {
    if (currentPro) {
      const statesNames = new Set();
      products
        .filter((product) => {
          return product["brand_name"] === currentPro;
        })
        .forEach((element) => {
          statesNames.add(element["address"]["state"]);
        });
      setStatesList([...statesNames]);
    }
  }, [products, currentPro]);

  // Filter cites when user chooses a state
  useEffect(() => {
    if (currentState) {
      const citiesNames = new Set();
      products
        .filter((product) => {
          return (
            product["brand_name"] === currentPro &&
            product["address"]["state"] === currentState
          );
        })
        .forEach((element) => {
          citiesNames.add(element["address"]["city"]);
        });
      setCitesList([...citiesNames]);
    }
  }, [products, currentPro, currentState]);

  return (
    <div className="sidebar">
      <div className="sidebar-header">Filters</div>
      {proList && (
        <SelectList
          header={"Products"}
          items={proList}
          state={currentPro}
          setter={setCurrentPro}
          setState={setCurrentState}
          setCity={setCurrentCity}
        />
      )}
      {statesList && (
        <SelectList
          header={"State"}
          items={statesList}
          state={currentState}
          setter={setCurrentState}
          setCity={setCurrentCity}
        />
      )}
      {citesList && (
        <SelectList
          header={"City"}
          items={citesList}
          state={currentCity}
          setter={setCurrentCity}
        />
      )}
    </div>
  );
};

export default Sidebar;
