// components/Projects.jsx
import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Tag as TagIcon,
  X,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { Link } from "react-router-dom";

const DATA = [
  {
    id: 1,
    title: "CiRA CORE Papaya – Sorting Line",
    tagline:
      "คัดแยกมะละกอสุก/ดิบอัตโนมัติด้วย Deep Learning และ CiRA Edu Robot (CiRA CORE )",
    cover: "/image/camp-comp-image/CiRA-Method.png",
    images: [
      "/image/camp-comp-image/CiRA-Method.png",
      "/image/camp-comp-image/CiRA-Edit.png",
      "/image/camp-comp-image/CiRA-Js.png",
      "/image/camp-comp-image/Raw-Papaya-Code.png",
      "/image/camp-comp-image/Ripes-Papaya-Code.png",
    ],
    tags: ["AI", "JavaScript", "CiRA CORE", "Robotics"],
    links: [{ href: "https://www.youtube.com/watch?v=RaC7ypUHtu0", label: "Demo Video" }],
    impact: ["ลดเวลาในการคัดแยกลง"],
    role: "วางแผนการทำงาน • เขียนโปรแกรม • ตัดคลิปวิดีโอ",
    summary:
      "คัดแยกมะละกอด้วย Deep Learning บน CiRA CORE เชื่อมต่อแขนกลจำลอง CiRA Edu Robot และโค้ด JavaScript เพื่อควบคุมกระบวนการคัดแยกอัตโนมัติ",
  },
  {
    id: 2,
    title: "Automated Agriculture – Smart Farm (Kidbright)",
    tagline: "รดน้ำอัตโนมัติด้วยเซนเซอร์ความชื้นและสัญญาณเตือน",
    cover: "/image/camp-comp-image/INC-Kidbright.png",
    images: [
      "/image/camp-comp-image/INC-KidbrightCode.png",
      "/image/camp-comp-image/INC-Kidbright.png",
    ],
    tags: ["IoT", "Kidbright", "Automation"],
    links: [],
    impact: ["ใช้ตรรกะในการวางแผนการทำงานของโค้ด", "ออกแบบบการทำงานของนวัตกรม"],
    role: "คิดไอเดีย • ออกแบบโค้ดร่วมกับเพื่อน • นำเสนอ ",
    summary:
      "ระบบ SmartFarm ใช้บอร์ด Kidbright วัดความชื้นดินและรดน้ำอัตโนมัติ พร้อม feedback ด้วยไฟ/เสียง (เป็นเพียงไอเดียและต้นแบบ ไม่ได้ใช้จริง) ",
  },
  {
    id: 3,
    title: "BearPolar – Web Application",
    tagline: "พัฒาโดยใช้ JavaScript SvelteKit และ Tailwind CSS",
    cover: "/image/camp-comp-image/PolerBear.png",
    images: [
      "/image/camp-comp-image/PolerBear.png",
      "/image/camp-comp-image/PolarBear-Concept.png",
      "/image/camp-comp-image/PolarBear-Use1.png",
      "/image/camp-comp-image/PolarBear-Use2.png",
      "/image/camp-comp-image/PolarBear-Use3.png",
      "/image/camp-comp-image/PolarBear-Figma.png",
    ],
    tags: ["Frontend", "Svelte", "Tailwind"],
    links: [
      {
        href: "https://itcamp21-group4-75ql-git-main-bss-bass-projects.vercel.app/",
        label: "Visit Website",
      },
    ],
    impact: ["ออกแบบ UX เรียบ อ่านง่าย", "สาธิตฟีเจอร์หลักครบถ้วน"],
    role: "Frontend  • Design",
    summary:
      "โปรเจกต์กลุ่มสร้างเว็บแอปด้วย SvelteKit + Tailwind โดยได้ Reference มาจากเกมสตอรี่ใน Instragram",
  },
  {
    id: 4,
    title: "Portfolio Website",
    tagline: "ฝึกใช้เครื่องมือใหม่ ๆ และออกแบบเว็บด้วยตัวเอง",
    cover: "/image/camp-comp-image/loading.png",
    images: [
      "/image/camp-comp-image/Port1.png",
      "/image/camp-comp-image/Port2.png",
      "/image/camp-comp-image/Port3.png",
      "/image/camp-comp-image/Port4.png",
      "/image/camp-comp-image/Port5.png",
      "/image/camp-comp-image/Port6.png",
    ],
    tags: ["React", "Tailwind", "Design", "Frontend"],
    links: [],
    impact: ["Core components นำกลับใช้ซ้ำ", "รองรับการเข้าถึง (a11y)"],
    role: "ออกแบบและทำเว็บเองทั้งหมด",
    summary:
      "ออกแบบและพัฒนาเว็บพอร์ตด้วย React + Tailwind โทนมืดนุ่มตา วางระบบคอมโพเนนต์/โทเคนสี เพื่อ scale ทั้งเว็บไซต์",
  },
  {
    id: 5,
    title: "NextGenAI Hackathon 2025",
    tagline: "การแข่งขัน AI ที่เข้มข้นที่สุดสำหรับผม",
    cover: "/image/camp-comp-image/nextgen-present.jpg",
    images: [
      "/image/camp-comp-image/Slide-Nextgen.png",
      "/image/camp-comp-image/Top10.jpg",
      "/image/camp-comp-image/Gold-Nextgen.jpg",
      "/image/camp-comp-image/Silver-Nextgen.jpg",
      "/image/camp-comp-image/nextgen-present.jpg",
      "image/camp-comp-image/present-nextgen.jpg",
    ],
    tags: ["Python", "Deep Learning", "AI"],
    links: [
      {
        href: "https://drive.google.com/drive/folders/11NSoVJt0etpAIqByoubYopBrUimKKnPU?usp=sharing",
        label: "View Project",
      },
    ],
    impact: ["Core components นำกลับใช้ซ้ำ", "รองรับการเข้าถึง (a11y)"],
    role: "เป็นคนพัฒนา AI และนำเสนอด้วยตัวเอง",
    summary: "ออกแบบโครงสร้าง CNN และเทรนโมเดลด้วย Python/PyTorch",
  },
  {
    id: 6,
    title: "Dominated Pizza E-Commerce (Development in Progress)",
    tagline: "เว็บแอพพลิเคชั่น ขายพิซซ่าที่พัฒนาด้วย React และ Tailwind CSS",
    cover: "/image/camp-comp-image/KU-Teamwork.jpg",
    images: [
      "/image/camp-comp-image/menu-pizza.png",
      "/image/camp-comp-image/mobile-menu-pizza.png",
      "/image/camp-comp-image/pizza-checkout.png",
    ],
    tags: ["Frontend", "Tailwind", "Design", "React", "JavaScript"],
    links: [{ href: "", label: "View Project" }],
    impact: ["นำ components นำกลับใช้ซ้ำ"],
    role: "ออกแบบและทำเว็บรวมถึงการดีไซน์ร่วมกับเพื่อน",
    summary:
      "ออกแบบและพัฒนาเว็บพอร์ตด้วย React + Tailwind โทนมืดนุ่มตา วางระบบคอมโพเนนต์/โทเคนสี เพื่อ scale ทั้งเว็บไซต์",
  },
  {
    id: 7,
    title:
      "การประกวดแข่งขันนวัตกรรมนาโนเทคโนโลยีระดับประเทศครั้งที 13 ",
    tagline:
      "การพัฒนาไฮโดรเจลอัจฉริยะที่ซ่อมแซมตัวเองได้จากไมโครคริสตัลลีนเซลลูโลสและกัวร์กัมเพื่อตรวจจับการเคลื่อนไหวสำหรับผู้ป่วยติดเตียง",
    cover: "/image/camp-comp-image/nano-tech-people.png",
    images: [
      "/image/camp-comp-image/cert-nano.jpg",
      "/image/camp-comp-image/nano-tech-people.png",
      "/image/camp-comp-image/Graph-RR.png",
      "/image/camp-comp-image/RR-Mobile-Graph.png",
      "/image/camp-comp-image/rr-blue-graph.png",
      "/image/camp-comp-image/rr-red-graph.png",
    ],
    tags: ["JavaScript", "Nano Technology"],
    links: [
      {
        href: "https://drive.google.com/drive/folders/1gfoVvXmHC-FKy3Fw4SgJf2rj_s1Ce1nN?usp=sharing",
        label: "View Project",
      },
    ],
    impact: [
      "นำความรู้จากวิทยาศาสตร์ในหลาย ๆ ด้านนำมาบูราณาการเข้าด้วยกัน เช่น เคมี ชีววิทยา ฟิสิกส์ คณิตศาสตร์ และ คอมพิวเตอร์",
    ],
    role: "รับหน้าที่ทำหน้าเว็บจำลองการวัดค่าความต้านสัมพัทธ์ของผู้ป่วยติดเตียงด้วย JavaScript แบบ Real-Time",
    summary: "",
  },
];

