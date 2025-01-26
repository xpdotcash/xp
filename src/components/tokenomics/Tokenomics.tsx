import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { DollarSign, Percent } from 'lucide-react';

export const Tokenomics = () => {
  return (
    <div className="p-6 bg-white">
      <Card className="border-2 border-vista-accent">
        <CardHeader className="bg-vista-accent text-white">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <DollarSign className="w-6 h-6" />
            XP Tokenomics
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-vista-accent">Ticker</h3>
              <p className="text-2xl font-bold">$XP</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-vista-accent">Total Supply</h3>
              <p className="text-2xl font-bold">100,000,000</p>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-vista-accent" />
                <h3 className="text-lg font-semibold text-vista-accent">Buy Tax</h3>
              </div>
              <p className="text-2xl font-bold text-green-600">0%</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-vista-accent" />
                <h3 className="text-lg font-semibold text-vista-accent">Sell Tax</h3>
              </div>
              <p className="text-2xl font-bold text-green-600">0%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};