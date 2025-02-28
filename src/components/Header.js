import HeaderContent from "./HeaderContent";
import MyNavLink from "./NavLink";

function Header({ ref, isVisible }) {
  return (
    <header className="header">
      <MyNavLink />
      <HeaderContent ref={ref} isVisible={isVisible} />
    </header>
  );
}

export default Header;
