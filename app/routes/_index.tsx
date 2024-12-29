import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Index" },
    { name: "description" }
  ];
};

export default function Index() {
  return (
    <h1> Hellow World! </h1>
  )
}
