import styled from "styled-components";

export const AccordionTitle = styled.div`
  color: #43ffd2;
  outline: none;
  border: 0;
  background: transparent;
  font-family: Oswald;
  font-size: 16px;

  letter-spacing: 1.6px;
  text-decoration-line: underline;
  text-transform: uppercase;
  margin-bottom: 10px;

  &::after {
    content: "▼";

    color: #43ffd2;
    list-style-type: none;
    text-decoration-line: none;

    margin-left: 10px;
  }

  cursor: pointer;
`;

export const AccordionItem = styled.div`
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
  height: auto;
  max-height: 9999px;
  &.collapsed {
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
  }
`;
