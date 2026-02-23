import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadeUp } from '../animations/MotionWrapper';

// Import other works images
import otherWork1 from '../../Assets/Other works/1.jpg';
import otherWork2 from '../../Assets/Other works/2.jpg';
import otherWork3 from '../../Assets/Other works/3.jpg';
import otherWork4 from '../../Assets/Other works/4.jpg';
import otherWork5 from '../../Assets/Other works/5.jpg';
import otherWork6 from '../../Assets/Other works/6.jpg';
import otherWork7 from '../../Assets/Other works/7.jpg';
import otherWork8 from '../../Assets/Other works/8.mp4';
import otherWork9 from '../../Assets/Other works/9.jpg';
import otherWork10 from '../../Assets/Other works/10.jpg';
import otherWork11 from '../../Assets/Other works/11.jpg';

// Media item component
const MediaItem = ({ item, index, onHoverChange }) => {
    const ref = useRef(null);
    const videoRef = useRef(null);
    const isInView = useInView(ref, { amount: 0.1 });

    useEffect(() => {
        if (item.type === 'video' && videoRef.current) {
            if (isInView) {
                videoRef.current.play().catch(() => { });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView, item.type]);

    return (
        <div
            ref={ref}
            className="flex-shrink-0 w-[85vw] md:w-[600px] h-full"
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
        >
            <motion.div
                className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 group border border-slate-200 shadow-sm will-change-transform isolation-auto"
                whileHover={{
                    scale: 1.03,
                    rotate: -1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    mass: 1
                }}
            >
                {item.type === 'video' ? (
                    <video
                        ref={videoRef}
                        src={item.url}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={item.poster}
                    />
                ) : (
                    <img
                        src={item.url}
                        alt={item.caption || `Other work ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                )}

                {/* Glassmorphism info badge - Hidden on hover if link exists */}
                {item.caption && (
                    <div className={`absolute bottom-4 left-4 sm:bottom-6 sm:left-6 transition-all duration-300 pointer-events-none ${item.showLink ? 'group-hover:opacity-0 group-hover:translate-y-2' : ''}`}>
                        <div className="bg-[#d1e2d3]/90 backdrop-blur-md border border-[#c1d2c3] rounded-full px-4 py-2 sm:px-5 sm:py-2.5 shadow-lg shadow-black/5">
                            <p className="text-slate-800 text-xs sm:text-sm font-semibold tracking-tight">
                                {item.caption}
                            </p>
                        </div>
                    </div>
                )}

                {/* Link Button - Appears on Hover at Bottom Left */}
                {item.showLink && item.link && (
                    <>
                        {/* Subtle Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[inherit]" />

                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                            <motion.a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="px-5 py-2 rounded-full border border-white/20 bg-[#d1e2d3] text-slate-800 text-sm font-bold backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 shadow-xl shadow-black/10 group/btn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Project
                                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </motion.a>
                        </div>
                    </>
                )}
            </motion.div>
        </div>
    );
};

const OtherWorksSection = () => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const requestRef = useRef();

    const otherWorksBase = [
        { type: 'image', url: otherWork5, caption: 'Web-Design', link: 'https://www.kaitongo.com/', showLink: true },
        { type: 'image', url: otherWork6, caption: 'Web-Design', link: 'https://www.figma.com/proto/yWGqc1ZUR06JPbQdnWweuF/Route-Academy?page-id=1%3A5&node-id=533-21918&viewport=605%2C53%2C0.25&t=O6pW9IpwIJN68mKs-1&scaling=min-zoom&content-scaling=fixed', showLink: true },
        { type: 'image', url: otherWork7, caption: 'Fun-Project', link: 'https://www.behance.net/gallery/220727431/Puffy-Website-Landing-Page-Design-Pet-Care', showLink: true },
        { type: 'image', url: otherWork9, caption: 'Ui Design', link: '#', showLink: false },
        { type: 'image', url: otherWork10, caption: 'Ui Design', link: '#', showLink: false },
        { type: 'image', url: otherWork1, caption: 'Illustration', link: '#', showLink: false },
        { type: 'image', url: otherWork2, caption: 'Illustration', link: '#', showLink: false },
        { type: 'image', url: otherWork3, caption: 'Illustration', link: '#', showLink: false },
        { type: 'image', url: otherWork4, caption: 'Illustration', link: '#', showLink: false },
        { type: 'video', url: otherWork8, caption: 'Rive', link: '#', showLink: false },
        { type: 'image', url: otherWork11, caption: 'Branding', link: 'https://www.behance.net/gallery/230536426/Cargen-Brand-Identity-Design', showLink: true },
    ];

    // Triple the items to ensure seamless infinite scroll
    const infiniteWorks = [...otherWorksBase, ...otherWorksBase, ...otherWorksBase];

    // Auto-scroll logic
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let lastTimestamp = 0;
        const animate = (timestamp) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const deltaTime = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            if (!isDragging) {
                // Adjust speed based on hover
                const speed = isHovered ? 0.02 : 0.08;
                scrollContainer.scrollLeft += speed * deltaTime;

                // Reset for infinite feel
                const maxScrollLeft = (scrollContainer.scrollWidth / 3);
                if (scrollContainer.scrollLeft >= maxScrollLeft * 2) {
                    scrollContainer.scrollLeft -= maxScrollLeft;
                }
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [isHovered, isDragging]);

    // Drag to scroll functionality for desktop
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="other-works" className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 mb-10 sm:mb-12">
                {/* Section Header */}
                <FadeUp>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <span className="text-xs sm:text-sm text-slate-500 tracking-wide uppercase">Experiments</span>
                            <h2 className="text-3xl sm:text-3xl lg:text-3xl font-medium text-slate-900 mt-2 tracking-tight">
                                Other Works
                            </h2>
                        </div>
                        <p className="text-slate-500 max-w-sm">
                            A collection of various creative projects, explorations, and experiments outside of my main product design work.
                        </p>
                    </div>
                </FadeUp>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="h-px bg-slate-100 dark:bg-slate-800 w-full mt-12 origin-left"
                />
            </div>

            {/* Media Gallery - Infinite Horizontal Scroll Container */}
            <div
                className="relative w-full select-none"
                onMouseLeave={handleMouseUp}
                onMouseUp={handleMouseUp}
            >
                <div
                    ref={scrollRef}
                    className={`flex gap-6 md:gap-8 overflow-x-auto pt-12 pb-24 px-4 sm:px-6 lg:px-12 no-scrollbar cursor-grab ${isDragging ? 'cursor-grabbing active:scale-[0.99] transition-transform' : ''}`}
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                >
                    {infiniteWorks.map((item, index) => (
                        <MediaItem
                            key={index}
                            item={item}
                            index={index}
                            onHoverChange={setIsHovered}
                        />
                    ))}
                </div>

                {/* Edge Fades for a premium look */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 hidden md:block" />
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 hidden md:block" />
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </section>
    );
};

export default OtherWorksSection;
