import { Button } from "../../../components/Button";
import { RegularText } from "../../../components/Typograhy";
import { SummarySectionContainer } from "./styles";

export function SummarySection() {
  return (
    <SummarySectionContainer>
      <div>
        <RegularText size="s">Total de Itens</RegularText>
        <RegularText>R$ 29,70</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
        <RegularText weight="700" color="subtitle" size="l">R$ 33,20</RegularText>
      </div>
      <Button text="confirmar pedido" />
    </SummarySectionContainer>
  )
}