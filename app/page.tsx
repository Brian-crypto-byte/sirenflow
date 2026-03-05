import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient relative overflow-hidden">
      {/* 背景视频 */}
      <div className="fixed inset-0 z-0 opacity-50">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://www.miss.live/images/bannerPC.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative z-10">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-purple-600">SIRENFLOW</Link>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
              <Link href="/projects" className="hover:text-purple-600 transition-colors">Projects</Link>
              <Link href="/models" className="hover:text-purple-600 transition-colors">Models</Link>
              <Link href="/activities" className="hover:text-purple-600 transition-colors">Activities</Link>
            </div>
            <button className="px-6 py-2.5 gradient-purple text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4 text-xs font-bold tracking-widest text-purple-600 uppercase">Web3 × Beauty</div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
            Beauty is<br/>
            <span className="gradient-text">Productivity</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Connecting models with Web3 projects. Empowering both sides.
          </p>
          
          {/* 数据卡片 */}
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="glass-card p-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">12</div>
              <div className="text-sm text-gray-500 font-medium">Models</div>
            </div>
            <div className="glass-card p-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">6</div>
              <div className="text-sm text-gray-500 font-medium">Projects</div>
            </div>
            <div className="glass-card p-8">
              <div className="text-5xl font-bold gradient-text mb-2">$440K</div>
              <div className="text-sm text-gray-500 font-medium">Total Budget</div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex justify-center gap-4">
            <Link href="/models" className="px-8 py-4 gradient-purple text-white rounded-full font-semibold hover:shadow-xl transition-all">
              I'm a Model
            </Link>
            <Link href="/projects" className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-semibold hover:border-purple-300 transition-all">
              I'm a Project
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
