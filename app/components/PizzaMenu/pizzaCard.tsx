export interface pizzaObject {
  name: string,
  ingrediients: string,
  price: number,
  photoName: string,
  soldOut: boolean
}

export function PizzaCard({ pizza, onSoldOut }: { pizza: pizzaObject, onSoldOut: () => void }) {
  return (
    <div className={`pizza + ${pizza.soldOut ? "sold-out" : ""}`} >
      <img src={pizza.photoName} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingrediients}</p>
        <p>{pizza.soldOut ? "Sold Out" : pizza.price}</p>
      </div>
      <button onClick={onSoldOut} disabled={pizza.soldOut}>Order Pizza</button>
    </div >
  )
}
