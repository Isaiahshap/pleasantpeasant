'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

export default function About() {
  return (
    <>
      <Header />
      
      <main id="main-content" className="relative min-h-screen">
        {/* Background Image */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <Image
            src="/gavi1.jpeg"
            alt="Pleasant Peasant Background"
            fill
            className="object-cover"
            quality={90}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        
        <Section className="relative z-10 pt-36 pb-20 px-2 sm:px-8">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-[1400px] mx-auto px-8"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-display text-pp-cream mb-20 text-center tracking-wide"
                style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)' }}
              >
                About
              </motion.h1>
              
               <div className="flex flex-col items-center space-y-12 w-full sm:max-w-6xl mx-auto px-1 sm:px-8">
                {/* Bio Text */}
                <motion.div
                  variants={staggerItem}
                  className="relative w-full"
                >
                  <div className="bg-black/30 backdrop-blur-sm border-0 sm:border-2 sm:border-pp-cream p-2 sm:p-8 lg:p-12 shadow-xl">
                    <motion.p 
                      variants={staggerItem}
                      className="text-lg lg:text-xl leading-relaxed text-pp-cream mb-6 font-light"
                      style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}
                    >
                      Pleasant Peasant is the moniker of Brooklyn-based experimental folk musician{' '}
                      <span className="font-display text-pp-cream font-normal">Gavi Kutliroff</span>. 
                      His music is an eclectic, three-pronged blend between ancient traditional styles, 
                      modern songwriting sensibilities, and deep, hypnotic soundscapes that float somewhere 
                      between jazz and the natural world.
                    </motion.p>
                    
                    <motion.div 
                      variants={staggerItem}
                      className="relative"
                    >
                      
                      <motion.p 
                        variants={staggerItem}
                        className="text-lg lg:text-xl leading-relaxed text-pp-cream font-light relative z-10"
                        style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}
                      >
                        Often playing with improvisation in both performance and production, he creates a mood of 
                        spiritual melancholy that captures the experience of connection and disconnection with the 
                        weird and wild world of today.
                      </motion.p>
                    </motion.div>
                  </div>
                  {/* Decorative border effect */}
                  <div className="absolute -inset-2 border border-pp-cream/30 -z-10 hidden sm:block"></div>
                </motion.div>

                {/* Bio Image */}
                <motion.div 
                  variants={staggerItem}
                  className="relative w-full"
                >
                  <div className="relative w-full h-96 lg:h-[32rem] border-0 sm:border-2 sm:border-pp-cream overflow-hidden shadow-2xl">
                    <Image
                      src="/gavi2.jpeg"
                      alt="Gavi Kutliroff - Pleasant Peasant"
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                  {/* Decorative border effect */}
                  <div className="absolute -inset-2 border border-pp-cream/30 -z-10 hidden sm:block"></div>
                </motion.div>
                
                {/* Contact Box */}
                <motion.div 
                  variants={staggerItem}
                  className="relative w-full"
                >
                  <div className="bg-black/40 backdrop-blur-sm border-0 sm:border-2 sm:border-pp-cream px-1 sm:px-8 py-3 sm:py-6 text-center shadow-xl w-full">
                    <a 
                      href="mailto:pleasantpeasantmusic@gmail.com"
                      className="text-pp-cream hover:text-white transition-colors duration-300 font-medium tracking-wide underline text-sm sm:text-base break-all"
                    >
                      pleasantpeasantmusic@gmail.com
                    </a>
                  </div>
                  {/* Decorative border effect */}
                  <div className="absolute -inset-2 border border-pp-cream/30 -z-10 hidden sm:block"></div>
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}
