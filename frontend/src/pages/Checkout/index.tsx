import { CompleteOrderForm } from "./CompleteOrderForm";
import { SelectedCoffees } from "./SelectedCoffees";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CheckoutContainer>
  )
}