import styled from 'styled-components'

export const VideoCardMainContainer = styled.li`
  list-style-type: none;
  height: 380px;
  width: 250px;
  margin: 20px;
  box-shadow: ${props => props.shadow};
  border-radius: 8px;
  background-color: ${props => props.bgColor};
  @media (max-width: 768px) {
    margin: 20px 0px;
    height: 280px;
    width: 150px;
  }
`

export const GamingTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 6px;
  width: 95%;
`
export const GamingVideoDetails = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
`

export const GamingWatching = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 6px;
  font-weight: 500;
  margin-top: 4px;
`
