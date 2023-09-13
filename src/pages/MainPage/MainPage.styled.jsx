import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10px;
`;

export const HeroImgBox = styled.div`
  margin-bottom: 54px;
  position: relative;
`;

export const HeroMint = styled.img`
  position: absolute;
  left: -40%;
  top: -5%;
`;

export const HeroPink = styled.img`
  position: absolute;
  right: -40%;
  top: -5%;
  transform: rotate(-53.21deg);
`;

export const Writing = styled.img`
  position: absolute;
  transform: rotate(-10.26deg);
  top: 85%;
  z-index: 4;
  right: 0;
  width: 137px;
  height: 80px;
`;

export const Shadow = styled.img`
  position: absolute;
  min-width: 320px;
  min-height: 105px;
  top: 77%;
`;

export const Hero = styled.img``;

export const Layer = styled.img`
  position: absolute;
  z-index: 5;
  top: 0.5%;
`;

export const HeroParagr = styled.p`
  letter-spacing: 0.28px;
  text-transform: none;
  text-align: center;
  margin: 0 auto 20px;
  width: 232px;
`;

export const CatalogBtn = styled(NavLink)`
  color: black;
  background-color: #43ffd2;
  font-size: 12px;
  font-weight: 700;
  padding: 16px 50px;
  display: block;

  text-align: center;
  margin: 0 40px 100px;
`;

export const PartSection = styled.div`
  margin-bottom: 100px;
  &:nth-child(7) {
    background-color: #0f2222;
    margin-left: -10px;
    margin-right: -10px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-bottom: 100px;
`;

export const Ellipse = styled.img`
  position: absolute;
  z-index: -1;
  top: 100%;
`;

export const Ellipse2 = styled.img`
  position: absolute;
  top: 155%;
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  font-family: "Cormorant", serif;
  font-weight: 400;
  letter-spacing: 0.8px;
  margin-bottom: 20px;

  span {
    display: block;
    margin-left: 60px;
  }
`;

export const Card = styled.div`
  padding: 20px 0 30px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(20px);
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

export const Subtitle = styled.p`
  font-weight: 300;
  text-transform: none;
  text-align: right;
  margin-bottom: 25px;
`;

export const CatalogList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    width: 300px;
    height: 335px;
    object-fit: cover;
  }

  h3 {
    font-size: 20px;
    letter-spacing: 0.8px;
  }

  p {
    font-weight: 700;
    margin-bottom: 10px;
  }
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
  cursor: pointer;
`;

export const AllCatalogLink = styled(NavLink)`
  margin-top: 56px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  color: #d978ac;
  text-decoration: underline;
  cursor: pointer;
`;
export const PinkRight = styled.img`
  position: absolute;
  z-index: -1;
  top: 480%;
`;

export const FlowerOrder = styled.img`
  position: absolute;
  width: 175px;
  height: 375px;
  margin: -10px;
`;
export const MintOrder = styled.img`
  position: absolute;
  z-index: -1;
  margin-left: -10px;
  top: 570%;
  left: -10%;
`;
export const WritingOrder = styled.img`
  width: 137px;
  position: absolute;
  bottom: -549%;
  left: 55%;
`;

export const SectionOrder = styled.h2`
  font-size: 40px;
  font-family: "Cormorant", serif;
  font-weight: 400;
  letter-spacing: 0.8px;
  margin-bottom: 20px;
  text-align: right;

  span {
    display: block;
    margin-left: 60px;
    text-align: center;
  }
`;

export const Figure = styled.div`
  height: 10px;
  width: 45px;
  background-color: #d978ac;
  margin-bottom: 20px;
`;

export const StepItem = styled.li`
  display: flex;
  flex-direction: column;
  &:first-child {
    margin-left: auto;
    width: 147px;
  }

  &:nth-child(2) {
    width: 204px;
    margin-left: auto;
  }

  &:nth-child(3) {
    width: 260px;
    margin-left: auto;
  }
`;

export const StepNumber = styled.p`
  color: #d978ac;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.8px;
  margin-bottom: 10px;
  display: inline-block;
`;

export const StepText = styled.p`
  text-transform: none;
  line-height: 17px;
  margin-bottom: 20px;
`;

export const OccasionTitle = styled.h2`
  font-size: 40px;
  font-family: "Cormorant", serif;
  font-weight: 400;
  letter-spacing: 0.8px;
  margin-bottom: 20px;
  padding-right: 37px;
  position: relative;
  span {
    display: block;
    text-align: right;
    &::before {
      content: "";
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 75%;
      width: 96px;
      height: 1px;
      background-color: #d978ac;
    }
  }
`;

export const TextOffer = styled.p`
  letter-spacing: 0.28px;
  text-transform: none;
  margin-bottom: 20px;
`;

export const OccasionList = styled.ul`
  margin-left: 20px;
  list-style: inside;
  list-style-position: outside;
  margin-bottom: 40px;
`;

export const OccasionItem = styled.li`
  &::marker {
    font-size: 10px;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const CollectBouquetLink = styled(NavLink)`
  padding: 16px 17px;
  background-color: #43ffd2;
  color: black;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.9;
  display: block;
  margin: 0 22px;
  cursor: pointer;
`;
///////////////////////////////
export const FormTitleSection = styled.h2`
  padding-top: 30px;
  font-size: 40px;
  font-family: "Cormorant", serif;
  font-weight: 400;
  letter-spacing: 0.8px;
  position: relative;
  z-index: 4;
`;
export const ShadowLeaves = styled.img`
  position: absolute;
  z-index: 4;
  top: 722%;
  width: 250px;
  right: 4%;
`;
export const Leaves = styled.img`
  position: absolute;
  z-index: 4;
  top: 716%;
  width: 250px;
  right: 0;
`;

export const MintLeaves = styled.img`
  position: absolute;
  z-index: 3;
  left: 20%;
  top: 735%;
  width: 305px;
  height: 323px;
`;

export const PinkLeaves = styled.img`
  position: absolute;
  left: -1%;
  top: 730%;
`;

export const GreenLine = styled.div`
  width: 96px;
  height: 1px;
  background-color: #43ffd2;
  margin-bottom: 20px;
  margin-top: 115px;
`;

export const FormText = styled.p`
  margin-bottom: 30px;
  margin-right: 45px;
  letter-spacing: 0.4px;
  position: relative;
  z-index: 4;
`;

export const Form = styled.form`
  margin-bottom: 10px;
`;

export const FormLabel = styled.label``;

export const FormInput = styled.input`
  background-color: transparent;
  padding: 20px 0 20px 20px;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #43ffd2;
  color: white;
`;
export const Comment = styled.textarea`
  background-color: transparent;
  border: 1px solid #43ffd2;
  color: white;
  padding-top: 20px;
  padding-left: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const SendBtn = styled.button`
  padding: 16px 93px;
  background-color: #43ffd2;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  border-width: 0;
`;

export const MyAgreement = styled.p`
  font-size: 10px;
  letter-spacing: 0.2px;
  text-transform: none;
  margin-right: 75px;
  padding-bottom: 34px;
  span {
    color: #d978ac;
    text-decoration: underline;
  }
`;
