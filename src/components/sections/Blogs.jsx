"use client"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const items = [
  {
    id: 1,
    title: "Cracking the Creative Code: How Generative AI Is Reshaping Our Digital Future",
    description:
      "Once considered science fiction, generative AI now powers tools like ChatGPT and DALL·E, transforming how we write, design, and code. This blog explores what GenAI is, how it works under the hood, real-world use cases across industries, and where this powerful technology is headed next.",
    image: "src/assets/blogsProjects/GENAI.webp",
    type: "blog",
    tags: ["Generative AI", "Deep Learning", "AI Tools", "Technology"],
    link: "https://medium.com/@ieeeras/cracking-the-creative-code-how-generative-ai-is-reshaping-our-digital-future-2ae1919d451e", // Replace with actual link
    className: "col-span-1"
  }
  ,
  {
    id: 2,
    title: "Editor.io",
    description:
      "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
    image: "src/assets/blogsProjects/codeEditor.png",
    type: "project",
    tags: ["React", "Markdown", "Code Editor"],
    link: "https://github.com/soumyajit4419/Editor.io",
    className: "col-span-1",
  },
  {
    id: 3,
    title: "How AI Helps Businesses Understand Customers Better?",
    description:
      "From Netflix suggestions to emotionally intelligent chatbots, AI is revolutionizing how businesses understand and interact with customers. This blog dives into how technologies like NLP, machine learning, predictive analytics, and conversational AI are reshaping the future of customer experience, making it smarter, faster, and more human.",
    image: "src/assets/blogsProjects/BUSIAI.webp", // Replace with actual image path
    type: "blog",
    tags: ["AI", "Machine Learning", "Business"],
    link: "https://medium.com/@ieeeras/how-ai-helps-businesses-understand-customers-better-76f54a3cf237",
    className: "col-span-1"
  },
  {
    id: 1,
    title: "How Do LLMS Write Stories?",
    description:
      "From writing heartfelt letters to imitating Shakespeare, LLMs like ChatGPT have transformed how we create content. This blog explores how these models use massive datasets and pattern recognition to generate human-like stories, and what that means for the future of creativity, storytelling, and AI’s role in it.", image: "src/assets/blogsProjects/LLMSTORY.webp",
    type: "blog",
    tags: ["AI", "LLMs", "ChatGPT"],
    link: "https://medium.com/@ieeeras/how-do-llms-write-stories-de42dbadcf4d",
    className: "col-span-1 md:col-span-2"
  }
  ,

  {
    id: 5,
    title: "Ai For Social Good",
    description:
      "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in sucide prevention.",
    image: "src/assets/blogsProjects/suicide.png",
    type: "project",
    tags: ["NLP", "Suicide Prevention", "Text Classification"],
    link: "https://github.com/soumyajit4419/AI_For_Social_Good",
    className: "col-span-1",
  },
  {
    id: 6,
    title: "Plant AI",
    description:
      "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
    image: "src/assets/blogsProjects/leaf.png",
    type: "project",
    tags: ["PyTorch", "CNN", "Image Classification"],
    link: "https://github.com/soumyajit4419/Plant_AI",
    className: "col-span-1",
  },
  {
    id: 7,
    title: "Quantum Computing: How it can revolutionize computing and the world",
    description:
      "Quantum computing promises to transform industries from cryptography to climate science. This blog explores how qubits, superposition, and entanglement work, the practical challenges in building stable quantum systems, and how this technology could redefine the future of innovation, security, and problem-solving.",
    image: "src/assets/blogsProjects/QUANTUM.webp", 
    type: "blog",
    tags: ["Quantum Computing", "Qubits", "Future Tech", "Cryptography"],
    link: "https://medium.com/@ieeeras/quantum-computing-f0722fce51ac", 
    className: "col-span-1"
  }
  ,
  {
    id: 8,
    title: "Face Recognition and Emotion Detection",
    description:
      "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.",
    image: "src/assets/blogsProjects/emotion.png",
    type: "project",
    tags: ["OpenCV", "Emotion Detection", "Computer Vision"],
    link: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
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
        <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-gray-700/30">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-fit w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-purple-800 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mb-4 flex-1 leading-relaxed">{description}</p>
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

          <div className="relative sm:mx-auto">
            <button
              onClick={handleButtonClick}
              className={cn(
                "group relative w-full  cursor-pointer overflow-hidden rounded-full p-px text-sm font-medium text-white shadow-2xl shadow-zinc-900 transition-all duration-300 active:scale-95",
                type === "project"
                  ? "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 hover:shadow-green-500/25"
                  : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 hover:shadow-blue-500/25"
              )}
            >

              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="relative z-10 flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 py-2 ring-1 ring-white/10">
                {type === "project" ? (
                  <Github className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
                <span>{type === "project" ? "View on GitHub" : "Read on Medium"}</span>
              </div>
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
    <div className="px-4 pt-0 md:p-8 md:pt-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blogs &{" "}
            Projects
          </h1>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((item) => (
              <BentoGridItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Blogs
