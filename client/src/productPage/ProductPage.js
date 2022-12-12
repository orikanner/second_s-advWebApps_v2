import React from 'react'
import { useParams } from "react-router-dom";
import { MyTitle } from '../publicDesign';
import { ProductBox } from './PrPageStyle';
import { ProductExtraInfo } from './PrPageStyle';
import { ProductDsc } from './PrPageStyle';

export default function ProductPage({productsList}) {
  
  const { name } = useParams();

    const pr = productsList?.find(prod=> prod.name == name );// ?.== means if productList ex than go for find if not it will skip this prevents error;

    if (!pr) return <p>page not found...</p>

    return (
      <ProductBox>
        <MyTitle>{pr.name}</MyTitle> 
        <ProductExtraInfo>
          <ProductDsc>{pr.description}<br></br>
            You can find a great {pr.name} at {pr.location}
          </ProductDsc>
          <div>
            <img src={pr.img}/>
            <img src={pr.secondImg}/>
          </div>
        </ProductExtraInfo>
      </ProductBox>
    )
  }