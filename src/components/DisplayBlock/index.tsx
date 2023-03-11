import { CalculatorBlock } from "../CalculatorBlock";
import "./style.scss";

interface Props {
  input?: number;
}

export function DisplayBlock({ input = 0 }: Props) {
  return (
    <CalculatorBlock id='display' index={1}>
      <div className="display">{input}</div>
    </CalculatorBlock>
  );
}
