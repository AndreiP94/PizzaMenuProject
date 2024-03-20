import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./pizzaData";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>"Giovanni's" pizzeria</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            "Authentic italian pizza . Born in Naples, Italy, offering authentic
            flavors and traditions in every bite."
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p> Site is on maintenance. Come back later</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <li>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </li>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHour={closedHour} openHour={openHour} />
      ) : (
        <div className="order">
          <p>
            We are closed . Come back again next day between {openHour}:00 and{" "}
            {closedHour}:00
          </p>
        </div>
      )}
    </footer>
  );
}

function Order({ closedHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closedHour}:00 . Come in or order for
        home .
      </p>
      <h5>{new Date().toLocaleTimeString()}</h5>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
