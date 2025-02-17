function Header() {
  return (
    <header>
      <nav>
        <a href="/">{/* <img>logo</img> */}</a>
        <ul>
          <li>Products</li>
          <li>Solutions</li>
          <li>Services</li>
          <li>Help Center</li>
          <li>Pricing</li>
        </ul>
        <button>log in</button> {/* it's shouldn't be button */}
      </nav>
    </header>
  );
}

export default Header;
