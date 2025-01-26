import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { toast } from 'sonner';

export const Calculator = () => {
  const [investment, setInvestment] = useState('1000');
  const [stakingDays, setStakingDays] = useState([30]);
  
  const calculateReturns = (days: number) => {
    const baseAPY = 125000; // Start with 125,000% base APY
    const multiplier = Math.pow(days / 30, 3); // Cubic growth based on days
    const adjustedAPY = baseAPY * (1 + (multiplier * 1000)); // Dramatic increase over time
    
    const dailyRate = adjustedAPY / 365;
    const monthlyRate = dailyRate * 30;
    
    return {
      apy: adjustedAPY.toLocaleString(undefined, { maximumFractionDigits: 2 }),
      daily: dailyRate.toLocaleString(undefined, { maximumFractionDigits: 2 }),
      monthly: monthlyRate.toLocaleString(undefined, { maximumFractionDigits: 2 }),
    };
  };

  const returns = calculateReturns(stakingDays[0]);

  return (
    <div className="w-full h-[340px] p-4">
      <h2 className="text-2xl font-bold text-vista-accent mb-4">Staking Calculator</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Investment Amount ($XP)</label>
          <input 
            type="number" 
            className="w-full p-2 border rounded" 
            placeholder="Enter amount"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Staking Period: {stakingDays[0]} days</label>
          <Slider 
            value={stakingDays}
            onValueChange={setStakingDays}
            max={365} 
            step={1}
            className="py-2"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>30 days</span>
            <span>1 year</span>
          </div>
        </div>

        <div className="bg-green-50 p-3 rounded-lg space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="font-medium">APY</span>
            <span className="text-green-600 font-bold">{returns.apy}%</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Daily Returns</span>
            <span className="text-green-600 font-bold">{returns.daily}%</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Monthly Returns</span>
            <span className="text-green-600 font-bold">{returns.monthly}%</span>
          </div>
        </div>

        <Button 
          onClick={() => toast.success("Coming soon! Get ready for incredible staking rewards!")}
          className="w-full bg-vista-accent hover:bg-vista-accent-hover"
        >
          Connect Wallet to Start Earning
        </Button>
      </div>
    </div>
  );
};