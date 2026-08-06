import watchpartyImg from '../assets/watchparty.png';
import aiInvestmentImg from '../assets/ai_investment.png';
import cinetimeImg from '../assets/cinetime.png';

export const projects = [
  {
    id: '01',
    slug: 'watchparty',
    title: 'Watch Party Platform',
    category: 'ENTERTAINMENT / SOCIAL PLATFORM',
    year: '2026',
    role: 'UI/UX Designer',
    tools: ['Figma', 'UX Research', 'Prototyping', 'Design Systems'],
    description:
      'A real-time watch party platform designed to help friends stream videos together, chat seamlessly, and stay perfectly synchronized across devices through a simple and intuitive user experience.',
    deliverables: ['Information Architecture', 'Wireframes', 'High-Fidelity UI', 'Interactive Prototype'],
    image: watchpartyImg,
    link: 'https://watch-party-web-sand.vercel.app/',
  },
  {
    id: '02',
    slug: 'ai-investment',
    title: 'AI Investment Research Agent',
    category: 'ARTIFICIAL INTELLIGENCE / RESEARCH PLATFORM',
    year: '2026',
    role: 'UI/UX Designer',
    tools: ['Figma', 'UX Research', 'AI Product Design', 'Prototyping'],
    description:
      'Designed an AI-powered investment research platform that helps users analyze companies through real-time market data, financial insights, and intelligent summaries, enabling faster and more informed investment decisions.',
    deliverables: ['AI Workflow Architecture', 'Prompt & Response UI', 'Data Visualization', 'Interactive Prototype'],
    image: aiInvestmentImg,
    link: 'https://ai-investment-research-agent-frtnd.vercel.app/',
  },
  {
    id: '03',
    slug: 'cinetime',
    title: 'CineTime',
    category: 'ENTERTAINMENT / STREAMING PLATFORM',
    year: '2026',
    role: 'UI/UX Designer',
    tools: ['Figma', 'UX Research', 'Prototyping', 'Responsive Design'],
    description:
      'Designed a modern movie discovery platform that helps users explore trending films, discover new releases, and access detailed movie information through a clean, intuitive, and responsive user experience.',
    deliverables: ['Responsive Grid Layout', 'Streaming Architecture', 'Design System', 'Interactive Prototype'],
    image: cinetimeImg,
    link: 'https://cinetime-two.vercel.app/',
  },
];
