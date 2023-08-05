import styled from 'styled-components'

export const VideoDetailsMainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.bgColor};
`
export const VideoDetailsSubContainer = styled.div`
  height: 88%;
  width: 100%;
  display: flex;
`

export const VideoDetailsFailureMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  padding-bottom: 64px;
  width: 100%;
`

export const VideoDetailsFailureHeading = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
`
export const VideoDetailsFailureDescription = styled.p`
  text-align: center;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  width: 90%;
  max-width: 288px;
  line-height: 1.3;
`
export const VideoDetailsRetryButton = styled.button`
  color: #fff;
  font-family: 'Bree Serif';
  outline: none;
  cursor: pointer;
  border: none;
  background-color: #4f46e5;
  font-size: 18px;
  padding: 2px 19px 6px 19px;
  border-radius: 5px;
`

export const DetailsMainContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 60px;
  overflow: auto;
  @media (max-width: 768px) {
    padding: 10px;
  }
`
export const VideoTitle = styled.p`
  color: ${props => props.color};
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 22px;
  margin-top: 25px;
`
export const ViewAndData = styled.p`
  color: #606060;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`
export const ChannelDetails = styled.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
`
export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin-top: 0px;
  @media (max-width: 768px) {
    margin-left: 5px;
  }
`
export const Subs = styled.p`
  color: #909090;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`
export const Description = styled.p`
  color: #606060;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-top: 40px;
`
export const Like = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-family: 'Bree Serif';
  margin-left: 4px;
  margin-right: 10px;
`
export const Dislike = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-family: 'Bree Serif';
  margin-left: 4px;
  margin-right: 10px;
`
export const Save = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-family: 'Bree Serif';
  margin-left: 4px;
  margin-right: 10px;
`
