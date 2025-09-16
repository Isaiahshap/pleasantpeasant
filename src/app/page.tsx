'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import Section from '@/components/Section';
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
              src="/gavi-hero.webp"
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

        {/* East of the Sun Album Section */}
        <Section className="bg-pp-wood py-16 border-b border-pp-cream">
          <Container maxWidth="full">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto"
            >
              {/* Album Cover - Clickable */}
              <motion.div variants={staggerItem} className="flex-shrink-0">
                <a 
                  href="https://open.spotify.com/album/07qRW9KuzsIQONNjqVhrWM?si=Gt5OKszdQuWox1pZubQXQA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src="/eastofthesun.png"
                    alt="East of the Sun Album Cover"
                    width={352}
                    height={352}
                    className="rounded-xl shadow-lg border-2 border-pp-cream"
                  />
                </a>
              </motion.div>

              {/* Spotify Embed */}
              <motion.div variants={staggerItem} className="w-full max-w-md">
                <iframe 
                  data-testid="embed-iframe" 
                  style={{borderRadius:'12px'}} 
                  src="https://open.spotify.com/embed/album/07qRW9KuzsIQONNjqVhrWM?utm_source=generator&theme=0" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </Container>
        </Section>

        {/* Film Festival Section */}
        <Section className="bg-pp-wood py-12">
          <Container maxWidth="full">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center"
            >
              <Image
                src="/filmfestival.PNG"
                alt="Official Selection Nashville Film Festival"
                width={400}
                height={200}
                className="rounded-lg invert"
              />
            </motion.div>
          </Container>
        </Section>

        {/* Featured Video Section */}
        <Section className="bg-pp-wood py-12 border-b border-pp-cream">
          <Container maxWidth="full">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center max-w-4xl mx-auto"
            >
              <div className="relative aspect-video w-full bg-pp-cream border-2 border-pp-cream overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/OdW5JEbjt3Y?start=4&rel=0&modestbranding=1"
                  title="Pleasant Peasant - Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* Videos Section */}
        <Section className="bg-pp-wood py-16 border-b border-pp-cream">
          <Container maxWidth="full">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
      
              
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
      </main>
      
      <Footer />
    </>
  );
}