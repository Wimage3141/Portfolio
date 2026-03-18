const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
  { href: "/matter", label: "Matter" },
  { href: "/codex", label: "Codex" },
];

function Nav() {
  return (
    <header className="site-header">
      <nav aria-label="Primary">
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
