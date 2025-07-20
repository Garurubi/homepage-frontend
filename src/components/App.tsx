import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from 'components/Layout'
import Home from 'pages/Home'
import Resume from 'pages/Resume'
import Blog from 'pages/Blog'
import BlogPost from 'pages/BlogPost'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App 