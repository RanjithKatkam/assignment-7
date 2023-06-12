import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  height: 12%;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const SubContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16%;
`
