'use client';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    { id: 'uniswap', name: 'UniSwap', desc: 'Leading DEX Protocol', budget: '$50,000', models: 24, status: 'Active' },
    { id: 'opensea', name: 'OpenSea', desc: 'NFT Marketplace', budget: '$80,000', models: 32, status: 'VIP' },
    { id: 'aave', name: 'Aave', desc: 'DeFi Lending Protocol', budget: '$35,000', models: 18, status: 'Active' },
    { id: 'polygon', name: 'Polygon', desc: 'Layer 2 Scaling', budget: '$120,000', models: 45, status: 'VIP' },
    { id: 'chainlink', name: 'Chainlink', desc: 'Oracle Network', budget: '$65,000', models: 28, status: 'Active' },
    { id: 'sandbox', name: 'The Sandbox', desc: 'Metaverse Platform', budget: '$90,000', models: 36, status: 'Active' },
  ];

  return (
    <div className="min-h-screen bg-gradient">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-purple-600">SIRENFLOW</Link>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/projects" className="text-purple-600">Projects</Link>
              <Link href="/models" className="text-gray-600 hover:text-purple-600 transition-colors">Models</Link>
              <Link href="/activities" className="text-gray-600 hover:text-purple-600 transition-colors">Activities</Link>
            </div>
            <button className="px-6 py-2.5 gradient-purple text-white rounded-full text-sm font-semibold">Connect Wallet</button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-4">Featured</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">Web3 projects looking for talent</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(p => (
              <div key={p.id} className="glass-card p-8 cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{p.name}</div>
                    <div className="text-sm text-gray-500">{p.desc}</div>
                  </div>
                  <div className={`px-3 py-1 text-xs rounded-full font-semibold ${
                    p.status === 'Active' ? 'bg-green-100 text-green-700' :
                    p.status === 'VIP' ? 'bg-purple-100 text-purple-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>{p.status}</div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-500">Budget <span className="text-gray-900 font-semibold">{p.budget}</span></div>
                  <div className="text-gray-500">{p.models} <span className="text-gray-900 font-semibold">models</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
