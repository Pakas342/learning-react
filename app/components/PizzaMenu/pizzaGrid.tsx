import { useState } from "react"

import { pizzaObject } from "app/data/types/pizzaMenu"
import { PizzaCard } from "./pizzaCard"
import { pizzaData } from "app/data/data"

export default function PizzaGrid() {
  const [pizzas, setPizzas] = useState<pizzaObject[]>(pizzaData)

  function setSoldOut(name: string) {
    setPizzas(pizzas.map(pizza =>
      pizza.name === name
        ? { ...pizza, soldOut: true }
        : pizza
    ))
  }

  return (
    <div className="pizzas">
      {pizzas.map(pizza =>
        <PizzaCard pizza={pizza} onSoldOut={() => setSoldOut(pizza.name)} />
      )}
    </div>
  )
}
