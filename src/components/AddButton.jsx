import Add from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";

const styles = {
  fab: {
    position: "fixed",
    bottom: "3rem",
    right: "3rem",
  },
};

function AddButton() {
  return (
    <Link to={`/search`}>
      <Fab style={styles.fab} color="primary">
        <Add />
      </Fab>
    </Link>
  );
}

export default AddButton;
