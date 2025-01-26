import React from 'react';

interface DesktopIconProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

const DesktopIcon = ({ icon, title, onClick }: DesktopIconProps) => (
  <button
    onClick={onClick}
    className="desktop-icon flex flex-col items-center space-y-2 p-2 rounded hover:bg-white/10 transition-colors group w-20"
  >
    {icon}
    <span className="text-white text-sm font-segoe text-center drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">
      {title}
    </span>
  </button>
);

interface DesktopIconsProps {
  onOpenWindow: (title: string) => void;
}

export const DesktopIcons = ({ onOpenWindow }: DesktopIconsProps) => {
  const desktopIcons = [
    { 
      title: 'Stake XP',
      icon: <img src="/lovable-uploads/56e7a347-ac05-4828-b67d-ca7331d35baf.png" alt="Stake XP" className="w-12 h-12" />,
    },
    { 
      title: 'AI Agent',
      icon: <img src="/lovable-uploads/6120f756-5b65-4b2f-9227-f2b7aeeb556e.png" alt="AI Agent" className="w-12 h-12" />,
    },
    { 
      title: 'Calculator',
      icon: <img src="/lovable-uploads/650b2c0f-ca0f-4418-8fbb-c039b86e9637.png" alt="Calculator" className="w-12 h-12" />,
    },
    { 
      title: 'XP Mixer',
      icon: <img src="/lovable-uploads/1375e24f-559f-4dd8-a365-38aabf916ea5.png" alt="XP Mixer" className="w-12 h-12" />,
    },
    { 
      title: 'Launch Pad',
      icon: <img src="/lovable-uploads/7355f69d-aa55-4eed-b9cb-6719515da136.png" alt="Launch Pad" className="w-12 h-12" />,
    },
    { 
      title: 'Pools',
      icon: <img src="/lovable-uploads/e9f50aa4-c45e-4690-85f7-f0a21d82b296.png" alt="Pools" className="w-12 h-12" />,
    },
    { 
      title: 'DAO',
      icon: <img src="/lovable-uploads/1b2332e3-c18d-4a99-b6b5-8a2105ddb01f.png" alt="DAO" className="w-12 h-12" />,
    },
    { 
      title: 'Etherscan',
      icon: <img src="/lovable-uploads/7588fe79-37b7-49eb-92ec-c49971e060f1.png" alt="Etherscan" className="w-12 h-12" />,
    },
    { 
      title: 'Tokenomics',
      icon: <img src="/lovable-uploads/c3f80eba-2708-42f0-a78e-c5d2944357cd.png" alt="Tokenomics" className="w-12 h-12" />,
    },
  ];

  const newRowIcons = [
    {
      title: 'Agent Deployment',
      icon: <img src="/lovable-uploads/a432b6e2-0111-4e45-b3f3-38de6dc0c4f1.png" alt="Agent Deployment" className="w-12 h-12" />,
    }
  ];

  return (
    <div className="grid grid-cols-auto-fit gap-6 p-4">
      {desktopIcons.map((icon, index) => (
        <DesktopIcon
          key={index}
          icon={icon.icon}
          title={icon.title}
          onClick={() => onOpenWindow(icon.title)}
        />
      ))}
      {newRowIcons.map((icon, index) => (
        <DesktopIcon
          key={`new-${index}`}
          icon={icon.icon}
          title={icon.title}
          onClick={() => onOpenWindow(icon.title)}
        />
      ))}
    </div>
  );
};