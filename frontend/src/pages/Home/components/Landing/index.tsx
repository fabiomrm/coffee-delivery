import heroImg from '../../../../assets/hero-image.png'
import { LandingContainer, LandingContent } from "./styles";

export function Landing() {
  return (
    <LandingContainer>
      <LandingContent className="container">
        <div>
          teste
        </div>
        <img src={heroImg} alt="" />
      </LandingContent>
    </LandingContainer>

  )
}