import styled from "styled-components";

function Modal({ children, ...props }) {
  const onClose = e => {
    if (e.target.dataset.close) {
      props.toggle();
    }
  }

  return (
    <Overlay hidden={props.hidden} data-close onClick={onClose}>
      <Container>{children}</Container>
    </Overlay>
  )
}

export default Modal;

const Overlay = styled.div`
  display: ${props => props.hidden ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(50,50,50,.2);
`;

const Container = styled.div`
  background: #fff;
  padding: 20px 30px;
  border-radius: 5px;
`;