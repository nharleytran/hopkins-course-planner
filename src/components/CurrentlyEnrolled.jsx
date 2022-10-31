import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CourseCard from "./CourseCard";
import PropTypes from "prop-types";

function CurrentlyEnrolled(props) {
  const { coursecards, remove, update } = props;

  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box py={2}>
          <Typography variant="h6">Currently Enrolled</Typography>
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
            .filter((coursecard) => coursecard.status === "enrolled")
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

export default CurrentlyEnrolled;

CurrentlyEnrolled.propTypes = {
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
