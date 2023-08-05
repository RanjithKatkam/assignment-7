import styled from 'styled-components'

export const VideoCardMainContainer = styled.li`
  list-style-type: none;
  height: 350px;
  width: 350px;
  margin: 20px 0px;
  box-shadow: ${props => props.shadow};
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Title = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 0px;
  margin-left: 10px;
  width: 95%;
`
export const VideoDetails = styled.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
`

export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 10px;
  font-weight: 500;
`
