function BeforeAfter() {
  return (
    <div className="main blue">
      <div className="top">
        <h1 id="bnf">Before and After</h1>
      </div>
      <div className="about">
        <div className="baBox1">
          <img
            id="backgroundImg"
            src={require("../assets/Old Kitchen.WEBP")}
            alt="of You"
          />
        </div>
        <div className="box">
          <img
            src={require("../assets/—Pngtree—big to small arrow sign_6740759.png")}
            alt="Arrows"
            id="exampleImg"
          />
        </div>
        <div className="baBox2">
          <img
            id="backgroundImg"
            src={require("../assets/image 21.png")}
            alt="of You"
          />
        </div>
      </div>
    </div>
  );
}

export default BeforeAfter;
