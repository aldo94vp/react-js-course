import React, { useEffect, useState } from "react"
import styled from "styled-components"
import genres from './genres';

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
  .input-field {
    width: 100%;
    border: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    padding: 15px;
    position: relative;
    color: ${props => props.theme.white};
  }
`
const Input = styled.input`
  height: 3rem;

  &:not(.has-placeholder):not(:placeholder-shown) + label {
    opacity: 0;
  }

  &[type="date"] {
    &::-webkit-calendar-picker-indicator {
      opacity: 0;
    }
    background: url(./assets/calendar-icon.png) 99% 50% no-repeat;
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    background-color: transparent;
    padding: 0;
    cursor: not-allowed;
  }
`
const TextArea = styled.textarea`
  resize: vertical;
  height: auto;
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
  height: auto;
  appearance: none;
`

const InputField = props => {

  const {
    value,
    type,
    label,
    placeholder,
    name,
    className,
    disabled,
    width,
    onChange
  } = props;

  const initialValue = value !== 'undefined' ? value : '';
  const [ newValue, setNewValue ] = useState(initialValue);

  if (type === 'select' && !Array.isArray(newValue)) setNewValue([]);

  useEffect(() => {
    (onChange && newValue.length > 0) && onChange(newValue);
  }, [newValue, onChange]);

  const handleChange = e => {
    setNewValue(e.target.value);
  }

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
          {
            'select': 
              <Select 
                placeholder={placeholder ? placeholder : ' '} 
                className={['input-field', placeholder && 'has-placeholder']} 
                type={type} 
                multiple="multiple"
                name={name}
                value={newValue}
                onChange={handleChange}
              >
                {
                  genres.map( (g, idx) =>
                    <option key={`genre-${idx}`}>{g}</option>
                  )
                }
              </Select>,
            'textarea':
              <TextArea
                placeholder={placeholder ? placeholder : ' '} 
                className={['input-field', placeholder && 'has-placeholder']} 
                name={name}
                value={newValue}
                onChange={handleChange} 
              />
          }[type] ||
            <Input 
              placeholder={placeholder ? placeholder : ' '} 
              className={['input-field', placeholder && 'has-placeholder']} 
              type={type} 
              name={name}
              disabled={disabled}
              value={newValue}
              onChange={handleChange} 
            />
        }
        <Label htmlFor={name} className={className}>{label}</Label>
      </InputContainer>
    </>
  )
}

export default InputField;
