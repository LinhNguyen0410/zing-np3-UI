import MoreButton from "../../common/Atomic/MoreButton";
import SectionsWrap from "../../common/components/SectionsWrap";
import SongItem from "../../common/components/SongItem";
import { sectionWrap } from "../../common/utils/GlobalClass/globalClassStyles";
import Banner from "../../components/Banner";
import { Chart } from "../../components/Chart";
import { SONG_BLOCK_TYPE } from "../../constant";

const MainSection = () => {
  return (
    <div className="w-[100%] bg-[#081018] border-r border-zinc-500">
      {/* TRENDING */}
      <SectionsWrap title="trending postcast">
        <div className="flex justify-center items-center mt-6">
          <Banner />
        </div>
      </SectionsWrap>
      {/* RECENTLY */}

      <SectionsWrap title="recently played">
        <div className={sectionWrap}>
          <SongItem
            mode={SONG_BLOCK_TYPE.SQUARE}
            songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
            songName="The mindset mentor"
            singerName="Rob Dial"
          />
          <SongItem
            mode={SONG_BLOCK_TYPE.SQUARE}
            songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
            songName="The mindset mentor"
            singerName="Rob Dial"
          />
          <SongItem
            mode={SONG_BLOCK_TYPE.SQUARE}
            songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
            songName="The mindset mentor"
            singerName="Rob Dial"
          />
          <SongItem
            mode={SONG_BLOCK_TYPE.SQUARE}
            songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
            songName="The mindset mentor"
            singerName="Rob Dial"
          />
        </div>
      </SectionsWrap>
      {/* LIST SONG */}

      <SectionsWrap title="songs">
        <div className={sectionWrap}>
          <SongItem
            mode={SONG_BLOCK_TYPE.RECTANGLE}
            songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
            songName="The mindset mentor"
            singerName="Rob Dial"
          />
          <SongItem
            mode={SONG_BLOCK_TYPE.RECTANGLE}
            songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
            songName="The mindset mentorsssssssssssssssssssssssssss"
            singerName="Rob Dial"
          />
          <SongItem
            mode={SONG_BLOCK_TYPE.RECTANGLE}
            songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
            songName="The mindset mentor"
            singerName="Rob Dial"
          />
          <SongItem
            mode={SONG_BLOCK_TYPE.RECTANGLE}
            songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
            songName="The mindset mentor"
            singerName="Rob Dial"
          />
          <SongItem
            mode={SONG_BLOCK_TYPE.RECTANGLE}
            songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
            songName="The mindset mentor"
            singerName="Rob Dial"
          />
          <SongItem
            mode={SONG_BLOCK_TYPE.RECTANGLE}
            songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
            songName="The mindset mentor"
            singerName="Rob Dial"
          />
          <SongItem
            mode={SONG_BLOCK_TYPE.RECTANGLE}
            songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
            songName="The mindset mentor"
            singerName="Rob Dial"
          />
          <SongItem
            mode={SONG_BLOCK_TYPE.RECTANGLE}
            songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
            songName="The mindset mentor"
            singerName="Rob Dial"
          />
        </div>
      </SectionsWrap>
      <div className="flex justify-end mr-10">
        <MoreButton />
      </div>

      <SectionsWrap heading="#zingchart">
        <div className="flex justify-start items-center gap-5">
          <div className="flex flex-col gap-y-5">
            <SongItem
              mode={SONG_BLOCK_TYPE.RECTANGLE}
              songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
              songName="The mindset mentor"
              singerName="Rob Dial"
              orderlyNumber={1}
            />
            <SongItem
              mode={SONG_BLOCK_TYPE.RECTANGLE}
              songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
              songName="The mindset mentor"
              singerName="Rob Dial2"
              orderlyNumber={2}
            />
            <SongItem
              mode={SONG_BLOCK_TYPE.RECTANGLE}
              songImgSrc="https://thecentraltrend.com/wp-content/uploads/2022/01/image-1.png"
              songName="The mindset mentor"
              singerName="Rob Dial3"
              orderlyNumber={3}
            />
          </div>
          <div className="flex-1">
            <Chart />
          </div>
        </div>
      </SectionsWrap>
    </div>
  );
};

export default MainSection;
