import styled from 'styled-components'

export const GamingMainContainer = styled.div`
  height: 100vh;
  background-color: ${props => props.bgColor};
`
export const GamingSubContainer = styled.div`
  height: 88%;
  display: flex;
`
export const VideoItemContainer = styled.ul`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding-right: 35px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media (max-width: 768px) {
    padding: 5px;
    justify-content: space-around;
  }
`

export const ContentContainer = styled.div`
  height: 100%;
  overflow: auto;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const GamingFailureMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  padding-bottom: 64px;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const GamingFailureHeading = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
`
export const GamingFailureDescription = styled.p`
  text-align: center;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  width: 90%;
  max-width: 288px;
  line-height: 1.3;
`
export const GamingRetryButton = styled.button`
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
export const GamingHeading = styled.h1`
  color: ${props => props.color};
  font-weight: bold;
  font-size: 40px;
  font-family: 'Bree Serif';
  margin-left: 30px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`
