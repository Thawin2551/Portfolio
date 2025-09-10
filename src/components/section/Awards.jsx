import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Medal,
  Award as AwardIcon,
  Sparkles,
  ExternalLink,
  Code2,
  Wrench,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const AWARDS = [
  {
    id: 1,
    title: "NextGenAI Hackathon (NextGenAI Camp)",
    org: "สถาบันเทคโนโยลีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ภาควิชาวิศวกรรมคอมพิวเตอร์ (KMITL)",
    year: "2025",
    result: "Finalist",
    badge: "AI Development",
    images: [
      "/src/image/camp-comp-image/Gold-Nextgen.jpg",
      "/src/image/camp-comp-image/Silver-Nextgen.jpg",
    ],
    link: "https://drive.google.com/drive/folders/11NSoVJt0etpAIqByoubYopBrUimKKnPU?usp=sharing",
    desc: "แข่งขันพัฒนาจาก Dataset ที่ได้รับและฝึกโมเดลด้วย PyTorch ตลอด 72 ชั่วโมง",
    whatIDid: [
      "เขียน Python สำหรับงาน Classification",
      "ฝึกโมเดลด้วย PyTorch",
      "จัดทำสไลด์นำเสนอ",
    ],
    techniques: [
      "Data preprocessing",
      "Presentation",
      "Python (PyTorch, OpenCV, Pandas, Numpy, Matplotlib)",
    ],
    prizes: ["Top10", "เข้าร่วมค่าย NextGenAI Camp ต่อเนื่อง", "ได้รับคะแนนระดับดีมาก"],
  },
  {
    id: 2,
    title: "ประกวดนวัตกรรมนาโนเทคโนโลยี ระดับประเทศ ครั้งที่ 13",
    org: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง คณะเทคโนโลยีนวัตกรรมบูรณาการ",
    year: "2025",
    result: "Finalist",
    badge: "Nano Technology",
    images: [
      "/src/image/camp-comp-image/Nano-cert.jpg",
      "/src/image/camp-comp-image/nano-tech-people.png",
      "/src/image/camp-comp-image/RR-Mobile-Graph.png",
      "/src/image/camp-comp-image/rr-blue-graph.png",
      "/src/image/camp-comp-image/rr-red-graph.png",
    ],
    link: "https://drive.google.com/drive/folders/11NSoVJt0etpAIqByoubYopBrUimKKnPU?usp=sharing",
    desc: "ไฮโดรเจลอัจฉริยะซ่อมแซมตัวเอง (MCC + Guar gum) เพื่อตรวจจับการเคลื่อนไหวผู้ป่วยติดเตียง",
    whatIDid: [
      "เขียน Python ทำ Data Visualization",
      "สร้างเว็บตัวจำลองการทำงาน",
      "จัดทำสไลด์นำเสนอ",
    ],
    techniques: ["HTML", "CSS", "JavaScript"],
    prizes: ["เข้าร่วมรอบชิงชนะเลิศระดับประเทศ"],
  },
  {
    id: 3,
    title: "สอวน. ฟิสิกส์ ค่าย 1",
    org: "ศูนย์โอลิมปิกวิชาการ โรงเรียนพิบูลวิทยาลัย",
    year: "2024",
    result: "Completed",
    badge: "Physics",
    images: ["/src/image/camp-comp-image/POSN-Cert.jpg"],
    desc: "อบรม/ปฏิบัติการทดลองฟิสิกส์เข้มข้น ใช้วิธีวิทยาศาสตร์อธิบายปรากฏการณ์",
    whatIDid: ["อบรมเนื้อหาฟิสิกส์เชิงลึก", "ทดลองหลายรูปแบบ", "ปฏิบัติจริงในแลป"],
    techniques: ["Scientific method", "Hypothesis testing", "Data analysis"],
    prizes: ["ผ่านการอบรม ค่าย 1"],
  },
  {
    id: 4,
    title: "Web Development Competition (รอบ 24 ทีมสุดท้าย)",
    org: "มหาวิทยาลัยเกษตรศาสตร์ × สมาคมโปรแกรมเมอร์ไทย",
    year: "2025",
    result: "Completed",
    badge: "Web Development",
    images: [
      "/src/image/camp-comp-image/KU-Cert.png",
      "/src/image/camp-comp-image/menu-pizza.png",
      "/src/image/camp-comp-image/mobile-menu-pizza.png",
    ],
    desc: "พัฒนาเว็บ E-Commerce ด้วย React + Tailwind ตามโจทย์ที่ได้รับ",
    whatIDid: [
      "ใช้ React และ Tailwind",
      "ออกแบบ UI/UX",
      "ทำงานเป็นทีมแบบ",
    ],
    techniques: ["React", "Tailwind CSS", "Figma", "Component-based architecture"],
    prizes: ["เข้ารอบ 24 ทีมสุดท้าย"],
  },
  {
    id: 5,
    title: "PSU Mathematics Competition",
    org: "มหาวิทยาลัยสงขลานครินทร์ คณะวิทยาศาสตร์",
    year: "2025",
    result: "Silver Medalist",
    badge: "Mathematics",
    images: [
      "/src/image/camp-comp-image/PSU.jpg",
      "/src/image/camp-comp-image/CertificateA4-PMC2025.jpg",
    ],
    link: "",
    desc: "เหรียญเงินและอันดับ 1 จังหวัดลพบุรี",
    whatIDid: ["ทำข้อสอบ 3 ชั่วโมง", "ใช้ทักษะวิเคราะห์ ตรรกะ และการแก้สมการ"],
    techniques: ["Problem analysis", "Equations", "Logic", "Systematic thinking"],
    prizes: ["เหรียญเงิน", "อันดับสูงสุดของจังหวัดลพบุรี"],
  },
];

