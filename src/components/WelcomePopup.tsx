import React from 'react';
import { Window } from './Window';

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WelcomePopup = ({ isOpen, onClose }: WelcomePopupProps) => {
  if (!isOpen) return null;

  return (
    <Window
      title="Welcome to XP.Cash"
      onClose={onClose}
      initialPosition={{ x: window.innerWidth / 2 - 300, y: window.innerHeight / 2 - 200 }}
    >
      <div className="max-w-2xl space-y-4 text-sm">
        <p className="leading-relaxed text-lg font-semibold text-vista-accent mb-4">
          XP.Cash is an ERC-20 based ecosystem token where privacy meets nostalgia, creating a DeFAI experience that empowers users, protects their data, and fosters a sense of community.
        </p>
        <p className="leading-relaxed">
          Privacy-First Mixing Protocol: Shield your transactions and maintain anonymity with advanced cryptographic tools that anonymize on-chain activity.
        </p>
        <p className="leading-relaxed">
          AI-Powered Agents: XP.Cash integrates AI Agents to enhance user experience and security. These agents can automate transactions, optimize privacy settings, and deploy custom privacy strategies—all while maintaining the nostalgic charm of the early internet era.
        </p>
        <p className="leading-relaxed">
          Governance: XP.Cash token holders have voting power to guide protocol upgrades and influence key decisions.
        </p>
        <p className="leading-relaxed">
          Staking Rewards: Lock your tokens to secure the ecosystem and earn rewards, combining privacy with passive income.
        </p>
        <p className="leading-relaxed">
          Anonymous Payments: Use XP.Cash for censorship-resistant, secure payments without leaving a trace.
        </p>
        <p className="leading-relaxed">
          With no transaction taxes, a nostalgic design, and a privacy-focused ethos, XP.Cash is your key to secure, cost-efficient, and anonymous DeFi interactions.
        </p>
      </div>
    </Window>
  );
};