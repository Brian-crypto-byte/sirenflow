import Link from 'next/link';

async function getModels() {
  const res = await fetch('http://localhost:3000/api/models', { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function ModelsPage() {
  const models = await getModels();

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-purple-600">SIRENFLOW</Link>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
              <Link href="/projects" className="hover:text-purple-600 transition-colors">Projects</Link>
              <Link href="/models" className="text-purple-600">Models</Link>
              <Link href="/activities" className="hover:text-purple-600 transition-colors">Activities</Link>
            </div>
            <button className="px-6 py-2.5 gradient-purple text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Models</h1>
            <p className="text-lg text-gray-600">Vote for your favorite Web3 models</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model: any) => (
              <div key={model.id} className="glass-card p-6 hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full gradient-purple"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{model.name}</h3>
                      <p className="text-sm text-gray-500">{model.specialties?.[0] || 'Model'}</p>
                    </div>
                  </div>
                  {model.verified && (
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">✓ Verified</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4">{model.bio}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{model.voteCount} votes</span>
                  <button className="px-4 py-2 gradient-purple text-white rounded-full text-sm hover:shadow-lg transition-all">
                    Vote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
