'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { titleReveal, letterStagger, letterReveal, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

export default function Home() {
  const videos = [
    { id: "O68sgRpSPqY", title: "Video 1" },
    { id: "3_Uq_10Tg-A", title: "Video 2" },
    { id: "LlH6zj2qwc4", title: "Video 3" },
    { id: "R8uzD_Z6AeU", title: "Video 4" },
  ];
  
  return (
    <>
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative w-full h-screen md:h-[90vh] overflow-hidden border-b border-pp-cream">
          {/* Hero Image - Desktop */}
          <div className="absolute inset-0 w-full h-full hidden md:block">
            <Image
              src="/gavi-hero.png"
              alt="Pleasant Peasant"
              fill
              className="object-cover object-bottom"
              priority
              quality={95}
            />
          </div>
          
          {/* Hero Image - Mobile */}
          <div className="absolute inset-0 w-full h-full md:hidden">
            <Image
              src="/mobile-hero.png"
              alt="Pleasant Peasant"
              fill
              className="object-cover object-center"
              priority
              quality={95}
            />
            {/* Mobile radial overlay - darker in center, lighter around edges */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at center, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1) 100%)'
              }}
            />
          </div>
          
          {/* Subtle overlay for text contrast - Desktop only */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent hidden md:block" />
          
          {/* Centered Title */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div
              variants={titleReveal}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              {/* Desktop Title */}
              <motion.h1 
                variants={letterStagger}
                initial="hidden"
                animate="visible"
                className="hidden md:block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display text-pp-cream leading-none tracking-wider flex flex-wrap justify-center"
                style={{ 
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 8px 40px rgba(0, 0, 0, 0.4)',
                  perspective: '1000px'
                }}
              >
                <span className="whitespace-nowrap">
                  {"PLEASANT".split('').map((char, index) => (
                    <motion.span
                      key={`pleasant-${index}`}
                      variants={letterReveal}
                      className="inline-block"
                      style={{
                        transformOrigin: 'center bottom',
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                <span className="whitespace-nowrap ml-4">
                  {"PEASANT".split('').map((char, index) => (
                    <motion.span
                      key={`peasant-${index}`}
                      variants={letterReveal}
                      className="inline-block"
                      style={{
                        transformOrigin: 'center bottom',
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
              
              {/* Mobile Title */}
              <motion.div 
                variants={letterStagger}
                initial="hidden"
                animate="visible"
                className="block md:hidden"
              >
                <motion.h1 
                  className="text-5xl sm:text-6xl font-display text-pp-cream leading-none tracking-wider mb-2 whitespace-nowrap"
                  style={{ 
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 8px 40px rgba(0, 0, 0, 0.4)',
                    perspective: '1000px'
                  }}
                >
                  {"PLEASANT".split('').map((char, index) => (
                    <motion.span
                      key={`pleasant-${index}`}
                      variants={letterReveal}
                      className="inline-block"
                      style={{
                        transformOrigin: 'center bottom',
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>
                <motion.h1 
                  className="text-5xl sm:text-6xl font-display text-pp-cream leading-none tracking-wider whitespace-nowrap"
                  style={{ 
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 8px 40px rgba(0, 0, 0, 0.4)',
                    perspective: '1000px'
                  }}
                >
                  {"PEASANT".split('').map((char, index) => (
                    <motion.span
                      key={`peasant-${index}`}
                      variants={letterReveal}
                      className="inline-block"
                      style={{
                        transformOrigin: 'center bottom',
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Videos Section */}
        <Section className="bg-pp-wood py-16 border-b border-pp-cream">
          <Container maxWidth="full">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-display text-pp-cream text-center mb-12"
              >
                Recent Work
              </motion.h2>
              
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
              >
                {videos.map((video) => (
                  <motion.div
                    key={video.id}
                    variants={staggerItem}
                    className="relative aspect-video bg-pp-cream border-2 border-pp-cream overflow-hidden group"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                      title={`Pleasant Peasant - ${video.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full border-0"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Container>
        </Section>

        {/* About Teaser Section */}
        <Section className="bg-pp-rust py-16 border-t border-b border-pp-cream relative overflow-hidden" as="div">
          {/* Enhanced texture overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, transparent 50%, rgba(233, 226, 208, 0.05) 50%),
                  radial-gradient(circle at 75% 75%, transparent 50%, rgba(233, 226, 208, 0.03) 50%),
                  linear-gradient(45deg, transparent 49%, rgba(233, 226, 208, 0.01) 50%, transparent 51%)
                `,
                backgroundSize: '4px 4px, 6px 6px, 20px 20px'
              }}
            />
          </div>
          
          {/* Subtle horse background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <Image
              src="/horse.png"
              alt=""
              width={300}
              height={300}
              className="object-contain"
              quality={90}
            />
          </div>
          
          <Container>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center relative z-10"
            >
              {/* Decorative flourish */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-8 h-px bg-pp-cream/50"></div>
                <div className="mx-4 w-2 h-2 bg-pp-cream/50 rotate-45"></div>
                <div className="w-8 h-px bg-pp-cream/50"></div>
              </div>
              
              <p className="text-lg lg:text-xl mb-8 text-pp-cream max-w-2xl mx-auto leading-relaxed font-light italic">
                Pleasant Peasant creates a mood of spiritual melancholy that captures the experience of connection and disconnection with the weird and wild world of today.
              </p>
              
              {/* Decorative flourish */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-8 h-px bg-pp-cream/50"></div>
                <div className="mx-4 w-2 h-2 bg-pp-cream/50 rotate-45"></div>
                <div className="w-8 h-px bg-pp-cream/50"></div>
              </div>
              
              <Button href="/about">
                About / Bio
              </Button>
            </motion.div>
          </Container>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}