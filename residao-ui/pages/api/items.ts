// pages/api/items.ts

import { NextApiRequest, NextApiResponse } from 'next';

const items = [
  { id: 1, name: 'Handcrafted Table', description: 'A beautiful handcrafted table.', type: 'goods' },
  { id: 2, name: 'Gardening Service', description: 'Expert gardening service.', type: 'services' },
  { id: 3, name: 'Vintage Lamp', description: 'A unique vintage lamp.', type: 'goods' },
  { id: 4, name: 'Plumbing Service', description: 'Reliable plumbing services.', type: 'services' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(items);
}
