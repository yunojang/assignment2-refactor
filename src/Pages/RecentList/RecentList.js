import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { recentShowStorage, uninterestStorage } from 'store';
import { fetchProducts } from 'utils/api';
import { recentSort, priceSort } from './utils/sort';

import Product from './Components/Product';
import Filter from './Filter';

const SORT_TYPE = {
  RECENT: 'recent',
  PRICE: 'price',
}

let base = [];

function RecentList() {
  const [list, setList] = useState([]);
  const [sortType, setSortType] = useState(SORT_TYPE.RECENT);
  const [showBrands, setShowBrands] = useState([]);
  const [isOnlyInterest, setOnlyInterest] = useState(false);

  useEffect(() => {
    const isProductShow = product => {
      return recentShowStorage.includes(product);
    }

    const createShowItem = product => {
      return { ...product, time: recentShowStorage.list[recentShowStorage.indexOf(product)].time };
    }

    const createBaseList = async () => {
      const products = await fetchProducts();

      const baseList = 
      products
        .filter(isProductShow)
        .map(createShowItem)

      base = baseList;
      setList(baseList);
    };

    createBaseList();
  }, [])

  useEffect(() => {
    const isProductInterest = item => {
      return !uninterestStorage.includes(item)
    }

    const isProductShowingBrand = item => {
      return showBrands.includes(item.brand);
    }

    const filterList = baseList => {
      let filtedList = Array.from(baseList);

      if (isOnlyInterest) {
        filtedList = filtedList.filter(isProductInterest);
      }

      if (showBrands.length) {
        filtedList = filtedList.filter(isProductShowingBrand);
      }

      return filtedList;
    }

    const sortList = list => {
      if (sortType === SORT_TYPE.RECENT) {
        list.sort(recentSort);
      }
      else if (sortType === SORT_TYPE.PRICE) {
        list.sort(priceSort);
      }
    }

    const filtedList = filterList(base);
    sortList(filtedList);

    setList(filtedList);

  }, [showBrands, sortType, isOnlyInterest])

  const renderList = () => {
    return list.map(item => <Product key={item.id} info={item} />)
  }

  return (
    <Container>
      <Title>최근 조회 목록</Title>
      <Filter
        setSortType={setSortType}
        sortType={sortType}
        setShowBrands={setShowBrands}
        setOnlyInterest={setOnlyInterest}
      />

      <Count><span>{list.length}</span>개의 상품</Count>
      {renderList()}
      <Alert hidden={list.length !== 0}>목록이 없습니다.</Alert>
    </Container>
  )
}

export default RecentList;

const Container = styled.div`
  max-width: 640px;
  margin: auto;
  display: flex;
  padding: 0 10px;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 19px;
  text-align: center;
  margin-bottom: 20px;
`;

const Count = styled.div`
  margin-bottom: 10px;
  span{
    font-weight: bold;
  }
`;

const Alert = styled.div`
  text-align: center;
  color: #888;
  margin-top: 50px;
`;
