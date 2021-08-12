import { Link } from "react-router-dom";
import styled from "styled-components";
import { priceFormat } from 'utils/format';

import ROUTES_PATH from 'constant/routesPath';

function Product(props) {
  const { title, brand, price } = props.item;

  return (
    <ProductLink to={{ pathname: ROUTES_PATH.PRODUCT, state: props.item }}>
      <Title>{title}</Title>
      <Info>
        <Brand>{brand}</Brand>
        <Price><span>{priceFormat(price)}</span>원</Price>
      </Info>
    </ProductLink>
  )
}

export default Product;

const ProductLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  background: rgb(250,250,250);
  padding: 8px 10px;

  &:nth-child(odd) {
    background: rgb(240,240,240);
  }
`;

const Title = styled.span`
  display: inline-block;
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
`;

const Info = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 200px;
`;

const Brand = styled.span`
  font-size: 14px;
  margin-right: 20px;
  color: #aaa;
`;

const Price = styled.span`
  font-size: 13px;

  span {
    font-weight: bold;
    color: rgb(250,55,55);
  }
`;