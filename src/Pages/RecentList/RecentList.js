import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { recentShowStorage } from 'store';
import { fetchProducts } from 'utils/api';
import { recentSort, priceSort } from './utils/sort';

import Product from './Components/Product';
import Filter from './Filter';

const SORT_TYPE = {
  RECENT: 'recent',
  PRICE: 'price',
}

function RecentList() {
  const [list, setList] = useState([]);
  const [sortType, setSortType] = useState(SORT_TYPE.RECENT);

  const sortFunction = (type) => {
    if (type === SORT_TYPE.RECENT) {
      return recentSort;
    }
    else if (type === SORT_TYPE.PRICE) {
      return priceSort;
    }
  }

  useEffect(() => {
    (async () => {
      const recentShowIds = recentShowStorage.list.map(v => v.id);
      const products = await fetchProducts();

      const showingList =
        products
          .filter(product => recentShowIds.includes(product.id))
          .map(product => ({ ...product, time: recentShowStorage.list[recentShowStorage.indexOf(product)].time }))
          .sort(sortFunction(sortType));

      setList(showingList);
    })();

  }, [sortType])

  const renderList = () => {
    return list.map(item => <Product key={item.id} item={item} />)
  }

  return (
    <Container>
      <Title>최근 조회 목록</Title>
      <Filter setSortType={setSortType} />
      {renderList()}
      <Alert hidden={list.length !== 0}>최근 조회한 목록이 없습니다.</Alert>
    </Container>
  )
}

export default RecentList;

const Container = styled.div`
  max-width: 640px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

const Alert = styled.div`
  text-align: center;
  color: #888;
`;
