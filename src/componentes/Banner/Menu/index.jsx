import { Link } from "react-router-dom";
import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <Link className={styles.menuItem} to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className={styles.menuItem} to="/formulario">
            Formulario
          </Link>
        </li>
        <li>
          <Link className={styles.menuItem} to="/sobre">
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
