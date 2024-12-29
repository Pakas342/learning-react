const SERVICE_HOURS = {
  oppening: 11,
  closing: 22
};

export function MenuTitle() {
  return (
    <h2>Our Menu</h2>
  )
};

export function MenuSubtitle() {
  return (
    <p>Authentic Italian Cousine. 6 Pizzas to choose from, all from our stone oven. All organic, all delicious.</p>
  )
};

export function Menu() {
  return (
    <>
      <MenuTitle />
      <MenuSubtitle />
    </>
  )
};

