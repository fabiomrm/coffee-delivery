import { CoffeeCard } from "../../../../components/CoffeeCard";
import { TitleText } from "../../../../components/Typograhy";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">Nossos cafés</TitleText>
      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeList>
    </OurCoffeesContainer>
  )
}