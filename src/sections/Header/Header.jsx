import HeaderImage from "../../assets/header-image.webp";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.container}>
      <div className={s.content}>
        <h3>Leading Career Counsellors</h3>
        <h2>
          Explore India’s Top Distance Colleges for{" "}
          <span>Personal Development</span>{" "}
        </h2>
        <p>Unleash Your Hidden Potential</p>
        <input className={s.searchBar} />
      </div>
      <img src={HeaderImage} alt="Header" className={s.headerImage} />
      <div className={s.partner}></div>
    </header>
  );
};

export default Header;
