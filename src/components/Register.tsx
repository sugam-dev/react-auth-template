import React from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { useHeadingStyles, useTextFieldStyles, useButtonStyles } from '../styles/authStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Register: React.FC = () => {
  const headingClasses = useHeadingStyles();
  const textFieldClasses = useTextFieldStyles();
  const buttonClasses = useButtonStyles();

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center">
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            className={textFieldClasses.root}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            className={textFieldClasses.root}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className={textFieldClasses.root}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="confirm-password"
            className={textFieldClasses.root}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={buttonClasses.root}
          >
            Register
          </Button>
          <Box mt={2}>
            <Typography variant="body2" className={headingClasses.root}>
              <a href="#" style={{ color: 'white' }}>Forgot password?</a>
            </Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
