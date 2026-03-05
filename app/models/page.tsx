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
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">SIRENFLOW</Link>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
              <Link href="/projects" className="hover:text-purple-600">Projects</Link>
              <Link href="/models" className="text-purple-600">Models</Link>
              <Link href="/activities" className="hover:text-purple-600">Activities</Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm font-medium text-gray-700 hover:text-purple-600">Sign in</button>
              <button className="px-5 py-2.5 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700">
                Get started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Featured Models</h1>
            <p className="text-xl text-gray-600">Vote for your favorite Web3 models</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model: any) => (
              <div key={model.id} className="bg-white rounded-3xl border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600"></div>
                    <div>
                      <h3 className="font-bold text-gray-900">{model.name}</h3>
                      <p className="text-sm text-gray-500">{model.specialties?.[0]}</p>
                    </div>
                  </div>
                  {model.verified && (
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium">✓</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4">{model.bio}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">{model.voteCount} votes</span>
                  <button className="px-5 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700">
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
