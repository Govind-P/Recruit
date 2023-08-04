import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Header() {
    const theme = useTheme();
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [personName, setPersonName] = React.useState([]);

  return (
    <ThemeProvider theme={lightTheme}>
    {/* HEADER */}
    <Grid container spacing={2} id="container">
      {/* ROW 1 */}
      <Grid item xs={12} sm={12} md={12}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={5}
          sx={{
            width: '100%',
            height: 100,
            backgroundColor: 'black',
            opacity: [0.9, 0.9, 0.7],
            '&:hover': {
              opacity: [0.9, 0.9, 0.7],
            },
          }}
        >
          <Box
            component="form"
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              '& > div': { gridColumn: 'span 4' }, // Set the gridColumn to span 4 columns
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              marginTop: '20px', // Adding padding from the top
              marginBottom: '20px',
              margin: '20px',
            }}
          >
            <Box>
            <Typography>Search by</Typography>
            </Box>
            
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}
