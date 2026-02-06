import { Outlet, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "./layout.css"

export default function Layout() {
  const { t } = useTranslation();
  return (
    <div className="main-container">
      <header className="header">

        <LanguageSwitcher />
        <nav className="navigation">
          <NavLink to="/">{t("nav.home")}</NavLink>
          <NavLink to="/about">{t("nav.about")}</NavLink>
          <NavLink to="/contact">{t("nav.contact")}</NavLink>
        </nav>

      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
