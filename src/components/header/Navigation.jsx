import NavigateDrops from "./drops/NavigateDrops";

function Navigation() {
  const navigateDrops = [
    {
      id: 1,
      title: "Clothes",
      path: "/clothes",
      drops: [
        { label: "Office Fashion", path: "?category=office fashion" },
        { label: "Evening Wear", path: "?category=Evening Wear" },
        { label: "Dresses", path: "?category=Dresses" },
        { label: "Tops", path: "?category=Tops" },
        { label: "Bottom", path: "?category=Bottom" },
        { label: "Swimsuit", path: "?category=Swimsuit" },
      ],
    },
    {
      id: 2,
      title: "Bags",
      path: "/bags",
      drops: [
        { label: "Louis Vuitton", path: "?bagbrand=Louis Vuitton" },
        { label: "Chanel", path: "?bagbrand=Chanel" },
        { label: "Gucci", path: "?bagbrand=Gucci" },
        { label: "Dior", path: "?bagbrand=Dior" },
        { label: "Calvin Klein", path: "?bagbrand=Calvin Klein" },
        { label: "Zara", path: "?bagbrand=Zara" },
      ],
    },
    {
      id: 3,
      title: "Accessories",
      path: "/accessories",
      drops: [
        { label: "Hats", path: "?accessories=Hats" },
        { label: "Hair Accessories", path: "?accessories=Hair Accessories" },
        { label: "Belt", path: "?accessories=Belt" },
        { label: "necklaces & bracelets", path: "?accessories=Necklaces-Bracelets" },
      ],
    },
    {
      id: 4,
      title: "Shoes",
      path: "/shoes",
      drops: [
        { label: "Shoes", path: "/summer-sales" },
        { label: "Winter Sales", path: "/winter-sales" },
      ],
    },
    {
      id: 5,
      title: "Sales",
      path: "/sales",
      drops: [
        { label: "Summer Sales", path: "?saletype=Summer Sales" },
        { label: "Winter Sales", path: "?saletype=Winter Sales" },
      ],
    },
    {
      id: 6,
      title: "Help Center",
      path: "/help-center",
      drops: [
        { label: "Deliever Issues", path: "?issues=Deliever Issues" },
        { label: "Product Issues", path: "?issues=Product Issues" },
        { label: "Contact Admin", path: "?issues=Contact Admin" },
        {label:"Reviews", path:"?issues=Reviews"}
      ],
    },
  ];
  return (
    <nav>
      <NavigateDrops navigateData={navigateDrops} />
      
    </nav>
  );
}
export default Navigation;
