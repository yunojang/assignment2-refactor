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

function RecentList() {
  const [base, setBase] = useState([]);
  const [list, setList] = useState([]);
  const [sortType, setSortType] = useState(SORT_TYPE.RECENT);
  const [showBrands, setShowBrands] = useState([]);
  const [isOnlyInterest, setOnlyInterest] = useState(false);

  useEffect(() => {
    (async () => {
      const products = await fetchProducts();

      let showList =
        products
          .filter(product => recentShowStorage.includes(product))
          .map(product => ({ ...product, time: recentShowStorage.list[recentShowStorage.indexOf(product)].time }))

      setBase(showList);
      setList(showList);
    })();
  }, [])

  const sortFunction = (type) => {
    if (type === SORT_TYPE.RECENT) {
      return recentSort;
    }
    else if (type === SORT_TYPE.PRICE) {
      return priceSort;
    }
  }

  useEffect(() => {
    let filtedList = Array.from(base);
    
    if (isOnlyInterest) {
      filtedList = filtedList.filter(item => !uninterestStorage.includes(item));
    }

    if (showBrands.length) {
      filtedList = filtedList.filter(v=>showBrands.includes(v.brand));
    } 

    filtedList = filtedList.sort(sortFunction(sortType));

    setList(filtedList);

  }, [base, showBrands, sortType, isOnlyInterest])

  const renderList = () => {
    return list.map(item => <Product key={item.id} item={item} />)
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
