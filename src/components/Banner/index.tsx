import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { Navigation, Pagination } from "swiper";

const sourceBannerData = [
  "https://photo-zmp3.zmdcdn.me/banner/e/c/1/8/ec1833c273c71877506c416aaad727c3.jpg",
  "https://photo-zmp3.zmdcdn.me/banner/8/c/5/a/8c5a81d264df9e0aefd93f6189ea5774.jpg",
  "https://photo-zmp3.zmdcdn.me/banner/e/4/1/8/e418129da1c39241e4c177f8ee2a4a83.jpg",
  "https://photo-zmp3.zmdcdn.me/banner/1/0/f/2/10f2991943b2254eb7132d45ba27840c.jpg",
  "https://photo-zmp3.zmdcdn.me/banner/c/c/0/a/cc0afc07e3cdad2691350916e7f85a71.jpg",
  "https://photo-zmp3.zmdcdn.me/banner/0/6/e/8/06e8cfd345e31d24b1d4b2721a0ee082.jpg",
];

export default function App() {
  return (
    <div className="w-[900px] h-[250px]">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}>
        {sourceBannerData.map((src) => (
          <SwiperSlide key={src} className="rounded-2xl">
            <img className="rounded-xl" src={src} alt={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
