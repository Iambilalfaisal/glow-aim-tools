import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ToolCard } from "@/components/ToolCard";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { aiTools } from "@/data/aiTools";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTools, setFilteredTools] = useState(aiTools);

  useEffect(() => {
    let filtered = aiTools;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTools(filtered);
  }, [searchTerm, selectedCategory]);

  const scrollToTools = () => {
    document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 backdrop-blur-sm bg-background/20 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-purple">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <h1 className="text-2xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent">
            Aim Tools
          </h1>
        </div>
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[80vh] flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Explore the Power of AI
            </span>
          </h1>
          <p 
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            One Tool at a Time
          </p>
          <p 
            className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            Discover the most powerful AI tools that are transforming how creators, developers, and professionals work. 
            From writing assistants to image generators, find the perfect AI companion for your next project.
          </p>
          <Button
            size="lg"
            onClick={scrollToTools}
            className="bg-gradient-primary hover:shadow-glow-purple text-white font-semibold px-8 py-4 text-lg animate-fade-in-up hover:scale-105 transition-all duration-300"
            style={{ animationDelay: '600ms' }}
          >
            Discover Tools
          </Button>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools-section" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-6">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Top AI Tools
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated collection of the most innovative and powerful AI tools available today
            </p>
          </div>

          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No tools found matching your criteria. Try adjusting your search or filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-background/20 backdrop-blur-sm py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AI</span>
                </div>
                <span className="font-poppins font-semibold text-lg">Aim Tools</span>
              </div>
              <p className="text-muted-foreground">
                Your gateway to discovering the most powerful AI tools for creativity and productivity.
              </p>
            </div>
            
            <div className="md:text-center">
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex justify-center md:justify-center gap-4">
                <Button variant="outline" size="icon" className="hover:shadow-glow-cyan transition-all duration-300">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:shadow-glow-cyan transition-all duration-300">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:shadow-glow-cyan transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="md:text-right">
              <h3 className="font-semibold mb-4">Credits</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Designed with <Heart className="w-4 h-4 inline text-red-500" /> using Lovable
              </p>
              <p className="text-muted-foreground text-xs">
                © 2024 Aim Tools. All rights reserved.
              </p>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-border/30">
            <p className="text-muted-foreground text-sm">
              Discover, explore, and harness the power of artificial intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
