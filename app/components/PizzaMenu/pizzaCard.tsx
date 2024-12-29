import { pizzaObject } from "app/data/types/pizzaMenu"

export function PizzaCard({ pizza, onSoldOut }: { pizza: pizzaObject, onSoldOut: () => void }) {
  return (
    <div className={`pizza + ${pizza.soldOut ? "sold-out" : ""}`} >
      <img src={pizza.photoName} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <p>{pizza.soldOut ? "Sold Out" : pizza.price}</p>
        <button onClick={onSoldOut} disabled={pizza.soldOut}>Order Pizza</button>
      </div>
    </div >
  )
}
