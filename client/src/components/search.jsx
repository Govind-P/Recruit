import React, { useState } from 'react';
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
const experience= [
  {
    value: '0-5',
    label: '0-5 years',
  },
  {
    value: '5-10',
    label: '5-10 years',
  },
  {
    value: '10',
    label: 'above 10 years',
  },
];
const specialisation= [
  {
    value: '1',
    label: 'Data Analyst',
  },
  {
    value: '2',
    label: 'Data Engineer',
  },
  {
    value: '3',
    label: 'Data Scientist',
  },
  {
    value: '4',
    label: 'Data Scientist',
  },
  {
    value: '5',
    label: 'Full stack Developer',
  },
  {
    value: '6',
    label: 'HR',
  },
  {
    value: '7',
    label: 'Block chain Developer',
  },
  {
    value: '8',
    label: 'Android Developer',
  },
  {
    value: '9',
    label: 'Ios Developer',
  },
  {
    value: '10',
    label: 'Cloud Engineer',
  },
  {
    value: '11',
    label: 'Software Engineer',
  },
  {
    value: '12',
    label: 'ML Engineer',
  },
  {
    value: '13',
    label: 'Frontend Developer',
  },
  {
    value: '14',
    label: 'Backend Developer',
  },
];
const location= [
  {
    value: 'l1',
    label: 'India',
  },
  {
    value: 'l2',
    label: 'USA',
  },
  {
    value: 'l3',
    label: 'Uk',
  },
  {
    value: 'l4',
    label: 'Canada',
  },
];
const avaialbility = [
  {
    value: 'a1',
    label: 'Full Time',
  },
  {
    value: 'a2',
    label: 'Part Time',
  },
  {
    value: 'a3',
    label: 'Intern',
  },
];

const lightTheme = createTheme({ palette: { mode: 'light' } });


const initialValues = {
location:"",
experience:"",
specialisation:"",
availability:"",
};


export default function Search( {values}) {
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
                id="filled-select-spec"
                select
                label="Specialisation"
                defaultValue=""
                value={values.specialisation}
                name="specialisation"
                helperText="Please select specialisation"
                variant="outlined"
                sx={{ gridColumn: "1" }}
                onChange={handleChange}
              >
                {specialisation.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))} 
              </TextField>
              <TextField
                id="filled-select-location"
                select
                label="Location"
                defaultValue=""
                value={values.location}
                name="location"
                helperText="Please select location"
                variant="outlined"
                sx={{ gridColumn: "2" }}
                onChange={handleChange}
              >
                {location.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="filled-select-avail"
                select
                label="Available as"
                defaultValue=""
                value={values.availability}
                name="availability"
                helperText="Please select employee type"
                variant="outlined"
                sx={{ gridColumn: "3" }}
                onChange={handleChange}
              >
                {avaialbility.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))} 
              </TextField>             
              <TextField
                id="filled-select-experience"
                select
                label="Experience"
                defaultValue=""
                value={values.experience}
                name="experience"
                helperText="Please select Experience"
                variant="outlined"
                sx={{ gridColumn: "4" }}
                onChange={handleChange}
              >
                {experience.map((option) => (
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
