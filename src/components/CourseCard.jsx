import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const styles = {
  fab: {
    position: "fixed",
    bottom: "3rem",
    right: "3rem",
  },
  card: {
    margin: "1rem",
    width: "16rem",
  },
  cardContent: {
    minHeight: "8rem",
  },
  cardActions: {
    height: "3rem",
  },
  iconButton: {
    marginLeft: "auto",
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
  },
  expandMore: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    padding: "0.5rem",
  },
  select: {
    width: "100%",
    height: "100%",
    opacity: "0",
    cursor: "pointer",
  },
};

function CourseCard(props) {
  const { coursecard, remove, update, create } = props;
  const [color, setColor] = useState("text.disabled");
  const title = coursecard?.title;
  const number = coursecard?.number;
  const term = coursecard?.term;
  const id = coursecard?._id;
  let status = null;
  if (coursecard?.status) {
    status = coursecard?.status;
  }

  useEffect(() => {
    if (status == "enrolled") {
      setColor("info.main");
    }
    if (status == "taken") {
      setColor("success.main");
    }
    if (status == "interested") {
      setColor("warning.main");
    }
    if (!status) {
      setColor("text.disabled");
    }
  }, [status, id]);

  const handleOnRemove = () => {
    remove(id, coursecard);
  };

  const handleOnUpdateTaken = () => {
    if (!status) {
      create(coursecard, "taken");
    } else {
      update(coursecard, "taken");
    }
  };

  const handleOnUpdateInterested = () => {
    if (!status) {
      create(coursecard, "interested");
    } else {
      update(coursecard, "interested");
    }
  };

  const handleOnUpdateEnrolled = () => {
    if (status == null) {
      create(coursecard, "enrolled");
    } else {
      update(coursecard, "enrolled");
    }
  };

  return (
    <>
      <Grid item>
        <Card style={styles.card}>
          <Box bgcolor={color}>
            <CardContent style={styles.cardContent}>
              <Typography color="textSecondary" gutterBottom>
                {number}
              </Typography>
              <Typography variant="h5">{title}</Typography>
            </CardContent>
          </Box>
          <CardActions style={styles.cardActions}>
            <Button disabled>{term}</Button>
            <IconButton style={styles.iconButton}>
              <ExpandMore style={styles.expandMore} />

              <Select style={styles.select} value={"enrolled"}>
                <MenuItem value="move" disabled>
                  <Typography variant="body1">Move to...</Typography>
                </MenuItem>
                <MenuItem value="enrolled" onClick={handleOnUpdateEnrolled}>
                  <Typography variant="body1">Currently Enrolled</Typography>
                </MenuItem>
                <MenuItem value="interested" onClick={handleOnUpdateInterested}>
                  <Typography variant="body1">Want to Take</Typography>
                </MenuItem>
                <MenuItem value="taken" onClick={handleOnUpdateTaken}>
                  <Typography variant="body1">Already Took</Typography>
                </MenuItem>
                <MenuItem value="none" onClick={handleOnRemove}>
                  <Box fontStyle="italic">
                    <Typography variant="body1">None</Typography>
                  </Box>
                </MenuItem>
              </Select>
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default CourseCard;

CourseCard.propTypes = {
  create: PropTypes.func,
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  coursecard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
  }),
};
