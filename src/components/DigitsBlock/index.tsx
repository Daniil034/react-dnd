import { CalculatorBlock } from "../CalculatorBlock";
import { InputButton } from "../InputButton";
import { Grid } from "../Grid";

export function DigitsBlock() {
  return (
    <CalculatorBlock id='digits' index={3}>
      <Grid columns="3">
      <InputButton>7</InputButton>
      <InputButton>8</InputButton>
      <InputButton>9</InputButton>
      <InputButton>4</InputButton>
      <InputButton>5</InputButton>
      <InputButton>6</InputButton>
      <InputButton>1</InputButton>
      <InputButton>2</InputButton>
      <InputButton>3</InputButton>
      <InputButton span="2">0</InputButton>
      <InputButton>,</InputButton>
      </Grid>
    </CalculatorBlock>
  );
}
