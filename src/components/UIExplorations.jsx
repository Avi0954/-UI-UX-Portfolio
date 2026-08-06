import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, ChevronLeft } from 'lucide-react';

import watchpartyImg from '../assets/watchparty.png';
import wpDesktopLive from '../assets/wp_desktop_live.png';
import wpLoadingChecklist from '../assets/wp_loading_checklist.png';
import wpLoadingVibes from '../assets/wp_loading_vibes.png';
import wpChatDrawer from '../assets/wp_chat_drawer.png';
import wpMobileChat from '../assets/wp_mobile_chat.png';
import wpMobileControls from '../assets/wp_mobile_controls.png';
import wpMobileUsers from '../assets/wp_mobile_users.png';

import aiInvestmentImg from '../assets/ai_investment.png';
import luminaRating from '../assets/lumina_rating.png';
import luminaThesis from '../assets/lumina_thesis.png';
import luminaAgentThinking from '../assets/lumina_agent_thinking.png';
import luminaSearch from '../assets/lumina_search.png';
import luminaMethodology from '../assets/lumina_methodology.png';
import luminaValuation from '../assets/lumina_valuation.png';
import luminaFinancials from '../assets/lumina_financials.png';
import luminaRisk from '../assets/lumina_risk.png';

import cinetimeImg from '../assets/cinetime.png';
import cinetimeHeroReleases from '../assets/cinetime_hero_releases.png';
import cinetimeCountdownCards from '../assets/cinetime_countdown_cards.png';
import cinetimeDiscoverMenu from '../assets/cinetime_discover_menu.png';
import cinetimeUpcoming from '../assets/cinetime_upcoming.png';
import cinetimeEmptyWatchlist from '../assets/cinetime_empty_watchlist.png';
import cinetimeFooter from '../assets/cinetime_footer.png';
import cinetimeMobileHero from '../assets/cinetime_mobile_hero.png';
import cinetimeMobileMenu from '../assets/cinetime_mobile_menu.png';
import cinetimeMobileExplore from '../assets/cinetime_mobile_explore.png';
import cinetimeMobileFooter from '../assets/cinetime_mobile_footer.png';
import cinetimeMobileDoomsday from '../assets/cinetime_mobile_doomsday.png';

import posterAnnabelleBlue from '../assets/poster_annabelle_blue.jpg';
import posterAnimeEve from '../assets/poster_anime_eve.jpg';
import posterAnnabelleRed from '../assets/poster_annabelle_red.jpg';
import posterAnnabelleHalloween from '../assets/poster_annabelle_halloween.png';
import posterScoobydoo from '../assets/poster_scoobydoo.jpg';
import posterCodNightvision from '../assets/poster_cod_nightvision.jpg';
import posterCodCaptainprice from '../assets/poster_cod_captainprice.jpg';
import posterBen10 from '../assets/poster_ben10.png';

