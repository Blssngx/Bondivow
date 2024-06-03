import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { Layer } from '@/components/RoundedDrawerNav';
import { Icons } from '@/components/icons';
import ItemCard from '@/components/item-card';

interface Item {
  id: number;
  name: string;
  description: string;
  type: 'goods' | 'services';
  image: string;
  price: string;
}

const FeedPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [activeTab, setActiveTab] = useState<'goods' | 'services'>('goods');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get('/api/items'); // Replace with your actual API endpoint
      setItems(response.data);
    };

    fetchItems();
  }, []);

  const filteredItems = items
    .filter(item => item.type === activeTab)
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Layer>
      <div className="min-h-screen rounded-3xl p-2 bg-gray-100">
        <div className="flex mb-2">
          <button
            className={classNames(
              'px-4 py-2 rounded-full transition-colors flex items-center justify-center',
              activeTab === 'goods' ? 'text-black bg-black rounded-full px-3 py-3' : 'text-white'
            )}
            onClick={() => setActiveTab('goods')}
          >
            <Icons.goods
              fillColor={activeTab === 'goods' ? 'white' : 'black'}
              className="w-5 h-5"
            />
            {activeTab === 'goods' && (
              <span
                className={`${activeTab === 'goods' ? 'text-white' : 'text-black'} font-bold text-xs uppercase ml-1`}
              >
                Goods
              </span>
            )}
          </button>
          <button
            className={classNames(
              'px-4 py-2 rounded-full transition-colors flex items-center justify-center ml-2',
              activeTab === 'services' ? 'text-black bg-black rounded-full px-3 py-3' : 'text-white'
            )}
            onClick={() => setActiveTab('services')}
          >
            <Icons.services
              fillColor={activeTab === 'services' ? 'white' : 'black'}
              className="w-5 h-5"
            />
            {activeTab === 'services' && (
              <span
                className={`${activeTab === 'services' ? 'text-white' : 'text-black'} font-bold text-xs uppercase ml-1`}
              >
                Services
              </span>
            )}
          </button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search items..."
            className="w-full p-2 rounded-full border border-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {filteredItems.map(item => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </Layer>
  );
};

export default FeedPage;
