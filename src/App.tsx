import { useState } from 'react';
import { ChevronDown, Globe, Menu, X, Search, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface NewsItem {
  id: number;
  date: string;
  title: string;
  image: string;
}

// --- Mock Data ---
const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    date: '24 March 2026',
    title: 'Official Announcement – Closing of the Pre-Qualification for Environmental Licensing 2025',
    image: 'https://picsum.photos/seed/tender/800/500',
  },
  {
    id: 2,
    date: '04 March 2026',
    title: 'Autoridade Nacional de Licenciamento Ambiental (ANLA) held the Promotion Roadshow for Environmental Protection',
    image: 'https://picsum.photos/seed/roadshow/800/500',
  },
  {
    id: 3,
    date: '06 February 2026',
    title: 'Autoridade Nacional de Licenciamento Ambiental (ANLA) held the Promotion Roadshow for Sustainable Development',
    image: 'https://picsum.photos/seed/event/800/500',
  },
  {
    id: 4,
    date: '04 February 2026',
    title: 'Following the launch of the second environmental public tender at the Energy and Environment Forum',
    image: 'https://picsum.photos/seed/launch/800/500',
  },
];

const NAV_ITEMS = [
  { name: 'HOME', href: '#' },
  { name: 'ABOUT US', href: '#', hasDropdown: true },
  { name: 'MINERAL', href: '#', hasDropdown: true },
  { name: 'ENVIRONMENTAL', href: '#', hasDropdown: true },
  { name: 'APPLICATION', href: '#', hasDropdown: true },
  { name: 'PUBLICATION', href: '#', hasDropdown: true },
  { name: 'FAQ', href: '#' },
];

// --- Components ---

const Header = () => (
  <header className="relative w-full bg-white overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400" />
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid)" />
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
      </svg>
    </div>

    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between relative z-10">
      {/* Left Logo (ANLA Logo - Second Photo) */}
      <div className="flex-shrink-0 mb-4 md:mb-0">
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center border-2 border-green-100 shadow-sm overflow-hidden p-1">
          <img 
            src="https://picsum.photos/seed/anla-logo/200/200" 
            alt="ANLA Logo" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Center Title */}
      <div className="text-center flex-1 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-800 tracking-tight leading-tight">
          Autoridade Nacional de Licenciamento Ambiental
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-2 font-medium italic">
          To be Highly RESPECTED Environmental Regulatory Authority in the Country and the Region
        </p>
      </div>

      {/* Right Logo (RDTL Coat of Arms - First Photo) */}
      <div className="flex-shrink-0 mt-4 md:mt-0">
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center border-2 border-red-100 shadow-sm overflow-hidden p-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Coat_of_arms_of_East_Timor.svg/1200px-Coat_of_arms_of_East_Timor.svg.png" 
            alt="Timor-Leste Coat of Arms" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </header>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#003366] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="group relative">
                <a
                  href={item.href}
                  className="px-4 py-4 text-sm font-semibold hover:bg-blue-800 transition-colors flex items-center gap-1 border-b-2 border-transparent hover:border-white"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={14} className="opacity-70" />}
                </a>
              </div>
            ))}
          </div>

          {/* Right Side: Language & Search */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-200 transition-colors">
              <img 
                src="https://flagcdn.com/w20/gb.png" 
                alt="English" 
                className="w-5 h-auto"
                referrerPolicy="no-referrer"
              />
              <span className="text-sm font-bold">ENG</span>
              <ChevronDown size={14} />
            </div>
            <button className="p-2 hover:bg-blue-800 rounded-full transition-colors">
              <Search size={18} />
            </button>
            <button 
              className="lg:hidden p-2 hover:bg-blue-800 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-blue-900 border-t border-blue-800"
          >
            <div className="px-4 py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-semibold hover:bg-blue-800 rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NewsCard = ({ item }: { item: NewsItem }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
  >
    <div className="relative aspect-video overflow-hidden group">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
      <div className="absolute top-2 right-2">
        <div className="bg-green-900/80 backdrop-blur-sm text-white p-1 rounded-full border border-white/20">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold">ANLA</div>
        </div>
      </div>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <span className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
        {item.date}
      </span>
      <h3 className="text-slate-800 font-bold text-sm md:text-base leading-snug line-clamp-3 hover:text-blue-700 cursor-pointer transition-colors">
        {item.title}
      </h3>
      <div className="mt-auto pt-4">
        <button className="text-blue-700 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
          READ MORE →
        </button>
      </div>
    </div>
  </motion.div>
);

