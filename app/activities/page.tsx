'use client';
import Link from 'next/link';

export default function ActivitiesPage() {
  const activities = [
    { title: 'Exclusive Club', desc: 'Join our elite community of models and projects. Network, collaborate, and grow together.', icon: '👑' },
    { title: 'Study Tours', desc: 'Educational trips to blockchain conferences and Web3 hubs worldwide.', icon: '🎓' },
    { title: 'Summit Events', desc: 'Annual blockchain summits featuring keynotes, panels, and networking.', icon: '🎤' },
    { title: 'Exhibitions', desc: 'Showcase your talent at major crypto exhibitions and trade shows.', icon: '✨' }
  ];

  return (
    <div className="min-h-screen bg-gradient">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-purple-600">SIRENFLOW</Link>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/projects" className="text-gray-600 hover:text-purple-600 transition-colors">Projects</Link>
              <Link href="/models" className="text-gray-600 hover:text-purple-600 transition-colors">Models</Link>
              <Link href="/activities" className="text-purple-600">Activities</Link>
            </div>
            <button className="px-6 py-2.5 gradient-purple text-white rounded-full text-sm font-semibold">Connect Wallet</button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-4">What We Offer</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Activities</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">Exclusive events and opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((a, i) => (
              <div key={i} className="glass-card p-8">
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{a.title}</h3>
                <p className="text-gray-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
