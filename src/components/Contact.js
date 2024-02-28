function Contact() {
  return (
    <div className="main blue" id="contact">
      <div className="top">
        <h1>Feel Free to contact us to get a free quote.</h1>
        <hr />
      </div>
      <div className="form">
        <form id="form">
          <div className="div1">
            <label for="fName">First Name</label>
            <br />
            <input type="text" name="fName" id="half" />
          </div>
          <div className="div2">
            <label for="lName">Last Name</label>
            <br />
            <input type="text" name="lName" id="half" />
          </div>
          <div className="div3">
            <label for="email">Email</label> <br />
            <input type="text" name="email" id="half" />
          </div>
          <div className="div4">
            <label for="phone">Phone Number</label>
            <br />
            <input type="text" name="phone" id="half" /> <br />
          </div>
          <div className="div5">
            <label for="adr">Street Address</label>
            <br />
            <input type="text" name="adr" />
          </div>
          <div className="div6">
            <label for="city">City</label>
            <br />
            <input type="text" name="city" id="thr" />
          </div>
          <div className="div7">
            <label for="state">State</label> <br />
            <input type="text" name="state" id="thr" />
          </div>
          <div className="div8">
            <label for="zip">Zipcode</label> <br />
            <input type="text" name="zip" id="thr" />
          </div>
          <div className="div9">
            <label for="project">Describe Your Project</label> <br />
            <textarea name="project" cols="90" rows="10"></textarea>
          </div>
          <button className="getQuote" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="right">
        <h3>Email</h3>
        <a href="mailto:gforceremodelingnj@gmail.com">
          gforceremodelingnj@gmail.com
        </a>
        <br />
        <h3>Social</h3>
        <a href="https://www.instagram.com/g_force_remodeling_nj/">
          <img
            src={require("../assets/icons8-instagram-50.png")}
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
