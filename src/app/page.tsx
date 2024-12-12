import { Carousel } from "@/components/carousel";
import { VideoCard } from "@/components/video-card";

// 模拟数据
const carouselItems = [
  {
    id: 1,
    title: "2024年新年动画祭",
    image: "https://picsum.photos/1920/1080?random=1",
    link: "#",
  },
  {
    id: 2,
    title: "冬季番剧推荐",
    image: "https://picsum.photos/1920/1080?random=2",
    link: "#",
  },
  {
    id: 3,
    title: "游戏赛事直播",
    image: "https://picsum.photos/1920/1080?random=3",
    link: "#",
  },
];

const videos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `视频标题 ${i + 1} - 这是一个很长的标题，用来测试多行文本的显示效果`,
  cover: `https://picsum.photos/400/225?random=${i + 10}`,
  views: Math.floor(Math.random() * 1000000),
  comments: Math.floor(Math.random() * 10000),
  duration: "12:34",
  author: `用户${i + 1}`,
  avatar: `https://picsum.photos/64/64?random=${i + 20}`,
}));

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Carousel Section */}
      <section>
        <Carousel items={carouselItems} />
      </section>

      {/* Videos Grid */}
      <section>
        <h2 className="mb-4 text-xl font-bold">推荐视频</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </section>
    </div>
  );
}
