import styled from "styled-components"

const Button = styled.button`
  min-width: 130px;
  height: 3rem;
  text-transform: uppercase;
  background-color: ${props => props.theme.red};
  color: ${props => props.theme.white};
  border: none;
  border-radius: 3px;
`

const ButtonPrimary = props => (
  <Button type={props.type} onClick={props.onClick}>{props.children}</Button>
)

export default ButtonPrimary;
