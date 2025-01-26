import React from 'react';
import { formatInTimeZone } from 'date-fns-tz';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface SystemTrayProps {
  onCloseAllWindows?: () => void;
}

export const SystemTray = ({ onCloseAllWindows }: SystemTrayProps) => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = formatInTimeZone(currentTime, 'America/Los_Angeles', 'h:mm a');

  return (
    <div className="flex items-center h-full bg-gradient-to-b from-blue-600 to-blue-700 px-2 space-x-4">
      <Dialog>
        <DialogTrigger>
          <img 
            src="/lovable-uploads/81a0b106-411f-496c-825d-e7b2780de055.png" 
            alt="Info" 
            className="w-4 h-4 opacity-80 hover:opacity-100 cursor-pointer"
          />
        </DialogTrigger>
        <DialogContent className="fixed bg-[#ECE9D8] rounded shadow-vista-window animate-window-open border border-[#0054E3] w-[600px] p-0">
          <div className="h-8 bg-gradient-to-r from-[#0054E3] to-[#2E8AEF] rounded-t flex items-center justify-between px-2">
            <DialogTitle className="text-white font-segoe text-sm">
              About This Website
            </DialogTitle>
          </div>
          <div className="h-12 bg-gradient-to-r from-[#0054E3] to-[#2E8AEF] flex items-center justify-center space-x-2">
            <img 
              src="/lovable-uploads/1e1aaff4-1c6b-4e96-abd5-1b10acf84ef4.png" 
              alt="Windows XP" 
              className="w-6 h-6" 
            />
            <span className="text-white font-semibold">Windows XP</span>
          </div>
          <DialogHeader className="p-6">
            <DialogDescription className="text-vista-text space-y-4">
              <p className="text-lg font-semibold text-vista-accent mb-4">
                XP.Cash is an ERC-20 based ecosystem token where privacy meets nostalgia, creating a DeFAI experience that empowers users, protects their data, and fosters a sense of community.
              </p>
              <div className="space-y-4">
                <div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Privacy-First Mixing Protocol:</strong> Shield your transactions and maintain anonymity with advanced cryptographic tools that anonymize on-chain activity.</li>
                    <li><strong>AI-Powered Agents:</strong> XP.Cash integrates AI Agents to enhance user experience and security. These agents can automate transactions, optimize privacy settings, and deploy custom privacy strategies—all while maintaining the nostalgic charm of the early internet era.</li>
                    <li><strong>Governance:</strong> XP.Cash token holders have voting power to guide protocol upgrades and influence key decisions.</li>
                    <li><strong>Staking Rewards:</strong> Lock your tokens to secure the ecosystem and earn rewards, combining privacy with passive income.</li>
                    <li><strong>Anonymous Payments:</strong> Use XP.Cash for censorship-resistant, secure payments without leaving a trace.</li>
                  </ul>
                  <p className="mt-4">
                    With no transaction taxes, a nostalgic design, and a privacy-focused ethos, XP.Cash is your key to secure, cost-efficient, and anonymous DeFi interactions.
                  </p>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <img 
            src="/lovable-uploads/44648c88-ab69-48f2-a16d-1030d28af09e.png" 
            alt="Close" 
            className="w-4 h-4 opacity-80 cursor-pointer hover:opacity-100"
          />
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-[#ECE9D8] border-[#0054E3]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#0054E3]">Close All Windows</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to close all open windows? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-[#ECE9D8] hover:bg-[#DCE9D8] border-[#0054E3]">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={onCloseAllWindows}
              className="bg-[#0054E3] hover:bg-[#2E8AEF] text-white"
            >
              Close All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="flex items-center space-x-2 text-white border-l border-blue-500 pl-4">
        <span className="text-sm">{formattedTime}</span>
      </div>
    </div>
  );
};