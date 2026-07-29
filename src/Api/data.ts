import camV4 from "../icons/camv4.png";
import whitecamV4 from "../icons/whitecamv4.png";
import greycamV4 from "../icons/greycamv4.png";
import blackcamV4 from "../icons/blackcamv4.png";
import campanv3 from "../icons/campanv3.png";
import whitecampanv3 from "../icons/whitecampanv3.png";
import blackcampanv3 from "../icons/blackcampanv3.png";
import camfloodlightv2 from "../icons/camfloodlightv2.png";
import blackcamfloodlightv2 from "../icons/blackcamfloodlightv2.png";
import whitecamfloodlightv2 from "../icons/whitecamfloodlightv2.png";
import duocam from "../icons/duocam.png";
import campro from "../icons/campro.png";
import whitecampro from "../icons/whitecampro.png";
import blackcampro from "../icons/blackcampro.png";

const data = {
  section: "Cameras",
  items: [
    {
      id: 1,
      title: "Wyze Cam v4",
      desc: "The clearest Wyze Cam ever made.",
      img: camV4,
      oldPrice: "$35.98",
      newPrice: "$27.98",
      badge: "22%",
      colors: [
        { id: 1, img: whitecamV4, name: "White" },
        { id: 2, img: greycamV4, name: "Gray" },
        { id: 3, img: blackcamV4, name: "Black" },
      ],
    },
    {
      id: 2,
      title: "Wyze Cam Pan v3",
      desc: "360° pan and 180° tilt security camera.",
      img: campanv3,
      oldPrice: "$39.98",
      newPrice: "$34.98",
      badge: "12%",
      colors: [
        { id: 4, img: whitecampanv3, name: "White" },
        { id: 5, img: blackcampanv3, name: "Black" },
      ],
    },
    {
      id: 3,
      title: "Wyze Cam Floodlight v2",
      desc: "2K floodlight camera with a 160° wide-angle view for your garage.",
      img: camfloodlightv2,
      oldPrice: "$89.98",
      newPrice: "$69.98",
      badge: "22%",
      colors: [
        { id: 6, img: whitecamfloodlightv2, name: "White" },
        { id: 7, img: blackcamfloodlightv2, name: "Black" },
      ],
    },
    {
      id: 4,
      title: "Wyze Duo Cam Doorbell",
      desc: "Two cameras. Two views. Double the porch protection.",
      img: duocam,
      oldPrice: "",
      newPrice: "$69.98",
      badge: "",
      colors: [],
    },
    {
      id: 5,
      title: "Wyze Battery Cam Pro",
      desc: "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.",
      img: campro,
      oldPrice: "",
      newPrice: "$89.98",
      badge: "",
      colors: [
        { id: 8, img: whitecampro, name: "White" },
        { id: 9, img: blackcampro, name: "Black" },
      ],
    },
  ],
};

export default data;
