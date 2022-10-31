import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import CourseCard from "./CourseCard";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

function WantToTake(props) {
  const { coursecards, remove, update } = props;

  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box py={2}>
          <Typography variant="h6">Want to Take</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {coursecards
            .filter((coursecard) => coursecard.status === "interested")
            .map((coursecard, _id) => (
              <CourseCard
                coursecard={coursecard}
                key={_id}
                remove={remove}
                update={update}
              />
            ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default WantToTake;

WantToTake.propTypes = {
  coursecards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      term: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ),
  remove: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};
