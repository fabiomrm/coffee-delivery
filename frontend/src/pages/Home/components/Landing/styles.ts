import styled from "styled-components";
import introBackgroundImg from '../../../../assets/intro-background.png'

export const LandingContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${introBackgroundImg}) no-repeat center`};
  background-size: cover;
`


export const LandingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`