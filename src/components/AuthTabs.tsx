import React, { useState } from "react";
import { Tabs, Tab, Box, Container } from "@mui/material";
import { useTabsStyles } from "../styles/authStyles"; // Importing custom tab styles

import Login from "./Login";
import Register from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AuthTabs: React.FC = () => {
  const [value, setValue] = useState(0);
  const classes = useTabsStyles(); // Custom tab styles

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          className={classes.root} // Applying custom tab styles
        >
          <Tab label="Login" className={classes.tab} />
          <Tab label="Register" className={classes.tab} />
        </Tabs>
        <Box mt={3}>
          {value === 0 && <Login />}
          {value === 1 && <Register />}
        </Box>
      </Box>
    </Container>
  );
};

export default AuthTabs;
