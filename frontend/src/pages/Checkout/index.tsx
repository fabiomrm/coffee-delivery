import { CompleteOrderForm } from "./CompleteOrderForm";
import { SelectedCoffees } from "./SelectedCoffees";
import { CheckoutContainer } from "./styles";
import { useForm, FormProvider } from 'react-hook-form';


export type OrderData = {
  cep: string;
}

type ConfirmOrderData = OrderData;


export function Checkout() {


  const form = useForm<ConfirmOrderData>();
  const { handleSubmit } = form;

  function submitForm(data: ConfirmOrderData) {
    console.log(data)
  }


  return (
    <FormProvider {...form}>
      <CheckoutContainer className="container" onSubmit={handleSubmit(submitForm)}>
        <CompleteOrderForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  )
}