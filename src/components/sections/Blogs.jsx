"use client"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const items = [
  {
    id: 1,
    title: "Next.js E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with Stripe integration, admin dashboard, and real-time inventory management. Built with Next.js 14, TypeScript, and Prisma for seamless user experience.",
    image: "/placeholder.svg?height=400&width=600",
    type: "project",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    link: "https://github.com/yourusername/nextjs-ecommerce",
    className: "col-span-1",
  },
  {
    id: 2,
    title: "Building Scalable Microservices",
    description:
      "Learn how to architect and deploy microservices using Docker, Kubernetes, and service mesh patterns for enterprise applications. This comprehensive guide covers everything from basic concepts to advanced deployment strategies.",
    image: "/placeholder.svg?height=300&width=400",
    type: "blog",
    tags: ["Microservices", "Docker", "Kubernetes"],
    link: "https://medium.com/@yourusername/building-scalable-microservices",
    className: "col-span-1",
  },
  {
    id: 3,
    title: "AI-Powered Code Assistant",
    description:
      "VS Code extension that provides intelligent code suggestions and automated refactoring using OpenAI's GPT-4 API. Features include real-time code analysis, smart completions, and automated documentation generation.",
    image: "/placeholder.svg?height=300&width=400",
    type: "project",
    tags: ["AI", "VS Code", "OpenAI", "TypeScript"],
    link: "https://github.com/yourusername/ai-code-assistant",
    className: "col-span-1",
  },
  {
    id: 4,
    title: "The Future of React Server Components",
    description:
      "Deep dive into React Server Components, their benefits, implementation strategies, and how they're changing the way we build React applications in 2024...",
    image: "/placeholder.svg?height=300&width=500",
    type: "blog",
    tags: ["React", "Server Components", "Next.js"],
    link: "https://medium.com/@yourusername/future-of-react-server-components",
    className: "col-span-1 md:col-span-2",
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description:
      "WebSocket-based chat app with rooms, file sharing, and message encryption. Built with Socket.io and React, featuring real-time messaging, user authentication, file uploads, and end-to-end encryption.",
    image: "/placeholder.svg?height=300&width=400",
    type: "project",
    tags: ["Socket.io", "React", "WebSocket"],
    link: "https://github.com/yourusername/realtime-chat-app",
    className: "col-span-1 md:col-span-1",
  },
  {
    id: 6,
    title: "Advanced CSS Grid Techniques",
    description:
      "Master CSS Grid with advanced layouts, responsive design patterns, and practical examples for modern web development.",
    image: "/placeholder.svg?height=300&width=400",
    type: "blog",
    tags: ["CSS", "Grid", "Responsive Design"],
    link: "https://medium.com/@yourusername/advanced-css-grid-techniques",
    className: "col-span-1",
  },
  {
    id: 7,
    title: "Mobile Weather App",
    description:
      "Cross-platform weather application with location services, weather maps, and push notifications using React Native.",
    image: "/placeholder.svg?height=300&width=400",
    type: "project",
    tags: ["React Native", "Weather API", "Maps"],
    link: "https://github.com/yourusername/mobile-weather-app",
    className: "col-span-1",
  },
  {
    id: 8,
    title: "Docker Best Practices Guide",
    description:
      "Comprehensive guide to Docker optimization, security practices, and deployment strategies for production environments.",
    image: "/placeholder.svg?height=300&width=400",
    type: "blog",
    tags: ["Docker", "DevOps", "Security"],
    link: "https://medium.com/@yourusername/docker-best-practices-guide",
    className: "col-span-1",
  },
]

function BentoGridItem({ item }) {
  const { title, description, image, type, tags, link, className } = item

  const handleButtonClick = () => {
    if (link) window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white/8  border-white/20 transition-all duration-300 cursor-pointer hover:scale-95",
        className,
      )}
    >
      <div className="relative h-full flex flex-col p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <Badge
            variant="secondary"
            className={cn(
              "text-xs font-medium",
              type === "project"
                ? "bg-green-500/20 text-green-400 border-green-500/30"
                : "bg-blue-500/20 text-blue-400 border-blue-500/30",
            )}
          >
            {type === "project" ? "Project" : "Article"}
          </Badge>
        </div>

        {/* Image */}
        <div className="relative h-32 mb-4 rounded-lg overflow-hidden bg-gray-700/30">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-purple-800 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-sm text-gray-400 mb-4 flex-1 leading-relaxed">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded border border-gray-600/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="relative">
            <button
              onClick={handleButtonClick}
              className={cn(
                "group relative w-full  cursor-pointer overflow-hidden rounded-full p-px text-sm font-medium text-white shadow-2xl shadow-zinc-900 transition-all duration-300 active:scale-95",
                type === "project"
                  ? "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 hover:shadow-green-500/25"
                  : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 hover:shadow-blue-500/25"
              )}
            >
              {/* Glowing radial overlay effect on hover */}
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>

              {/* White animated shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              {/* Button content */}
              <div className="relative z-10 flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 py-2 ring-1 ring-white/10">
                {type === "project" ? (
                  <Github className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
                <span>{type === "project" ? "View on GitHub" : "Read on Medium"}</span>
              </div>

              {/* Bottom underline glow */}
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Blogs() {
  return (
    <div className="p-4 pt-0 md:p-8 md:pt-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blogs &{" "}
            Projects
          </h1>
        </div>

        {/* Bento Grid */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.slice(0, 3).map((item) => (
              <BentoGridItem key={item.id} item={item} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[items[3], items[4]].map((item) => (
              <BentoGridItem key={item.id} item={item} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.slice(5, 8).map((item) => (
              <BentoGridItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
