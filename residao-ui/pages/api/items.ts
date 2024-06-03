// pages/api/items.ts

import { NextApiRequest, NextApiResponse } from 'next';

const items = [
  { id: 1, name: 'Handcrafted Table', description: 'A beautiful handcrafted table.', type: 'goods', image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '200.00' },
  { id: 2, name: 'Gardening Service', description: 'Expert gardening service.', type: 'services', image: 'https://plus.unsplash.com/premium_photo-1678832237885-ef157b15b8ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '50.00' },
  { id: 3, name: 'Vintage Lamp', description: 'A unique vintage lamp.', type: 'goods', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '75.00' },
  { id: 4, name: 'Plumbing Service', description: 'Reliable plumbing services.', type: 'services', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '100.00' },
  { id: 5, name: 'Bespoke Chair', description: 'A bespoke chair crafted to perfection.', type: 'goods', image: 'https://images.unsplash.com/photo-1562113530-57ba467cea38?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '150.00' },
  { id: 6, name: 'Electrician Service', description: 'Professional electrical installation and repair.', type: 'services', image: 'https://plus.unsplash.com/premium_photo-1682086495085-0a73efeac2b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '80.00' },
  { id: 7, name: 'Modern Sofa', description: 'A stylish and comfortable modern sofa.', type: 'goods', image: 'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '300.00' },
  { id: 8, name: 'House Cleaning', description: 'Thorough and reliable house cleaning services.', type: 'services', image: 'https://images.unsplash.com/photo-1527515673510-8aa78ce21f9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '60.00' },
  { id: 9, name: 'Rustic Bed', description: 'A rustic bed made from reclaimed wood.', type: 'goods', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '400.00' },
  { id: 10, name: 'Painting Service', description: 'Professional painting service for your home.', type: 'services', image: 'https://plus.unsplash.com/premium_photo-1663091832341-cdd716557fa0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '90.00' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(items);
}
