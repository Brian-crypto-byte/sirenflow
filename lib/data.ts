// Temporary in-memory data store (replace with database later)

export interface Model {
  id: string;
  name: string;
  bio: string;
  avatarUrl: string;
  specialties: string[];
  voteCount: number;
  verified: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  budget: string;
  status: 'open' | 'in_progress' | 'completed';
  requirements: string;
}

export const modelsData: Model[] = [
  { id: '1', name: '方悦柔', bio: 'Web3 KOL & Model', avatarUrl: '/avatars/1.jpg', specialties: ['Fashion', 'Web3'], voteCount: 2847, verified: true },
  { id: '2', name: 'cici', bio: 'Crypto Influencer', avatarUrl: '/avatars/2.jpg', specialties: ['DeFi', 'NFT'], voteCount: 2156, verified: true },
  { id: '3', name: 'leela', bio: 'Blockchain Advocate', avatarUrl: '/avatars/3.jpg', specialties: ['Marketing', 'Community'], voteCount: 1923, verified: false },
  { id: '4', name: 'sophia', bio: 'Digital Artist', avatarUrl: '/avatars/4.jpg', specialties: ['NFT', 'Art'], voteCount: 1847, verified: true },
  { id: '5', name: 'emma', bio: 'Tech Content Creator', avatarUrl: '/avatars/5.jpg', specialties: ['Content', 'Social'], voteCount: 1654, verified: false },
  { id: '6', name: 'olivia', bio: 'Metaverse Explorer', avatarUrl: '/avatars/6.jpg', specialties: ['Gaming', 'VR'], voteCount: 1432, verified: true },
];

export const projectsData: Project[] = [
  { id: '1', title: 'UniSwap V4 Marketing Campaign', description: 'Promote the launch of UniSwap V4', budget: '$120,000', status: 'open', requirements: 'Web3 experience, large following' },
  { id: '2', title: 'OpenSea NFT Collection Launch', description: 'Launch exclusive NFT collection', budget: '$85,000', status: 'open', requirements: 'NFT knowledge, creative content' },
  { id: '3', title: 'Aave DeFi Education Series', description: 'Create educational content about DeFi', budget: '$65,000', status: 'in_progress', requirements: 'DeFi expertise, video production' },
  { id: '4', title: 'Polygon zkEVM Ambassador', description: 'Represent Polygon in community events', budget: '$95,000', status: 'open', requirements: 'Public speaking, technical knowledge' },
  { id: '5', title: 'Chainlink Oracle Integration', description: 'Demonstrate oracle use cases', budget: '$55,000', status: 'open', requirements: 'Smart contract knowledge' },
  { id: '6', title: 'The Sandbox Metaverse Event', description: 'Host virtual event in The Sandbox', budget: '$75,000', status: 'completed', requirements: 'Metaverse experience, event planning' },
];
