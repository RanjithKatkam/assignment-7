import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: ${props => props.bgColor};
`
export const Heading = styled.h1`
  color: white;
`

export const HomeRouteMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  width: 100%;
`

export const PopupContainer = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  @media (max-width: 768px) {
    background-color: lightcyan;
    background-image: none;
  }
`
export const VideosContainer = styled.div`
  height: 100%;
  width: 100%;
`
export const Input = styled.input`
  height: 100%;
  width: 280px;
  padding-left: 10px;
  border: none;
  outline: none;
  @media (max-width: 768px) {
    width: 80%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  height: 30px;
  border: 1px solid #7e858e;
  outline: none;
  margin: 30px 0px 0px 39px;
  @media (max-width: 768px) {
    width: 90%;
    margin-left: 12px;
  }
`

export const ItemContainer = styled.ul`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 35px;
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
`

export const FailureMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  padding-bottom: 64px;
  width: 100%;
`

export const FailureHeading = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
`
export const FailureDescription = styled.p`
  text-align: center;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  width: 90%;
  max-width: 288px;
  line-height: 1.3;
`
export const RetryButton = styled.button`
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
export const NoVideosHeading = styled.h1`
  color: #000;
  font-family: 'Bree Serif';
  font-size: 20px;
`

export const NoVideosPara = styled.p`
  color: #383838;
  font-family: 'Serif';
  font-size: 20px;
`
export const EmptySearchViewContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
