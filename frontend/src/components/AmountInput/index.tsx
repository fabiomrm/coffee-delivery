import { Minus, Plus } from "phosphor-react";
import { AmountInputContainer, IconWrapper } from "./styles";

interface AmountInputProps {
  size?: 'small' | 'medium'
}

export function AmountInput({ size = 'medium' }: AmountInputProps) {
  return (
    <AmountInputContainer size={size}>
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