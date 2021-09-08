import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>Expense Income Tracker</div>
      <div className={styles.navLinks}>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/signup">
          <a>SignUp</a>
        </Link>
        <Link href="/logout">
          <a>Logout</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
