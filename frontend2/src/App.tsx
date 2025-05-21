import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";



function App() {
  const [alertVisible, setAleryVisibility] = useState(false);



  return (
    <div>
      { alertVisible && <Alert onClose={()=> setAleryVisibility(false)}> an alert </Alert>}
      <Button color="primary" onClick={() => setAleryVisibility(true)} > My button </Button>
    </div>
  );
}

export default App;