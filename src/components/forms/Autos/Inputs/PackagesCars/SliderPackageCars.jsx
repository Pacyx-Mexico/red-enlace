import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import CardPackageCards from "./CardPackageCards";

function SliderPackageCars({ navigation, slides, handleChangePackage, data }) {
  return (
    <ContSlider>
      <Swiper
        slidesPerView={slides}
        spaceBetween={2}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={navigation}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <CardPackageCards
            title="Básico"
            cost="$750.00"
            cost2="$10,000.00"
            onChange={handleChangePackage}
            card1={true}
            data={data}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardPackageCards
            title="Standar"
            cost="$1,400.00"
            cost2="$20,000.00"
            onChange={handleChangePackage}
            data={data}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardPackageCards
            title="Premium"
            cost="$2,000.00"
            cost2="$30,000.00"
            onChange={handleChangePackage}
            data={data}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardPackageCards
            title="Gold"
            cost="$2,650.00"
            cost2="$40,000.00"
            onChange={handleChangePackage}
            data={data}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardPackageCards
            title="Black"
            cost="$3,350.00"
            cost2="$50,000.00"
            onChange={handleChangePackage}
            data={data}
          />
        </SwiperSlide>
      </Swiper>
    </ContSlider>
  );
}

const ContSlider = styled.section`
  width: 90%;
  margin: 0 auto;
  padding-left: 5rem;
  padding-bottom: 4rem;
  padding-top: 2rem;
`;

export default SliderPackageCars;
