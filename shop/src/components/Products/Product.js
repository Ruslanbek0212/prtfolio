import React, { useContext, useState } from 'react'
import "./Product.css"
import { Contexts } from '../../context/Contexts'
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container , Grid } from '@mui/material';
import Modalka from '../Modal.js/Modalka';



function Product() {
  const {db, dispatch, state, setOpen} = useContext(Contexts)

  const addToBasket = (data) => {   
    const res = state.basket.some((element, value) => element.data.id === data.id)
    if (res){
      setOpen(true)
    } 
    else{
      dispatch({type: "ADD_BASKET", payload: {data, qty: 1}})
    } 
  }


  const [first, setFirst] = useState(1)
  const cardProduct = 5
  const lastProductKey = first * cardProduct
  const firstProductKey = lastProductKey - cardProduct

  const res = db?.slice(firstProductKey, lastProductKey)

  // console.log(res);

  const numbers = [...Array(Math.floor(db?.length / cardProduct) + 1).keys()].slice(1)
  console.log(numbers);
  
  return (
    <section>
      <h2>Products page</h2>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {res.map((element, value) => {
            return <Grid className='box' key= {value} item xs={12} lg={4}>          
              <Card >
                <div className="img">
                  <img className='productImg' src={element.image} alt="" />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {element.title?.slice(0, 20)}...
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {element.description?.slice(0, 70)}...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => addToBasket(element)} size="small">ADD basket</Button>
                  <Button size="small">Learn More</Button>
                  <Rating name="read-only" value={element?.rating.rate} readOnly />
                </CardActions>
              </Card>
            </Grid>
          })}
          
        </Grid>
        {
            <ul className='pagenation'>
              {
                numbers?.map((element, value) => <li className={element === first? 'activePage' : "" } onClick={() => setFirst(element)} >{element}</li>)
              }
            </ul>
        }
      </Container>
      <Modalka/>
                
    </section>
  )
}

export default Product