import React, { useState } from 'react';
import { Window } from './Window';
import { TaskBar } from './TaskBar';
import { DesktopIcons } from './desktop/DesktopIcons';
import { Terminal as TerminalComponent } from './ai-terminal/Terminal';
import { MixerInterface } from './mixer/MixerInterface';
import { Calculator } from './calculator/Calculator';
import { Tokenomics } from './tokenomics/Tokenomics';
import { AgentDeployment } from './windows/AgentDeployment';
import { WindowContent } from './windows/WindowContent';

interface WindowState {
  id: number;
  title: string;
  position: { x: number; y: number };
}

export const Desktop = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [nextId, setNextId] = useState(1);

  const openWindow = (title: string) => {
    if (title === 'Etherscan') {
      window.open('https://etherscan.io', '_blank', 'noopener,noreferrer');
      return;
    }
    
    const offset = (windows.length * 30) % 150;
    setWindows([...windows, { 
      id: nextId, 
      title,
      position: { x: 100 + offset, y: 100 + offset }
    }]);
    setNextId(nextId + 1);
  };

  const closeWindow = (id: number) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const closeAllWindows = () => {
    setWindows([]);
  };

  const renderWindowContent = (title: string) => {
    switch (title) {
      case 'AI Agent':
        return <TerminalComponent />;
      case 'XP Mixer':
        return <MixerInterface />;
      case 'Calculator':
        return <Calculator />;
      case 'Tokenomics':
        return <Tokenomics />;
      case 'Agent Deployment':
        return <AgentDeployment />;
      default:
        return <WindowContent title={title} />;
    }
  };

  return (
    <div className="min-h-screen bg-[url('/lovable-uploads/1ca93d81-8052-47a5-9ebd-bbedc21d0ad5.png')] bg-cover bg-center p-4">
      <DesktopIcons onOpenWindow={openWindow} />

      {windows.map((window) => (
        <Window
          key={window.id}
          title={window.title}
          onClose={() => closeWindow(window.id)}
          initialPosition={window.position}
        >
          {renderWindowContent(window.title)}
        </Window>
      ))}
      
      <TaskBar onCloseAllWindows={closeAllWindows} />
    </div>
  );
};