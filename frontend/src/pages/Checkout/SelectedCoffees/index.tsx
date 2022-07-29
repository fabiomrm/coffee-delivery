import { TitleText } from "../../../components/Typograhy";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { SummarySection } from "../SummarySection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>
      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />

        <SummarySection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}