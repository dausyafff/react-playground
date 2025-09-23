import { useContext } from "react";
import { TemaContext } from "./TemaContext";

function Header() {
  const tema = useContext(TemaContext);
  return <p>Tema saat ini: {tema}</p>;
}

export default Header;
