import Link from "next/link";
import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "首页", href: "/" },
  { name: "番剧", href: "/bangumi" },
  { name: "直播", href: "/live" },
  { name: "游戏中心", href: "/game" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-full items-center">
        {/* Logo */}
        <Link href="/" className="mr-8">
          <h1 className="text-2xl font-bold text-pink-400">BiliBili</h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 mr-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="搜索视频、番剧、用户..."
              className="w-full rounded-full border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="搜索"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="ml-auto flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            aria-label="通知"
            title="通知"
          >
            <span className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                3
              </span>
            </span>
          </Button>
          <Button variant="outline" className="rounded-full">
            登录
          </Button>
        </div>
      </div>
    </nav>
  );
} 