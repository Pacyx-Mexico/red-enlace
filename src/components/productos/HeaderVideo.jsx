import "../../styles/productos/HeaderVideo.css";
import Button from "../Button";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function HeaderVideo({ video, title }) {
  const scrollTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* <section className="headerText">
        <h2 className="headerTitle__title">
          Devolución de deducible <span>{title}</span>
        </h2>
        <h5 className="headerTitle__subtitle">
          Para que la única recuperación por la que te preocupes{" "}
          <span>sea la tuya.</span>
        </h5>
        <div onClick={scrollTop}>
          <Link
            to="/cotizador-deducible-gastos-medicos"
            className="headerTitle__btn"
          >
            <Button text="Contratar" />
          </Link>
        </div>
        <div className="headerText__imgContainer">
        </div>
      </section> */}

      {video ? (
        <section>
          <h4 className="videoTitle mt-5 pt-5">¿Cómo funciona?</h4>
          <div className="productVideo">
            <h4 className="productVideo__videoTitle">¿Cómo funciona?</h4>
            <div className="productVideo__videoContainer"></div>
            <h5 className="productVideo__subtitle">
              *Personaliza tu protección con coberturas adicionales
            </h5>
            <div onClick={scrollTop} className="d-none d-md-block">
              <Link to="/cotizador-deducible-gastos-medicos">
                <Button text="Contratar"/>
              </Link>
            </div>

            <div onClick={scrollTop} className="d-md-none">
              <Link to="/cotizador-deducible-gastos-medicos">
                <Button text="Contratar"/>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default HeaderVideo;
