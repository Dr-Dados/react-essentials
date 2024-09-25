import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png";
const Header = () => {
  const description =
    "Fundamental React concepts you will need for almost any app you are going to build!";
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{description}</p>
    </header>
  );
};

export default Header;
