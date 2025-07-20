import { useParams, Link } from 'react-router-dom'

const BlogPost = () => {
  const { id } = useParams()

  // 실제로는 API에서 데이터를 가져와야 합니다
  const post = {
    id: 1,
    title: 'React 18의 새로운 기능들',
    content: `
      <h2>React 18 소개</h2>
      <p>React 18은 React의 최신 메이저 버전으로, 많은 새로운 기능과 개선사항을 포함하고 있습니다. 이번 포스트에서는 React 18의 주요 새로운 기능들을 살펴보겠습니다.</p>
      
      <h3>1. Concurrent Features</h3>
      <p>Concurrent Features는 React의 가장 중요한 새로운 기능 중 하나입니다. 이를 통해 React는 렌더링 작업을 중단하고 나중에 재개할 수 있게 되었습니다.</p>
      
      <pre><code>// React 18 이전
const root = ReactDOM.render(&lt;App /&gt;, container);

// React 18
const root = ReactDOM.createRoot(container);
root.render(&lt;App /&gt;);</code></pre>
      
      <h3>2. Automatic Batching</h3>
      <p>Automatic Batching은 여러 상태 업데이트를 하나의 리렌더링으로 묶어서 성능을 향상시킵니다.</p>
      
      <h3>3. Suspense on the Server</h3>
      <p>서버 사이드 렌더링에서도 Suspense를 사용할 수 있게 되었습니다. 이를 통해 더 나은 로딩 상태 관리가 가능합니다.</p>
      
      <h2>실제 사용 예시</h2>
      <p>다음은 React 18의 새로운 기능들을 활용한 실제 예시 코드입니다:</p>
      
      <pre><code>import { startTransition, useTransition } from 'react';

function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  
  function handleClick() {
    startTransition(() => {
      setCount(c => c + 1);
    });
  }
  
  return (
    &lt;div&gt;
      {isPending && &lt;Spinner /&gt;}
      &lt;button onClick={handleClick}&gt;
        Count: {count}
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>마이그레이션 가이드</h2>
      <p>기존 React 17 프로젝트를 React 18로 마이그레이션하는 방법을 알아보겠습니다:</p>
      
      <ol>
        <li>React 18 설치</li>
        <li>createRoot 사용으로 변경</li>
        <li>Strict Mode 활성화</li>
        <li>새로운 기능들 점진적 도입</li>
      </ol>
      
      <h2>결론</h2>
      <p>React 18은 성능과 사용자 경험을 크게 향상시키는 많은 새로운 기능들을 제공합니다. 특히 Concurrent Features는 React의 미래를 위한 중요한 기반이 될 것입니다.</p>
    `,
    date: '2024-01-15',
    category: 'React',
    readTime: '8분',
    tags: ['React', 'JavaScript', 'Frontend'],
    author: '홍길동',
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-gray-700">홈</Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/blog" className="hover:text-gray-700">블로그</Link>
          </li>
          <li>/</li>
          <li className="text-gray-900">{post.title}</li>
        </ol>
      </nav>

      {/* Article Header */}
      <article className="bg-white rounded-lg shadow-sm border p-8">
        {/* Title and Meta */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium">{post.author[0]}</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">프론트엔드 개발자</p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
            <span className="text-6xl">📝</span>
          </div>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-8 pt-8 border-t">
          <h3 className="text-sm font-medium text-gray-900 mb-3">태그</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-8 pt-8 border-t bg-gray-50 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-medium text-xl">{post.author[0]}</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{post.author}</h3>
              <p className="text-gray-600 mb-3">
                프론트엔드 개발자로 3년간 웹 애플리케이션을 개발하고 있습니다. 
                React, TypeScript, Next.js 등 모던 웹 기술에 익숙하며, 
                사용자 경험을 중시하는 개발을 지향합니다.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  더 많은 포스트 보기
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">관련 포스트</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'TypeScript 타입 시스템 완벽 가이드',
              excerpt: 'TypeScript의 타입 시스템을 깊이 있게 다루어 안전한 코드 작성법을 배워봅니다.',
              date: '2024-01-10',
            },
            {
              title: 'Next.js 13 App Router 완벽 가이드',
              excerpt: 'Next.js 13의 새로운 App Router를 사용하여 서버 컴포넌트 기반의 애플리케이션을 구축하는 방법을 알아봅니다.',
              date: '2023-12-28',
            },
          ].map((relatedPost, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <Link to="/blog/2" className="hover:text-blue-600 transition-colors">
                  {relatedPost.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">{relatedPost.excerpt}</p>
              <div className="text-sm text-gray-500">{relatedPost.date}</div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default BlogPost 