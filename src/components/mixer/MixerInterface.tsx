import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export const MixerInterface = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [privacyLevel, setPrivacyLevel] = useState([50]);
  const [selectedToken, setSelectedToken] = useState('eth');
  const [mixerPool, setMixerPool] = useState('0.1');

  const showComingSoon = () => {
    toast("Feature in development", {
      description: "This functionality will be available soon",
    });
  };

  const pools = [
    { value: '0.1', label: '0.1 ETH Pool' },
    { value: '1', label: '1 ETH Pool' },
    { value: '10', label: '10 ETH Pool' },
    { value: '100', label: '100 ETH Pool' },
  ];

  const tokens = [
    { value: 'eth', label: 'ETH' },
    { value: 'usdc', label: 'USDC' },
    { value: 'usdt', label: 'USDT' },
  ];

  const delays = [
    { value: '0', label: 'No Delay' },
    { value: '12', label: '12 Hours' },
    { value: '24', label: '24 Hours' },
    { value: '48', label: '48 Hours' },
  ];

  return (
    <div className="w-full h-[340px]">
      <Tabs defaultValue="mix" className="w-full">
        <TabsList className="w-full bg-vista-window border-b border-vista-border">
          <TabsTrigger value="mix">Mix</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="mix" className="p-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Select Token</label>
                <Select value={selectedToken} onValueChange={setSelectedToken}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select token" />
                  </SelectTrigger>
                  <SelectContent>
                    {tokens.map((token) => (
                      <SelectItem key={token.value} value={token.value}>
                        {token.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mixer Pool</label>
                <Select value={mixerPool} onValueChange={setMixerPool}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pool" />
                  </SelectTrigger>
                  <SelectContent>
                    {pools.map((pool) => (
                      <SelectItem key={pool.value} value={pool.value}>
                        {pool.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Input Amount</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 p-2 border rounded"
                  placeholder="0.00"
                  value={inputAmount}
                  onChange={(e) => setInputAmount(e.target.value)}
                />
                <Button onClick={showComingSoon}>Max</Button>
              </div>
              <p className="text-sm text-gray-500 mt-1">Pool Balance: {mixerPool} ETH</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Privacy Level</label>
              <Slider
                value={privacyLevel}
                onValueChange={setPrivacyLevel}
                max={100}
                step={10}
                className="mb-1"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>Basic</span>
                <span>Standard</span>
                <span>Maximum</span>
              </div>
            </div>

            <Button
              onClick={showComingSoon}
              className="w-full bg-vista-accent hover:bg-vista-accent-hover"
            >
              Connect Wallet to Mix
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="p-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Time Delay</label>
              <Select defaultValue="0">
                <SelectTrigger>
                  <SelectValue placeholder="Select delay" />
                </SelectTrigger>
                <SelectContent>
                  {delays.map((delay) => (
                    <SelectItem key={delay.value} value={delay.value}>
                      {delay.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-500 mt-1">Longer delays increase privacy</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history" className="p-4">
          <div className="text-center text-gray-500">
            Transaction history will appear here
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};