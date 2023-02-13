import styled from "styled-components";

export const ContainerCotizacionAutos = styled.section`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 4rem;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    width: 86%;
  }
`;

export const CotizacionAutos__Title = styled.div`
  background-color: var(--primary-color3);
  border-radius: 1rem;
  margin-bottom: 1rem;
  margin-top: ${({ mt }) => (mt ? mt : "4rem")};

  p {
    font-size: 2.2rem;
    font-weight: 600;
    font-style: italic;
    display: flex;
    align-items: center;
    height: 5rem;
    padding: 1rem 2rem;
  }
`;

export const RowAseguradosStyle = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 9% 61% 29%;
  justify-content: space-between;

  p {
    border: 2px solid var(--primary-color3);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
    min-height: 5rem;
    width: 100%;
    padding: 0.2rem 2rem;
  }
  h6 {
    border: 2px solid var(--primary-color3);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    font-size: 2.2rem;
    min-height: 5rem;
    width: 100%;
    padding: 0.2rem 2rem;
    font-weight: 500;
  }
`;

export const Row2ColumCotizadorAutos = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 32% 67.5%;
  justify-content: space-between;

  p {
    border: 2px solid var(--primary-color3);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    padding-left: 3rem;
    font-size: 2.2rem;
    padding: 0.2rem 2rem;
    min-height: 5rem;
    width: 100%;
  }

  h5 {
    border: 2px solid var(--primary-color3);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    padding-left: 3rem;
    font-size: 2.4rem;
    font-weight: 600;

    height: 5rem;
    width: 100%;
  }
`;

export const CotizacionAdd = styled.div`
  border: 2px solid var(--primary-color3);
  border-radius: 1rem;
  padding: 0.4rem 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    border: none;
    font-size: 2.2rem;
    padding: 0;
    margin: 0;
  }
  span {
    margin-right: 0.6rem;
  }
`;



export const FlexCenterBtn = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
`;
