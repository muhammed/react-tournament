import styled from 'styled-components'

export const InputContainer = styled.div`
  margin-bottom: 15px;
`

export const Label = styled.div`
  color: #1b2024;
  margin-bottom: 10px;
`

export const ErrorMessage = styled.div`
  color: #f44336;
  margin-top: 5px;
`

export const TextInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  background: #fff;
  border: 1px solid #ccc;
  border-color: ${({ hasError }) => (hasError ? '#f44336' : '#ccc')};
  border-radius: 7px;
  min-height: 50px;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? '#f44336' : '#0933d8')};
    box-shadow: 0px 2px 4px #10122738;
  }
`
