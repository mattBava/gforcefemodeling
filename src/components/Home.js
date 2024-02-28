function Home() {
  return (
    <div className="main white">
      <div className="top">
        <h3 id="title">G-Force Remodeling</h3>
        <hr />
      </div>
      <div className="left">
        <img id="homeImg" src={require("../assets/Deck.JPG")} alt="Deck" />
      </div>
      <div className="right">
        <h1>Remodel Your</h1>
        <h1>Home</h1>
        <a href="#contact">
          <button className="getQuote">Request a Quote</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
