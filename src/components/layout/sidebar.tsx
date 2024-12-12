import { Home, Flame, Tv2, Gamepad2, Heart, Trophy } from "lucide-react";
import Link from "next/link";

const sidebarItems = [
  { name: "动态", icon: Home, href: "/" },
  { name: "热门", icon: Flame, href: "/hot" },
  { name: "番剧", icon: Tv2, href: "/bangumi" },
  { name: "游戏", icon: Gamepad2, href: "/game" },
  { name: "收藏", icon: Heart, href: "/favorites" },
  { name: "赛事", icon: Trophy, href: "/events" },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-[240px] border-r bg-background">
      <div className="flex h-full flex-col py-4">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground mx-3"
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </div>
    </aside>
  );
} 