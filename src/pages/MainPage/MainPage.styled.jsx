import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10px;
`;

export const HeroImgBox = styled.div`
  margin-bottom: 54px;
`;

export const HeroMint = styled.img`
  position: absolute;
  left: -40%;
  top: 10%;
`;

export const HeroPink = styled.img`
  position: absolute;
  right: -40%;
  top: 5%;
  transform: rotate(-53.21deg);
`;

export const Hero = styled.img`
  position: relative;
`;

export const HeroParagr = styled.p`
  letter-spacing: 0.28px;
  text-transform: none;
  text-align: center;
  margin: 0 auto 20px;
  padding: 0 54px;
`;

export const CatalogBtn = styled(NavLink)`
  color: black;
  background-color: #43ffd2;
  font-size: 12px;
  font-weight: 700;
  padding: 16px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  max-width: 220px;
  margin-bottom: 100px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  font-family: "Cormorant", serif;
  font-weight: 400;
  letter-spacing: 0.8px;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  padding: 20px 0 30px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  border: 1px solid yellow;
  width: 300px;
  text-align: center;
`;

export const CardTitle = styled.h3`
  color: #43ffd2;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.8px;
  margin-bottom: 20px;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 30px;
  list-style: inside;
  list-style-type: disc;
`;

export const Item = styled.li`
  letter-spacing: 0.56px;
`;

export const WatchCatalog = styled(NavLink)`
  color: #d978ac;
  text-decoration: underline;
`;

export const Figure = styled.div`
  height: 10px;
  width: 45px;
  background-color: #d978ac;
  margin-bottom: 20px;
`;
export const AddToCartBtn = styled.button`
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.2px;
  padding: 16px 93px;
  border: 0.25px white solid;
  background-color: transparent;
  color: #ffffff;
  text-transform: uppercase;
`;

export const AllCatalogLink = styled(NavLink)`
  margin-top: 40px;
  margin-bottom: 95px;
  display: inline-block;
  color: #d978ac;
  text-decoration: underline;
`;

export const StepNumber = styled.p`
  color: #d978ac;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.8px;
  margin-bottom: 10px;
`;

export const StepText = styled.p`
  text-transform: none;
  line-height: 17px;
  margin-bottom: 20px;
`;
