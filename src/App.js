import "./styles.css";
import PinInput from "react-pin-input";

export default function App() {
  return (
    <div className="App">     
      <PinInput length={5} focus type="numeric" inputMode="numeric" />
     
    </div>
  );
}
