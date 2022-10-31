import Grid from "@mui/material/Grid";
import CourseCard from "./CourseCard";
import PropTypes from "prop-types";

function SearchResult(props) {
  const { result, update, remove, create } = props;
  return (
    <Grid
      container
      spacing="0"
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
    >
      {result
        .filter((coursecard) => coursecard !== null)
        .map((coursecard, _id) => (
          <CourseCard
            coursecard={coursecard}
            key={_id}
            update={update}
            remove={remove}
            create={create}
          />
        ))}
    </Grid>
  );
}

export default SearchResult;

SearchResult.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      term: PropTypes.string.isRequired,
    })
  ),
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
};
