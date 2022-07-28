import { ShoppingCart } from "phosphor-react";
import { Coffee } from "../../data/coffees";
import { AmountInput } from "../AmountInput";
import { RegularText, TitleText } from "../Typograhy";
import { CoffeeCardContainer, Description, Name, Tags, CardFooter, AddCartWrapper } from "./styles";

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1659916800&Signature=E3001oUkq6tCa1tM7S1TOU1A9YSoso5ECgj0-ZCfrQ5NyCUY37wPdP~c0KRQ7Bhs1kYYOEfUi1duBXfiZPmyfN9dmi147nC9nAwW~8Ec5oxOCBhMGcLl-MUPvAoUzAUNu9qfY7B~UHNJonniQ8CsLSCygKdMM5sIJc6fZ4oY2hndf8dd~hSzT9kzoHbifn48rEGltkjNVkl5PuAoedoHiNlSIwrKNMeKdjEe5iayCYSAkFYDcr~2fO-Jj8ZkZustJZQxZSDVKGFhjfDbovv-t2c0WSKfz4-Jl2Ev3~Xkj~INA4~WrzXaKu3~dqYWroYKcEtdifXJdY9kOhkW7SmADg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={coffee.id + tag}>{tag}</span>
        ))}

      </Tags>
      <Name>{coffee.name}</Name>
      <Description>
        {coffee.description}
      </Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">{coffee.price}</TitleText>
        </div>
        <AddCartWrapper>
          <AmountInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}