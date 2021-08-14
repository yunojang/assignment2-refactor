import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchProducts } from 'utils/api';
import { getRandomItem } from 'utils/array';
import { priceFormat } from 'utils/format';
import { uninterestStorage, recentShowStorage } from 'store'

import ButtonContainer from './Components/ButtonContainer';
import { useHistory } from 'react-router-dom';

function Product() {
  const history = useHistory();
  const [currentItem, setCurrentItem] = useState({});
  const linkedInfo = history.location.info;

  const logItemRecentShow = item => {
    recentShowStorage.push(item);
  }

  const logItemUnInterest = item => {
    uninterestStorage.push(item);
  }

  const loadRandomInterestItem = useCallback(async () => {
    const isProductInterest = product => {
      return !uninterestStorage.includes(product);
    }

    const products = await fetchProducts();
    const interestProducts = products.filter(isProductInterest);

    const item = getRandomItem(interestProducts);

    logItemRecentShow({ id: item.id, time: Date.now() });
    setCurrentItem(item);
  }, []);

  useEffect(() => {
    const loadLinkedData = () => {
      logItemRecentShow({ id: linkedInfo.id, time: Date.now() });
      setCurrentItem(linkedInfo);
    }

    if (linkedInfo) {
      loadLinkedData();
    }
    else {
      loadRandomInterestItem();
    }

  }, [linkedInfo, loadRandomInterestItem])

  const unInterest = () => {
    logItemUnInterest({ id: currentItem.id, time: Date.now() });

    loadRandomInterestItem();
  }

  if (!currentItem.id) return null;

  return (
    <Container>
      <ImageContainer>
        <img alt='제품 이미지' src={currentItem.image} />
      </ImageContainer>

      <Title>{currentItem.title}</Title>

      <Description>
        <Brand>{currentItem.brand}</Brand>
        <Price><span>{priceFormat(currentItem.price)}</span>원</Price>
      </Description>

      <ButtonContainer
        loadRandomInterestItem={loadRandomInterestItem}
        unInterest={unInterest}
      />
    </Container>
  )
}

export default Product;

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 55px 25px 25px 25px;
  display: flex;
  flex-direction: column;
  background: rgb(245,245,245);
`;

const ImageContainer = styled.div`
  max-width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
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
