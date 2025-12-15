<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greenwashing Playbook</title>
    <meta name="description" content="A strategic greenwashing playbook for marketers: risks, laws, archetypes, and a practical action plan to go from spin to substance.">
    
    <!-- 1. Load Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- 2. Load React & ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    
    <!-- 3. Load Babel (to compile React in the browser) -->
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <!-- Custom Styles for 3D Flip and Animations -->
    <style>
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* 3D Flip Utilities */
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        /* Smooth Scroll Reveal Animation */
        .fade-in-section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            will-change: opacity, visibility;
        }
        .fade-in-section.is-visible {
            opacity: 1;
            transform: none;
        }
    </style>
</head>
<body class="bg-[#E0E5EC]">
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect, useRef } = React;

        // --- Icons (Lucide Recreated) ---
        const IconWrapper = ({ children, size = 24, className = "" }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                {children}
            </svg>
        );

        const ArrowRight = (props) => <IconWrapper {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></IconWrapper>;
        const ShieldAlert = (props) => <IconWrapper {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></IconWrapper>;
        const Zap = (props) => <IconWrapper {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></IconWrapper>;
        const BarChart3 = (props) => <IconWrapper {...props}><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></IconWrapper>;
        const Menu = (props) => <IconWrapper {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></IconWrapper>;
        const X = (props) => <IconWrapper {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></IconWrapper>;
        const CheckCircle = (props) => <IconWrapper {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></IconWrapper>;
        const AlertTriangle = (props) => <IconWrapper {...props}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></IconWrapper>;
        const Eye = (props) => <IconWrapper {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></IconWrapper>;
        const MicOff = (props) => <IconWrapper {...props}><line x1="1" x2="23" y1="1" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/><line x1="12" x2="12" y1="19" y2="23"/><line x1="8" x2="16" y1="23" y2="23"/></IconWrapper>;
        const Info = (props) => <IconWrapper {...props}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></IconWrapper>;
        const Scale = (props) => <IconWrapper {...props}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></IconWrapper>;
        const FileText = (props) => <IconWrapper {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></IconWrapper>;
        const Gavel = (props) => <IconWrapper {...props}><path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></IconWrapper>;
        const DollarSign = (props) => <IconWrapper {...props}><line x1="12" x2="12" y1="1" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></IconWrapper>;
        const TrendingUp = (props) => <IconWrapper {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></IconWrapper>;
        const Users = (props) => <IconWrapper {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></IconWrapper>;
        const Search = (props) => <IconWrapper {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></IconWrapper>;
        const Lock = (props) => <IconWrapper {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></IconWrapper>;
        const HelpCircle = (props) => <IconWrapper {...props}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></IconWrapper>;
        const Tag = (props) => <IconWrapper {...props}><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></IconWrapper>;
        const RefreshCw = (props) => <IconWrapper {...props}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></IconWrapper>;
        const UserX = (props) => <IconWrapper {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" x2="22" y1="8" y2="13"/><line x1="22" x2="17" y1="8" y2="13"/></IconWrapper>;
        const Flag = (props) => <IconWrapper {...props}><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></IconWrapper>;


        // --- Components ---

        const NavItem = ({ active, label, onClick }) => (
            <button
                onClick={onClick}
                className={`relative group flex items-center justify-center w-full h-32 transition-all duration-300 ${
                active ? 'text-black font-bold' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[10px] tracking-wider uppercase origin-center">
                    {label}
                </span>
                {active && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-green-500 rounded-l-full" />
                )}
            </button>
        );

        const Section = ({ id, children, className = "" }) => (
            <section id={id} className={`min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 ${className}`}>
                {children}
            </section>
        );

        const SoftCard = ({ children, className = "", onClick }) => (
            <div 
                onClick={onClick}
                className={`bg-[#F0F0F3] rounded-[2rem] p-8 shadow-[-10px_-10px_30px_#FFFFFF,10px_10px_30px_#AEAEC040] transition-all duration-300 hover:shadow-[-5px_-5px_10px_#FFFFFF,5px_5px_10px_#AEAEC040] hover:scale-[1.01] ${className}`}
            >
                {children}
            </div>
        );

        const PillButton = ({ children, primary = false, onClick }) => (
            <button
                onClick={onClick}
                className={`
                flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1
                ${primary 
                    ? 'bg-black text-white shadow-lg hover:shadow-xl' 
                    : 'bg-[#F0F0F3] text-gray-700 shadow-[-5px_-5px_10px_#FFFFFF,5px_5px_10px_#AEAEC040] hover:shadow-[-2px_-2px_5px_#FFFFFF,2px_2px_5px_#AEAEC040]'
                }
                `}
            >
                {children}
            </button>
        );

        const ArchetypeCard = ({ title, type, icon: Icon, description, color, subtext, stat }) => (
            <div className="relative group perspective-1000 w-full md:w-[48%] lg:w-[23%] mb-6">
                <div className={`
                h-[500px] w-full bg-[#F0F0F3] rounded-[2.5rem] p-8 
                shadow-[-10px_-10px_30px_#FFFFFF,10px_10px_30px_#AEAEC040]
                flex flex-col justify-between items-start
                transition-all duration-500 group-hover:shadow-xl border border-transparent
                `}
                style={{ borderColor: color }}
                >
                <div className="w-full flex flex-col h-full">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shrink-0`} style={{ backgroundColor: color }}>
                    <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
                    <p className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-4">{type}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
                    
                    {stat && (
                        <div className="bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-white/50 mb-4 shadow-sm mt-auto">
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1">Reality Check</p>
                            <p className="text-xs font-bold text-gray-800 leading-tight">{stat}</p>
                        </div>
                    )}
                </div>
                
                <div className="w-full pt-6 border-t border-gray-200 mt-auto">
                    <span className="text-xs font-semibold block" style={{ color: color }}>
                        {subtext}
                    </span>
                </div>
                </div>
            </div>
        );

        // NEW: Interactive Flip Card Component - FIXED className
        const FlipCard = ({ frontTitle, frontIcon: FrontIcon, backText, backStat, color }) => {
            const [isFlipped, setIsFlipped] = useState(false);

            return (
                <div 
                    className="relative w-full h-64 perspective-1000 cursor-pointer group"
                    onClick={() => setIsFlipped(!isFlipped)}
                    onMouseEnter={() => setIsFlipped(true)}
                    onMouseLeave={() => setIsFlipped(false)}
                >
                    <div className={`w-full h-full relative transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                        {/* Front */}
                        <div className="absolute inset-0 backface-hidden bg-[#F0F0F3] rounded-2xl shadow-[-5px_-5px_10px_#FFFFFF,5px_5px_10px_#AEAEC040] flex flex-col items-center justify-center p-6 text-center border-2 border-transparent hover:border-gray-200 transition-colors">
                            <div className={`p-4 rounded-full mb-4 text-white shadow-lg`} style={{backgroundColor: color}}>
                                <FrontIcon size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">{frontTitle}</h3>
                            <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest flex items-center gap-1">
                                Tap to Reveal <ArrowRight size={12} />
                            </p>
                        </div>

                        {/* Back */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-900 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-center text-white">
                            <p className="text-3xl font-bold text-green-400 mb-2">{backStat}</p>
                            <p className="text-sm text-gray-300 leading-relaxed">{backText}</p>
                        </div>
                    </div>
                </div>
            );
        };

        const SinCard = ({ number, title, description, icon: Icon }) => (
            <div className="min-w-[300px] md:min-w-[350px] bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] mr-6 border border-white/50 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-6">
                <div className="bg-red-50 p-3 rounded-2xl text-red-500">
                    <Icon size={24} />
                </div>
                <span className="text-6xl font-black text-gray-100 font-serif -mt-4 opacity-50">{number}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        );

        const TrackerCard = ({ title, description, icon: Icon }) => (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                        <Icon size={20} />
                    </div>
                    <h4 className="font-bold text-gray-800">{title}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
        );

        const StatBar = ({ label, percentage, color }) => (
            <div className="mb-4">
                <div className="flex justify-between items-end mb-1">
                    <span className="text-sm font-medium text-gray-600">{label}</span>
                    <span className="text-sm font-bold text-gray-900">{percentage}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${percentage}%`, backgroundColor: color }}
                    ></div>
                </div>
            </div>
        );

        // Scroll Reveal Hook
        const useOnScreen = (options) => {
            const ref = useRef(null);
            const [isVisible, setIsVisible] = useState(false);

            useEffect(() => {
                const observer = new IntersectionObserver(([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Only trigger once
                    }
                }, options);

                if (ref.current) {
                    observer.observe(ref.current);
                }

                return () => {
                    if (ref.current) observer.unobserve(ref.current);
                };
            }, [ref, options]);

            return [ref, isVisible];
        };

        // Scroll Reveal Wrapper Component
        const ScrollReveal = ({ children, delay = 0 }) => {
            const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
            return (
                <div 
                    ref={ref} 
                    className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                    style={{ transitionDelay: `${delay}ms` }}
                >
                    {children}
                </div>
            );
        };

        // --- Main App ---

        const App = () => {
            const [activeSection, setActiveSection] = useState('home');
            const [menuOpen, setMenuOpen] = useState(false);

            // UPDATED: Added 'tracker' section
            const sections = [
                { id: 'home', label: 'Intro' },
                { id: 'gap', label: 'The Gap' },
                { id: 'risks', label: 'Risks' },
                { id: 'interactive', label: 'Silence' },
                { id: 'archetypes', label: 'Archetypes' },
                { id: 'sins', label: '7 Sins' },
                { id: 'tracker', label: 'Spectrum' },
                { id: 'regulations', label: 'Laws' },
                { id: 'playbook', label: 'Playbook' },
            ];

            const scrollToSection = (id) => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    // No longer setting activeSection here manually, let scroll spy handle it
                    setMenuOpen(false);
                }
            };

            // NEW: Scroll Spy implementation
            useEffect(() => {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setActiveSection(entry.target.id);
                            }
                        });
                    },
                    { 
                        root: null,
                        rootMargin: '-40% 0px -40% 0px', // Active when element is in middle of viewport
                        threshold: 0
                    }
                );

                sections.forEach(({ id }) => {
                    const element = document.getElementById(id);
                    if (element) observer.observe(element);
                });

                return () => {
                    sections.forEach(({ id }) => {
                        const element = document.getElementById(id);
                        if (element) observer.unobserve(element);
                    });
                };
            }, []);

            return (
                <div className="bg-[#E0E5EC] min-h-screen text-gray-800 font-sans selection:bg-green-200 selection:text-green-900 overflow-hidden flex relative">
                
                {/* --- Sidebar Navigation (Desktop) --- */}
                <nav className="hidden md:flex flex-col justify-between items-center w-24 h-screen fixed left-0 top-0 py-8 z-50 bg-[#E0E5EC]/80 backdrop-blur-md border-r border-white/30">
                    <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shrink-0">
                    G
                    </div>
                    
                    <div className="flex flex-col gap-2 h-full justify-center w-full py-4 overflow-hidden">
                    {sections.map((section) => (
                        <NavItem 
                        key={section.id}
                        label={section.label}
                        active={activeSection === section.id}
                        onClick={() => scrollToSection(section.id)}
                        />
                    ))}
                    </div>

                    <div className="text-[10px] font-bold text-gray-400 -rotate-90 whitespace-nowrap mb-4 shrink-0">
                    SCROLL
                    </div>
                </nav>

                {/* --- Mobile Navigation --- */}
                <div className="md:hidden fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-[#E0E5EC]/90 backdrop-blur-md border-b border-white/20">
                    <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold shadow-lg">G</div>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-gray-700">
                    {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden fixed inset-0 z-40 bg-[#E0E5EC] pt-24 px-6 overflow-y-auto">
                    {sections.map((section) => (
                        <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full text-left py-5 text-2xl font-bold border-b border-gray-300 ${activeSection === section.id ? 'text-green-600' : 'text-gray-800'}`}
                        >
                        {section.label}
                        </button>
                    ))}
                    </div>
                )}

                {/* --- Main Content Area --- */}
                <main className="flex-1 md:ml-24 overflow-y-auto h-screen scroll-smooth no-scrollbar">
                    
                    {/* SECTION 1: HERO */}
                    <Section id="home" className="relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-bl from-green-300/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                        
                        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="z-10 order-2 lg:order-1 pt-10 md:pt-0">
                            <ScrollReveal>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full mb-8 backdrop-blur-sm border border-white/50 shadow-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs font-bold tracking-widest uppercase text-gray-600">Strategic Briefing for Marketers</span>
                                </div>
                            </ScrollReveal>
                            
                            <ScrollReveal delay={200}>
                                <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-8">
                                Green <br/>
                                Is The <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">New Lie.</span>
                                </h1>
                            </ScrollReveal>
                            
                            <ScrollReveal delay={400}>
                                <p className="text-lg md:text-xl text-gray-600 max-w-md mb-10 leading-relaxed font-medium">
                                In an era of conscious consumers, sustainability is a make-or-break brand pillar.
                                <br/><br/>
                                We bridge the critical gap between <span className="font-bold text-gray-900">reality</span> and <span className="font-bold text-gray-900">perception</span>.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={600}>
                                <div className="flex flex-col sm:flex-row gap-4">
                                <PillButton primary onClick={() => scrollToSection('gap')}>
                                    Mind The Gap <ArrowRight size={18} />
                                </PillButton>
                                <PillButton onClick={() => scrollToSection('risks')}>
                                    Calculate Risks
                                </PillButton>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative h-[300px] lg:h-auto">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 bg-[#E0E5EC] rounded-full shadow-[inset_-10px_-10px_30px_#FFFFFF,inset_10px_10px_30px_#AEAEC040] flex items-center justify-center z-10">
                                    <span className="text-gray-400 font-bold text-lg md:text-xl">Perception</span>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 bg-green-500 rounded-full shadow-2xl flex items-center justify-center opacity-90 z-20 mix-blend-multiply transition-all duration-1000 hover:translate-x-[-30%] cursor-pointer">
                                    <span className="text-white font-bold text-lg md:text-xl">Reality</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Section>

                    {/* SECTION 2: THE GAP & VERIFICATION DATA */}
                    <Section id="gap">
                        <div className="max-w-6xl mx-auto w-full">
                            <div className="mb-12">
                                <ScrollReveal>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6">The Central Challenge</h2>
                                    <div className="w-20 h-2 bg-green-500 rounded-full mb-8"></div>
                                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
                                        The result is a <span className="font-bold text-gray-800">'Sustainability Gap'</span>—or as <span className="font-bold text-gray-900">Brand Finance</span> defines it, the <span className="font-bold text-gray-900">Sustainability Perceptions Gap (SPG)</span>.
                                    </p>
                                </ScrollReveal>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                                {/* New Data Viz: How Claims Are Verified */}
                                <ScrollReveal delay={200}>
                                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Search className="text-green-600" size={28} />
                                            <h3 className="text-2xl font-bold text-gray-800">The Verification Gap</h3>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-6">
                                            Survey of Indian marketing professionals: <br/>"How are your sustainability claims usually verified?"
                                        </p>
                                        
                                        <div className="space-y-1">
                                            <StatBar label="Third-party Certifications" percentage={30} color="#4ADE80" />
                                            <StatBar label="Legal Team Approval" percentage={22} color="#9CA3AF" />
                                            <StatBar label="Internal Team Assessment" percentage={20} color="#D1D5DB" />
                                            <StatBar label="We Don't Verify Them" percentage={15} color="#EF4444" />
                                            <StatBar label="Supplier Data" percentage={13} color="#E5E7EB" />
                                        </div>
                                        
                                        <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-100 flex gap-3">
                                            <AlertTriangle className="text-red-500 shrink-0" size={20} />
                                            <p className="text-xs text-red-600 font-semibold">
                                                15% of claims go live with zero verification. This is a massive legal liability.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <div className="flex flex-col gap-6">
                                    <ScrollReveal delay={300}>
                                        <SoftCard className="flex-1 flex flex-col justify-center">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-xl font-bold">SPV</h3>
                                                <span className="text-green-600 font-bold text-[10px] bg-green-100 px-2 py-1 rounded-full uppercase">Brand Finance Metric</span>
                                            </div>
                                            <h4 className="font-bold text-gray-800 mb-2">Sustainability Perceptions Value</h4>
                                            <p className="text-gray-500 text-sm mb-3">
                                                The financial value consumers attribute to a brand's commitment to ESG factors.
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                Quantifies the financial impact of reputation.
                                            </p>
                                        </SoftCard>
                                    </ScrollReveal>

                                    <ScrollReveal delay={400}>
                                        <SoftCard className="flex-1 flex flex-col justify-center">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-xl font-bold">SPG</h3>
                                                <span className="text-red-500 font-bold text-[10px] bg-red-100 px-2 py-1 rounded-full uppercase">Guidance / Gap</span>
                                            </div>
                                            <h4 className="font-bold text-gray-800 mb-2">Sustainability Perceptions Gap</h4>
                                            <p className="text-gray-500 text-sm mb-3">
                                                The difference between perceived value (SPV) and actual performance.
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                Indicates potential value creation opportunities or greenwashing risks.
                                            </p>
                                        </SoftCard>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* SECTION 3: RISKS - STAGGERED REVEAL SCROLL STORY */}
                    <Section id="risks" className="bg-[#D1D5DB]/30">
                        <div className="max-w-6xl mx-auto w-full">
                            <ScrollReveal>
                                <div className="mb-12 text-center md:text-left">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-4">The High Price</h2>
                                    <p className="text-xl text-gray-600">The industry is balanced on a tightrope between two dangerous extremes.</p>
                                </div>
                            </ScrollReveal>

                            {/* The Narrative Flow - Items reveal one by one */}
                            <div className="space-y-8">
                                
                                {/* 1. The Shocking Stat */}
                                <ScrollReveal delay={100}>
                                    <div className="bg-red-50/80 rounded-[2rem] p-8 border-l-8 border-red-500 shadow-md">
                                        <div className="flex items-start gap-4">
                                            <Users className="text-red-500 shrink-0 mt-1" size={32} />
                                            <div>
                                                <h4 className="text-2xl font-bold text-gray-800 mb-2">Trust Fallout</h4>
                                                <p className="text-lg text-gray-700">
                                                    <span className="font-black text-red-600 text-2xl">77%</span> of consumers would stop buying if caught greenwashing. 
                                                    <br/>A single exposé can shatter brand credibility instantly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* 2. The Financial Penalty */}
                                <ScrollReveal delay={400}>
                                    <div className="bg-orange-50/80 rounded-[2rem] p-8 border-l-8 border-orange-500 shadow-md ml-0 md:ml-12">
                                        <div className="flex items-start gap-4">
                                            <Gavel className="text-orange-500 shrink-0 mt-1" size={32} />
                                            <div>
                                                <h4 className="text-2xl font-bold text-gray-800 mb-2">Legal Reality</h4>
                                                <p className="text-lg text-gray-700">
                                                    Misleading claims are now illegal. 
                                                    <br/>CCPA fines up to <span className="font-bold text-orange-600">₹50 Lakhs</span> for repeat offenses. Ignorance is no longer a defense.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* 3. The Silent Cost */}
                                <ScrollReveal delay={700}>
                                    <div className="bg-gray-100 rounded-[2rem] p-8 border-l-8 border-gray-500 shadow-md ml-0 md:ml-24">
                                        <div className="flex items-start gap-4">
                                            <MicOff className="text-gray-500 shrink-0 mt-1" size={32} />
                                            <div>
                                                <h4 className="text-2xl font-bold text-gray-800 mb-2">The Cost of Silence</h4>
                                                <p className="text-lg text-gray-700">
                                                    Greenhushing leaves value on the table. 
                                                    <br/>Competitors own the narrative while you stay quiet. Investors assume you have something to hide.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                            </div>
                        </div>
                    </Section>

                    {/* NEW SECTION: INTERACTIVE FLIP CARDS */}
                    <Section id="interactive">
                        <div className="max-w-6xl mx-auto w-full">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Are We Silent?</h2>
                                <p className="text-gray-500">Tap cards to reveal the reality behind the fear.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <FlipCard 
                                    frontTitle="Fear of Scrutiny" 
                                    frontIcon={Eye} 
                                    color="#EF4444"
                                    backStat="70%"
                                    backText="of companies with strong credentials engage in greenhushing to avoid criticism."
                                />
                                <FlipCard 
                                    frontTitle="Uncertainty" 
                                    frontIcon={HelpCircle} 
                                    color="#F59E0B"
                                    backStat="No Data"
                                    backText="Lack of reliable data is the #1 cited barrier to honest messaging."
                                />
                                <FlipCard 
                                    frontTitle="Perfectionism" 
                                    frontIcon={Lock} 
                                    color="#607D8B"
                                    backStat="Progress > Perfection"
                                    backText="Stakeholders reward transparency about the journey, not just the destination."
                                />
                            </div>
                        </div>
                    </Section>

                    {/* SECTION 4: ARCHETYPES - FIXED LAYOUT */}
                    <Section id="archetypes">
                        <div className="max-w-7xl mx-auto w-full">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">Which one is your brand?</h2>
                                <p className="text-gray-500 text-lg">Four Brand Archetypes defined by Performance vs. Communication</p>
                            </div>
                            
                            <div className="flex flex-wrap justify-center gap-6">
                                <ArchetypeCard 
                                    title="Silent Green"
                                    type="High Performance / Low Talk"
                                    icon={MicOff}
                                    description="Doing good in silence. Often driven by fear of scrutiny or perfectionism."
                                    stat="70% of companies with strong credentials engage in this."
                                    subtext="RISK: Missed Opportunities"
                                    color="#607D8B"
                                />
                                <ArchetypeCard 
                                    title="Vocal Green"
                                    type="High Performance / High Talk"
                                    icon={CheckCircle}
                                    description="The Gold Standard. They walk the talk and communicate it openly. Authenticity builds trust."
                                    subtext="ASSET: High SPV & Trust"
                                    color="#4ADE80"
                                />
                                <ArchetypeCard 
                                    title="Opaque Brown"
                                    type="Low Performance / Low Talk"
                                    icon={Eye}
                                    description="Neither green nor transparent. Doing little and saying little. Breeds mistrust."
                                    subtext="RISK: Irrelevance"
                                    color="#795548"
                                />
                                <ArchetypeCard 
                                    title="Vocal Brown"
                                    type="Low Performance / High Talk"
                                    icon={ShieldAlert}
                                    description="The Greenwashers. All talk, no walk. Making false claims to appear friendly."
                                    subtext="RISK: Legal Action"
                                    color="#EF4444"
                                />
                            </div>
                        </div>
                    </Section>

                    {/* SECTION 5: 7 SINS */}
                    <Section id="sins" className="bg-green-50/50">
                        <div className="max-w-6xl mx-auto w-full">
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-4">The 7 Sins</h2>
                                    <p className="text-xl text-gray-600 max-w-lg">The Anatomy of Deception: 42% of green claims globally are exaggerated, false, or deceptive.</p>
                                </div>
                                <div className="hidden md:flex items-center gap-2 text-gray-400">
                                <span className="text-sm uppercase tracking-widest">Scroll</span>
                                <ArrowRight size={16} />
                                </div>
                            </div>

                            <div className="overflow-x-auto pb-12 -mx-6 px-6 md:mx-0 md:px-0 flex snap-x snap-mandatory scroll-smooth no-scrollbar">
                                <SinCard 
                                    number="01" 
                                    title="Hidden Trade-off" 
                                    icon={AlertTriangle}
                                    description="Highlighting one green attribute while ignoring other, more significant environmental harms." 
                                />
                                <SinCard 
                                    number="02" 
                                    title="No Proof" 
                                    icon={FileText}
                                    description="A claim that cannot be substantiated by easily accessible supporting information or third-party certification." 
                                />
                                <SinCard 
                                    number="03" 
                                    title="Vagueness" 
                                    icon={Info}
                                    description="Using terms so poorly defined or broad that their real meaning is likely to be misunderstood (e.g., 'all-natural')." 
                                />
                                <SinCard 
                                    number="04" 
                                    title="False Labels" 
                                    icon={ShieldAlert}
                                    description="Creating a false impression of third-party endorsement through fake or self-created 'certifications'." 
                                />
                                <SinCard 
                                    number="05" 
                                    title="Irrelevance" 
                                    icon={Zap}
                                    description="An environmental claim that may be truthful but is unimportant or unhelpful (e.g., 'CFC-free' when legally banned)." 
                                />
                                <SinCard 
                                    number="06" 
                                    title="Lesser of Two Evils" 
                                    icon={BarChart3}
                                    description="True within the product category but distracting from the greater environmental impacts of the category." 
                                />
                                <SinCard 
                                    number="07" 
                                    title="Fibbing" 
                                    icon={X}
                                    description="Making environmental claims that are simply false. The most direct and dangerous form of deception." 
                                />
                            </div>
                        </div>
                    </Section>

                    {/* NEW SECTION: SPECTRUM OF DECEPTION (PLANET TRACKER) */}
                    <Section id="tracker" className="bg-[#D1D5DB]/30">
                        <div className="max-w-6xl mx-auto w-full">
                            <div className="mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">The Spectrum of Deception</h2>
                                <p className="text-xl text-gray-600 max-w-2xl">
                                    Beyond the 7 Sins: <strong>Planet Tracker</strong> identifies six sophisticated forms of greenwashing that aim to deceive consumers and investors.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <TrackerCard 
                                    title="Greenlabelling" 
                                    icon={Tag}
                                    description="Using vague or unsubstantiated terms like 'natural' or 'eco-friendly' to imply sustainability without proof."
                                />
                                <TrackerCard 
                                    title="Greenhushing" 
                                    icon={MicOff}
                                    description="Deliberately under-reporting or hiding environmental data and credentials to avoid scrutiny."
                                />
                                <TrackerCard 
                                    title="Greencrowding" 
                                    icon={Users}
                                    description="Joining sustainability initiatives to blend in with genuinely green companies, moving at the pace of the slowest member."
                                />
                                <TrackerCard 
                                    title="Greenlighting" 
                                    icon={Zap}
                                    description="Highlighting one small, positive environmental feature to distract from overall unsustainable practices."
                                />
                                <TrackerCard 
                                    title="Greenrinsing" 
                                    icon={RefreshCw}
                                    description="Adjusting or pushing back sustainability targets before they are met, often increasing ambition to mask failure."
                                />
                                <TrackerCard 
                                    title="Greenshifting" 
                                    icon={UserX}
                                    description="Shifting responsibility for climate issues onto consumers, suggesting demand dictates harmful practices."
                                />
                            </div>
                        </div>
                    </Section>

                    {/* SECTION 6: LAWS */}
                    <Section id="regulations">
                        <div className="max-w-5xl mx-auto w-full">
                            <div className="mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Playing by the Rules</h2>
                                <p className="text-xl text-gray-600 max-w-3xl">
                                    India has implemented one of the world's strictest legal frameworks. Ignorance is no longer a defense.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {/* CCPA Card */}
                                <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Scale className="text-green-600" size={32} />
                                        <h3 className="text-2xl font-bold">CCPA Guidelines (2024)</h3>
                                    </div>
                                    
                                    <ul className="space-y-4 text-sm text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                                            <strong>Legal Definition:</strong> Greenwashing is now classified as a "misleading practice".
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                                            <strong>Liability:</strong> Extends to the brand, the ad agency, and the endorser.
                                        </li>
                                        <li className="bg-red-50 p-3 rounded-lg border border-red-100 mt-2">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Gavel className="text-red-500" size={16}/>
                                                <span className="font-bold text-red-700">Financial Penalties</span>
                                            </div>
                                            <div className="flex justify-between items-center text-red-800 font-mono text-sm">
                                                <span>First Offense:</span>
                                                <strong>₹10,00,000</strong>
                                            </div>
                                            <div className="flex justify-between items-center text-red-800 font-mono text-sm mt-1">
                                                <span>Repeat Offense:</span>
                                                <strong>₹50,00,000</strong>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* ASCI Card */}
                                <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Lock className="text-blue-600" size={32} />
                                        <h3 className="text-2xl font-bold">ASCI Guidelines</h3>
                                    </div>
                                    <ul className="space-y-4 text-sm text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full shrink-0"></span>
                                            Mandates honesty and clarity; scope of claims must be defined (product vs packaging).
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full shrink-0"></span>
                                            Prohibits misleading visuals that falsely imply green attributes.
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full shrink-0"></span>
                                            Requires claims to be substantiated by verifiable, independent evidence.
                                        </li>
                                    </ul>
                                    
                                    {/* NEW: ASCI 2024 Statistic Nugget */}
                                    <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
                                        <div className="flex items-start gap-3">
                                             <AlertTriangle className="text-orange-500 shrink-0 mt-1" size={18} />
                                             <div>
                                                 <p className="text-[10px] font-bold text-orange-600 uppercase tracking-wide mb-1">2024 Reality Check</p>
                                                 <p className="text-sm text-gray-700 leading-snug">
                                                     <span className="font-bold">100%</span> of ads reviewed by ASCI for greenwashing violations required modification due to lack of transparency.
                                                 </p>
                                             </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                                        <p className="font-bold text-gray-800 text-xs uppercase tracking-wide mb-1">Also Scrutinizing:</p>
                                        <p className="text-sm text-gray-600"><strong>SEBI</strong> is now scrutinizing ESG claims in investor reports (BRSR), linking marketing to accountability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* SECTION 7: PLAYBOOK */}
                    <Section id="playbook" className="bg-black text-white rounded-t-[3rem] mt-10">
                        <div className="max-w-5xl mx-auto w-full py-10">
                            <div className="text-center mb-16">
                                <div className="inline-block px-4 py-1 rounded-full border border-green-500/50 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
                                    Action Plan
                                </div>
                                <h2 className="text-4xl md:text-6xl font-bold mb-4">The Playbook</h2>
                                <p className="text-gray-400">Executing with Excellence</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20">
                                <div>
                                    <div className="mb-12">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center font-bold">1</div>
                                            <h3 className="text-2xl font-bold">Set the Tone & Policy</h3>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed pl-12">
                                            Establish clear, non-negotiable guidelines. Create an internal <strong>"Green Review Checklist"</strong> to vet every claim against the 7 Sins and legal requirements before it goes out.
                                        </p>
                                    </div>

                                    <div className="mb-12">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center font-bold">2</div>
                                            <h3 className="text-2xl font-bold">Champion Alignment</h3>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed pl-12">
                                            Tear down silos. Convene regular meetings between marketing, sustainability, R&D, and legal. Authenticity is a shared responsibility, not just a marketing task.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-12">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center font-bold">3</div>
                                            <h3 className="text-2xl font-bold">Lead with Transparency</h3>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed pl-12">
                                            Be publicly accountable for progress and challenges. When leadership is transparent about the journey, it cascades down, valuing integrity over marketing spin.
                                        </p>
                                    </div>

                                    <div className="mb-12">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center font-bold">4</div>
                                            <h3 className="text-2xl font-bold">Integrate to Core Strategy</h3>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed pl-12">
                                            Move sustainability from a PR topic to the brand's DNA. Embed it in brand values, campaign briefs, and business KPIs to ensure messaging is durable.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-8 md:p-16 bg-white/5 rounded-[3rem] backdrop-blur-md border border-white/10 text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-1000"></div>
                                
                                <h4 className="text-3xl md:text-5xl font-black mb-6 relative z-10">"Honesty is the new green."</h4>
                                <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg relative z-10 leading-relaxed">
                                    If you've been silent, start talking. If you've overstated, course-correct. Authenticity is your greatest competitive advantage.
                                </p>
                                <button onClick={() => window.open('https://www.hooop.in/g', '_blank')} className="relative z-10 bg-green-500 hover:bg-green-400 text-black px-12 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                                    Start The Journey
                                </button>
                            </div>
                            
                            <footer className="mt-20 text-center text-gray-500 text-xs pb-12 px-6">
                                <div className="max-w-2xl mx-auto border-t border-gray-300/50 pt-8">
                                    <p className="mb-2 font-bold text-gray-400 uppercase tracking-widest text-[10px]">Primary Sources</p>
                                    <p className="mb-6 leading-relaxed">
                                        Strategic insights and survey data derived from the <strong>"Green Is the New Lie"</strong> Whitepaper and <strong>"The Green Truth"</strong> Survey by Sense App.
                                    </p>
                                    
                                    <p className="mb-2 font-bold text-gray-400 uppercase tracking-widest text-[10px]">Data & Definitions</p>
                                    <p className="leading-relaxed opacity-80 space-y-1">
                                        <span className="block"><strong>Brand Finance:</strong> Sustainability Perceptions Value (SPV) & Gap (SPG) definitions.</span>
                                        <span className="block"><strong>Planet Tracker:</strong> The Six Types of Greenwashing framework.</span>
                                        <span className="block"><strong>ASCI & CCPA:</strong> Regulatory guidelines and compliance statistics (2024).</span>
                                    </p>
                                    
                                    <div className="mt-8 pt-8 border-t border-gray-300/30 flex justify-center items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
                                        <span>Sense App Design</span>
                                        <span>•</span>
                                        <span className="cursor-pointer hover:text-green-600" onClick={() => window.open('https://www.hooop.in/g', '_blank')}>HOOOP</span>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </Section>

                </main>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<App />);
    </script>
</body>
</html>
