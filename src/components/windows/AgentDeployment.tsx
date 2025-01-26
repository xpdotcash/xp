import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Server, Bot, Settings, Terminal, Database } from 'lucide-react';
import { toast } from 'sonner';

export const AgentDeployment = () => {
  const showComingSoon = () => {
    toast("Feature in development", {
      description: "This functionality will be available soon",
    });
  };

  return (
    <Tabs defaultValue="agents" className="w-full">
      <TabsList className="w-full bg-vista-window border-b border-vista-border">
        <TabsTrigger value="agents" className="data-[state=active]:bg-white">
          <Bot className="w-4 h-4 mr-2" />
          Agents
        </TabsTrigger>
        <TabsTrigger value="deployment" className="data-[state=active]:bg-white">
          <Server className="w-4 h-4 mr-2" />
          Deployment
        </TabsTrigger>
        <TabsTrigger value="settings" className="data-[state=active]:bg-white">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="agents" className="p-4">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">GPT-4 Agent</h3>
              <p className="text-sm text-gray-600 mb-4">Advanced language model for complex tasks</p>
              <Button onClick={showComingSoon}>Deploy Agent</Button>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Claude Agent</h3>
              <p className="text-sm text-gray-600 mb-4">Specialized in analysis and reasoning</p>
              <Button onClick={showComingSoon}>Deploy Agent</Button>
            </div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="deployment" className="p-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Input placeholder="Agent Name" className="flex-1" />
            <Button onClick={showComingSoon}>Quick Deploy</Button>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Deployment Options</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Memory Allocation</span>
                <Input type="number" className="w-24" placeholder="2GB" />
              </div>
              <div className="flex items-center justify-between">
                <span>Max Tokens</span>
                <Input type="number" className="w-24" placeholder="4096" />
              </div>
              <div className="flex items-center justify-between">
                <span>Temperature</span>
                <Input type="number" className="w-24" placeholder="0.7" />
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="settings" className="p-4">
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">API Configuration</h3>
            <div className="space-y-2">
              <Input placeholder="OpenAI API Key" type="password" />
              <Input placeholder="Anthropic API Key" type="password" />
              <Button onClick={showComingSoon} className="w-full">Save Keys</Button>
            </div>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Model Settings</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Default Model</span>
                <Input className="w-32" placeholder="GPT-4" />
              </div>
              <div className="flex items-center justify-between">
                <span>Response Format</span>
                <Input className="w-32" placeholder="JSON" />
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};