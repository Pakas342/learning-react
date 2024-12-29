import PizzaMenuHeader from "app/components/pizzaMenu/header"
import { Menu } from "app/components/pizzaMenu/menu"
import PizzaGrid from "app/components/pizzaMenu/pizzaGrid"

export default function PizzaMenuPage() {
  return (
    <div className="menu">
      <PizzaMenuHeader />
      <div className="h-4" />
      <Menu />
      <PizzaGrid />
    </ div>
  )
}
