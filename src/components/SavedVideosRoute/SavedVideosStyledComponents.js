import styled from 'styled-components'

export const SavedMainContainer = styled.div`
  height: 100vh;
  background-color: ${props => props.bgColor};
`
export const SavedSubContainer = styled.div`
  height: 88%;
  display: flex;
`
export const VideoItemContainer = styled.ul`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media (max-width: 768px) {
    padding: 10px;
    align-items: center;
  }
`
export const EmptyViewContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoSavedHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Bree Serif';
  font-size: 20px;
`

export const NoSavedPara = styled.p`
  color: ${props => props.color};
  font-family: 'Serif';
  font-size: 20px;
  text-align: center;
`
export const SavedVideosHeading = styled.h1`
  color: ${props => props.color};
  font-weight: bold;
  font-size: 40px;
  font-family: 'Bree Serif';
  margin-left: 30px;
  @media (max-width: 768px) {
    font-size: 19px;
  }
`
