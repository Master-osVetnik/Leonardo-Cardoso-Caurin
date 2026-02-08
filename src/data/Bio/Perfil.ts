import type { LocalizedText } from '../types'
import { t } from '../types'

// ====================================
// TYPES
// ====================================

export interface PerfilDTO {
  avatar: string
  fullName: string
  firstName: string
  lastName: string
  resume: LocalizedText
  description: LocalizedText
  birthday: string
  professionalBio: LocalizedText
  personalBio: LocalizedText
  teacherBio: LocalizedText
  professionalHistory: {
    programmer: LocalizedText
    general: LocalizedText
  }
}

// ====================================
// DATA
// ====================================

const Perfil: PerfilDTO = {
  avatar: '/images/Perfil/Leonardo.jpg',
  fullName: 'Leonardo Cardoso Caurin',
  firstName: 'Leonardo',
  lastName: 'Cardoso Caurin',
  birthday: '18/09/2001',

  resume: t(
    'Desenvolvedor Full-stack apaixonado por criar soluções web modernas e escaláveis. Experiência com Vue.js, React, Node.js e TypeScript.',
    'Full-stack developer passionate about creating modern and scalable web solutions. Experience with Vue.js, React, Node.js and TypeScript.'
  ),

  description: t(
    'Sou um desenvolvedor full-stack com experiência em diversas tecnologias web. Tenho paixão por criar interfaces intuitivas e APIs robustas. Além do desenvolvimento, atuo como professor compartilhando conhecimento sobre programação e tecnologia.',
    'I\'m a full-stack developer with experience in various web technologies. I\'m passionate about creating intuitive interfaces and robust APIs. Beyond development, I work as a teacher sharing knowledge about programming and technology.'
  ),

  professionalBio: t(
    'Como desenvolvedor, tenho experiência sólida em tecnologias front-end e back-end. Trabalho com frameworks modernos como Vue.js, React e Angular no front-end, e Node.js com TypeScript no back-end. Tenho experiência com bancos de dados SQL e NoSQL, arquitetura de APIs RESTful e práticas de DevOps. Sempre busco escrever código limpo, testável e bem documentado.',
    'As a developer, I have solid experience in front-end and back-end technologies. I work with modern frameworks like Vue.js, React and Angular on the front-end, and Node.js with TypeScript on the back-end. I have experience with SQL and NoSQL databases, RESTful API architecture and DevOps practices. I always strive to write clean, testable and well-documented code.'
  ),

  personalBio: t(
    'Nascido em São Paulo, sou apaixonado por tecnologia desde criança. Nos momentos livres, gosto de explorar novas tecnologias, contribuir para projetos open source e estudar sobre design e experiência do usuário. Acredito que a tecnologia tem o poder de transformar vidas e estou sempre buscando maneiras de usá-la para o bem.',
    'Born in São Paulo, I\'ve been passionate about technology since childhood. In my free time, I enjoy exploring new technologies, contributing to open source projects and studying design and user experience. I believe technology has the power to transform lives and I\'m always looking for ways to use it for good.'
  ),

  teacherBio: t(
    'Como professor, tenho experiência em ensinar programação e desenvolvimento web para iniciantes e profissionais em transição de carreira. Acredito em uma abordagem prática e orientada a projetos, onde os alunos aprendem construindo aplicações reais. Meu objetivo é tornar o aprendizado de programação acessível e engajante para todos.',
    'As a teacher, I have experience teaching programming and web development to beginners and career-transitioning professionals. I believe in a practical, project-oriented approach where students learn by building real applications. My goal is to make learning programming accessible and engaging for everyone.'
  ),

  professionalHistory: {
    programmer: t(
      'Iniciei minha jornada na programação com HTML e CSS, evoluindo para JavaScript e TypeScript. Hoje trabalho como desenvolvedor full-stack, criando aplicações web completas com foco em performance e experiência do usuário. Participei de projetos de marketing digital, e-commerce e sistemas corporativos.',
      'I started my programming journey with HTML and CSS, evolving to JavaScript and TypeScript. Today I work as a full-stack developer, creating complete web applications focused on performance and user experience. I participated in digital marketing, e-commerce and corporate system projects.'
    ),
    general: t(
      'Minha trajetória profissional começou no marketing digital, onde descobri a programação como ferramenta para criar soluções melhores para os clientes. Essa experiência me deu uma visão única sobre como a tecnologia pode impulsionar negócios. Transitei para o desenvolvimento web e desde então venho construindo soluções que combinam design, usabilidade e código de qualidade.',
      'My professional journey started in digital marketing, where I discovered programming as a tool to create better solutions for clients. This experience gave me a unique perspective on how technology can drive businesses. I transitioned to web development and since then I\'ve been building solutions that combine design, usability and quality code.'
    ),
  },
}

export default Perfil