const Footer = () => (
  <footer className="bg-[#002244] text-white pt-16 pb-8 mt-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* About Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-900 font-bold text-xs">ANLA</span>
            </div>
            <h4 className="font-bold text-lg tracking-tight">ANLA Timor-Leste</h4>
          </div>
          <p className="text-blue-100/70 text-sm leading-relaxed mb-6">
            The National Authority of Environmental Licensing (ANLA) is responsible for the management and regulation of environmental protection in Timor-Leste.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-blue-800/50 hover:bg-blue-700 rounded-full transition-colors"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-blue-800/50 hover:bg-blue-700 rounded-full transition-colors"><Twitter size={18} /></a>
            <a href="#" className="p-2 bg-blue-800/50 hover:bg-blue-700 rounded-full transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-l-4 border-blue-500 pl-3">Quick Links</h4>
          <ul className="space-y-3 text-sm text-blue-100/70">
            <li><a href="#" className="hover:text-white transition-colors">Mineral Potential</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Mining Licenses</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Environmental Regulations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Public Tenders</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Publications</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-l-4 border-blue-500 pl-3">Contact Us</h4>
          <ul className="space-y-4 text-sm text-blue-100/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-400 shrink-0" />
              <span>Palácio do Governo, Edifício n.º 1, Riba-Mar, Dili, Timor-Leste</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400 shrink-0" />
              <span>+670 331 7222</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400 shrink-0" />
              <span>info@anla.tl</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-l-4 border-blue-500 pl-3">Stay Updated</h4>
          <p className="text-sm text-blue-100/70 mb-4">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-blue-800/30 border border-blue-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-bold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-blue-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/50">
        <p>© 2026 Autoridade Nacional de Licenciamento Ambiental. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        {/* News Section Header */}
        <div className="mb-8">
          <div className="inline-block bg-[#003366] text-white px-6 py-3 font-bold text-lg rounded-t-md shadow-sm">
            RECENT NEWS
          </div>
          <div className="h-1 bg-[#003366] w-full" />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {NEWS_ITEMS.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white border-2 border-blue-900 text-blue-900 font-bold rounded-md hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-sm">
            VIEW ALL NEWS
          </button>
        </div>

        {/* Additional Section: Environmental Potential (Bento Grid Style) */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Timor-Leste Environmental Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 h-64 bg-green-900 rounded-2xl overflow-hidden relative group cursor-pointer">
              <img src="https://picsum.photos/seed/forest/1200/600" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Interactive Environmental Map</h3>
                <p className="text-green-100 text-sm max-w-md">Explore protected areas, biodiversity hotspots, and environmental monitoring zones.</p>
              </div>
            </div>
            <div className="h-64 bg-slate-800 rounded-2xl overflow-hidden relative group cursor-pointer">
              <img src="https://picsum.photos/seed/biodiversity/600/600" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">Biodiversity</h3>
                <p className="text-green-100 text-xs">Protecting the unique flora and fauna of the Coral Triangle.</p>
              </div>
            </div>
            <div className="h-64 bg-slate-800 rounded-2xl overflow-hidden relative group cursor-pointer">
              <img src="https://picsum.photos/seed/water/600/600" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">Water Resources</h3>
                <p className="text-green-100 text-xs">Monitoring water quality and sustainable management of watersheds.</p>
              </div>
            </div>
            <div className="md:col-span-2 h-64 bg-green-600 rounded-2xl overflow-hidden relative group cursor-pointer">
              <img src="https://picsum.photos/seed/licensing/1200/600" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Licensing Process</h3>
                <p className="text-green-100 text-sm max-w-md">Step-by-step guide to obtaining environmental licenses for development projects.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
