import styled from 'styled-components'

export const TrendingVideoCardMainContainer = styled.li`
  list-style-type: none;
  height: 350px;
  width: 90%;
  margin: 20px 0px;
  box-shadow: ${props => props.shadow};
  display: flex;
  background-color: ${props => props.bgColor};
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`
export const TrendingTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Arial Narrow Bold', sans-serif;
  font-size: 25px;
  margin-top: 0px;
  margin-left: 10px;
  width: 95%;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
`

export const TrendingVideoDetails = styled.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  flex-direction: column;
`

export const TrendingChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 10px;
  font-weight: 500;
  @media (max-width: 768px) {
    margin-bottom: 6px;
    margin-top: 8px;
  }
`
