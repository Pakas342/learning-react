import PizzaMenuHeader from "app/components/PizzaMenu/header"
import { Menu } from "app/components/PizzaMenu/menu"

export default function PizzaMenuPage() {
  return (
    <div className="menu">
      <PizzaMenuHeader />
      <div className="h-4" />
      <Menu />
    </ div>
  )
}
