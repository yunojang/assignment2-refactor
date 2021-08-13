import { useState } from "react";
import styled from "styled-components";
import Modal from 'Components/Modal';
import Radio from 'Components/Form/Radio';

function SortTypePopupButton(props) {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const togglePopup = () => {
    setIsOpenPopup(prev => !prev);
  }

  const onChange = e => {
    const { value } = e.target;

    props.setSortType(value);
  }

  return (
    <>
      <Button onClick={togglePopup}>정렬</Button>

      <Modal
        toggle={togglePopup}
        hidden={!isOpenPopup}
      >
        <Form>
          정렬
          <Radio
            name='sort'
            value='recent'
            label='최근 조회 순'
            onChange = {onChange}
          />
          <Radio
            name='sort'
            value='price'
            label='높은 가격 순'
            onChange = {onChange}
          />
        </Form>
      </Modal>
    </>
  )
}

const Button = styled.button`
  padding: 10px 15px;
  background: #dfdfdf;
  border-radius: 5px;
  border: 0;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default SortTypePopupButton;