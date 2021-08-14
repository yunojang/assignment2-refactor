import Checkbox from 'Components/Form/Checkbox';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {fetchProducts} from 'utils/api';

function BrandFilter(props) {
  const [brands, setBrands] = useState([]);
  
  useEffect(()=> {
    (async ()=> {
      const products = await fetchProducts();
      const brands = new Set(products.map(v=>v.brand));
      setBrands(Array.from(brands));
    })();
  }, [])

  const renderBrands = () => {
    return brands.map((brand,i) => <Checkbox key={i} label={brand} data-brand={brand}/>)
  }

  const onChange = e => {
    const { brand } = e.target.dataset;

    if (e.target.checked) {
      props.setShowBrands(prev => [...prev,brand])
    }
    else {
      props.setShowBrands(prev => prev.filter(v => v !== brand))
    }
  }

  return (
    <Conatiner onChange={onChange}>
      <Title>브랜드</Title>
      {renderBrands()}
    </Conatiner>
  )
}

export default BrandFilter;

const Conatiner = styled.div`
  font-size: 13px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;