import {Helmet} from "react-helmet";
import Scorecard from "./components/Scorecard/Scorecard";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Golf Scorecard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Helmet>
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">Golf Scorecard</h1>
        <h2 className="text-xl font-bold mb-4">Garons 9 Hole</h2>
        <Scorecard />
      </div>
    </>
  );
}

export default App;
