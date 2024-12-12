# Bilibili Clone 项目创建文档

本文档详细记录了使用 Next.js、shadcn/ui 和 Cursor IDE 创建 Bilibili 克隆项目的完整流程。

## 0. 开发环境准备

### 0.1 安装 Cursor IDE
1. 访问 [Cursor 官网](https://cursor.sh/) 下载并安装
2. Cursor 是一个基于 AI 的现代化编辑器，提供：
   - 智能代码补全
   - AI 辅助编程
   - 实时代码分析
   - Git 集成
   - 终端集成

### 0.2 配置开发环境
1. 安装 Node.js (v18.18.0 或更高版本)
2. 安装 Git
3. 在 Cursor 中打开终端 (Ctrl + `)

## 1. 项目初始化

### 1.1 创建 Next.js 项目
```bash
# 创建项目
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --use-npm

# 选项配置
√ Would you like to use Turbopack for `next dev`? ... No
√ Would you like to customize the import alias (@/*)? ... Yes
√ What import alias would you like configured? ... @/*
```

### 1.2 安装依赖
```bash
# 安装 shadcn/ui 及其依赖
npm install @radix-ui/react-dialog @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react

# 安装 Tailwind 动画插件
npm install tailwindcss-animate
```

## 2. 项目结构设置

### 2.1 配置 Tailwind
```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  // ... 其他配置
};

export default config;
```

### 2.2 创建组件目录结构
```
src/
├── app/
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── sidebar.tsx
│   ├── ui/
│   │   └── button.tsx
│   ├── carousel.tsx
│   └─�� video-card.tsx
└── lib/
    ├── utils.ts
    └── image-loader.ts
```

## 3. 组件开发

### 3.1 基础组件
- 创建 Button 组件 (src/components/ui/button.tsx)
- 创建工具函数 (src/lib/utils.ts)

### 3.2 布局组件
- 创建导航栏 (src/components/layout/navbar.tsx)
- 创建侧边栏 (src/components/layout/sidebar.tsx)

### 3.3 功能组件
- 创建轮播图组件 (src/components/carousel.tsx)
- 创建视频卡片组件 (src/components/video-card.tsx)

## 4. 页面开发

### 4.1 全局布局
```typescript
// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <Navbar />
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

### 4.2 首页开发
```typescript
// src/app/page.tsx
export default function Home() {
  return (
    <div>
      <Carousel items={carouselItems} />
      <section>
        <div className="grid grid-cols-4">
          {videos.map(video => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </section>
    </div>
  );
}
```

## 5. 性能优化

### 5.1 图片优化
```typescript
// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};
```

### 5.2 组件优化
- 添加 "use client" 指令到客户端组件
- 实现图片懒加载
- 添加性能优化配置

## 6. 部署流程

### 6.1 GitHub 部署
```bash
# 初始化 Git 仓库
git init

# 添加远程仓库
git remote add origin https://github.com/noeltzy/bilibili-clone.git

# 提交代码
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### 6.2 Vercel 部署
1. 访问 https://vercel.com/new
2. 导入 GitHub 仓库
3. 保持默认配置
4. 点击 "Deploy"

## 7. 访问优化

### 7.1 CDN 配置
```typescript
// next.config.js
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
  },
};
```

### 7.2 性能优化
```typescript
// src/app/layout.tsx
<head>
  <link
    rel="preconnect"
    href="https://picsum.photos"
    crossOrigin="anonymous"
  />
</head>
```

## 8. 项目预览

- GitHub 仓库：https://github.com/noeltzy/bilibili-clone
- 在线预览：https://bilibili-clone.vercel.app

## 9. 后续优化建议

1. 添加用户认证系统
2. 实现视频上传功能
3. 添加评论系统
4. 实现个人中心
5. 添加搜索功能
6. 优化移动端体验
7. 实现暗��模式
8. 添加国内 CDN 支持 

## 10. Cursor IDE 使用技巧

### 10.1 AI 辅助功能
- 使用 `Ctrl + K` 或 `/` 启动 AI 对话
- 使用 `Ctrl + L` 生成代码
- 使用 `Ctrl + ;` 解释代码
- 使用 `Ctrl + '` 修复代码问题

### 10.2 项目开发流程
1. 使用 Cursor 创建新文件
2. 利用 AI 生成组件基础代码
3. 通过对话优化和完善代码
4. 使用内置终端运行命令
5. 使用 Git 集成进行版本控制

### 10.3 常用命令
```bash
# 在 Cursor 终端中运行
npm run dev  # 启动开发服务器
npm install  # 安装依赖
git add .    # 添加文件到 Git
git commit   # 提交更改
git push     # 推送到远程仓库
```

### 10.4 文件操作
- 使用文件树浏览项目结构
- 使用 `Ctrl + P` 快速打开文件
- 使用 `Ctrl + Shift + P` 打开命令面板
- 使用分屏功能同时编辑多个文件

### 10.5 代码编辑技巧
- 使用多光标编辑 (`Alt + Click`)
- 使用代码折叠
- 使用智能代码补全
- 使用实时错误检查

### 10.6 调试技巧
- 使用内置终端查看日志
- 使用 AI 帮助解决错误
- 使用实时预览功能
- 使用 Git 历史查看更改