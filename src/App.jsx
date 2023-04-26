import calculate from "./colorArrays.util";
import { EachTD } from "./EachTd";
import NavBarApp from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBarApp />

      <div className="select"></div>
      <div className="body">
        {calculate('hsl').map((colors, i) => <div className="line" key={i}>
          {colors.map((color, j) => <EachTD key={j} color={color} code={`${i}/${j}`}/>)}
        </div>)}
      </div>
    </div>
  );
}

export default App;