const projectsExplorations = [
  {
    id: 'watchparty',
    title: 'Watch Party Platform',
    subtitle: 'Real-time streaming and collaborative viewing experience.',
    heroScreen: {
      title: 'Dashboard',
      image: watchpartyImg,
    },
    desktopScreens: [
      { title: 'Live Watch Party', image: wpDesktopLive },
      { title: 'Party Checklist', image: wpLoadingChecklist },
      { title: 'Sync & State Loader', image: wpLoadingVibes },
    ],
    mobileScreens: [
      { title: 'Chat & Activity', image: wpMobileChat },
      { title: 'Room Controls', image: wpMobileControls },
      { title: 'Participants', image: wpMobileUsers },
      { title: 'Message Drawer', image: wpChatDrawer },
    ],
  },
  {
    id: 'ai-investment',
    title: 'AI Investment Research Agent',
    subtitle: 'AI-powered platform for intelligent financial research and company analysis.',
    heroScreen: {
      title: 'Research Dashboard',
      image: aiInvestmentImg,
    },
    desktopScreens: [
      { title: 'Consensus Rating', image: luminaRating },
      { title: 'Agent Reasoning', image: luminaAgentThinking },
      { title: 'Financial Summary', image: luminaThesis },
    ],
    mobileScreens: [
      { title: 'Search & Query', image: luminaSearch },
      { title: 'Company Financials', image: luminaFinancials },
      { title: 'Valuation Model', image: luminaValuation },
      { title: 'Research Methodology', image: luminaMethodology },
      { title: 'Risk Assessment', image: luminaRisk },
    ],
  },
  {
    id: 'cinetime',
    title: 'CineTime',
    subtitle: 'Modern movie discovery and entertainment platform.',
    heroScreen: {
      title: 'Countdown Hub',
      image: cinetimeHeroReleases,
    },
    desktopScreens: [
      { title: 'Live Release Timers', image: cinetimeCountdownCards },
      { title: 'Discover & Mega Menu', image: cinetimeDiscoverMenu },
      { title: 'Upcoming Pipeline', image: cinetimeUpcoming },
      { title: 'Personal Watchlist', image: cinetimeEmptyWatchlist },
      { title: 'Global Footer Architecture', image: cinetimeFooter },
      { title: 'Entertainment Showcase', image: cinetimeImg },
    ],
    mobileScreens: [
      { title: 'Mobile Countdown', image: cinetimeMobileHero },
      { title: 'Navigation Drawer', image: cinetimeMobileMenu },
      { title: 'Explore & Brand Hub', image: cinetimeMobileExplore },
      { title: 'Platform Links', image: cinetimeMobileFooter },
      { title: 'Movie Details & Reminder', image: cinetimeMobileDoomsday },
    ],
  },
  {
    id: 'visual-design',
    title: 'Visual Design Collection',
    subtitle: 'Posters, event branding, and marketing creatives.',
    heroScreen: {
      title: 'Horror Flix Screening',
      image: posterAnnabelleBlue,
    },
    posterScreens: [
      { title: 'Anime Movie Night', image: posterAnimeEve },
      { title: 'Horror Flix · Crimson', image: posterAnnabelleRed },
      { title: 'Halloween Campus Special', image: posterAnnabelleHalloween },
      { title: 'Call of Duty · Night Vision', image: posterCodNightvision },
      { title: 'Call of Duty · Captain Price', image: posterCodCaptainprice },
      { title: 'Mystery Gang Tribute', image: posterScoobydoo },
      { title: 'Alien Force Evolution', image: posterBen10 },
    ],
  },
];

// Helper to flatten all screens for any project in consistent sequential order
const getFlattenedProjectScreens = (project) => {
  if (!project) return [];
  const list = [project.heroScreen];
  if (project.desktopScreens) list.push(...project.desktopScreens);
  if (project.mobileScreens) list.push(...project.mobileScreens);
  if (project.posterScreens) list.push(...project.posterScreens);
  return list;
};

