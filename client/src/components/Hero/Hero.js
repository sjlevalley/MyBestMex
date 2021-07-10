// import { NavLink } from "react-router-dom";
// import style from "./style.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import taco1 from "./taco1.jpg";
// import taco2 from "./taco2.jpg";
import taco3 from "./taco3.jpg";
import taco4 from "./taco4.jpg";
import taco5 from "./taco5.jpg";

function Hero({ children }) {
  return (
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        autoWidth: true,
        speed: 400,
        focus: "center",
        padding: 0,
      }}
    >
      <SplideSlide>
        <img src={taco3} alt="taco shop hero" />
      </SplideSlide>
      <SplideSlide>
        <img src={taco1} alt="taco hero close up" />
      </SplideSlide>
      {/* <SplideSlide>
        <img src={taco2} alt="taco hero close up number two" />
      </SplideSlide> */}
      <SplideSlide>
        <img src={taco4} alt="taco hero close up number three" />
      </SplideSlide>
      <SplideSlide>
        <img src={taco5} alt="taco hero close up number four" />
      </SplideSlide>
    </Splide>
  );
}
export default Hero;
