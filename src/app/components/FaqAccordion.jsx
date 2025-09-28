import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqAccordion = ({ question, answer }) => {
  return (
    <Accordion
      sx={{ backgroundColor: "#ffffff", color: "#000000" }}
      className="p-2"
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#000000" }} />}>
        <Typography
          component="span"
          sx={{ fontSize: "1.2rem", color: "#1B1743", fontWeight: "bold" }}
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" className="text-[#2A2F32]/70">
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqAccordion;