import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Send,
  Sparkles,
  Database,
  TrendingUp,
  Package,
  AlertCircle,
  BarChart3,
} from "lucide-react";

interface Message {
  id: number;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

const initialMessages: Message[] = [
  {
    id: 1,
    type: "assistant",
    content: "Hello! I'm InvenTrack AI. I can help you analyze your inventory and get insights in real-time. How can I help you today?",
    timestamp: new Date(),
    suggestions: [
      "Show me my top at-risk products",
      "What's my current blocked cash?",
      "Analyze sales trends for last month",
      "Which products need restocking?",
    ],
  },
];

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: "assistant",
        content: getAIResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("risk") || lowerQuery.includes("at-risk")) {
      return "Based on current inventory analysis:\n\n📊 **Top At-Risk Products:**\n1. Organic Cotton T-Shirts (SKU: TS-002) - Critical risk, 7 days until OOS\n2. Sustainable Yoga Mats (SKU: YM-005) - Critical risk, 5 days until OOS\n3. Eco-Friendly Toothbrushes (SKU: TB-001) - High risk, 15 days until OOS\n\n💡 **Recommendation:** Consider placing urgent restock orders for critical items or running promotional campaigns to clear slow-moving inventory.";
    }
    
    if (lowerQuery.includes("blocked cash") || lowerQuery.includes("cash")) {
      return "💰 **Current Blocked Cash Analysis:**\n\nTotal Blocked Cash: **₹19,45,350**\n- Slow-moving inventory: ₹12,64,478 (65%)\n- Excess stock: ₹4,66,884 (24%)\n- Dead stock: ₹2,13,988 (11%)\n\n📈 Trend: +10% increase from last month\n\n💡 **Suggestion:** Consider liquidation strategies for dead stock and promotional campaigns for slow-moving items to free up working capital.";
    }
    
    if (lowerQuery.includes("sales") || lowerQuery.includes("trend")) {
      return "📈 **Sales Trend Analysis (Last 30 Days):**\n\n**Top Performers:**\n• Recycled Paper Notebooks: +45% growth, 100 units/day\n• Biodegradable Phone Cases: +32% growth, 40 units/day\n\n**Declining Products:**\n• Solar Phone Chargers: -23% decline, 2 units/day\n• Stainless Steel Bottles: -18% decline, 5 units/day\n\n💡 **Insight:** Focus inventory investment on high-growth categories while reducing exposure to declining segments.";
    }
    
    if (lowerQuery.includes("restock") || lowerQuery.includes("order")) {
      return "📦 **Restock Recommendations:**\n\n**Urgent (Order Today):**\n• Organic Cotton T-Shirts - Order 2,000 units\n• Sustainable Yoga Mats - Order 500 units\n\n**Within 7 Days:**\n• Eco-Friendly Toothbrushes - Order 3,000 units\n• Reusable Water Bottles - Order 1,000 units\n\n**Optimal Order Quantities** calculated based on:\n- Current sales velocity\n- Lead times\n- Storage costs\n- Seasonal trends";
    }

    return "I've analyzed your query. Here's what I found:\n\nYour inventory system shows healthy metrics overall with room for optimization. Would you like me to dive deeper into any specific area like product performance, financial metrics, or predictive analytics?";
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  return (
    <AppLayout>
      <div className="h-[calc(100vh-4rem)] flex flex-col p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Conversational Analytics
              </h1>
              <p className="text-sm text-muted-foreground">
                Ask questions about your inventory and get insights in real-time
              </p>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <Card className="flex-1 bg-gradient-card border-border/50 flex flex-col">
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    } rounded-lg p-4`}
                  >
                    {message.type === "assistant" && (
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold">InvenTrack AI</span>
                      </div>
                    )}
                    <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                    {message.suggestions && (
                      <div className="mt-4 space-y-2">
                        <p className="text-xs opacity-70">Suggested queries:</p>
                        <div className="flex flex-wrap gap-2">
                          {message.suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="text-xs"
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-4 max-w-[70%]">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 animate-pulse" />
                      <span className="text-sm">InvenTrack AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="border-t border-border/50 p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ask me anything about your inventory..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 bg-muted/30 border-border/50"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-gradient-primary hover:opacity-90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-2 mt-3">
              <Badge variant="outline" className="text-xs">
                <Database className="w-3 h-3 mr-1" />
                Connected to live data
              </Badge>
              <Badge variant="outline" className="text-xs">
                <TrendingUp className="w-3 h-3 mr-1" />
                ML-powered insights
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Package className="w-3 h-3 mr-1" />
                1,847 SKUs analyzed
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}