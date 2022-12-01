import React, { useState, useEffect, StrictMode, useRef, ButtonHTMLAttributes } from "react";
import { BUTTON_SLIDE_ACTION } from "../../@types/enum";
import SectionsWrap from "../../common/components/SectionsWrap";
import { randomItemInArray } from "../../common/utils/Functions";
import Banner from "../../components/Banner";

const sourceBannerData = [
  "https://photo-zmp3.zmdcdn.me/banner/e/c/1/8/ec1833c273c71877506c416aaad727c3.jpg",
  "https://photo-zmp3.zmdcdn.me/banner/8/c/5/a/8c5a81d264df9e0aefd93f6189ea5774.jpg",
  "https://photo-zmp3.zmdcdn.me/banner/e/4/1/8/e418129da1c39241e4c177f8ee2a4a83.jpg",
  "https://photo-zmp3.zmdcdn.me/banner/1/0/f/2/10f2991943b2254eb7132d45ba27840c.jpg",
  "https://photo-zmp3.zmdcdn.me/banner/c/c/0/a/cc0afc07e3cdad2691350916e7f85a71.jpg",
  "https://photo-zmp3.zmdcdn.me/banner/0/6/e/8/06e8cfd345e31d24b1d4b2721a0ee082.jpg",
];

const MainSection = () => {
  // deaclare state , ref
  const [srcBanner, setSrcBanner] = useState(sourceBannerData[0]);
  const shuffelButtonRef: any = useRef(null);
  const [bannerAnimation, setBannerAnimation] = useState(false);

  // hooks
  useEffect(() => {
    const interval = setInterval(() => {
      if (shuffelButtonRef) {
        shuffelButtonRef.current.click();
        makeFadeAnimation();
      }
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // functions
  const shuffelSrcBanner = () => {
    setSrcBanner(sourceBannerData[randomItemInArray(sourceBannerData)]);
  };

  const makeFadeAnimation = () => {
    setBannerAnimation(true);
    setTimeout(() => setBannerAnimation(false), 1000);
  };

  const handleSwitchBanners = (action: string) => {
    makeFadeAnimation();
    const currentIndex = sourceBannerData.findIndex((item) => item === srcBanner);
    switch (action) {
      case BUTTON_SLIDE_ACTION.PREVIOUS:
        currentIndex === 0
          ? setSrcBanner(sourceBannerData[sourceBannerData.length - 1])
          : setSrcBanner(sourceBannerData[currentIndex - 1]);
        break;
      case BUTTON_SLIDE_ACTION.NEXT:
        currentIndex === sourceBannerData.length - 1
          ? setSrcBanner(sourceBannerData[0])
          : setSrcBanner(sourceBannerData[currentIndex + 1]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-[65%] bg-[#081018] border-r border-zinc-500">
      <SectionsWrap title="trending postcast">
        <div className="flex justify-center items-center mt-6">
          <Banner srcBanner={srcBanner} onClick={handleSwitchBanners} animation={bannerAnimation} />
        </div>
      </SectionsWrap>
      <button ref={shuffelButtonRef} className="hidden" onClick={shuffelSrcBanner}></button>
    </div>
  );
};

export default MainSection;
