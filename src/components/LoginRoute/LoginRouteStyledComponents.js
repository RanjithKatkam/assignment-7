import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 40px;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f4f4f4;
`

export const FormContainer = styled.form`
  display: flex;
  height: 60%;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 30px;
  width: 30%;
  border-radius: 10px;
  box-shadow: 17px 17px 17px lightgray;
  @media (max-width: 768px) {
    width: 90%;
  }
`
export const InputContainer = styled.div`
  display: ${props => props.display};
  flex-direction: ${props => props.direction};
  width: ${props => props.width};
  margin-top: ${props => props.margin};
`
export const LoginButton = styled.button`
  width: 100%;
  padding: 8px 0px;
  background-color: #3b82f6;
  border-radius: 6px;
  cursor: pointer;
  color: #ffffff;
  border: none;
  outline: none;
  font-family: 'Bree Serif';
  font-weight: 500;
  font-size: 15px;
  margin-top: 50px;
`
