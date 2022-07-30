import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";
import { useFormContext } from 'react-hook-form';





export function AddressForm() {

  const { register } = useFormContext();

  return (
    <AddressFormContainer>
      <Input placeholder="Cep" className="cep" type="number" {...register('cep')} />
      <Input placeholder="Rua" className="street" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </AddressFormContainer>
  )
}