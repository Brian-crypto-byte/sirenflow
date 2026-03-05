import Link from 'next/link';

async function getProjects() {
  const res = await fetch('http://localhost:3000/api/projects', { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-white relative">
      {/* 背景视频 */}
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
          <source src="https://www.miss.live/images/bannerPC.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10">
      {/* 导航栏 - 精确模仿 MoonPay */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-8 py-5">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-[22px] font-bold text-gray-900 tracking-tight">SIRENFLOW</Link>
            <div className="hidden lg:flex space-x-10 text-[15px] font-medium text-gray-700">
              <Link href="/projects" className="hover:text-gray-900 transition-colors">Projects</Link>
              <Link href="/models" className="hover:text-gray-900 transition-colors">Models</Link>
              <Link href="/activities" className="hover:text-gray-900 transition-colors">Activities</Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-[15px] font-medium text-gray-700 hover:text-gray-900 transition-colors">Sign in</button>
              <button className="px-6 py-2.5 bg-[#7c3aed] text-white rounded-full text-[15px] font-semibold hover:bg-[#6d28d9] transition-all">
                Get started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - 精确模仿 MoonPay */}
      <section className="pt-40 pb-24 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-[64px] leading-[1.1] font-bold mb-6 text-gray-900 tracking-tight">
            The best way to connect models with Web3 projects
          </h1>
          <p className="text-[20px] leading-relaxed text-gray-600 mb-12 max-w-[700px] mx-auto">
            Discover opportunities, showcase talent, and build the future of Web3 together.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/projects" className="px-8 py-4 bg-[#7c3aed] text-white rounded-full text-[16px] font-semibold hover:bg-[#6d28d9] transition-all shadow-sm">
              Browse Projects
            </Link>
            <Link href="/models" className="px-8 py-4 bg-gray-100 text-gray-900 rounded-full text-[16px] font-semibold hover:bg-gray-200 transition-all">
              View Models
            </Link>
          </div>
        </div>
      </section>

      {/* 项目卡片 - 横向滚动 */}
      <section className="pb-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="overflow-x-auto pb-6 -mx-8 px-8 scrollbar-hide">
            <div className="flex gap-6 w-max">
              {projects.map((project: any) => (
                <div key={project.id} className="w-[420px] bg-white rounded-[32px] border border-gray-200 p-10 hover:shadow-2xl transition-all">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-[24px] flex items-center justify-center mb-8">
                    <span className="text-4xl">💼</span>
                  </div>
                  <h3 className="text-[28px] font-bold text-gray-900 mb-4 leading-tight">{project.title}</h3>
                  <p className="text-[16px] leading-relaxed text-gray-600 mb-8">{project.description}</p>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[32px] font-bold text-[#7c3aed]">{project.budget}</span>
                    <span className={`px-4 py-2 rounded-full text-[13px] font-semibold ${
                      project.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <Link href="/projects" className="block w-full py-4 bg-[#7c3aed] text-white rounded-full text-center text-[16px] font-semibold hover:bg-[#6d28d9] transition-all">
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
