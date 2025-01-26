import React, { useState, useRef, useEffect } from 'react';
import { Input } from '../ui/input';
import { toast } from 'sonner';
import { supabase } from "@/integrations/supabase/client";

export const Terminal = () => {
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = async (text: string) => {
    setIsTyping(true);
    const words = text.split(' ');
    let currentText = '';
    
    for (let word of words) {
      currentText += word + ' ';
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: currentText.trim() }
      ]);
      await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 50));
    }
    setIsTyping(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { message: userMessage }
      });

      if (error) throw error;

      const assistantMessage = data.message;
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      await simulateTyping(assistantMessage);
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to get response from AI");
      setMessages(prev => prev.slice(0, -1));
    }
  };

  return (
    <div className="flex flex-col h-full bg-black text-green-400 font-mono">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`${message.role === 'user' ? 'text-blue-400' : 'text-green-400'}`}>
            <span className="font-bold">{message.role === 'user' ? '>' : '$'} </span>
            {message.content}
          </div>
        ))}
        {isTyping && <div className="text-green-400">...</div>}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-green-400">
        <div className="flex gap-2">
          <span className="text-green-400">{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-green-400 outline-none"
            placeholder="Type your message..."
          />
        </div>
      </form>
    </div>
  );
};