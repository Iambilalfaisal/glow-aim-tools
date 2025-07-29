export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon?: string;
  url?: string;
}

export const aiTools: AITool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "A writing assistant that helps you brainstorm, write, and code with AI.",
    category: "Writing",
    url: "https://chat.openai.com"
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Transform your words into breathtaking AI-generated images.",
    category: "Design",
    url: "https://midjourney.com"
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "Boost your productivity and write smarter documents within Notion.",
    category: "Productivity",
    url: "https://notion.so"
  },
  {
    id: "runway-ml",
    name: "Runway ML",
    description: "A comprehensive creative suite for video and image editing powered by AI.",
    category: "Design",
    url: "https://runwayml.com"
  },
  {
    id: "leonardo-ai",
    name: "Leonardo AI",
    description: "High-quality art and asset generation for creators and game designers.",
    category: "Design",
    url: "https://leonardo.ai"
  },
  {
    id: "dalle-3",
    name: "DALL-E 3",
    description: "Generate unique images and art from text descriptions.",
    category: "Design",
    url: "https://openai.com/dall-e-3"
  },
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    description: "A family of creative generative AI models integrated into Adobe products.",
    category: "Design",
    url: "https://firefly.adobe.com"
  },
  {
    id: "synthesia",
    name: "Synthesia",
    description: "Create realistic AI videos from text in minutes.",
    category: "Video",
    url: "https://synthesia.io"
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "High-quality AI voice synthesis and text-to-speech.",
    category: "Audio",
    url: "https://elevenlabs.io"
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "Your AI pair programmer that suggests code and entire functions in real-time.",
    category: "Coding",
    url: "https://github.com/features/copilot"
  },
  {
    id: "grammarly-go",
    name: "GrammarlyGO",
    description: "AI-powered writing assistance for clear, concise, and impactful communication.",
    category: "Writing",
    url: "https://grammarly.com"
  },
  {
    id: "canva-magic-design",
    name: "Canva Magic Design",
    description: "Effortlessly create designs with AI-powered suggestions.",
    category: "Design",
    url: "https://canva.com"
  },
  {
    id: "heygen",
    name: "HeyGen",
    description: "Generate professional AI avatars and videos from text.",
    category: "Video",
    url: "https://heygen.com"
  },
  {
    id: "beautiful-ai",
    name: "Beautiful.ai",
    description: "Create stunning presentations with AI assistance.",
    category: "Productivity",
    url: "https://beautiful.ai"
  }
];

export const categories = ["All", "Writing", "Design", "Coding", "Productivity", "Video", "Audio"];