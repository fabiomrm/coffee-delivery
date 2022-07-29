import { TitleText } from "../../../components/Typograhy";
import { useCart } from "../../../contexts/CartContext";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { SummarySection } from "../SummarySection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {

  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems.map((cartItem) => (

          <CoffeeCartCard key={cartItem.id} cartItem={cartItem} />
        ))}
        <SummarySection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}