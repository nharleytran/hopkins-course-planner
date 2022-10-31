import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";

function PageController(props) {
  const { pagecount, setPageNumber } = props;

  let count = 0;
  if (pagecount != undefined) {
    count = pagecount;
  }

  const handleOnChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Pagination
      count={count}
      size="large"
      margin="normal"
      onChange={handleOnChange}
    />
  );
}

export default PageController;

PageController.propTypes = {
  pagecount: PropTypes.number,
  setPageNumber: PropTypes.func,
};