export default function UIExplorations() {
  const [expandedId, setExpandedId] = useState('watchparty');
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    projectIndex: 0,
    screenIndex: 0,
  });

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Get all flattened images for active lightbox project
  const getCurrentProjectImages = useCallback(() => {
    const proj = projectsExplorations[lightbox.projectIndex];
    return getFlattenedProjectScreens(proj);
  }, [lightbox.projectIndex]);

  const openLightbox = (projIndex, scrIndex) => {
    setLightbox({
      isOpen: true,
      projectIndex: projIndex,
      screenIndex: scrIndex,
    });
  };

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const nextImage = useCallback(() => {
    const images = getCurrentProjectImages();
    if (!images.length) return;
    setLightbox((prev) => ({
      ...prev,
      screenIndex: (prev.screenIndex + 1) % images.length,
    }));
  }, [getCurrentProjectImages]);

  const prevImage = useCallback(() => {
    const images = getCurrentProjectImages();
    if (!images.length) return;
    setLightbox((prev) => ({
      ...prev,
      screenIndex: (prev.screenIndex - 1 + images.length) % images.length,
    }));
  }, [getCurrentProjectImages]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightbox.isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen, closeLightbox, nextImage, prevImage]);

  return (
    <section id="explorations" className="w-full bg-[#fbf9f9] text-[#1b1c1c] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#e4e2e2]">
            <div>
              <h2 className="font-display-lg text-[#1b1c1c] uppercase tracking-tight">
                UI Explorations
              </h2>
            </div>
            <p className="font-body-md text-[#5d5f5f] max-w-lg leading-relaxed text-left">
              Explore curated interface designs and visual systems, showcasing key user flows, interactions, and responsive experiences.
            </p>
          </div>
        </motion.header>

        {/* Interactive Accordion */}
        <div className="w-full border-t border-[#e4e2e2]">
          {projectsExplorations.map((project, pIndex) => {
            const isExpanded = expandedId === project.id;
            const desktopCount = project.desktopScreens?.length || 0;
            const mobileCount = project.mobileScreens?.length || 0;

            return (
              <div
                key={project.id}
                className="border-b border-[#e4e2e2] transition-colors"
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(project.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left py-6 md:py-8 flex items-start sm:items-center justify-between gap-4 group hover:bg-[#f5f3f3]/60 transition-colors px-3 -mx-3 rounded-md cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-5">
                    {/* Chevron Indicator */}
                    <div
                      className={`text-[#1b1c1c] transform transition-transform duration-300 mt-1 sm:mt-0 ${
                        isExpanded ? 'rotate-90' : 'rotate-0'
                      }`}
                    >
                      <ChevronRight size={20} />
                    </div>

                    <div>
                      <h3 className="font-headline-md text-xl sm:text-2xl md:text-3xl font-bold text-[#1b1c1c] tracking-tight group-hover:opacity-80 transition-opacity">
                        {project.title}
                      </h3>
                      <p className="font-body-md text-xs sm:text-sm text-[#5d5f5f] mt-1 font-normal">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono-label text-xs text-[#7e7576] shrink-0 uppercase tracking-widest hidden sm:inline-block">
                    {isExpanded ? 'Collapse' : 'Explore'}
                  </span>
                </button>

                {/* Accordion Content Drawer */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`content-${project.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25, delay: 0.05 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-14 md:pb-20 flex flex-col space-y-12 md:space-y-16">
                        
                        {/* 1. HERO SCREEN: Full-Width Showcase Image */}
                        <div className="w-full flex flex-col">
                          <div className="flex items-center justify-between mb-2.5">
                            <span className="font-mono-label text-xs text-[#5d5f5f] uppercase tracking-wider">
                              {project.heroScreen.title}
                            </span>
                            <span className="font-mono-label text-[11px] text-[#8e8e93] uppercase tracking-widest hidden sm:inline">
                              Hero Overview
                            </span>
                          </div>
                          <div
                            onClick={() => openLightbox(pIndex, 0)}
                            className="w-full aspect-[16/9] sm:aspect-[16/8.5] rounded-[12px] border border-[#e4e2e2] overflow-hidden bg-[#0e0e10] cursor-pointer group relative shadow-none"
                          >
                            <img
                              src={project.heroScreen.image}
                              alt={project.heroScreen.title}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                          </div>
                        </div>

                        {/* 2. DESKTOP SCREENS: Large Landscape Cards (2-Column Grid) */}
                        {project.desktopScreens && project.desktopScreens.length > 0 && (
                          <div className="flex flex-col space-y-4">
                            <div className="flex items-center gap-3 border-b border-[#e4e2e2] pb-2.5">
                              <span className="font-mono-label text-[11px] text-[#8e8e93] uppercase tracking-widest">
                                Desktop Experience
                              </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                              {project.desktopScreens.map((screen, dIdx) => (
                                <div key={`desktop-${dIdx}`} className="flex flex-col">
                                  <span className="font-mono-label text-xs text-[#5d5f5f] uppercase tracking-wider block mb-2">
                                    {screen.title}
                                  </span>
                                  <div
                                    onClick={() => openLightbox(pIndex, 1 + dIdx)}
                                    className="w-full aspect-[16/10] rounded-[12px] border border-[#e4e2e2] overflow-hidden bg-[#0e0e10] cursor-pointer group relative shadow-none"
                                  >
                                    <img
                                      src={screen.image}
                                      alt={screen.title}
                                      loading="lazy"
                                      decoding="async"
                                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 3. MOBILE SCREENS: Dedicated 3-Column Mobile Phone Gallery */}
                        {project.mobileScreens && project.mobileScreens.length > 0 && (
                          <div className="flex flex-col space-y-4 pt-2">
                            <div className="flex items-center gap-3 border-b border-[#e4e2e2] pb-2.5">
                              <span className="font-mono-label text-[11px] text-[#8e8e93] uppercase tracking-widest">
                                Mobile Experience
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                              {project.mobileScreens.map((screen, mIdx) => (
                                <div key={`mobile-${mIdx}`} className="flex flex-col">
                                  <span className="font-mono-label text-xs text-[#5d5f5f] uppercase tracking-wider block mb-2">
                                    {screen.title}
                                  </span>
                                  <div
                                    onClick={() => openLightbox(pIndex, 1 + desktopCount + mIdx)}
                                    className="w-full aspect-[9/14] sm:aspect-[9/15] rounded-[12px] border border-[#e4e2e2] overflow-hidden bg-[#121214] cursor-pointer group relative shadow-none flex items-center justify-center p-3 sm:p-4"
                                  >
                                    {/* Soft ambient backplate */}
                                    <img
                                      src={screen.image}
                                      alt=""
                                      aria-hidden="true"
                                      className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-25 scale-125 pointer-events-none"
                                    />
                                    {/* Phone Screen Filling 75-80% height with razor-sharp visibility */}
                                    <img
                                      src={screen.image}
                                      alt={screen.title}
                                      loading="lazy"
                                      decoding="async"
                                      className="relative z-10 w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none z-20" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 4. POSTER CREATIVES: 2-Column Responsive Showcase */}
                        {project.posterScreens && project.posterScreens.length > 0 && (
                          <div className="flex flex-col space-y-4">
                            <div className="flex items-center gap-3 border-b border-[#e4e2e2] pb-2.5">
                              <span className="font-mono-label text-[11px] text-[#8e8e93] uppercase tracking-widest">
                                Creative Branding &amp; Posters
                              </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                              {project.posterScreens.map((screen, pIdx) => (
                                <div key={`poster-${pIdx}`} className="flex flex-col">
                                  <span className="font-mono-label text-xs text-[#5d5f5f] uppercase tracking-wider block mb-2">
                                    {screen.title}
                                  </span>
                                  <div
                                    onClick={() => openLightbox(pIndex, 1 + desktopCount + mobileCount + pIdx)}
                                    className="w-full aspect-[4/5] sm:aspect-[3/4] rounded-[12px] border border-[#e4e2e2] overflow-hidden bg-[#0e0e10] cursor-pointer group relative shadow-none flex items-center justify-center"
                                  >
                                    <img
                                      src={screen.image}
                                      alt={screen.title}
                                      loading="lazy"
                                      decoding="async"
                                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[200] bg-[#0e0e10]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none"
          >
            {/* Top Bar: Title & Close Button */}
            <div
              className="flex items-center justify-between w-full max-w-6xl mx-auto pb-4 border-b border-[#2e2e33]"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <span className="font-mono-label text-xs text-[#8e8e93] uppercase tracking-widest block">
                  {projectsExplorations[lightbox.projectIndex]?.title}
                </span>
                <h4 className="font-headline-md text-base sm:text-lg font-bold text-[#ffffff] tracking-tight">
                  {getCurrentProjectImages()[lightbox.screenIndex]?.title}
                </h4>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close Lightbox"
                className="p-2 text-[#8e8e93] hover:text-[#ffffff] bg-[#1c1c1f] hover:bg-[#28282c] rounded-full transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Stage: Image & Prev/Next Controls */}
            <div
              className="flex-1 flex items-center justify-center my-4 relative max-w-6xl mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                type="button"
                onClick={prevImage}
                aria-label="Previous Image"
                className="absolute left-2 sm:left-4 z-10 p-3 text-[#ffffff] bg-[#1c1c1f]/80 hover:bg-[#28282c] rounded-full backdrop-blur-md transition-all cursor-pointer border border-[#333338]"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Display Image */}
              <div className="max-w-5xl max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-[12px] border border-[#2e2e33]">
                <img
                  src={getCurrentProjectImages()[lightbox.screenIndex]?.image}
                  alt={getCurrentProjectImages()[lightbox.screenIndex]?.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-[12px]"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next Image"
                className="absolute right-2 sm:right-4 z-10 p-3 text-[#ffffff] bg-[#1c1c1f]/80 hover:bg-[#28282c] rounded-full backdrop-blur-md transition-all cursor-pointer border border-[#333338]"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Bottom Counter */}
            <div
              className="flex justify-between items-center w-full max-w-6xl mx-auto pt-4 border-t border-[#2e2e33]"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-mono-label text-[11px] text-[#71717a] uppercase tracking-wider">
                [ ESC to Close · Arrow Keys to Navigate ]
              </span>
              <span className="font-mono-label text-[11px] text-[#8e8e93] tracking-widest">
                {lightbox.screenIndex + 1} / {getCurrentProjectImages().length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
