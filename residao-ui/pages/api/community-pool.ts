// pages/api/community-pool.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Example data - replace with actual logic to fetch from blockchain or database
  const poolData = {
    totalFunds: 10000,
    totalContributions: 5000,
    totalLoans: 2000,
    recentActivities: [
      { date: '2024-05-01', description: 'User A contributed 100 CELO' },
      { date: '2024-05-02', description: 'User B borrowed 50 CELO' },
      { date: '2024-05-03', description: 'User C repaid 20 CELO' },
    ],
  };

  res.status(200).json(poolData);
}
