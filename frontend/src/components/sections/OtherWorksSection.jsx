import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { FadeUp } from '../animations/MotionWrapper';

// Import other works images
import otherWork1 from '../../Assets/Other works/1.jpg';
import otherWork4 from '../../Assets/Other works/4.jpg';

// Spring config for smooth scroll animations
const smoothSpringConfig = { stiffness: 80, damping: 25, restDelta: 0.001 };

// Media item component - supports both images and videos with scroll animations
const MediaItem = ({ item, index }) => {
    const ref = useRef(null);
    const videoRef = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    // Track scroll progress for entrance animation
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "0.7 end"]
    });

    // Track scroll progress for exit
    const { scrollYProgress: exitProgress } = useScroll({
        target: ref,
        offset: ["0.7 start", "end start"]
    });

    // Smooth springs
    const smoothEntrance = useSpring(scrollYProgress, smoothSpringConfig);
    const smoothExit = useSpring(exitProgress, smoothSpringConfig);

    // Entrance animations
    const yEntrance = useTransform(smoothEntrance, [0, 1], [100, 0]);
    const opacityEntrance = useTransform(smoothEntrance, [0, 1], [0, 1]);
    const scaleEntrance = useTransform(smoothEntrance, [0, 1], [0.92, 1]);

    // Exit animations
    const opacityExit = useTransform(smoothExit, [0, 1], [1, 0.15]);
    const scaleExit = useTransform(smoothExit, [0, 1], [1, 0.95]);

    // Autoplay video when in view
    useEffect(() => {
        if (item.type === 'video' && videoRef.current) {
            if (isInView) {
                videoRef.current.play().catch(() => {
                    // Autoplay was prevented, ignore
                });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView, item.type]);

    return (
        <motion.div
            ref={ref}
            style={{
                y: yEntrance,
                opacity: opacityEntrance,
                scale: scaleEntrance
            }}
            className="relative will-change-transform"
        >
            <motion.div
                style={{
                    opacity: opacityExit,
                    scale: scaleExit
                }}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 group will-change-transform border border-slate-300"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
            >
                {item.type === 'video' ? (
                    <video
                        ref={videoRef}
                        src={item.url}
                        className="w-full aspect-[16/10] object-cover"
                        muted
                        loop
                        playsInline
                        poster={item.poster}
                    />
                ) : (
                    <img
                        src={item.url}
                        alt={item.caption || `Other work ${index + 1}`}
                        className="w-full aspect-[16/10] object-cover"
                    />
                )}

                {/* Glassmorphism info badge */}
                {item.caption && (
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 sm:px-5 sm:py-2.5">
                            <p className="text-white text-xs sm:text-sm font-medium drop-shadow-sm">
                                {item.caption}
                            </p>
                        </div>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

// Other works data
const otherWorks = [
    { type: 'image', url: otherWork1, caption: 'Client Work' },
    { type: 'image', url: otherWork4, caption: 'Client Work' }
];

const OtherWorksSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section ref={ref} id="other-works" className="py-16 sm:py-24 lg:py-32 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
                {/* Section Header */}
                <FadeUp>
                    <div className="mb-10 sm:mb-16">
                        <span className="text-xs sm:text-sm text-slate-500 tracking-wide uppercase">Experiments</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
                            Other Works
                        </h2>
                        <p className="text-slate-500 mt-4 max-w-xl">
                            A collection of various creative projects, explorations, and experiments outside of my main product design work.
                        </p>
                    </div>
                </FadeUp>

                {/* Media Gallery */}
                {otherWorks.length > 0 ? (
                    <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                        {otherWorks.map((item, index) => (
                            <MediaItem key={index} item={item} index={index} />
                        ))}
                    </div>
                ) : (
                    // Empty state - shows placeholder when no works are added
                    <motion.div
                        className="border-2 border-dashed border-slate-200 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="max-w-md mx-auto">
                            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="text-slate-500 text-sm sm:text-base">
                                Add your other works to the <code className="bg-slate-100 px-2 py-1 rounded text-xs">otherWorks</code> array in this component to display them here.
                            </p>
                            <p className="text-slate-400 text-xs sm:text-sm mt-2">
                                Supports images (.jpg, .png) and videos (.mp4, .webm)
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default OtherWorksSection;
