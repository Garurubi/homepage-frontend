import { useState } from 'react'

interface ResumeData {
  name: string
  email: string
  phone: string
  github: string
  summary: string
  skills: {
    frontend: string[]
    backend: string[]
    tools: string[]
  }
  experience: Array<{
    company: string
    position: string
    period: string
    description: string[]
  }>
  education: {
    degree: string
    school: string
    period: string
  }
  projects: Array<{
    title: string
    tech: string
    description: string
  }>
  certificates: Array<{
    name: string
    date: string
  }>
}

const Resume = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: '정재희',
    email: 'jjee3156@gmail.com',
    phone: '010-4455-3156',
    github: 'https://github.com/Garurubi',
    summary: '3년간의 프론트엔드 개발 경험을 바탕으로 사용자 중심의 웹 애플리케이션을 개발하고 있습니다. React, TypeScript, Next.js 등 모던 웹 기술에 익숙하며, 깔끔하고 유지보수가 용이한 코드 작성을 지향합니다. 팀 협업을 중요시하며, 새로운 기술 학습에 대한 열정이 많습니다.',
    skills: {
      frontend: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Styled Components'],
      backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'],
      tools: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'Webpack']
    },
    experience: [
      {
        company: 'ABC 테크',
        position: '프론트엔드 개발자',
        period: '2022.03 - 현재',
        description: [
          'React와 TypeScript를 활용한 웹 애플리케이션 개발',
          '사용자 경험 개선을 위한 UI/UX 최적화',
          '성능 최적화 및 코드 리팩토링',
          '팀 내 코드 리뷰 및 기술 공유'
        ]
      },
      {
        company: 'XYZ 스타트업',
        position: '주니어 개발자',
        period: '2021.01 - 2022.02',
        description: [
          'JavaScript와 React를 활용한 웹 서비스 개발',
          '반응형 웹 디자인 구현',
          'API 연동 및 데이터 처리'
        ]
      }
    ],
    education: {
      degree: '컴퓨터공학과',
      school: 'OOO 대학교',
      period: '2017.03 - 2021.02'
    },
    projects: [
      {
        title: 'E-커머스 플랫폼',
        tech: 'React, TypeScript, Node.js, MongoDB',
        description: '온라인 쇼핑몰 플랫폼을 개발했습니다. 사용자 인증, 상품 관리, 결제 시스템 등을 구현했으며, 반응형 디자인으로 모바일 환경도 지원합니다.'
      },
      {
        title: '태스크 관리 앱',
        tech: 'React, Firebase, Tailwind CSS',
        description: '실시간 협업이 가능한 태스크 관리 애플리케이션을 개발했습니다. 드래그 앤 드롭 기능과 실시간 업데이트를 구현했습니다.'
      }
    ],
    certificates: [
      { name: '정보처리기사', date: '2020.12' },
      { name: 'AWS Certified Developer', date: '2023.06' }
    ]
  })

  const handleSave = () => {
    setIsEditing(false)
    // 실제로는 API 호출이나 로컬 스토리지에 저장
    console.log('이력서 저장됨:', resumeData)
  }

  const handleCancel = () => {
    setIsEditing(false)
    // 원래 데이터로 복원
  }

  const updateField = (field: string, value: any) => {
    setResumeData(prev => ({ ...prev, [field]: value }))
  }

  const updateSkills = (category: keyof typeof resumeData.skills, skills: string[]) => {
    setResumeData(prev => ({
      ...prev,
      skills: { ...prev.skills, [category]: skills }
    }))
  }

  const updateExperience = (index: number, field: string, value: any) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }))
  }

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        company: '',
        position: '',
        period: '',
        description: ['']
      }]
    }))
  }

  const removeExperience = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border p-8">
        {/* Header with Edit Button */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-center flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">이력서</h1>
            <p className="text-gray-600">AI 백엔드 엔지니어</p>
          </div>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  저장
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  취소
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                편집
              </button>
            )}
          </div>
        </div>

        {/* Personal Info */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
            개인 정보
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">이름</p>
              {isEditing ? (
                <input
                  type="text"
                  value={resumeData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              ) : (
                <p className="font-medium">{resumeData.name}</p>
              )}
            </div>
            <div>
              <p className="text-gray-600">이메일</p>
              {isEditing ? (
                <input
                  type="email"
                  value={resumeData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              ) : (
                <p className="font-medium">{resumeData.email}</p>
              )}
            </div>
            <div>
              <p className="text-gray-600">전화번호</p>
              {isEditing ? (
                <input
                  type="tel"
                  value={resumeData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              ) : (
                <p className="font-medium">{resumeData.phone}</p>
              )}
            </div>
            <div>
              <p className="text-gray-600">GitHub</p>
              {isEditing ? (
                <input
                  type="url"
                  value={resumeData.github}
                  onChange={(e) => updateField('github', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              ) : (
                <a
                  href={resumeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  {resumeData.github.replace('https://', '')}
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
            자기소개
          </h2>
          {isEditing ? (
            <textarea
              value={resumeData.summary}
              onChange={(e) => updateField('summary', e.target.value)}
              className="w-full p-3 border rounded-md h-32 resize-none"
              placeholder="자기소개를 입력하세요..."
            />
          ) : (
            <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
          )}
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
            기술 스택
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">프론트엔드</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={resumeData.skills.frontend.join(', ')}
                  onChange={(e) => updateSkills('frontend', e.target.value.split(', ').filter(s => s.trim()))}
                  className="w-full p-2 border rounded-md"
                  placeholder="React, TypeScript, JavaScript..."
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">백엔드 & 데이터베이스</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={resumeData.skills.backend.join(', ')}
                  onChange={(e) => updateSkills('backend', e.target.value.split(', ').filter(s => s.trim()))}
                  className="w-full p-2 border rounded-md"
                  placeholder="Node.js, Express, MongoDB..."
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">도구 & 기타</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={resumeData.skills.tools.join(', ')}
                  onChange={(e) => updateSkills('tools', e.target.value.split(', ').filter(s => s.trim()))}
                  className="w-full p-2 border rounded-md"
                  placeholder="Git, Docker, AWS..."
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-2xl font-semibold text-gray-900">경력</h2>
            {isEditing && (
              <button
                onClick={addExperience}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
              >
                + 경력 추가
              </button>
            )}
          </div>
          <div className="space-y-6">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-4">
                {isEditing && (
                  <button
                    onClick={() => removeExperience(index)}
                    className="float-right text-red-600 hover:text-red-800 text-sm"
                  >
                    삭제
                  </button>
                )}
                <div className="flex justify-between items-start mb-2">
                  {isEditing ? (
                    <div className="flex-1 space-y-2">
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateExperience(index, 'company', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="회사명"
                      />
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => updateExperience(index, 'position', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="직책"
                      />
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => updateExperience(index, 'period', e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="기간"
                      />
                    </div>
                  ) : (
                    <>
                      <h3 className="font-semibold text-gray-900">{exp.company} - {exp.position}</h3>
                      <span className="text-gray-500 text-sm">{exp.period}</span>
                    </>
                  )}
                </div>
                {isEditing ? (
                  <div className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <input
                        key={descIndex}
                        type="text"
                        value={desc}
                        onChange={(e) => {
                          const newDescription = [...exp.description]
                          newDescription[descIndex] = e.target.value
                          updateExperience(index, 'description', newDescription)
                        }}
                        className="w-full p-2 border rounded-md"
                        placeholder="업무 설명"
                      />
                    ))}
                    <button
                      onClick={() => {
                        const newDescription = [...exp.description, '']
                        updateExperience(index, 'description', newDescription)
                      }}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      + 설명 추가
                    </button>
                  </div>
                ) : (
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
            학력
          </h2>
          <div>
            {isEditing ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={resumeData.education.degree}
                  onChange={(e) => setResumeData(prev => ({
                    ...prev,
                    education: { ...prev.education, degree: e.target.value }
                  }))}
                  className="w-full p-2 border rounded-md"
                  placeholder="학과"
                />
                <input
                  type="text"
                  value={resumeData.education.school}
                  onChange={(e) => setResumeData(prev => ({
                    ...prev,
                    education: { ...prev.education, school: e.target.value }
                  }))}
                  className="w-full p-2 border rounded-md"
                  placeholder="학교명"
                />
                <input
                  type="text"
                  value={resumeData.education.period}
                  onChange={(e) => setResumeData(prev => ({
                    ...prev,
                    education: { ...prev.education, period: e.target.value }
                  }))}
                  className="w-full p-2 border rounded-md"
                  placeholder="재학 기간"
                />
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{resumeData.education.degree}</h3>
                  <span className="text-gray-500 text-sm">{resumeData.education.period}</span>
                </div>
                <p className="text-gray-600">{resumeData.education.school}</p>
              </>
            )}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
            주요 프로젝트
          </h2>
          <div className="space-y-6">
            {resumeData.projects.map((project, index) => (
              <div key={index}>
                {isEditing ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => {
                        const newProjects = [...resumeData.projects]
                        newProjects[index] = { ...project, title: e.target.value }
                        setResumeData(prev => ({ ...prev, projects: newProjects }))
                      }}
                      className="w-full p-2 border rounded-md font-semibold"
                      placeholder="프로젝트 제목"
                    />
                    <input
                      type="text"
                      value={project.tech}
                      onChange={(e) => {
                        const newProjects = [...resumeData.projects]
                        newProjects[index] = { ...project, tech: e.target.value }
                        setResumeData(prev => ({ ...prev, projects: newProjects }))
                      }}
                      className="w-full p-2 border rounded-md text-gray-600"
                      placeholder="사용 기술"
                    />
                    <textarea
                      value={project.description}
                      onChange={(e) => {
                        const newProjects = [...resumeData.projects]
                        newProjects[index] = { ...project, description: e.target.value }
                        setResumeData(prev => ({ ...prev, projects: newProjects }))
                      }}
                      className="w-full p-2 border rounded-md text-gray-700"
                      placeholder="프로젝트 설명"
                      rows={3}
                    />
                  </div>
                ) : (
                  <>
                    <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-2">{project.tech}</p>
                    <p className="text-gray-700">{project.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
            자격증 & 수상
          </h2>
          <div className="space-y-2">
            {resumeData.certificates.map((cert, index) => (
              <div key={index} className="flex justify-between">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={cert.name}
                      onChange={(e) => {
                        const newCerts = [...resumeData.certificates]
                        newCerts[index] = { ...cert, name: e.target.value }
                        setResumeData(prev => ({ ...prev, certificates: newCerts }))
                      }}
                      className="flex-1 p-2 border rounded-md mr-2"
                      placeholder="자격증명"
                    />
                    <input
                      type="text"
                      value={cert.date}
                      onChange={(e) => {
                        const newCerts = [...resumeData.certificates]
                        newCerts[index] = { ...cert, date: e.target.value }
                        setResumeData(prev => ({ ...prev, certificates: newCerts }))
                      }}
                      className="w-24 p-2 border rounded-md"
                      placeholder="날짜"
                    />
                  </>
                ) : (
                  <>
                    <span className="text-gray-700">{cert.name}</span>
                    <span className="text-gray-500">{cert.date}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume 