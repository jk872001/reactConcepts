import { restroList } from "./data"

function App() {
return (
    <div className="App">
      {
        restroList.map((restro) => {
          return <Restrorant {...restro} />
        }

        )
      }

    </div>
  );
}


const Restrorant = ({ strCategoryThumb, strCategory }) => {
  return (
    <div className="restro-card">
      <img width='200px' height='200px' src={strCategoryThumb} alt="food" />
      <h1>{strCategory}</h1>
    </div>
  )
}
export default App;
