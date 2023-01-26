import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Twirl as Hamburger } from "hamburger-react";
import { Link as LinkRouter } from "react-router-dom";
import {
  ContainerNav,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MobileIcon,
} from "../styles/navbar.elements";
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink
var scroller = Scroll.scroller;


export default function Navbar({ type }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const inicio = () => {
    scroll.scrollToTop();
    setShowMobileMenu(false);
  };

  const scrollToSection = () => {
    scroll.scrollTo(
      'productos', {
        containerId: 'productos'
      }
    )
  }

  return (
    <ContainerNav>
      <Wrapper>
        <LogoContainer>
          <LinkRouter to="/">
            <img
              src="https://elementos-red-enlace.s3.amazonaws.com/Nueva+Imagen+Red+Enlace/logoRedEnlace.webp"
              alt="Logo Red Enlace"
              onClick={inicio}
            />
          </LinkRouter>
          <MobileIcon
            open={showMobileMenu}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Hamburger
              toggled={showMobileMenu}
              toggle={setShowMobileMenu}
              size={28}
            />
          </MobileIcon>
        </LogoContainer>

        <Menu open={showMobileMenu}>
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {/* <LinkRouter
              to="#productos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="color-white"
            >
              Productos
            </LinkRouter> */}
            <MenuItem onClick={scrollToSection}>
              <Link 
                to="productos" 
                spy={false} 
                hashSpy={true}
                smooth={true} 
                offset={-150}
                duration={500} 
                className='color-white' 
                activeClass='some-active-class'
              >
                Productos
              </Link>
            </MenuItem>
          </MenuItem>
          <MenuItem onClick={inicio}>
            <LinkRouter to="/reclamacion-siniestros">Siniestros</LinkRouter>
          </MenuItem>
          <MenuItem onClick={inicio}>
            <LinkRouter to="/">Agentes</LinkRouter>
          </MenuItem>
          <MenuItem onClick={inicio}>
            <LinkRouter to="/">Clientes</LinkRouter>
          </MenuItem>
          <MenuItem onClick={inicio}>
            <LinkRouter to="/facturacion">Facturación</LinkRouter>
          </MenuItem>
          {/* <MenuItem onClick={inicio}>
            <LinkRouter to="/">Inicio</LinkRouter>
          </MenuItem>
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <LinkRouter
              to="productos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="color-white"
            >
              Productos
            </LinkRouter>
          </MenuItem>
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <LinkRouter to="/siniestro" className="color-white">
              Siniestros
            </LinkRouter>
          </MenuItem>
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <LinkRouter
              to="beneficios"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="color-white"
            >
              Agentes
            </LinkRouter>
          </MenuItem>
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <LinkRouter
              to="testimonios"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="color-white"
            >
              Clientes
            </LinkRouter>
          </MenuItem> */}
          {/* <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <LinkRouter
              to="beneficios"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="color-white"
            >
              Facturación
            </LinkRouter>
          </MenuItem> */}
        </Menu>
      </Wrapper>
    </ContainerNav>
  );
}
