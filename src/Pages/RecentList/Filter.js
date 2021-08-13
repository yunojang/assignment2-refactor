import styled from "styled-components";
import BrandFilter from './BrandFilter';
import SortTypePopupButton from './SortTypePopupButton';

function Filter(props) {
  return (
    <Container>
      <BrandFilter 
        setShowBrands={props.setShowBrands}
      />

      <SortTypePopupButton 
        setSortType={props.setSortType} 
        sortType={props.sortType}
      >정렬 순서</SortTypePopupButton>

    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

export default Filter;