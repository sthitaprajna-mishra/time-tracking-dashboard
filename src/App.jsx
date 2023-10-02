import { useState } from "react";
import CardContainerList from "./components/CardContainerList";
import Report from "./components/Report";

function App() {
  const [choice, setChoice] = useState("weekly");

  return (
    <>
      <div className="bg-veryDarkBlue min-h-screen font-rubik xxl:flex xxl:items-center xxl:justify-center">
        <div className="md:grid md:grid-cols-12 md:mx-0 md:px-0">
          <div className="py-10 px-4 md:col-start-2 md:col-end-12 md:grid md:grid-cols-4 md:space-x-6 md:space-y-6 md:py-4 md:px-0 ">
            <Report choice={choice} setChoice={setChoice} />
            <CardContainerList choice={choice} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
