import styled from "styled-components"

const Button = styled.button`
  min-width: 130px;
  height: 3rem;
  text-transform: uppercase;
  background-color: ${props => props.theme.red};
  color: ${props => props.theme.white};
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

const ButtonPrimary = props => (
  <Button {...props}>{props.children}</Button>
)

export default ButtonPrimary;
