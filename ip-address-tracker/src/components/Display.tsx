import * as React from "react";
import "../styles/display.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IDisplayProps {}

const Display: React.FunctionComponent<IDisplayProps> = (props) => {
  return (
    <div className="display">
      <h1>Display</h1>
    </div>
  );
};

export default Display;
