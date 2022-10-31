import Container from "@mui/material/Container";
import Header from "../components/Header";
import CurrentlyEnrolled from "../components/CurrentlyEnrolled";
import WantToTake from "../components/WantToTake";
import AlreadyTook from "../components/AlreadyTook";
import AddButton from "../components/AddButton";
import PropTypes from "prop-types";

function Home(props) {
  const { coursecards, remove, update } = props;

  return (
    <Container>
      <Header />
      <CurrentlyEnrolled
        coursecards={coursecards}
        remove={remove}
        update={update}
      />
      <WantToTake coursecards={coursecards} remove={remove} update={update} />
      <AlreadyTook coursecards={coursecards} remove={remove} update={update} />
      <AddButton />
    </Container>
  );
}

export default Home;

Home.propTypes = {
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
