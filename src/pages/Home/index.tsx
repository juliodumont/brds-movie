import LoginCard from "./LoginCard";
import LoginImage from "../../assets/images/home-login-movieflix.svg";
import "./styles.css";

function Home() {
  return (
    <main className="main-container">
      <div className="details-container">
        <h2>Avalie Filmes</h2>
        <p>Diga o que você achou do seu filme favorito</p>
        <img src={LoginImage} alt="Login image" />
      </div>
      <LoginCard />
    </main>
  );
}

export default Home;
