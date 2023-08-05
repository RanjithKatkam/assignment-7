import styled from 'styled-components'

export const SideBarMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 15%;
  background-color: ${props => props.bgColor};
  padding-top: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`
export const Headings = styled.p`
  color: ${props => props.Color};
  font-family: 'Bree Serif';
  font-weight: 500;
  font-size: 19px;
  margin-left: 10px;
  margin-bottom: ${props => props.margin};
`
export const ContactHeading = styled.p`
  color: ${props => props.color};
  font-family: 'Bree Serif';
  font-weight: 500;
  font-size: 19px;
  margin-bottom: 20px;
`
export const Div = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const Para = styled.p`
  color: ${props => props.color};
  font-family: serif;
  font-weight: 500;
  font-size: 17px;
  width: 95%;
`
