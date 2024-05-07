function Projects() {
  return (
    <div className="main white">
      <div className="top">
        <h1>What we have done</h1>
        <hr />
      </div>
      <div className="about">
        <div className="box">
          <img
            id="exampleImg"
            src={require("../assets/Bathroom.jpg")}
            alt="of bathroom"
          />
          <ul>
            <li>Year : 2023</li>
            <li>New Bathroom</li>
          </ul>
        </div>
        <div className="box">
          <img
            id="exampleImg"
            src={require("../assets/Portico.JPEG")}
            alt="of Portico"
          />
          <ul>
            <li>Year: 2022</li>
            <li>Portico Refresh</li>
          </ul>
        </div>
        <div className="box">
          <img
            id="exampleImg"
            src={require("../assets/Closet.JPEG")}
            alt="of Closet"
          />
          <ul>
            <li>Year: 2022</li>
            <li>New Closet Doors</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
