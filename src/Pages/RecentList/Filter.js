import styled from "styled-components";
import BrandFilter from './BrandFilter';
import SortTypePopupButton from './SortTypePopupButton';

function Filter(props) {
  return(
    <Container>
      <BrandFilter />
      <SortTypePopupButton setSortType={props.setSortType}/>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

export default Filter;