import MostPickedOne from "./components/MostPickedOne.jsx";
import MostPickedTwo from "./components/MostPickedTwo.jsx";
import ImageTwo from "./assets/img2.png"

function App() {
  const rowOne = [
    {
      img: ImageTwo,
      price: 50,
      name: "Montigo Resort",
      address: "Rio De Janeiro, Brazil",
    },
    {
      img: ImageTwo,
      price: 60,
      name: "Montigo Resort",
      address: "Rio De Janeiro, Brazil",
    },
    {
      img: ImageTwo,
      price: 70,
      name: "Montigo Resort",
      address: "Rio De Janeiro, Brazil",
    },
    {
      img: ImageTwo,
      price: 80,
      name: "Montigo Resort",
      address: "Rio De Janeiro, Brazil",
    },
  ]
  return ( <div className="App">
    <div className="flex flex-col items-center  space-y-4">
      <MostPickedOne />
      {rowOne.map((data) => (
        <MostPickedTwo
          img={data.img}
          price={data.price}
          name={data.name}
          address={data.address}
        /> 
      ))}
    </div>
  </div>
  );
}


export default App;
