import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchData } from 'utils/api';
import { getRandomItem } from 'utils/random';
import { priceFormat } from 'utils/format';

import ButtonContainer from './Components/ButtonContainer';

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 55px 25px;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  img {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  height: 45px;
`;

const Description = styled.div`
  display: flex;
  justify-content:space-between;
  margin-bottom: 50px;
`;

const Brand = styled.span`
  color: rgb(150,150,150);
`;

const Price = styled.div`
  span {
    font-weight: bold;
    color: rgb(250,50,70);
  }
`;

function Product() {
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    loadNewItem();
  }, [])

  const loadNewItem = async () => {
    const products = await fetchData('product');

    const item = getRandomItem(products);

    setCurrentItem(item);
  }

  if (!currentItem.id) return null;
  
  return (
    <Container>
      <ImageContainer>
        <img alt='제품 이미지' src={currentItem.image}/>
      </ImageContainer>
     
      <Title>{currentItem.title}</Title>

      <Description>
        <Brand>{currentItem.brand}</Brand>
        <Price><span>{priceFormat(currentItem.price)}</span>원</Price>
      </Description>

      <ButtonContainer loadNewItem={loadNewItem} />
    </Container>
  )
}

export default Product;