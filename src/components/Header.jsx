import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box py={3}>
          <Typography variant="h4">Course Planner</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
