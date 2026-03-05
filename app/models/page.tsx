'use client';
import Link from 'next/link';

export default function ModelsPage() {
  const models = [
    { name: 'Sophia Chen', votes: 2847, verified: true, specialty: 'Fashion Model' },
    { name: 'Emma Liu', votes: 2156, verified: true, specialty: 'Influencer' },
    { name: 'Olivia Wang', votes: 1923, verified: true, specialty: 'Content Creator' },
    { name: 'Ava Zhang', votes: 1654, verified: true, specialty: 'Brand Ambassador' },
    { name: 'Isabella Li', votes: 1432, verified: true, specialty: 'Fashion Model' },
    { name: 'Mia Yang', votes: 1287, verified: true, specialty: 'Influencer' },
    { name: 'Charlotte Wu', votes: 1098, verified: false, specialty: 'Model' },
    { name: 'Amelia Zhao', votes: 967, verified: false, specialty: 'Creator' },
    { name: 'Harper Lin', votes: 845, verified: false, specialty: 'Model' },
    { name: 'Evelyn Xu', votes: 723, verified: false, specialty: 'Influencer' },
    { name: 'Abigail Sun', votes: 612, verified: false, specialty: 'Creator' },
    { name: 'Emily Zhou', votes: 534, verified: false, specialty: 'Model' },
  ];

  return (
    <div className="min-h-screen bg-gradient">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-purple-600">SIRENFLOW</Link>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/projects" className="text-gray-600 hover:text-purple-600 transition-colors">Projects</Link>
              <Link href="/models" className="text-purple-600">Models</Link>
              <Link href="/activities" className="text-gray-600 hover:text-purple-600 transition-colors">Activities</Link>
            </div>
            <button className="px-6 py-2.5 gradient-purple text-white rounded-full text-sm font-semibold">Connect Wallet</button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-4">Our Talent</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Models</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">Verified creators ready to collaborate</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {models.map((m, i) => (
              <div key={i} className="glass-card p-6 text-center cursor-pointer">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <div className="font-semibold text-gray-900">{m.name}</div>
                  {m.verified && <span className="text-purple-500 text-sm">✓</span>}
                </div>
                <div className="text-xs text-gray-400 mb-2">{m.specialty}</div>
                <div className="text-sm text-gray-600 font-medium">{m.votes.toLocaleString()} votes</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
