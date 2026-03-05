import Link from 'next/link';

async function getProjects() {
  const res = await fetch('http://localhost:3000/api/projects', { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">SIRENFLOW</Link>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
              <Link href="/projects" className="text-purple-600">Projects</Link>
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

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Active Projects</h1>
            <p className="text-xl text-gray-600">Discover Web3 opportunities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project: any) => (
              <div key={project.id} className="bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'open' ? 'bg-green-100 text-green-700' :
                    project.status === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status.replace('_', ' ')}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-2xl font-bold text-purple-600">{project.budget}</span>
                  <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700">
                    Apply Now
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
