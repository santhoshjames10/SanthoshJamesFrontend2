import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {


  return (
    <div>
      <Button color="primary" onClick={() => console.log('Clicked')} > My button </Button>
    </div>
  );
}

export default App;