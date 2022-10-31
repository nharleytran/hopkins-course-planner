import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PropTypes from "prop-types";

function SearchBar(props) {
  const { query, setQuery } = props;

  let button = "×";
  if (query === "") {
    button = "";
  }

  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };

  const handleOnClick = (event) => {
    setQuery("");
  };

  return (
    <TextField
      fullWidth
      span="10"
      label="Search"
      variant="outlined"
      color="primary"
      margin="normal"
      value={query}
      onChange={handleOnChange}
      focused
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" onClick={handleOnClick}>
            <IconButton>{button}</IconButton>
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};
