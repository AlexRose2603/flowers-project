import { useState } from "react";

import { StyledSlider } from "./PriceSlider.styled";

const PriceSlider = () => {
  const [statePrice, setStatePrice] = useState({
    minPrice: 50,
    maxPrice: 1000,
  });

  const onPriceChange = (value) => {
    setStatePrice({ minPrice: value[0], maxPrice: value[1] });
  };
  return (
    <div>
      <StyledSlider
        min={50}
        max={1000}
        range
        defaultValue={[statePrice.minPrice, statePrice.maxPrice]}
        onChange={onPriceChange}
      />
      <div>
        Цена: {statePrice.minPrice} - {statePrice.maxPrice}
      </div>
    </div>
  );
};

export default PriceSlider;
