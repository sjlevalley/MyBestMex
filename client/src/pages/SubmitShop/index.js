import axios from "axios";
import React, { useState } from "react";



// import { useAuth } from "../../util/auth";

// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function SubmitShopPage() {
  // const auth = useAuth();
  // return <h1>Hello, {auth.user.username}!</h1>;



  const [name, setName] = useState("Steve's Test Shop");
  const [imagePath, setImagePath] = useState("");
  const [shopLocation, setshopLocation] = useState("El Cajon");
  const [shopAddress, setshopAddress] = useState("555 Test St.");
  const [shopState, setshopState] = useState("CA");
  const [shopZip, setshopZip] = useState(92020);
  const [shopPhone, setshopPhone] = useState(555 - 555 - 5555);
  const [shopDescription, setshopDescription] = useState("This is a Test Description");
  const [shopReviews, setshopReviews] = useState(["This is a Test Review"]);
  const [shopRating, setshopRating] = useState([5]);
  const [shopmenuURL, setshopmenuURL] = useState("https://bestmexsd.com");
  const [shopfeaturedFood, setshopfeaturedFood] = useState("Burritos");
  const [file, setFile] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData()
    data.append("name", name);
    data.append("file", file);
    data.append("location", shopLocation);
    data.append("address", shopAddress);
    data.append("state", shopState);
    data.append("zip", shopZip);
    data.append("city", "San Diego");
    data.append("phone", shopPhone);
    data.append("description", shopDescription);
    data.append("reviews", shopReviews);
    data.append("rating", shopRating);
    data.append("menuURL", shopmenuURL);
    data.append("featuredFood", shopfeaturedFood);
    axios.post('/api/tacoShops', data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  // const handleInputChange = (event) => {
  //   let name = event.target.name;
  //   setFormState({
  //     ...formState,
  //     [name]: event.target.value,
  //   });
  //   console.log(event.target.value)
  // };


  function entrySuccess() {
    if (name && shopLocation.length > 1) {
      // window.alert(location)
    } else {
      window.alert("Need More Info")
    }
  }



  return (
    <div id="submitshop-page" className="container">
      <div className="row justify-content-center ">
        <div className="col-sm-12 col-md-8 col-lg-8 animate__animated animate__fadeIn">
          <h2>Submit A Taco Shop to Our Site!</h2>
          <form id="submitshop-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
              <div className="form-group row">
                {/* <label htmlFor="shopName">Restaurant Name:</label> */}
                <div className="col-sm-12 submitshop-form-inner">
                  <input
                    type="text"
                    className="form-control"
                    onChange={event => setName(event.target.value)}
                    name="shopName"
                    id="shopName"
                    placeholder="Enter the Taco Shop name here"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="form-group row" encType="multipart/form-data">
                {/* <label htmlFor="shopName">Restaurant Name:</label> */}
                <label className="col-sm-12 submitshop-form-inner" htmlFor="file">Have a Pic from this shop? Upload it here</label>
                <input
                  type="file"
                  accept=".jpg"
                  name="file"
                  className="form-control-file"
                  onChange={event => {
                    const file = event.target.files[0];
                    setFile(file);
                  }}
                  id="file"
                  placeholder="Upload a photo" />
              </div>

              <div className="form-group row">
                <div className="col-sm-12 submitshop-form-inner">
                  <input
                    type="text"
                    className="form-control"
                    onChange={event => setshopLocation(event.target.value)}
                    name="location"
                    id="shopLocation"
                    placeholder="What part of San Diego is the new taco shop in?"
                    autoComplete="off"
                  />
                </div>
              </div>


              {/* ####### Dropdown Test Area ########## */}
              {/* ####### Dropdown Test Area ########## */}
              {/* ####### Dropdown Test Area ########## */}

              {/* <div>
                <select className="form-control">
                  <optgroup label="">
                    <option>Downtown</option>
                    <option>Carmel Valley</option>
                    <option>City Heights</option>
                    <option>Clairemont</option>
                    <option>College Area</option>
                  </optgroup>
                  <optgroup label="">
                    <option>Downtown</option>
                    <option>Flashlight</option>
                    <option>Toilet Paper</option>
                  </optgroup>
                </select>
              </div> */}

              {/* ####### Dropdown Test Area ########## */}
              {/* ####### Dropdown Test Area ########## */}
              {/* ####### Dropdown Test Area ########## */}



              <div className="form-group row">
                {/* <label
                  htmlFor="shopAddress1"
                  className="col-sm-2 col-form-label"
                >
                  Address Line 1
                </label> */}
                <div className="col-sm-12 submitshop-form-inner">
                  <input
                    type="text"
                    className="form-control"
                    onChange={event => setshopAddress(event.target.value)}
                    name="address"
                    id="shopAddress1"
                    placeholder="Address"
                    autoComplete="off"
                  />
                </div>
              </div>
              {/* <div className="form-group row">
                <label
                  htmlFor="shopAddress2"
                  className="col-sm-2 col-form-label"
                >
                  Address Line 2
                </label>
                <div className="col-sm-12 submitshop-form-inner">
                  <input
                    type="text"
                    className="form-control"
                    id="shopAddress2"
                    placeholder="Address Line 2"
                    autoComplete="off"
                  />
                </div>
              </div> */}
              <div className="form-group row">
                {/* <label htmlFor="shopState" className="col-sm-2 col-form-label">
                  State
                </label> */}
                <div className="col-sm-12 submitshop-form-inner">
                  <input
                    type="text"
                    className="form-control"
                    id="shopState"
                    placeholder="State"
                    autoComplete="off"
                    onChange={event => setshopState(event.target.value)}
                    name="State"
                    value="CA"
                    disabled="disabled"
                  />
                  {/* <select id="zip" name="zip">
                    <option value="California">California</option>
                  </select> */}
                </div>
              </div>
              <div className="form-group row">
                {/* <label
                  htmlFor="shopZipCode"
                  className="col-sm-2 col-form-label"
                >
                  Zip Code
                </label> */}
                <div className="col-sm-3 submitshop-form-inner">
                  <input
                    type="text"
                    className="form-control"
                    onChange={event => setshopZip(event.target.value)}
                    name="zip"
                    id="shopZipCode"
                    placeholder="Zip Code"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="form-group row">
                {/* <label
                  htmlFor="shopPhoneNumber"
                  className="col-sm-2 col-form-label"
                >
                  Phone #
                </label> */}
                <div className="col-sm-6 submitshop-form-inner">
                  <input
                    type="tel"
                    className="form-control"
                    id="shopPhoneNumber"
                    onChange={event => setshopPhone(event.target.value)}
                    name="phone"
                    placeholder="Phone: (123) 456-7890"
                    autoComplete="off"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    maxLength="12"
                  />
                </div>
              </div>
              <hr />
              <div className="form-group row">
                {/* <label
                  htmlFor="shopPhoneNumber"
                  className="col-sm-2 col-form-label"
                >
                  Phone #
                </label> */}
                <div className="col-sm-12 submitshop-form-inner">
                  <label htmlFor="rating">
                    Please leave a short shop description:
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    onChange={event => setshopDescription(event.target.value)}
                    name="description"
                    id="shopReview"
                    placeholder="Give us some info on this Taco Shop! Location, pricing, parking, featured items, anything!"
                    autoComplete="off"
                  />
                  <br />
                  <label htmlFor="rating">Leave a review:</label>
                  <textarea
                    type="text"
                    className="form-control"
                    onChange={event => setshopReviews(event.target.value)}
                    name="reviews"
                    id="shopReview"
                    placeholder="Leave the first review!"
                    autoComplete="off"
                  />
                  <div className="rating-control">
                    <label htmlFor="rating">Give this shop a rating:</label>
                    <select
                      name="rating"
                      onChange={event => setshopRating(event.target.value)}
                      id="rating"
                    >
                      <option value="1">1 Star</option>
                      <option value="2">2 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="5">5 Stars</option>
                    </select>
                  </div>
                  <hr />
                  <div className="shop-url-control">
                    <label htmlFor="rating">Link to online menu:</label>
                    <input
                      type="url"
                      id="url"
                      onChange={event => setshopmenuURL(event.target.value)}
                      name="menuURL"
                      placeholder="https://bestmexsd.com"
                      pattern="https://.*"
                      size="200"
                    />
                  </div>
                  <div
                    className="featured-food-control"
                    onChange={event => setshopfeaturedFood(event.target.value)}
                  // onChange={event => window.alert(event.target.value)}
                  >
                    <label htmlFor="rating">
                      What should this shop's Featured Food be?
                    </label>
                    <div className="featured-food-inner">
                      <select className="form-select" aria-label="Default select example">
                        <option selected disabled>Choose An Option from the List Below!</option>
                        <option value="Tacos">Tacos</option>
                        <option value="Fajitas">Fajitas</option>
                        <option value="Fish Tacos">Fish Tacos</option>
                        <option value="Rolled Tacos">Rolled Tacos</option>
                        <option value="California Burrito">California Burrito</option>
                        <option value="Carne Asada Burrito">Carne Asada Burrito</option>
                        <option value="Breakfast Burrito">Breakfast Burrito</option>
                        <option value="Carne Asada Fries">Carne Asada Fries</option>
                        <option value="Quesadillas">Quesadillas</option>
                        <option value="Margaritas">Margaritas</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="form-group row justify-content-center">
                <div className="col-sm-10 ">
                  <button
                    type="submit"
                    onClick={entrySuccess}
                    className="btn btn-primary nav-buttons shop-submit"
                  >
                    Submit Shop
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
}

export default SubmitShopPage;
