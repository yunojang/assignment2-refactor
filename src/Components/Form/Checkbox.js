import styled from "styled-components";

function Checkbox({ id, label, ...rest }) {
  return (
    <label htmlFor={id}>
      <Input type='checkbox' id={id} {...rest} />
      {label}
    </label>
  )
}

export default Checkbox;

const Input = styled.input`
  margin-right: 5px;
`;