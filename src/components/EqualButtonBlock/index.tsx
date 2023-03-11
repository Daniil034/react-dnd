import { CalculatorBlock } from "../CalculatorBlock";
import "./style.scss";

export function EqualButtonBlock() {
  return (
    <CalculatorBlock id='equalButton' index={4}>
      <div className="equal-button">=</div>
    </CalculatorBlock>
  );
}
