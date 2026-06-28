"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, Bot } from "lucide-react";
import { useChat } from "@/components/chat-context";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  type ChatMessage,
  INITIAL_GREETING,
  getMockResponse,
} from "@/lib/chat-responses";
import { cn } from "@/lib/utils";

function MessageBubble({ message }: { message: ChatMessage }) {
  const isAssistant = message.role === "assistant";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("flex gap-2.5", isAssistant ? "justify-start" : "justify-end")}
    >
      {isAssistant && (
        <Avatar className="h-8 w-8 shrink-0 mt-1">
          <AvatarFallback className="bg-accent text-white text-xs">
            <Bot className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line",
          isAssistant
            ? "bg-stone-100 text-stone-800 rounded-tl-sm"
            : "bg-accent text-white rounded-tr-sm"
        )}
      >
        {message.content}
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-2.5 items-center">
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarFallback className="bg-accent text-white text-xs">
          <Bot className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
      <div className="bg-stone-100 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-2 w-2 rounded-full bg-stone-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

export function ChatWidget() {
  const { isOpen, openChat, closeChat } = useChat();
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<string[]>(
    INITIAL_GREETING.quickReplies ?? []
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: text.trim(),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setQuickReplies([]);
      setIsTyping(true);

      // Simulacija kašnjenja odgovora — realističniji dojam
      await new Promise((r) => setTimeout(r, 800 + Math.random() * 700));

      /*
       * TODO: Zamijeniti getMockResponse() pravim API pozivom:
       *
       * const res = await fetch('/api/chat', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify({ message: text, history: messages }),
       * });
       * const data = await res.json();
       *
       * Backend koristi Groq/xAI LLM + Supabase za booking.
       * Vidi README.md za detalje.
       */
      const { content, quickReplies: replies } = getMockResponse(text);

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content,
        timestamp: new Date(),
        quickReplies: replies,
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, assistantMsg]);
      setQuickReplies(replies ?? []);
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openChat}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30 hover:bg-accent-dark transition-colors cursor-pointer"
            aria-label="Otvori chat"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-accent-light" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={(open) => (open ? openChat() : closeChat())}>
        <DialogContent className="sm:max-w-md h-[600px] max-h-[85vh] flex flex-col p-0 gap-0 overflow-hidden">
          <DialogHeader className="px-5 py-4 border-b border-stone-100 bg-stone-50/80 shrink-0">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-accent text-white font-serif text-sm">
                  SA
                </AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle className="text-base font-medium">
                  Studio Alter Asistent
                </DialogTitle>
                <p className="text-xs text-stone-500 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500 inline-block" />
                  Online — odgovara odmah
                </p>
              </div>
            </div>
          </DialogHeader>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
          >
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {isTyping && <TypingIndicator />}
          </div>

          {/* Quick replies */}
          {quickReplies.length > 0 && !isTyping && (
            <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  className="text-xs px-3 py-1.5 rounded-full border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all cursor-pointer"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="px-4 py-3 border-t border-stone-100 bg-white shrink-0"
          >
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Upišite poruku..."
                disabled={isTyping}
                className="flex-1 rounded-full"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isTyping}
                className="shrink-0 rounded-full"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-[10px] text-stone-400 text-center mt-2 leading-relaxed">
              AI asistent • Trenutno u demo modu — uskoro live s pravim bookingom
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
