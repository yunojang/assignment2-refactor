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
  const [base, setBase] = useState([]);
  const [list, setList] = useState([]);
  const [sortType, setSortType] = useState(SORT_TYPE.RECENT);
  const [showBrands, setShowBrands] = useState([]);

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

      let showList =
        products
          .filter(product => recentShowIds.includes(product.id))
          .map(product => ({ ...product, time: recentShowStorage.list[recentShowStorage.indexOf(product)].time }))

      setBase(showList);
      setList(showList);
    })();
  }, [])

  useEffect(()=> {
    if (showBrands.length) {
      setList(base.filter(v=>showBrands.includes(v.brand)))
    } 
    else {
      setList(base);
    }
    
    setList(list => Array.from(list).sort(sortFunction(sortType)))
    
  },[base,showBrands,sortType])

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
