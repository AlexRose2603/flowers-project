import styled from "styled-components";

export const AccordionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  letter-spacing: 1.6px;
  text-decoration-line: underline;
  margin-bottom: 10px;
  color: ${({ isOpen }) => (isOpen ? "#43ffd2" : "#d978ac")};
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
