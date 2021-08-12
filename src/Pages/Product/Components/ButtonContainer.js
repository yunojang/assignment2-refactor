import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  background: rgb(215,215,215);
  border-radius: 4px;
  cursor: pointer;
  padding: 10px 12px;
  font-weight: bold;
`;

function ButtonContainer(props) {
  

  return (
    <Container>
      <Button onClick={props.loadRandomItem}>랜덤 상품 보기</Button>
      <Button onClick={props.unInterest}>관심없음</Button>
    </Container>
  )
}

export default ButtonContainer;