const TAGS = ["All", ...Array.from(new Set(DATA.flatMap((d) => d.tags))).sort()];

/* ---------- Lightbox สำหรับรูปในโมดัล (เวอร์ชัน mobile-friendly) ---------- */
function ImageLightbox({ open, images = [], index = 0, onClose, onPrev, onNext, title }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          // 👇 จำกัดความกว้าง popup ไม่ให้เต็มจอ
          className="relative w-full max-w-[90vw] sm:max-w-[900px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative bg-black/30 rounded-2xl border border-white/10 overflow-hidden p-3">
            <img
              src={images[index]}
              alt={`${title} – รูปที่ ${index + 1}`}
              // 👇 จำกัดความสูงลงเพื่อให้ดูไม่อึดอัด
              className="w-full max-h-[50vh] sm:max-h-[72vh] object-contain rounded-lg"
              loading="eager"
            />

            {/* ปุ่มปิด */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 inline-flex items-center justify-center size-12 rounded-full bg-white/10 hover:bg-white/15 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Close"
            >
              <X className="size-6" />
            </button>

            {/* ปุ่มเลื่อน */}
            {images.length > 1 && (
              <>
                <button
                  onClick={onPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={onNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}
          </div>

          <div className="mt-3 text-center text-xs sm:text-sm text-white/70">
            {title} — {index + 1}/{images.length}
            <div className="text-white/50">แตะพื้นหลังเพื่อปิด</div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


export default function Projects() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("All");
  const [active, setActive] = useState(null); // โปรเจกต์ที่เปิดโมดัลอยู่

  // state ของ lightbox (คลิกรูปในโมดัลเพื่อขยาย)
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  const list = useMemo(() => {
    const text = q.trim().toLowerCase();
    return DATA.filter((d) => {
      const hitTag = tag === "All" || d.tags.includes(tag);
      const hitText =
        !text ||
        d.title.toLowerCase().includes(text) ||
        d.tagline.toLowerCase().includes(text) ||
        d.summary.toLowerCase().includes(text) ||
        d.tags.join(" ").toLowerCase().includes(text);
      return hitTag && hitText;
    });
  }, [q, tag]);

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const openViewer = (idx) => {
    setViewerIndex(idx);
    setViewerOpen(true);
  };
  const closeViewer = () => setViewerOpen(false);
  const prevViewer = () =>
    setViewerIndex((i) => {
      const len = active?.images?.length || 0;
      return (i - 1 + len) % len;
    });
  const nextViewer = () =>
    setViewerIndex((i) => {
      const len = active?.images?.length || 0;
      return (i + 1) % len;
    });

  return (
    <section id="projects" className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-10 md:mb-14 pt-10">
          <h2 className="text-4xl md:text-5xl font-semibold mt-2">
            My <span className="gradient-monochrome-text">Projects</span>
          </h2>
        </header>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-2 text-white/70">
            <SlidersHorizontal size={18} className="opacity-70" />
            <span className="text-sm">Filter</span>
          </div>

        <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`px-3 py-1.5 rounded-lg border text-sm transition ${
                  tag === t
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="w-full md:w-64">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-xl bg-white/5 border border-white/15 px-3 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/40"
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {list.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/20 hover:shadow-[0_10px_28px_rgba(59,130,246,0.15)] transition"
              >
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className="text-left w-full focus:outline-none"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4 md:p-5">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="text-sm text-white/70 mt-1 line-clamp-2">
                      {p.tagline}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <TagIcon size={16} className="text-white/50" />
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/8 border border-white/10 text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {p.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.links.map((l, i) => (
                          <Link
                            key={i}
                            to={l.href}
                            target="_blank"
                            className="inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200"
                          >
                            {l.label}
                            <ExternalLink size={16} />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal (case study) */}
      {/* Modal (case study): สไตล์ "หน้าจอกลาง" ใช้ได้ทุกขนาดจอ */}
<AnimatePresence>
  {active && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm grid place-items-center p-4"
      onClick={() => setActive(null)}
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-[92vw] max-w-4xl rounded-2xl bg-zinc-900/95 border border-white/10 shadow-2xl overflow-hidden pt-12" 
        // 👆 เพิ่ม pt-12 กันรูปบังปุ่ม
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={active.title}
      >
        {/* ปุ่มปิด: วางบนสุดไม่ถูกบัง */}
        <button
          className="cursor-pointer absolute right-4 top-4 inline-flex items-center justify-center size-11 rounded-full bg-red-500 hover:bg-red-600 duration-300 text-white shadow-lg"
          onClick={() => setActive(null)}
          aria-label="Close"
        >
          <X className="size-6" />
        </button>

        {/* ส่วนรูปภาพ: grid 2 คอลัมน์ */}
        <div className="p-3 sm:p-4">
          <div className="grid grid-cols-2 gap-3">
            {active.images?.slice(0, 6).map((src, i) => (
              <div key={i} className="relative">
                <img
                  src={src}
                  alt={`${active.title} ${i + 1}`}
                  className="w-full rounded-xl border border-white/10 object-cover aspect-[16/10] bg-white/5"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* เนื้อหา */}
        <div className="px-5 pb-6 sm:px-6 sm:pb-7">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            {active.title}
          </h3>
          <p className="text-white/75 mt-2">{active.summary}</p>

          {/* Impact bullets */}
          {active.impact?.length > 0 && (
            <ul className="list-disc ml-5 text-white/80 mt-4 space-y-1">
              {active.impact.map((it, idx) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>
          )}

          {/* Role + tags */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-400/20">
              Role: {active.role}
            </span>
            {active.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-md bg-white/8 border border-white/10 text-white/80"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          {active.links?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {active.links.map((l, i) => (
                <Link
                  key={i}
                  to={l.href}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200"
                >
                  {l.label}
                  <ExternalLink size={16} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


      {/* Lightbox ของรูปในโมดัล */}
      <ImageLightbox
        open={viewerOpen && !!active?.images?.length}
        images={active?.images || []}
        index={viewerIndex}
        title={active?.title || "Project"}
        onClose={closeViewer}
        onPrev={prevViewer}
        onNext={nextViewer}
      />
    </section>
  );
}
