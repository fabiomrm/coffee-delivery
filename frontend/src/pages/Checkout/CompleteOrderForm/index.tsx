import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../components/Typograhy";
import { SectionTitle } from "../SectionTitle";
import { FormSectionContainer } from "../styles";
import { AddressForm } from "./AddressForm";
import { CompleteOrderFormContainer } from "./styles";

export function CompleteOrderForm() {

  const { colors } = useTheme();

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber o seu pedido"
          icon={<MapPinLine size={22} color={colors["brand-yellow"]} />}
        />

        <AddressForm />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}