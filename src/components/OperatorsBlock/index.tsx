import { InputButton } from "../InputButton";
import { CalculatorBlock } from "../CalculatorBlock";
import { Grid } from "../Grid";

export function OperatorsBlock() {
  return (
    <CalculatorBlock id='operators' index={2}>
      <Grid columns='4'>
        <InputButton>/</InputButton>
        <InputButton>x</InputButton>
        <InputButton>-</InputButton>
        <InputButton>+</InputButton>
      </Grid>
    </CalculatorBlock>
  );
}
