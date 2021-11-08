import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./assets/imgs/logo.png";
import Categories from "./components/Categories";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetchData");
        const response = await axios.get("https://deliveroo-bilbo.herokuapp.com/");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <section className="restaurant">
          <div>
            <div>
              <h1>{data.restaurant.name}</h1>
              <p>{data.restaurant.description}</p>
            </div>

            <img src={data.restaurant.picture} />
          </div>
        </section>
        <section className="main-content">
          {/* Composants principaux */}
          <div className="categories">
            <Categories data={data} />
          </div>
          <div className="panier">
            <button>Valider mon panier</button>
            <p>Votre panier est vide</p>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
