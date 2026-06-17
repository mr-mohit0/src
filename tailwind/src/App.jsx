import Card from "./assets/Card";
import ZustandStateCounter from "./assets/ZustandStateCounter";
import NaveBar from "./assets/NaveBar";
const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black">
        <NaveBar />
        <Card />
        <ZustandStateCounter />
      </div>
    </>
  );
};

export default App;
