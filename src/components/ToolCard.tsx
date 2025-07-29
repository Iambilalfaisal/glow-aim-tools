import { useState } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AITool } from "@/data/aiTools";

interface ToolCardProps {
  tool: AITool;
  index: number;
}

export function ToolCard({ tool, index }: ToolCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow-card animate-fade-in-up hover:scale-105`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      
      <CardContent className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-purple">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                {tool.name}
              </h3>
              <Badge 
                variant="secondary" 
                className="mt-1 bg-secondary/50 text-secondary-foreground border-border"
              >
                {tool.category}
              </Badge>
            </div>
          </div>
        </div>

        <div className="relative mb-4">
          <p 
            className={`text-muted-foreground leading-relaxed transition-all duration-500 ${
              isHovered ? 'opacity-100 transform-none' : 'opacity-80'
            }`}
          >
            {tool.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            className="bg-primary/10 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-purple"
            onClick={() => tool.url && window.open(tool.url, '_blank')}
          >
            Try Now
            <ExternalLink className="w-3 h-3 ml-2" />
          </Button>
          
          <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
            <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}