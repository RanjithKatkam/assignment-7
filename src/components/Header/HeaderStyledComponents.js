import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  height: 12%;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media (max-width: 768px) {
    padding: 10px 20px;
    // background-color: grey;
  }
`

export const SubContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 16%;
  @media (max-width: 768px) {
    width: 60%;
  }
`
