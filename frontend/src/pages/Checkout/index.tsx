import { CompleteOrderForm } from "./CompleteOrderForm";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <CompleteOrderForm />
    </CheckoutContainer>
  )
}