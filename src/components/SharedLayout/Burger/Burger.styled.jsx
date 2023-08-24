import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BurgerWrapper = styled.div`
  min-width: 80%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 2;
  overflow: hidden;
  background-color: #23323f;
  padding: 0 10px;
`;

export const BurgerBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BurgerLogo = styled.div`
  font-family: "Cormorant", serif;
  font-weight: 300;
  position: relative;
`;

export const LetterL = styled.div`
  color: #8a8686;
  font-size: 60px;
  letter-spacing: 1.2px;
`;

export const LetterF = styled.div`
  font-size: 50px;
  letter-spacing: 1px;
  position: absolute;
  top: 13px;
  left: 8px;
`;
export const CloseIcon = styled.div``;

export const MenuList = styled.ul``;

export const MenuListItem = styled.li`
  letter-spacing: 0.56px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const SearchLinkItem = styled(NavLink)`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #ffffff;
`;

export const LinkItem = styled(NavLink)`
  color: #ffffff;
`;
export const Line = styled.div`
  width: 100px;
  height: 1px;
  background-color: #555555;
  margin-bottom: 20px;
`;
export const AddressList = styled.ul``;

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const Info = styled.p`
  color: #43ffd2;
  letter-spacing: 1.4px;
  margin-bottom: 2px;
`;

export const Timing = styled.p`
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 1px;
`;

export const SomeInfo = styled.div`
  margin-bottom: 10px;
  color: #555555;
  font-size: 12px;
`;

export const Phone = styled.a`
  text-decoration: underline;
  color: white;
  letter-spacing: 1.4px;
  display: inline-block;
  margin-bottom: 20px;
`;
export const SocList = styled.ul`
  display: flex;
  gap: 20px;
`;
