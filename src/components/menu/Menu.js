import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#index">Hem</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Om mig</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
              <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </div>
  );
}