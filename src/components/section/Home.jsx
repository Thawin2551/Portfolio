import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import MarqueeSlide from "../MarqueeSlide";
import QuickContact from "./compcontact/QuickContact";

import { About } from "./About";
import Projects from "../../../public/image/camp-comp-image/Projects";
import { Awards } from "./Awards";
import Certificate from "./Certificate";

export const Home = () => {
  // Animate on mount (ไม่รอเลื่อน)
  const RiseNow = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );

  // Animate เมื่อเข้าหน้าจอ (ใช้กับส่วนล่าง ๆ ตามเดิม)
  const FadeY = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );

  return (
    <section id="home" className="min-h-screen container mx-auto">
      {/* liquid ambient bg */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.18),rgba(0,0,0,0))]" />
        <div className="absolute bottom-[-6rem] right-[-6rem] w-[32rem] h-[32rem] rounded-full blur-3xl bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.16),rgba(0,0,0,0))]" />
      </div>

      {/* hero */}
      <div className="px-4 pt-28 md:pt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* hero image (ขึ้นมาทันที) */}
          <RiseNow>
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <img
                src="/image/camp-comp-image/SkillPost2.png"
                alt="Showcase"
                className="w-full h-full object-cover"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
              {/* soft gradient mask */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/30" />
            </div>
          </RiseNow>

          {/* text + ctas (ขึ้นมาทันที) */}
          <RiseNow delay={0.05}>
            <header>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                Hi, I’m <span className="gradient-monochrome-text">Thawin</span>
              </h1>
              <p className="text-white/80 mt-4 md:text-lg max-w-xl">
                เว็บพอร์ทโฟลิโอนี้รวบรวมผลงานและประสบการณ์การแข่งขันที่ผ่านมาของผม รวมถึงข้อมูลเกี่ยวกับตัวผมเองครับ
              </p>
            </header>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="relative inline-flex items-center justify-center px-5 py-3 rounded-xl text-white
                  bg-blue-500/90 hover:bg-blue-500 transition shadow-[0_10px_24px_rgba(59,130,246,0.35)]"
              >
                View Projects
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl
                  text-blue-200 border border-white/15 bg-white/5 hover:bg-white/10 transition"
              >
                About Me
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl
                  text-blue-300 border border-blue-400/30 bg-blue-400/10 hover:bg-blue-400/15 transition"
              >
                Contact
              </Link>
            </div>

            <div className="mt-6">
              <QuickContact />
            </div>
          </RiseNow>
        </div>
      </div>

      {/* marquee (soft) */}
      <div className="px-4 mt-12 md:mt-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          <Marquee speed={80} gradient gradientColor="black" gradientWidth={160}>
            <MarqueeSlide />
          </Marquee>
        </div>
      </div>

      {/* sections preview – โหลดแบบเฟดและคุมธีมให้กลืน */}
      <div className="px-4 space-y-14 md:space-y-20 mt-14">
        <FadeY>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <About />
          </div>
        </FadeY>

        <FadeY>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <Projects />
          </div>
        </FadeY>

        <FadeY>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <Awards />
          </div>
        </FadeY>

        <FadeY>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <Certificate />
          </div>
        </FadeY>
      </div>
    </section>
  );
};
