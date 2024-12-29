import type { MetaFunction } from "@remix-run/node";

import MyApp from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Index" },
    { name: "description" }
  ];
};

export default function Index() {
  return (
    <MyApp />
  )
}
