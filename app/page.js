import Image from "next/image";
import "./styles/style.scss";
import Carousel from "./componts/Carousel";
import AboutUs from "./componts/AboutUs";
import OurWorks from "./componts/OurWorks";
import Testimonials from "./componts/Testimonials";
import LatestPostsSlider from "./componts/LatestPostsSlider";
import Clients from "./componts/Clients";

export default function Home() {
  return (
    <>
      <Carousel />
      <AboutUs />
      <OurWorks />
      <Testimonials />
      <LatestPostsSlider />
      <Clients />
    </>
  );
}
