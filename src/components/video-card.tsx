import Image from "next/image";
import { Play, MessageCircle, Heart } from "lucide-react";

interface VideoCardProps {
  title: string;
  cover: string;
  views: number;
  comments: number;
  duration: string;
  author: string;
  avatar: string;
}

export function VideoCard({
  title,
  cover,
  views,
  comments,
  duration,
  author,
  avatar,
}: VideoCardProps) {
  return (
    <div className="group relative flex flex-col gap-2">
      {/* Video Cover */}
      <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
        <Image
          src={cover}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 rounded bg-black/70 px-1 text-xs text-white">
          {duration}
        </div>
      </div>

      {/* Video Info */}
      <div className="flex gap-2">
        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-muted">
          <Image
            src={avatar}
            alt={author}
            fill
            sizes="32px"
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="line-clamp-2 text-sm font-medium">{title}</h3>
          <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            <span>{author}</span>
            <div className="flex items-center gap-1">
              <Play className="h-3 w-3" />
              <span>{formatNumber(views)}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-3 w-3" />
              <span>{formatNumber(comments)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Actions */}
      <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <button 
          className="rounded-full bg-black/70 p-2 text-white hover:bg-black/90"
          title="点赞"
          aria-label="点赞视频"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function formatNumber(num: number): string {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + "万";
  }
  return num.toString();
} 