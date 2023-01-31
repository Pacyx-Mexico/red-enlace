import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Twirl as Hamburger } from "hamburger-react";
import { Link as LinkRouter, NavLink } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
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
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

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
          <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)} className="d-none d-md-block">
            <MenuItem onClick={scrollToSection}>
              <Link 
                to="productos" 
                spy={false} 
                hashSpy={true}
                smooth={true} 
                offset={-90}
                duration={500} 
                className='color-white' 
                activeClass='some-active-class'
              >
                <Dropdown
                   show={show}
                   onMouseEnter={showDropdown} 
                   onMouseLeave={hideDropdown}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Productos
                  </Dropdown.Toggle>

                  <Dropdown.Menu show={show}>
                    <Dropdown.Item onClick={inicio} as={LinkRouter} to="/deducible-gastos-medicos">Devolución Gastos Médicos</Dropdown.Item>
                    <Dropdown.Item onClick={inicio} as={LinkRouter} to="/deducible-autos">Devolución Autos</Dropdown.Item>
                    <Dropdown.Item onClick={inicio} as={LinkRouter} to="/enlace">Enlaces</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Link>
            </MenuItem>
          </MenuItem>

          <Accordion className="d-md-none">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="py-4">Productos</Accordion.Header>
              <div className="d-flex flex-column gap-5 align-items-center">
              <Accordion.Body onClick={inicio} as={LinkRouter} to="/deducible-gastos-medicos">
                    Devolución Gastos Médicos
                </Accordion.Body>
                <Accordion.Body onClick={inicio} as={LinkRouter} to="/deducible-autos">
                    Devolución Autos
                </Accordion.Body>
                <Accordion.Body onClick={inicio} as={LinkRouter} to="/enlace">
                    Enlaces
                </Accordion.Body>
              </div>
            </Accordion.Item>
          </Accordion>

          <MenuItem onClick={inicio}>
            <LinkRouter to="/reclamacion-siniestros">Siniestros</LinkRouter>
          </MenuItem>
          <MenuItem onClick={inicio}>
            <LinkRouter to="/">Mi portal</LinkRouter>
          </MenuItem>
          <MenuItem onClick={inicio}>
            <LinkRouter to="/facturacion">Facturación</LinkRouter>
          </MenuItem>
        </Menu>
      </Wrapper>
    </ContainerNav>
  );
}