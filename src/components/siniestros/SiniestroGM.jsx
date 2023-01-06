import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";

export const SiniestroGM = () => {

  return (
    <>
      <Navbar />
      <SiniestroGMContainer>
        <div className="container-fluid mt-5">
          <div className="d-flex row">
            <div className="col-md-3">
              icon
            </div>
            <div className="col-md-9">
              text and button
            </div>
          </div>
        </div>
      </SiniestroGMContainer>
      <Footer />
    </>
  )
}

const SiniestroGMContainer = styled.section`
  height: 90rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
`
