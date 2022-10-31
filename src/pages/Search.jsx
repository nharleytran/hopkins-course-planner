import Container from "@mui/material/Container";
import SearchResult from "../components/SearchResult";
import SearchBar from "../components/SearchBar";
import PageController from "../components/PageController";
import PropTypes from "prop-types";

function Search(props) {
  const {
    query,
    setQuery,
    result,
    pagecount,
    setPageNumber,
    update,
    remove,
    create,
  } = props;

  return (
    <Container>
      <SearchBar query={query} setQuery={setQuery} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <PageController pagecount={pagecount} setPageNumber={setPageNumber} />
      </div>
      <SearchResult
        result={result}
        update={update}
        remove={remove}
        create={create}
      />
    </Container>
  );
}

export default Search;

Search.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  pagecount: PropTypes.number,
  setPageNumber: PropTypes.func,
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  result: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      term: PropTypes.string.isRequired,
    })
  ),
};
