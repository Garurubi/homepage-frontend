import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            안녕하세요! 👋
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            프론트엔드 개발자입니다. 사용자 경험을 중시하며 
            깔끔하고 효율적인 코드를 작성하는 것을 좋아합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resume"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              이력서 보기
            </Link>
            <Link
              to="/blog"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              블로그 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          기술 스택
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'React', icon: '⚛️' },
            { name: 'TypeScript', icon: '📘' },
            { name: 'Tailwind CSS', icon: '🎨' },
            { name: 'Node.js', icon: '🟢' },
          ].map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <div className="font-medium text-gray-900">{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">최근 블로그 포스트</h2>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            모두 보기 →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'React 18의 새로운 기능들',
              excerpt: 'React 18에서 추가된 새로운 기능들을 살펴보고 실제 사용법을 알아봅니다.',
              date: '2024-01-15',
            },
            {
              title: 'TypeScript 타입 시스템 완벽 가이드',
              excerpt: 'TypeScript의 타입 시스템을 깊이 있게 다루어 안전한 코드 작성법을 배워봅니다.',
              date: '2024-01-10',
            },
            {
              title: 'Tailwind CSS로 모던 UI 만들기',
              excerpt: 'Tailwind CSS를 활용하여 빠르고 효율적으로 모던한 UI를 구성하는 방법을 소개합니다.',
              date: '2024-01-05',
            },
          ].map((post, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500">{post.date}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white rounded-lg shadow-sm border">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            연락하기
          </h2>
          <p className="text-gray-600 mb-6">
            프로젝트 협업이나 궁금한 점이 있으시면 언제든 연락주세요!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:your.email@example.com"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              이메일
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 