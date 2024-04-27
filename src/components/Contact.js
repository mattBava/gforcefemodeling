import Form from "./Form";

function Contact() {
  return (
    <div className="main blue" id="contact">
      <div className="top">
        <h1>Feel Free to contact us to get a free quote.</h1>
        <hr />
      </div>
      <Form />
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
