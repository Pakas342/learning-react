import PizzaMenuHeader from "app/components/pizzaMenu/header"
import { Menu } from "app/components/pizzaMenu/menu"
import PizzaGrid from "app/components/pizzaMenu/pizzaGrid"
import Footer from "app/components/pizzaMenu/footer"

export default function PizzaMenuPage() {
  return (
    <div className="menu">
      <PizzaMenuHeader />
      <Menu />
      <PizzaGrid />
      <Footer />
    </ div>
  )
}
