import React from "react"
import styled from "styled-components"

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  &.is-select {
    &::after {
      content: " ";
      width: 0.8rem;
      height: 0.5rem;
      background-color: ${props => props.theme.red};
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
      position: absolute;
      right: 10px;
      bottom: 1.2rem;
    }
  }
  &.has-placeholder {
    display: flex;
    flex-direction: column-reverse;
    & > label {
      position: relative;
      padding-left: 0;
      opacity: 1;
    }
  }
`
const InputName = styled.input`
  width: 100%;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  padding: 15px;
  position: relative;
  height: 3rem;
  color: ${props => props.theme.white};
  &:not(.has-placeholder):not(:placeholder-shown) + label {
    opacity: 0;
  }

  &[type="date"] {
    &::-webkit-calendar-picker-indicator {
      opacity: 0;
    }
    background: url(./calendar-icon.png) 99% 50% no-repeat;
    background-color: rgba(255, 255, 255, 0.2);
  }
`
const Label = styled.label`
  position: absolute;
  width: 100%;
  padding: 15px;
  top: 0;
  left: 0;
  bottom: 0;
  opacity: 0.5;
  transition: opacity 0.15s;
  
  &.red-label {
    text-transform:uppercase;
    color: ${props => props.theme.red};
    font-weight: 500;
  }
`

const Select = styled.select`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 3px;
  padding: 15px;
  position: relative;
  height: 3rem;
  color: ${props => props.theme.white};
  appearance: none;
`


export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    const { value } = this.props;
    value && this.setState({value: value});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { type, label, placeholder, name, className, width } = this.props;
    
    return(
      <>
        <InputContainer className={
          [placeholder && 'has-placeholder',
          type === 'select' && 'is-select']
        } style={
          {width}
        }
        >
          {
            type === 'select' ?
              <Select 
                placeholder={placeholder ? placeholder : ' '} 
                className={placeholder && 'has-placeholder' } 
                type={type} 
                name={name}>
                <option>Action</option>
                <option>Comedy</option>
                <option>Suspense</option>
              </Select> 
              :
              <InputName 
                placeholder={placeholder ? placeholder : ' '} 
                className={placeholder && 'has-placeholder' } 
                type={type} 
                name={name}
                value={this.state.value}
                onChange={this.handleChange} />
          }
          <Label htmlFor={name} className={className}>{label}</Label>
        </InputContainer>
      </>
    )
  }
}

export default Input;
