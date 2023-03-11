import { Droppable } from "react-beautiful-dnd";
import "./style.scss";

interface Props {
  children: React.ReactNode;
  droppableId: string;
}

export function Sidebar({ children, droppableId }: Props) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div className="sidebar" ref={provided.innerRef}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
