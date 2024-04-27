import React from "react";

function Form(props) {
  return (
    <div className="form">
      <form
        id="form"
        action="https://public.herotofu.com/v1/33560560-db31-11ee-afc9-dd7ac292df82"
        method="post"
        accept-charset="UTF-8"
      >
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
  );
}

export default Form;
