import { useState, useEffect } from "react";
import {
  Button,
  Link,
  Logo,
  MobileNav,
  NavBarContainer,
  NavLinks,
  Overlay,
} from "./navbar.style";
import LogoMark from "../../assets/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Flex } from "../../style";
import useInView from "../utils/useInView";

const links = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#features", text: "Features" },
  { href: "#contact", text: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const inViewId = useInView();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    if (scrollTop > windowHeight * 0.1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inViewId) {
      setCurrentPage(`#${inViewId}`);
    }
  }, [inViewId]);

  const handleLink = (link: string) => {
    setCurrentPage(link);
    setShowNav(false);
  };

  return (
    <NavBarContainer scrolled={scrolled}>
      <Logo>
        <img src={LogoMark} alt="" />
      </Logo>
      <NavLinks>
        {links.map(({ href, text }, index) => (
          <Link
            onClick={() => handleLink(href)}
            current={href === currentPage}
            key={index}
            href={href === "#home" ? "#content" : href}>
            {text}
          </Link>
        ))}
      </NavLinks>
      <Flex alignItems="center" gap="1rem" width="fit-content">
        <Button width=" 8rem">Signup</Button>
        <div className="menu" onClick={() => setShowNav(!showNav)}>
          <IoMenuSharp color="white" fontSize="1.8rem" />
        </div>
      </Flex>
      {showNav && <Overlay onClick={() => setShowNav(false)} />}
      <MobileNav showNav={showNav}>
        <div className="close" onClick={() => setShowNav(false)}>
          <MdClose color="#262626" fontSize="1.8rem" />
        </div>
        {links.map(({ href, text }, index) => (
          <Link
            onClick={() => handleLink(href)}
            current={href === currentPage}
            key={index}
            href={href === "#home" ? "#content" : href}>
            {text}
          </Link>
        ))}
      </MobileNav>
    </NavBarContainer>
  );
};

export default Navbar;
