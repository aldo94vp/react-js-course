import styled from "styled-components";

const Button = styled.button`
  min-width: 130px;
  height: 3rem;
  text-transform: uppercase;
  background-color: transparent;
  color: ${props => props.theme.red};
  border: 1px solid ${props => props.theme.red};
  border-radius: 3px;
`

const ButtonSecondary = props => (
  <Button type="button">{props.children}</Button>
)

export default ButtonSecondary;
