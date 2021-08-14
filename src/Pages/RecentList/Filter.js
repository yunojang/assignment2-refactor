import Checkbox from "Components/Form/Checkbox";
import styled from "styled-components";
import BrandFilter from './BrandFilter';
import SortTypePopupButton from './SortTypePopupButton';

function Filter(props) {
  return (
    <Container>
      <BrandFilter 
        setShowBrands={props.setShowBrands}
      />

      <InterestFilter>
        <div>관심 상품</div>
        <Checkbox label='관심 상품만 보기' onChange={e=>props.setOnlyInterest(e.target.checked)}/>
      </InterestFilter>

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

const InterestFilter = styled.div`
  font-size: 13px;
  div {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

export default Filter;