import { HeroContainer } from "./hero.style";
import { Flex, Text, colors } from "../../style";
import { MdStorefront, MdOutlineReceiptLong } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { BiCheckShield } from "react-icons/bi";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FiDatabase } from "react-icons/fi";
import { Button } from "../navbar/navbar.style";
import { useEffect, useState } from "react";
import Shade from "../../assets/under_shade.svg";

const features = [
  { icon: <MdStorefront />, name: "Retail Solution for all Businesses." },
  { icon: <MdStorefront />, name: "In-store Shopping" },
  { icon: <SiSimpleanalytics />, name: "Free Data Analytics" },
  { icon: <BiCheckShield />, name: "Free Offline Version" },
  { icon: <MdOutlineReceiptLong />, name: "Online Receipts" },
  { icon: <FiDatabase />, name: "Take Your Shop Online" },
];

const Hero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % features.length);
        setFade(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <HeroContainer id="home" className="observed-element" fade={fade}>
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        margin="0"
        gap="1rem"
        flexdirection="column"
        className="text">
        <Flex
          alignItems="center"
          justifyContent="center"
          margin="0"
          gap="0.5rem"
          flexdirection="column">
          <Text
            fontFamily="Poppins"
            fontWeight="600"
            className="header"
            textalign="center">
            Get More Done with{" "}
            <span style={{ color: colors.deepBlue }} className="title">
              Tella.
              <img className="shade" src={Shade} alt="" />
            </span>
          </Text>
          <Text
            fontFamily="Raleway"
            textalign="center"
            className={`subText ${fade ? "fade" : ""}`}>
            {features[currentSlideIndex].name}
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          gap="1rem"
          justifyContent="center"
          className="buttons"
          margin="1rem 0 0 0">
          <Button
            padding="1rem"
            fontSize="1rem"
            width="12rem"
            className="button">
            Download Tella
          </Button>
          <Button
            background="transparent"
            padding="1rem"
            fontSize="1rem"
            className="button"
            width="12rem">
            <IoPlayCircleOutline fontSize="1.3rem" />{" "}
            <Text margin="0 0 0 1rem">View Demo</Text>
          </Button>
        </Flex>
      </Flex>
    </HeroContainer>
  );
};

export default Hero;
