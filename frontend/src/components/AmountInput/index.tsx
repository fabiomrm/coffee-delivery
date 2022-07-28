import { Minus, Plus } from "phosphor-react";
import { AmountInputContainer, IconWrapper } from "./styles";

export function AmountInput() {
  return (
    <AmountInputContainer>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value="1" />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </AmountInputContainer>
  )
}