import PropTypes from "prop-types";

import { AccordionItem, AccordionTitle } from "./FilterAccordion.styled";

const FilterAccordion = ({ title, children, isActive, onAccordionClick }) => {
  return (
    <div className="accordion-wrapper">
      <AccordionTitle
        className={`${isActive ? "open" : "collapsed"}`}
        onClick={onAccordionClick}
      >
        {title}
      </AccordionTitle>
      <AccordionItem
        className={`AccordionItem ${!isActive ? "collapsed" : ""}`}
      >
        <div className="accordion-content">{children}</div>
      </AccordionItem>
    </div>
  );
};

FilterAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onAccordionClick: PropTypes.func.isRequired,
};

export default FilterAccordion;
