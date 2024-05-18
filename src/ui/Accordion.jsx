import * as React from "react";
import {
  Accordion as BaseAccordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const Accordion = ({
  title,
  actions,
  children,
  className = "",
  height = "30",
  ...props
}) => {
  const { defaultExpanded } = props;
  return (
    <BaseAccordion
      className={`accordion ${className} !mx-auto`}
      defaultExpanded={defaultExpanded}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`accordion-${title}`}
        id={`accordion-${title}-header`}
        sx={{ height: `${height}px` }}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
      {actions && <AccordionActions>{actions}</AccordionActions>}
    </BaseAccordion>
  );
};

export default Accordion;
