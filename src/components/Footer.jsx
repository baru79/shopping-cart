import { useFilters } from "../hooks/useFilters.js";
import "./Footer.css";

export function Footer() {
  const { filters } = useFilters();
  return (
    <footer className="footer">
      <h4>Prueba tecnica de React</h4>
      <h5>Shopping Cart con useContext & userReducer</h5>
    </footer>
  );
}