/* ===================== Small Utils ===================== */
const useCounter = (to = 0, ms = 1200) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf, start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / ms);
      setVal(Math.round(to * (0.5 - Math.cos(Math.PI * p) / 2)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, ms]);
  return val;
};

const useSpotlight = () => {
  const ref = useRef(null);
  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return { ref, onMouseMove };
};

/* ===================== Pieces ===================== */
const Stat = ({ icon: Icon, label, value, delay = 0 }) => {
  const count = useCounter(value, 1100);
  return (
    <motion.div
      initial={{ y: 18, opacity: 0, scale: 0.98 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4"
    >
      {/* กลับมาใช้โทนเหลือง */}
      <div className="w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br from-yellow-500/30 to-amber-400/20 border border-yellow-300/30">
        <Icon size={22} className="text-amber-300" />
      </div>
      <div>
        <div className="text-2xl font-semibold">{count}</div>
        <div className="text-white/60 text-sm">{label}</div>
      </div>
    </motion.div>
  );
};

const FeatureAwardCard = ({ data, i, onOpenGallery }) => {
  const { ref, onMouseMove } = useSpotlight();

  // รองรับทั้ง image (string) และ images (array) + กัน nested array
  const gallery = useMemo(
    () => (data.images ?? (data.image ? [data.image] : [])).flat().filter(Boolean),
    [data]
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: i * 0.08 }}
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative rounded-[1.8rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
      style={{
        backgroundImage:
          "radial-gradient(480px 220px at var(--mx,-100px) var(--my,-100px), rgba(255,225,130,0.08), rgba(0,0,0,0))",
      }}
    >
      {/* media (responsive, คอลัมน์รูปกว้างขึ้น) */}
      <div className="grid grid-cols-1
        md:grid-cols-[minmax(0,40rem)_1fr]
        lg:grid-cols-[minmax(0,44rem)_1fr]
        xl:grid-cols-[minmax(0,48rem)_1fr]
        2xl:grid-cols-[minmax(0,52rem)_1fr]">
        <button
          type="button"
          onClick={() => onOpenGallery(gallery, 0, data.title)}
          className="relative aspect-[16/9] md:aspect-auto md:h-full w-full overflow-hidden group text-left"
          aria-label={`Open gallery for ${data.title}`}
        >
          {gallery.length > 0 && (
            <img
              src={gallery[0]}
              alt={data.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1280px) 40rem,
                     (max-width: 1536px) 48rem,
                     52rem"
            />
          )}
          {/* ribbon เหลือง */}
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-amber-400/90 text-black text-xs font-semibold px-2.5 py-1 rounded-full shadow">
            <Medal size={14} /> {data.result}
          </div>
          {/* view indicator */}
          <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 text-xs text-white/90 bg-black/35 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10">
            <Maximize2 size={14} /> ดูรูป
          </div>
          {/* media mask */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-black/25" />
        </button>

        {/* content */}
        <div className="p-6 sm:p-7 md:p-9">
          {/* กลับมาใช้ text-amber-300 */}
          <div className="flex items-center gap-2 text-amber-300">
            <Trophy size={18} />
            <span className="text-[11px] md:text-xs uppercase tracking-wider">{data.badge}</span>
          </div>

          <h3 className="mt-2 text-2xl md:text-3xl font-semibold leading-snug">
            {data.title}
          </h3>
          <p className="text-white/70 text-sm md:text-base mt-1">
            {data.org} • {data.year}
          </p>

          <p className="text-white/85 mt-4 text-[15px] md:text-base leading-relaxed">
            {data.desc}
          </p>

          {/* sections: stack บนมือถือ, 2 คอลัมน์ที่ sm, 3 คอลัมน์ที่ lg */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* what I did */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-white/90">
                <Wrench size={18} />
                <h4 className="font-semibold">สิ่งที่ทำ</h4>
              </div>
              <ul className="mt-2 space-y-1.5 text-sm text-white/80">
                {data.whatIDid.map((t, idx) => (
                  <li key={idx} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 text-emerald-300/90 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* techniques */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-white/90">
                <Code2 size={18} />
                <h4 className="font-semibold">เทคนิค/เทคโนโลยี</h4>
              </div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {data.techniques.map((t, idx) => (
                  <li
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/8 border border-white/10 text-white/85"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* prizes (ไอคอน check สีเหลือง) */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-white/90">
                <AwardIcon size={18} />
                <h4 className="font-semibold">รางวัล/ผลลัพธ์</h4>
              </div>
              <ul className="mt-2 space-y-1.5 text-sm text-white/80">
                {data.prizes.map((t, idx) => (
                  <li key={idx} className="flex gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 text-amber-300 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* link (เหลือง) */}
          <div className="mt-5 flex flex-wrap gap-3">
            {data.link ? (
              <Link
                to={data.link}
                target="_blank"
                className="inline-flex items-center gap-1 text-sm text-amber-300 hover:text-amber-200 underline underline-offset-4"
              >
                ดูตัวอย่าง / รายละเอียด <ExternalLink size={16} />
              </Link>
            ) : (
              <span className="text-sm text-white/50">—</span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* ===================== Lightbox ===================== */
const Lightbox = ({ open, images, index, title, onClose, onPrev, onNext }) => {
  // ปิดด้วย ESC และลูกศร
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open || !images?.length) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="lb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm grid place-items-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-[min(96vw,1100px)] w-full"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${title} gallery`}
            role="dialog"
            aria-modal="true"
          >
            {/* image */}
            <div className="relative bg-black/20 rounded-2xl border border-white/10 overflow-hidden">
              <img
                src={images[index]}
                alt={`${title} ${index + 1}`}
                className="w-full max-h-[75vh] object-contain"
                loading="eager"
              />
              {/* close */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-2 rounded-full bg-white/10 hover:bg-white/15 text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* prev/next */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={onPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/15"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={onNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/15"
                    aria-label="Next"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {/* caption */}
            <div className="mt-3 text-center text-sm text-white/75">
              {title} — {index + 1}/{images.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ===================== Page ===================== */
export const Awards = () => {
  const stats = useMemo(() => {
    const total = AWARDS.length;
    const finals = AWARDS.filter((a) => /final/i.test(a.result)).length;
    const wins = AWARDS.filter((a) => /winner|1st|champ/i.test(a.result)).length;
    return { total, finals, wins };
  }, []);

  // Lightbox state
  const [lbOpen, setLbOpen] = useState(false);
  const [lbImages, setLbImages] = useState([]);
  const [lbIndex, setLbIndex] = useState(0);
  const [lbTitle, setLbTitle] = useState("");

  const openGallery = (imgs, idx = 0, title = "") => {
    setLbImages(imgs);
    setLbIndex(idx);
    setLbTitle(title);
    setLbOpen(true);
  };
  const closeGallery = () => setLbOpen(false);
  const prev = () => setLbIndex((i) => (i - 1 + lbImages.length) % lbImages.length);
  const next = () => setLbIndex((i) => (i + 1) % lbImages.length);

  return (
    <section id="awards" className="min-h-screen py-20">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-10 mt-[60px]">
        {/* HERO (ป้าย Highlights เหลือง + หัวเรื่องคงสไตล์เดิม) */}
        <header className="text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-300/30 bg-yellow-300/10 text-amber-200"
          >
            <Sparkles size={16} />
            <span className="text-xs tracking-wider">Highlights</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold mt-3"
          >
            Awards & <span className="gradient-monochrome-text">Competitions</span>
          </motion.h1>
          <p className="text-white/70 max-w-2xl mx-auto mt-3" />
        </header>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
          <Stat icon={AwardIcon} label="Total Awards" value={stats.total} />
          <Stat icon={Trophy} label="Finals / Selected" value={stats.finals} delay={0.05} />
          <Stat icon={Medal} label="Category Wins" value={stats.wins} delay={0.1} />
        </div>

        {/* CARDS */}
        <div className="space-y-8">
          {AWARDS.map((a, i) => (
            <FeatureAwardCard
              key={a.id}
              data={a}
              i={i}
              onOpenGallery={(imgs, idx, title) => openGallery(imgs, idx, title)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lbOpen}
        images={lbImages}
        index={lbIndex}
        title={lbTitle}
        onClose={closeGallery}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
};
