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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

const lightTheme = createTheme({ palette: { mode: 'light' } });

const validationSchema = Yup.object({
  chip: Yup.array().of(Yup.string()).required('Select at least one option'),
  experience: Yup.string().required('Experience is required'),
  location: Yup.string().required('Location is required'),
  age: Yup.string().required('Age is required'),
});

export default function Search() {
    const theme = useTheme();
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

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
            height: '100%',
            backgroundColor: 'white',
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
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* Other fields */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}
