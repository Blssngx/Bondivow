// pages/api/items.ts

import { NextApiRequest, NextApiResponse } from 'next';

const items = [
  { id: 1, name: 'Handcrafted Table', description: 'A beautiful handcrafted table.', type: 'goods', image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '200.00' },
  { id: 2, name: 'Gardening Service', description: 'Expert gardening service.', type: 'services', image: '/images/gardening.jpg', price: '50.00' },
  { id: 3, name: 'Vintage Lamp', description: 'A unique vintage lamp.', type: 'goods', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '75.00' },
  { id: 4, name: 'Plumbing Service', description: 'Reliable plumbing services.', type: 'services', image: '/images/plumbing.jpg', price: '100.00' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(items);
}
