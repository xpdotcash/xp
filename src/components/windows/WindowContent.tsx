import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { toast } from 'sonner';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

interface WindowContentProps {
  title: string;
}

export const WindowContent: React.FC<WindowContentProps> = ({ title }) => {
  const showComingSoon = () => {
    toast("Feature in development", {
      description: "This functionality will be available soon",
    });
  };

  if (title === 'Stake XP') {
    return (
      <Tabs defaultValue="stake" className="w-full">
        <TabsList className="w-full bg-vista-window border-b border-vista-border">
          <TabsTrigger value="stake" className="data-[state=active]:bg-white">Stake XP</TabsTrigger>
          <TabsTrigger value="unstake" className="data-[state=active]:bg-white">Unstake</TabsTrigger>
          <TabsTrigger value="rewards" className="data-[state=active]:bg-white">Rewards</TabsTrigger>
        </TabsList>
        
        <TabsContent value="stake" className="p-4">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold">Available to Stake</h2>
              <p className="text-3xl font-bold mt-2">0.00 XP</p>
            </div>
            <Button 
              onClick={showComingSoon} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Connect Wallet
            </Button>
            <Button 
              onClick={showComingSoon} 
              variant="outline" 
              className="w-full border-blue-600 text-blue-600"
            >
              Buy XP
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="unstake" className="p-4">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold">Staked Balance</h2>
              <p className="text-3xl font-bold mt-2">0.00 XP</p>
            </div>
            <Button onClick={showComingSoon} className="w-full">Unstake XP</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="rewards" className="p-4">
          <div className="space-y-4">
            <div className="border p-4 rounded">
              <h3 className="font-semibold mb-2">Staking Rewards</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>APR</span>
                  <span className="font-medium">12.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Your Rewards</span>
                  <span className="font-medium">0 XP</span>
                </div>
              </div>
            </div>
            <Button onClick={showComingSoon} className="w-full">Claim Rewards</Button>
          </div>
        </TabsContent>
      </Tabs>
    );
  }

  if (title === 'Launch Pad') {
    return (
      <Tabs defaultValue="create" className="w-full">
        <TabsList className="w-full bg-vista-window border-b border-vista-border">
          <TabsTrigger value="create" className="data-[state=active]:bg-white">Create Token</TabsTrigger>
          <TabsTrigger value="verify" className="data-[state=active]:bg-white">Verify Contract</TabsTrigger>
          <TabsTrigger value="details" className="data-[state=active]:bg-white">Launch Details</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create" className="p-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Token Name</label>
              <Input placeholder="My Token" className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Token Symbol</label>
              <Input placeholder="TKN" className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Initial Supply</label>
              <Input placeholder="1,000,000" className="w-full" />
            </div>
            <Button 
              onClick={showComingSoon} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Connect Wallet to Create
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="verify" className="p-4">
          <div className="space-y-4">
            <Input placeholder="Contract Address" className="w-full" />
            <Button onClick={showComingSoon} className="w-full">Verify Contract</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="details" className="p-4">
          <div className="space-y-4">
            <div className="border p-4 rounded">
              <h3 className="font-semibold mb-2">Launch Requirements</h3>
              <ul className="space-y-2 text-sm">
                <li>• Minimum liquidity: 50 ETH</li>
                <li>• Lock period: 6 months</li>
                <li>• Max wallet: 2%</li>
                <li>• Max transaction: 1%</li>
              </ul>
            </div>
            <Button onClick={showComingSoon} className="w-full">View Requirements</Button>
          </div>
        </TabsContent>
      </Tabs>
    );
  }

  if (title === 'Pools') {
    return (
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <input 
            type="text" 
            placeholder="Search pools..." 
            className="p-2 border rounded"
          />
          <Button 
            onClick={showComingSoon}
            className="bg-vista-accent hover:bg-vista-accent-hover"
          >
            Connect Wallet
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pool</TableHead>
                <TableHead>APY</TableHead>
                <TableHead>TVL</TableHead>
                <TableHead>Volume</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>XP/ETH</TableCell>
                <TableCell>12.5%</TableCell>
                <TableCell>$2.3M</TableCell>
                <TableCell>$450K</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>XP/USDC</TableCell>
                <TableCell>8.2%</TableCell>
                <TableCell>$1.8M</TableCell>
                <TableCell>$320K</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>XP/BTC</TableCell>
                <TableCell>15.3%</TableCell>
                <TableCell>$3.1M</TableCell>
                <TableCell>$680K</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }

  if (title === 'DAO') {
    return (
      <Tabs defaultValue="proposals" className="w-full">
        <TabsList className="w-full bg-vista-window border-b border-vista-border">
          <TabsTrigger value="proposals" className="data-[state=active]:bg-white">Proposals</TabsTrigger>
          <TabsTrigger value="voting" className="data-[state=active]:bg-white">Voting Power</TabsTrigger>
          <TabsTrigger value="treasury" className="data-[state=active]:bg-white">Treasury</TabsTrigger>
        </TabsList>
        
        <TabsContent value="proposals" className="p-4">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Active Proposals</h3>
              <div className="space-y-4 mt-4">
                <div className="border p-4 rounded">
                  <h4 className="font-medium">XIP-001: Increase Privacy Pool Sizes</h4>
                  <p className="text-sm text-gray-600 mt-1">Proposal to add larger privacy pools of 500 ETH and 1000 ETH</p>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" onClick={showComingSoon}>Vote For</Button>
                    <Button size="sm" variant="outline" onClick={showComingSoon}>Vote Against</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="voting" className="p-4">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Your Voting Power</h3>
              <p className="text-2xl font-bold">0 XP</p>
              <Button 
                onClick={showComingSoon}
                className="w-full mt-4 bg-vista-accent hover:bg-vista-accent-hover"
              >
                Connect Wallet to View
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="treasury" className="p-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Treasury Assets</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>XP Balance:</span>
                <span className="font-medium">1,000,000 XP</span>
              </div>
              <div className="flex justify-between">
                <span>ETH Balance:</span>
                <span className="font-medium">500 ETH</span>
              </div>
              <div className="flex justify-between">
                <span>USDC Balance:</span>
                <span className="font-medium">$750,000</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    );
  }

  return (
    <div className="p-4">
      <Button onClick={showComingSoon}>
        Coming Soon
      </Button>
    </div>
  );
};