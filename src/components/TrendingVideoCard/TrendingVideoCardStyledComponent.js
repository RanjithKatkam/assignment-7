import styled from 'styled-components'

export const TrendingVideoCardMainContainer = styled.li`
  list-style-type: none;
  height: 350px;
  width: 90%;
  margin: 20px 0px;
  box-shadow: 6px 13px 6px 9px rgba(0, 0, 0, 0.3);
  display: flex;
  background-color: #fff;
`
export const TrendingTitle = styled.p`
  color: #313131;
  font-family: 'Arial Narrow Bold', sans-serif;
  font-size: 25px;
  margin-top: 0px;
  margin-left: 10px;
  width: 95%;
`

export const TrendingVideoDetails = styled.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  flex-direction: column;
`

export const TrendingChannelName = styled.p`
  color: #606060;
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 10px;
  font-weight: 500;
`
