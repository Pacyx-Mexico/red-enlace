import "../../styles/productos/HeaderVideo.css";
import Button from "../Button";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useRef } from "react";

function HeaderVideo({ video, title, url }) {
  const scrollTop = () => {
    scroll.scrollToTop();
  };

  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  };

  return (
    <>
      {video ? (
        <section>
          <h4 className="videoTitle mt-5 pt-5">¿Cómo funciona?</h4>
          <div className="productVideo">
            <h4 className="productVideo__videoTitle">¿Cómo funciona?</h4>
            <video ref={vidRef} className="productVideo__videoContainer" autoPlay loop muted>
              <source
                src={url}
                type="video/mp4"
              />
            </video>
            <h5 className="productVideo__subtitle">
              *Personaliza tu protección con coberturas adicionales
            </h5>
            <div onClick={scrollTop} className="d-none d-md-block">
              <Link to="/cotizador-deducible-gastos-medicos">
                <Button text="Contratar" />
              </Link>
            </div>

            <div onClick={scrollTop} className="d-md-none">
              <Link to="/cotizador-deducible-gastos-medicos">
                <button className="btn btn-lg btn-first rounded-pill fw-bold mx-auto w-100 opacity-75 fs-1">
                  Cotizar
                </button>
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
