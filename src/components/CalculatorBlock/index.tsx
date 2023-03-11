import { Draggable } from "react-beautiful-dnd";
import "./style.scss";

interface Props {
  children: React.ReactNode;
  id: string,
  index: number
}

export function CalculatorBlock({ children, id, index }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div className="calculator__block" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>{children}</div>
      )}
    </Draggable>
  );
}
