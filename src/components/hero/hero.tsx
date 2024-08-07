import { FeatureCard, FeatureWrapper, HeroContainer } from "./hero.style";
import { Flex, Text, colors } from "../../style";
import { MdStorefront, MdOutlineReceiptLong } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { BiCheckShield } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";

const features = [
  { icon: <MdStorefront />, name: "In-store Shopping" },
  { icon: <SiSimpleanalytics />, name: "Free Data Analytics" },
  { icon: <BiCheckShield />, name: "Free Offline Version" },
  { icon: <MdOutlineReceiptLong />, name: "Online Receipts" },
  { icon: <FiDatabase />, name: "Take Your Shop Online" },
];

const Hero = () => {
  return (
    <HeroContainer id="home" className="observed-element">
      <Flex alignItems="center" justifyContent="center" margin="0">
        <Text fontFamily="Poppins" fontWeight="600" fontSize="4rem">
          Tella
        </Text>
        <Text
          fontFamily="Poppins"
          fontWeight="600"
          fontSize="4rem"
          color={colors.primary}>
          .
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" flexdirection="column">
        <Text fontSize="2rem" fontFamily="Raleway" textalign="center">
          start Local, go Global
        </Text>
        <Text fontSize="2rem" fontFamily="Raleway" textalign="center">
          Retail Solution for all Businesses
        </Text>
      </Flex>
      <FeatureWrapper>
        {features.map((feature) => {
          return (
            <FeatureCard key={feature.name}>
              {feature.icon}
              <Text fontWeight="500" fontSize="1.2rem" textalign="center">
                {feature.name}
              </Text>
            </FeatureCard>
          );
        })}
      </FeatureWrapper>
    </HeroContainer>
  );
};

export default Hero;
