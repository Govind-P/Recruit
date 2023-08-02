import React, { useState, useEffect } from 'react';
import CardComponent from './cardcontent';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CardLoop = () => {
  const [gridColumns, setGridColumns] = useState(4); // Start with 4 columns for larger screens
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/details/data?specialisation='+'Teacher'); // Update the URL to your backend endpoint
        if (response.ok) {
          const jsonData = await response.json();
          const formattedData = jsonData.data.map((item, index) => ({ ...item, id: index + 1 }));
          setData(formattedData);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of grid columns based on screen size
      const newSize = window.innerWidth <= 1200 ? 3 : 4; 
      if (newSize !== gridColumns) {
        setGridColumns(newSize);
      }
    };

    // Add event listener to resize event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [gridColumns]);

  return (
    <Box m="20px">
      <Grid container spacing={2} id="container">
        {/* ROW 1 */}
        <Grid item xs={12} sm={12} md={12}>
          <Box
            paddingTop="20px"
            paddingBottom={"10px"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={5}
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: '#2196f3',
              opacity: [0.9, 0.8, 0.7],
              '&:hover': {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns={`repeat(${gridColumns}, minmax(0, 1fr))`}
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                marginTop: '20px', // Adding padding from the top
                marginBottom: '20px',
                alignContent: 'center',
                margin: '20px',
              }}
            >
              {data.map((item) => (
                <CardComponent key={item.id} title={item.name} content={item.specialisation} image={item.image} />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" paddingTop="40px" >
      <Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
      </Stack>
      </Box>
    </Box>
  );
};

export default CardLoop;
