import Image from "next/image";
import React from "react";

const NewsAndEvents = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 my-10">
      <Image
        src="/assets/news/news-text.svg"
        alt="portfolio"
        width={410}
        height={100}
        className="object-cover"
      />
      <p className="w-[653px] text-center max-md:w-full">
        we're excited to share that Nayam Films has some major announcements on
        the horizon. Stay tuned as we unveil plans for upcoming feature films
        that promise to captivate audiences and push the boundaries of
        storytelling. Keep an eye on this space for exclusive updates and
        behind-the-scenes insights as we embark on these thrilling cinematic
        endeavors.
      </p>
      <div className="mt-5 flex items-center gap-7 hide-scrollbar overflow-auto">
        {data?.map((val) => {
          return (
            <Image
              key={val.url}
              src={val.url}
              width={900}
              height={900}
              alt="poster"
              className="object-cover"
            />
          );
        })}
        {data?.length <= 0 && (
          <h1 className="text-center mt-14 text-gray-400">No Data Found</h1>
        )}
      </div>
    </div>
  );
};

export default NewsAndEvents;
