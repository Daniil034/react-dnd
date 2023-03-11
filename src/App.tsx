import { DragDropContext } from "react-beautiful-dnd";
import { Sidebar } from "./components/Sidebar";
import { DisplayBlock } from "./components/DisplayBlock";
import { OperatorsBlock } from "./components/OperatorsBlock";
import { DigitsBlock } from "./components/DigitsBlock";
import { EqualButtonBlock } from "./components/EqualButtonBlock";
import "./App.css";
import { Canvas } from "./components/Canvas";

const sidebar = [
  <DisplayBlock />,
  <OperatorsBlock />,
  <DigitsBlock />,
  <EqualButtonBlock />,
];

function App() {
  const onDragEnd = (result: any) => {};

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="droppable-area">
          <Sidebar droppableId="1">
            <DisplayBlock />
            <OperatorsBlock />
            <DigitsBlock />
            <EqualButtonBlock />
          </Sidebar>
          <Canvas droppableId="2" />
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
