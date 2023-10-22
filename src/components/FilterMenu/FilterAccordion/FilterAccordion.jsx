import { useState } from "react";
import { AccordionItem, AccordionTitle } from "./FilterAccordion.styled";

const FilterAccordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  console.log(title);

  return (
    <div className="accordion-wrapper">
      <AccordionTitle
        className={`${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </AccordionTitle>
      <AccordionItem className={`AccordionItem ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </AccordionItem>
    </div>
  );
};
export default FilterAccordion;
