import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'React 18의 새로운 기능들',
      excerpt: 'React 18에서 추가된 새로운 기능들을 살펴보고 실제 사용법을 알아봅니다. Concurrent Features, Automatic Batching, Suspense on the Server 등 주요 업데이트 내용을 다룹니다.',
      date: '2024-01-15',
      category: 'React',
      readTime: '8분',
      tags: ['React', 'JavaScript', 'Frontend'],
    },
    {
      id: 2,
      title: 'TypeScript 타입 시스템 완벽 가이드',
      excerpt: 'TypeScript의 타입 시스템을 깊이 있게 다루어 안전한 코드 작성법을 배워봅니다. 제네릭, 유니온 타입, 인터섹션 타입 등 고급 타입 기능을 포함합니다.',
      date: '2024-01-10',
      category: 'TypeScript',
      readTime: '12분',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
    },
    {
      id: 3,
      title: 'Tailwind CSS로 모던 UI 만들기',
      excerpt: 'Tailwind CSS를 활용하여 빠르고 효율적으로 모던한 UI를 구성하는 방법을 소개합니다. 컴포넌트 설계와 반응형 디자인 패턴을 다룹니다.',
      date: '2024-01-05',
      category: 'CSS',
      readTime: '6분',
      tags: ['CSS', 'Tailwind', 'Design'],
    },
    {
      id: 4,
      title: 'Next.js 13 App Router 완벽 가이드',
      excerpt: 'Next.js 13의 새로운 App Router를 사용하여 서버 컴포넌트 기반의 애플리케이션을 구축하는 방법을 알아봅니다.',
      date: '2023-12-28',
      category: 'Next.js',
      readTime: '15분',
      tags: ['Next.js', 'React', 'Full-stack'],
    },
    {
      id: 5,
      title: '웹 성능 최적화 실전 팁',
      excerpt: '실제 프로덕션 환경에서 웹 애플리케이션의 성능을 최적화하는 다양한 기법들을 소개합니다. 번들 크기 최적화, 이미지 최적화, 캐싱 전략 등을 다룹니다.',
      date: '2023-12-20',
      category: 'Performance',
      readTime: '10분',
      tags: ['Performance', 'Optimization', 'Web'],
    },
    {
      id: 6,
      title: 'Git 워크플로우와 협업 전략',
      excerpt: '효율적인 Git 워크플로우를 구축하고 팀 협업을 원활하게 하는 방법을 알아봅니다. Git Flow, GitHub Flow, 그리고 브랜치 전략을 다룹니다.',
      date: '2023-12-15',
      category: 'Git',
      readTime: '7분',
      tags: ['Git', 'Collaboration', 'Workflow'],
    },
  ]

  const categories = ['전체', 'React', 'TypeScript', 'CSS', 'Next.js', 'Performance', 'Git']

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">블로그</h1>
        <p className="text-xl text-gray-600">
          개발 경험과 학습한 내용을 공유합니다
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Post Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <span className="text-4xl">📝</span>
            </div>

            {/* Post Content */}
            <div className="p-6">
              {/* Category and Date */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                <Link
                  to={`/blog/${post.id}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Read More */}
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                더 읽기 →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50">
            이전
          </button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded">1</button>
          <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">2</button>
          <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">3</button>
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
            다음
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Blog 