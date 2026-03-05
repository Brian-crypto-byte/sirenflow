import Link from 'next/link';

async function getProjects() {
  const res = await fetch('http://localhost:3000/api/projects', { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">SIRENFLOW</Link>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
              <Link href="/projects" className="hover:text-purple-600">Projects</Link>
              <Link href="/models" className="hover:text-purple-600">Models</Link>
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

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            The best way to connect<br/>models with Web3 projects
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Discover opportunities, showcase talent, and build the future of Web3 together.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/projects" className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700">
              Browse Projects
            </Link>
            <Link href="/models" className="px-8 py-4 bg-gray-100 text-gray-900 rounded-full font-semibold hover:bg-gray-200">
              View Models
            </Link>
          </div>
        </div>
      </section>

      {/* 项目展示卡片 - 横向滚动 */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-6 min-w-max">
              {projects.map((project: any) => (
                <div key={project.id} className="w-96 bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-3xl">💼</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-purple-600">{project.budget}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <Link href="/projects" className="block w-full py-3 bg-purple-600 text-white rounded-full text-center font-semibold hover:bg-purple-700">
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
