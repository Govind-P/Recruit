import * as React from 'react'; 
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Footer from '../components/footer';
import Header from '../components/Header';
import CardLoop from '../components/cards';
import Search from '../components/search';
import {TextField,Button} from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const lightTheme = createTheme({ palette: { mode: 'light' } });
export default function Elevation() {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center" paddingTop="60px" >
      </Box>
      <Header />
      <Search />
      <Box display="flex" justifyContent="space-between" alignItems="center" paddingTop="10px" >
      </Box>
      <CardLoop />
      <Box display="flex" justifyContent="space-between" alignItems="center" paddingTop="20px" >
      </Box>
      <Footer />
    </Box>
  );
}
