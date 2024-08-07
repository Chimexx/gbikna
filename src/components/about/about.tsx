import { AboutContainer, AboutEntry } from "./about.style";
import { Flex, Text, colors } from "../../style";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import AboutImg from "../../assets/about.jpg";
import AboutImg2 from "../../assets/about2.jpg";
import { IoReceipt } from "react-icons/io5";
import { PiCube } from "react-icons/pi";
import { BiImages } from "react-icons/bi";
import { FiShield } from "react-icons/fi";

const services = [
  "Payment Applications",
  "Risk Analysis Using Artificial Intelligence",
  "Bills Payment Engine",
  "Data Analytics",
  "Terminal Management System",
  "Agency Banking Services",
  "Secured Military Web Applications",
  "Card Switch",
  "Transport Fare Solutions and Traffic Management Solutions",
];

const services2 = [
  {
    text: "Payment Application",
    subText:
      "EMV Application for Point of Sale and Mobile Point of Sale (Windows and Linux based)",
    icon: <IoReceipt />,
  },
  {
    text: "Global Security Standards",
    subText:
      "Global Card Scheme Certification (MTIP and ADVT) for all our terminals.",
    icon: <PiCube />,
  },
  {
    text: "Supported Transactions",
    subText: "ICC, NFC, MAG SWIPE, QR CODE, USSD and WALLET ENGINES.",
    icon: <BiImages />,
  },
  {
    text: "Third Party Integrations",
    subText:
      "Custom Implementation with Global Card Switches (Postillion and Transware Online).",
    icon: <FiShield />,
  },
];

const About = () => {
  return (
    <AboutContainer id="about" className="observed-element">
      <AboutEntry className="group1">
        <Flex flexdirection="column" gap="0.5rem" className="text">
          <Text
            color={colors.text}
            fontSize="1.5rem"
            fontWeight="600"
            fontFamily="Poppins">
            Gbikna Limited.
          </Text>
          <Text color={colors.text}>We offer the following services:</Text>
          <Flex flexdirection="column" gap="0.5rem">
            {services.map((service) => {
              return (
                <Flex key={service} alignItems="center" gap="1rem">
                  <IoCheckmarkDoneSharp
                    color={colors.primary}
                    style={{ minWidth: "1.5rem" }}
                  />
                  <Text color={colors.text}>{service}</Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
        <Flex className="image">
          <img src={AboutImg} alt="" />
        </Flex>
      </AboutEntry>
      <AboutEntry>
        <Flex className="image">
          <img src={AboutImg2} alt="" />
        </Flex>
        <Flex flexdirection="column" gap="1.5rem" className="text">
          {services2.map((service) => {
            return (
              <Flex
                key={service.text}
                alignItems="flex-start"
                gap="1rem"
                className="service2">
                {service.icon}
                <Flex flexdirection="column" gap="5px" alignItems="flex-start">
                  <Text color={colors.text}>{service.text}</Text>
                  <Text fontSize="0.9rem" color={colors.grey}>
                    {service.subText}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </AboutEntry>
    </AboutContainer>
  );
};

export default About;
