import { JSX } from "react";

// It does need to wrap the children component.
// Next.js will do that for us.
// Also, this layout works only for the `meals` folder.
function MealsLayout({ children }: { children: JSX.Element }) {
  return <>
    <p>Meals Layout</p>
    {children}
  </>;
}

export default MealsLayout;