import styled from "styled-components";
import "rc-slider/assets/index.css";

import Slider from "rc-slider";

export const StyledSlider = styled(Slider)`
  max-width: 223px;
  margin-bottom: 10px;

  .rc-slider-rail {
    border: "2px solid #ff5733";
    max-height: 2px;
  }

  .rc-slider-track {
    background-color: #ffffff;
    max-height: 1px;
    border: "2px solid #ff5733";
  }

  .rc-slider-handle {
    background-color: #43ffd2;
    border-color: #43ffd2;
    opacity: 1;
    width: 10px;
    height: 10px;
    margin-top: -4px;
  }
`;
