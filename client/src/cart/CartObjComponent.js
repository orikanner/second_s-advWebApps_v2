import { useSelector, useDispatch } from "react-redux";
import {  Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';
import "./cart.css"
//selector for reading // dispatchex

import { addProduct, removeProduct } from '../redux/cart'

export default function CartObjComponent({product}) { 
    console.log("pr format",product);
    const dispath = useDispatch();
    const OnPlusHandler = () => dispath(addProduct(product.pr));
    const onMinusHandler = () => dispath(removeProduct(product));



    //boxShadow:'0 1.75px 1.75px 1.75px rgba(9, 9, 9, 0.23)'
return(
    <Card style={{margin:'5rem',padding:'1rem', width: '20rem',height:'20rem', borderRadius:'12px'}}>
      <Card.Img className="CardImg"  style={{maxWidth:'286px',maxHeight:'160.88px',borderRadius:'20px',objectFit:"cover"}} variant="top" src={product.pr.img} />
      <Card.Body>
        <Card.Title><Link to={"/product/"+product.pr.name} >{product.pr.name}</Link></Card.Title>
        <Card.Text>
          {product.pr.price}$
        </Card.Text>
        <Button onClick={onMinusHandler} variant="danger">-</Button>{' '}
        <Button style={{}} variant="secondary">
            quantity: {product.count}
         </Button>{' '}
        <Button onClick={OnPlusHandler} variant="success">+</Button>
      </Card.Body>
    </Card>
)



}

// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';

// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

// export default function MediaControlCard() {
//   const theme = useTheme();

//   return (
//     <Card sx={{ display: 'flex' }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <CardContent sx={{ flex: '1 0 auto' }}>
//           <Typography component="div" variant="h5">
//             Live From Space
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             Mac Miller
//           </Typography>
//         </CardContent>
//         <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
//           <IconButton aria-label="previous">
//             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//           </IconButton>
//           <IconButton aria-label="play/pause">
//             <PlayArrowIcon sx={{ height: 38, width: 38 }} />
//           </IconButton>
//           <IconButton aria-label="next">
//             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//           </IconButton>
//         </Box>
//       </Box>
//       <CardMedia
//         component="img"
//         sx={{ width: 151 }}
//         image="/static/images/cards/live-from-space.jpg"
//         alt="Live from space album cover"
//       />
//     </Card>