import styled from "styled-components";

function Radio({ id, label, ...rest }) {
  return (
    <label htmlFor={id}>
      <Input type='radio' id={id} {...rest} />
      {label}
    </label>
  )
}

export default Radio;

const Input = styled.input`
  margin-right: 10px;
`;