import { useState } from "react";
import styled from "styled-components";
import Modal from 'Components/Modal';
import Radio from 'Components/Form/Radio';

function SortTypePopupButton(props) {
  const [popupOpend, setPopupOpend] = useState(false);

  const togglePopup = () => {
    setPopupOpend(prev => !prev);
  }

  const onChange = e => {
    const { value } = e.target;

    props.setSortType(value);
  }

  return (
    <>
      <Button onClick={togglePopup}>{props.children}</Button>

      <Modal
        title='정렬'
        toggle={togglePopup}
        hidden={!popupOpend}
      >
        <Form>
          <Radio
            name='sort'
            value='recent'
            label='최근 조회 순'
            checked={props.sortType === 'recent'}
            onChange = {onChange}
          />
          <Radio
            name='sort'
            value='price'
            label='높은 가격 순'
            checked={props.sortType === 'price'}
            onChange = {onChange}
          />
        </Form>
      </Modal>
    </>
  )
}

const Button = styled.button`
  padding: 10px;
  border: 0;
  border-radius: 5px;
  background: #33a5ff;
  color: #fff;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default SortTypePopupButton;