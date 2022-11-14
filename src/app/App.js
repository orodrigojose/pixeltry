import { ColorContextProvider } from "./shared/contexts/ColorContext";
import { ToolContextProvider } from "./shared/contexts/ToolContext";
import { useState } from "react";

import Editor from "./pages/Editor";
import Footer from "./shared/components/Footer";
import SelectSize from "./pages/SelectSize";

export default function App() {
  const [width, setWidth] = useState(16);
  const [height, setHeight] = useState(16);
  const [draw, setDraw] = useState(false);

  return (
    <div className="App">
      <ColorContextProvider>
        <ToolContextProvider>
          {draw ? (
            <Editor
              width={width}
              height={height}
              setDraw={setDraw}
              draw={draw}
            />
          ) : (
            <SelectSize
              setDraw={setDraw}
              width={width}
              height={height}
              setWidth={setWidth}
              setHeight={setHeight}
            />
          )}
          {!draw && <Footer />}
        </ToolContextProvider>
      </ColorContextProvider>
    </div>
  );
}
