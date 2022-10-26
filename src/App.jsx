import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Add from "@mui/icons-material/Add";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

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

function App() {
  return (
    <Container>
      <AppBar position="sticky">
        <Toolbar>
          <Box py={3}>
            <Typography variant="h4">Course Planner</Typography>
          </Box>
        </Toolbar>
      </AppBar>
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
            <Grid item>
              <Card style={styles.card}>
                <Box bgcolor={"info.main"}>
                  <CardContent style={styles.cardContent}>
                    <Typography color="textSecondary" gutterBottom>
                      601.280
                    </Typography>
                    <Typography variant="h5">Full-Stack JavaScript</Typography>
                  </CardContent>
                </Box>
                <CardActions style={styles.cardActions}>
                  <Button disabled>Fall 2022</Button>
                  <IconButton style={styles.iconButton}>
                    <ExpandMore style={styles.expandMore} />
                    <Select style={styles.select} value={"enrolled"}>
                      <MenuItem value="move" disabled>
                        <Typography variant="body1">Move to...</Typography>
                      </MenuItem>
                      <MenuItem value="enrolled">
                        <Typography variant="body1">
                          Currently Enrolled
                        </Typography>
                      </MenuItem>
                      <MenuItem value="interested">
                        <Typography variant="body1">Want to Take</Typography>
                      </MenuItem>
                      <MenuItem value="taken">
                        <Typography variant="body1">Already Took</Typography>
                      </MenuItem>
                      <MenuItem value="none">
                        <Box fontStyle="italic">
                          <Typography variant="body1">None</Typography>
                        </Box>
                      </MenuItem>
                    </Select>
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
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
            <Grid item>
              <Card style={styles.card}>
                <Box bgcolor={"warning.main"}>
                  <CardContent style={styles.cardContent}>
                    <Typography color="textSecondary" gutterBottom>
                      601.421
                    </Typography>
                    <Typography variant="h5">
                      Object-Oriented Software Engineering
                    </Typography>
                  </CardContent>
                </Box>
                <CardActions style={styles.cardActions}>
                  <Button disabled>Spring 2023</Button>
                  <IconButton style={styles.iconButton}>
                    <ExpandMore style={styles.expandMore} />
                    <Select style={styles.select} value={"interested"}>
                      <MenuItem value="move" disabled>
                        <Typography variant="body1">Move to...</Typography>
                      </MenuItem>
                      <MenuItem value="enrolled">
                        <Typography variant="body1">
                          Currently Enrolled
                        </Typography>
                      </MenuItem>
                      <MenuItem value="interested">
                        <Typography variant="body1">Want to Take</Typography>
                      </MenuItem>
                      <MenuItem value="taken">
                        <Typography variant="body1">Already Took</Typography>
                      </MenuItem>
                      <MenuItem value="none">
                        <Box fontStyle="italic">
                          <Typography variant="body1">None</Typography>
                        </Box>
                      </MenuItem>
                    </Select>
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Box py={2}>
            <Typography variant="h6">Already Took</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Card style={styles.card}>
                <Box bgcolor={"success.main"}>
                  <CardContent style={styles.cardContent}>
                    <Typography color="textSecondary" gutterBottom>
                      601.226
                    </Typography>
                    <Typography variant="h5">Data Structures</Typography>
                  </CardContent>
                </Box>
                <CardActions style={styles.cardActions}>
                  <Button disabled>Spring 2022</Button>
                  <IconButton style={styles.iconButton}>
                    <ExpandMore style={styles.expandMore} />
                    <Select style={styles.select} value={"taken"}>
                      <MenuItem value="move" disabled>
                        <Typography variant="body1">Move to...</Typography>
                      </MenuItem>
                      <MenuItem value="enrolled">
                        <Typography variant="body1">
                          Currently Enrolled
                        </Typography>
                      </MenuItem>
                      <MenuItem value="interested">
                        <Typography variant="body1">Want to Take</Typography>
                      </MenuItem>
                      <MenuItem value="taken">
                        <Typography variant="body1">Already Took</Typography>
                      </MenuItem>
                      <MenuItem value="none">
                        <Box fontStyle="italic">
                          <Typography variant="body1">None</Typography>
                        </Box>
                      </MenuItem>
                    </Select>
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Fab style={styles.fab} color="primary">
        <Add />
      </Fab>
    </Container>
  );
}

export default App;
