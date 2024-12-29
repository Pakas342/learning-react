import type { MetaFunction } from "@remix-run/node";

import 'app/style/index.css'
import PizzaMenuPage from "app/components/PizzaMenu/pizzaMenuPage"


export const meta: MetaFunction = () => {
  return [
    { title: "Index" },
    { name: "description" }
  ];
};

export default function Index() {
  return (
    <PizzaMenuPage />
  )
}
