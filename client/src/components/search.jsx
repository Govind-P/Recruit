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
import * as yup from "yup";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const type = [
  {
    value: 'table',
    label: 'Table',
  },
  {
    value: 'chair',
    label: 'Chair',
  },
  {
    value: 'dusk',
    label: 'Dusk',
  },
  {
    value: 'bench',
    label: 'Bench',
  },
];
const madeof = [
  {
    value: 'wood',
    label: 'Wood',
  },
  {
    value: 'plastic',
    label: 'Plastic',
  },
  {
    value: 'metal',
    label: 'Metal',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

const lightTheme = createTheme({ palette: { mode: 'light' } });

const validationSchema = Yup.object({
  chip: Yup.array().of(Yup.string()).required('Select at least one option'),
  experience: Yup.string().required('Experience is required'),
  location: Yup.string().required('Location is required'),
  age: Yup.string().required('Age is required'),
});
const checkoutSchema = yup.object().shape({
  fcode: yup.string().required("required"),
  //ftype: yup.string().required("required"),
  //madeof: yup.string().required("required"),
  idate: yup.string().required("required"),
  expense: yup.string().required("required"),
});
const initialValues = {
furniturecode:"",
furnituretype:"",
furniturematerial:"",
purchasedate:"",
expense:"",
status:"",
invoice:"",
};


export default function Search() {
  const theme = useTheme();
  const { palette } = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleSubmit = (values) => {
  };


  return (
    <ThemeProvider theme={lightTheme}>
      <Box
       display="grid"
       gap="30px"
       borderRadius="5px"
       gridTemplateColumns="repeat(4, minmax(0, 1fr))"
       sx={{
         '& > div': { gridColumn: 'span 4' }, // Set the gridColumn to span 4 columns
         boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
         marginTop: '20px', // Adding padding from the top
         marginBottom: '20px',
         margin: '20px',
       }}
     >   
    {/* HEADER */}
    <Grid container spacing={2} id="container">
      {/* ROW 1 */}
      
      <Grid item xs={12} sm={12} md={12}>
        
         
          <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        //validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          setFieldValue,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                marginTop: '20px', // Adding padding from the top
              marginBottom: '20px',
              margin: '20px',
              }}
            >
              <TextField
                id="filled-select-currency"
                select
                label="Select"
                defaultValue=""
                value={values.furniturematerial}
                name="furniturematerial"
                helperText="Please select furniture material"
                variant="outlined"
                sx={{ gridColumn: "1" }}
                onChange={handleChange}
              >
                {madeof.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))} 
              </TextField>
              <TextField
                id="filled-select-currency"
                select
                label="Select "
                defaultValue="table"
                value={values.furnituretype}
                name="furnituretype"
                helperText="Please select furniture type"
                variant="outlined"
                sx={{ gridColumn: "2" }}
                onChange={handleChange}
              >
                {type.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="filled-select-currency"
                select
                label="Select"
                defaultValue=""
                value={values.furniturematerial}
                name="furniturematerial"
                helperText="Please select furniture material"
                variant="outlined"
                sx={{ gridColumn: "3" }}
                onChange={handleChange}
              >
                {madeof.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))} 
              </TextField>             
              <TextField
                id="filled-select-currency"
                select
                label="Select"
                defaultValue=""
                value={values.furniturematerial}
                name="furniturematerial"
                helperText="Please select furniture material"
                variant="outlined"
                sx={{ gridColumn: "4" }}
                onChange={handleChange}
              >
                {madeof.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))} 
              </TextField>
            </Box>
            <Box display="flex" justifyContent="center" mt="10px">
            
              <Button type="submit" color="primary" variant="contained" sx={{marginBottom:"20px"}}>
                Search
              </Button>
            </Box>
          </form>
        )}
      </Formik>
          
        
      </Grid>
    </Grid>
    </Box>
  </ThemeProvider>
  );
}
