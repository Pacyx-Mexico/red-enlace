import styled from "styled-components";

export const Partners = () => {
  return (
    <PartnersSection>
      <div className="container d-none d-lg-block">
        <h4 className="pb-5 text-start ">Socios comerciales</h4>
        <div className="d-flex justify-content-between align-items-center mt-5 pt-5">
          <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/logoGapper.png" alt="Logo Gapper" className="w-auto h-50"/>
          <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/Grupo_arfi_delfin_400x400.png" alt="Logo arfi Delfín" className="w-auto h-50"/>
          <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/Logo_Brunet_200A.png" alt="Logo Brunet" className="w-auto h-50"/>
          <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/logo-securus.png" alt="Logo securus" className="w-auto h-50"/>
        </div>
      </div>

      <div className="container d-lg-none">
        <h4 className="pb-5 text-center">Socios comerciales</h4>
        <div className="mx-auto d-flex justify-content-around align-items-center mt-5 pt-5 h-25">
          <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/logoGapper.png" alt="LogoGapper" className="socios-img_size_mb"/>
          <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/Grupo_arfi_delfin_400x400.png" alt="Logo arfi Delfín" className="socios-img_size_mb" />
          <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/Logo_Brunet_200A.png" alt="Logo Brunet" className="socios-img_size_mb" />
          <img src="https://elementos-red-enlace.s3.amazonaws.com/Landing/logo-securus.png" alt="LogoSecurus" className="socios-img_size_mb"/>
        </div>
      </div>
    </PartnersSection>
  )
}

const PartnersSection = styled.section`
  height: 50rem;
  padding-top: 5rem;
  padding-bottom: 5rem;

  .socios-img_size_mb {
    width: 11rem;
    height: auto;
  }

 @media (min-width: 576px) {
  .socios-img_size_mb {
    width: 21rem;
    height: auto;
  }
 }

 @media (min-width: 768px) {

 }
`