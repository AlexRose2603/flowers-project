import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const NavListItem = styled(NavLink)`
  text-transform: uppercase;
  font-weight: 700;
  color: #43ffd2;
  cursor: pointer;
`;

export const Contacts = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const ContactItem = styled.li`
  text-transform: uppercase;
  text-align: center;
`;

export const ContactInfo = styled.p`
  color: #43ffd2;
  letter-spacing: 1.4px;
  margin-bottom: 6px;
`;

export const InfoText = styled.p`
  font-size: 10px;
  font-weight: 300;
`;

export const Socials = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 40px;
`;

export const SocLink = styled.li``;

export const SubTitle = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  color: #43ffd2;
  letter-spacing: 0.48px;
  margin-bottom: 10px;
`;

export const Address = styled.p`
  text-align: center;
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.4px;
  line-height: 1.4;
  min-width: 244px;
  padding: 0 38px;
`;
