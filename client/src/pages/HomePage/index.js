import React, { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import { shopAPI } from "../../util/shopAPI";
import Hero from "../../components/Hero/Hero";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ShopCard from "../../components/Card/ShopCard";
import VallartasPic from "../../images/ts1.jpg";
import restaurants from "../../shopSeed.json";
import HomepageText from "../../components/HomepageText/HomepageText";
import useDebounce from "../../util/useDebounce";
// import GoogleMapReact from "google-map-react";
import useGeoLocation from "../../util/useGeolocation";
import "./style.css";
import axios from "axios";
// import { filter } from "lodash";

function HomePage() {
  // const history = useHistory();
  // const auth = useAuth();
  const location = useGeoLocation();
  // const API_key = process.env.REACT_APP_google_API_key;

  // HandleDeleteFunction can be referenced from the "Friends" class activity in react
  const [restaurantArray, setRestaurantArray] = useState(restaurants);
  const [search, setSearch] = useState("");

  // console.log(location.coordinates.lat)

  const debouncedSearchTerm = useDebounce(search, 400);
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  // const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coordinates.lat},${location.coordinates.lng}&key=${API_key}`

  // const currentShop = restaurantArray[randomShop];
  const currentShop = restaurantArray[1];
  const avg =
    restaurantArray[1].rating.reduce((a, b) => a + b) /
    restaurantArray[1].rating.length;

  // Call Back-End to populate restaurant array
  useEffect(() => {
    shopAPI()
      .then((res) => {
        setRestaurantArray(res.reverse());
      })
      .then()
      .catch(console.error());
  }, []);

  // Generate random integer to plug into index to get random shop for featured card
  function getRandom(maximum) {
    return Math.floor(Math.random() * maximum);
  }

  // Handle search bar entry
  function handleSearchChange(event) {
    const value = event.target.value;
    setSearch(value);
  }

  // Filtered Array from search bar input
  const filteredArray = restaurantArray.filter((restaurant) => {
    const shopSearch = debouncedSearchTerm.toLocaleLowerCase();
    const lowercaseShopName = restaurant.shopName.toLocaleLowerCase();
    const location = restaurant.location.toLocaleLowerCase();
    const featuredFood = restaurant.featuredFood.toLocaleLowerCase();

    if (
      lowercaseShopName.includes(shopSearch) ||
      location.includes(shopSearch) ||
      featuredFood.includes(shopSearch)
    ) {
      return true;
    } else if (
      !lowercaseShopName.includes(shopSearch) ||
      !location.includes(shopSearch) ||
      !featuredFood.includes(shopSearch)
    ) {
      return false;
    }
  });

  function renderShops(filteredArray) {
    if (filteredArray.length > 0) {
      return filteredArray.map((restaurant) => (
        <ShopCard
          id={restaurant._id}
          src={VallartasPic}
          imagePath={restaurant.imagePath}
          address={restaurant.address}
          avgRating={restaurant.rating.reduce((a, b) => a + b) / restaurant.rating.length}
          description={restaurant.description}
          shopName={restaurant.shopName}
          location={restaurant.location}
          featuredFood={restaurant.featuredFood}
        />
      ));
    } else {
      return (
        <div className="container-fluid">
          <h4>Oops! We couldn't find any results for {search}...</h4>
        </div>
      );
    }
  }

  const searchByArea = async () => {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coordinates.lat},${location.coordinates.lng}&key=AIzaSyB4q2B5RB2qh88hU6wjtD09ze7NRt3xIaY`
    );
    const areaName = res.data.results[0].address_components[2].short_name;
    setSearch(areaName);
    // if (
    //   areaName === "Santee" ||
    //   areaName === "El Cajon") { setSearch("Downtown") }
    // else if (
    //   areaName === "La Jolla" ||
    //   areaName === "South Park") { setSearch("Mexico") }
  };


  return (
    <div className="container-fluid">
      <Hero>Welcome to Best Mex SD!</Hero>
      <main className="col-12">
        <section className="page-title-text m-3">
          <HomepageText />
        </section>
        <h3>This Week's Featured Shop:</h3>
        <section className="row m-3 featured-control">
          <div className="col-lg-12">
            <FeaturedCard
              id={currentShop._id}
              ratingArray={currentShop.rating}
              src={VallartasPic}
              imagePath={currentShop.imagePath}
              shopName={currentShop.shopName}
              menuURL={currentShop.menuURL}
              description={currentShop.description}
              rating={avg.toFixed(1)}
              numOfRatings={currentShop.rating.length}
              address={currentShop.address}
              location={currentShop.location}
              phone={currentShop.phone}
              featuredFood={currentShop.featuredFood}
            />
          </div>
        </section>
        <hr />
        <section className="taco-filter-search">
          <h2>Searching for a specific Taco Shop?</h2>
          <div className="row">
            <div className="col-lg-12">
              <SearchForm
                search={search}
                handleSearchChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <button
                type="button"
                className="btn btn-secondary btn-lg shop-filter-button"
                onClick={searchByArea}
              >
                Click to see Taco Shops in your Area
              </button>
            </div>
          </div>
        </section>

        <section className="row m-3 shopcard-control shopBox d-flex justify-content-around">
          {renderShops(filteredArray)}
        </section>
      </main>
    </div>
  );
}

export default HomePage;
