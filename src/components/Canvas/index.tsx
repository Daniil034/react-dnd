import React from "react";
import { Droppable } from "react-beautiful-dnd";
import "./style.scss";

interface Props {
  droppableId: string;
}

export function Canvas({ droppableId }: Props) {
  return (
    <div className="canvas">
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div className="canvas__drop" ref={provided.innerRef}>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
