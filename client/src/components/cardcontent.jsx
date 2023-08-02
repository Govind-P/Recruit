import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
const CardComponent = ({ title, content,image }) => {
  return (
    <Card sx={{ maxWidth: 300,minWidth:300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
        
          image={image}
          alt="green iguana"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" startIcon={<ShareIcon />} sx={{maxWidth:100}} >
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
