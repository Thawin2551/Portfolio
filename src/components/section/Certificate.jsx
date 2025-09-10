import React, { useEffect, useRef, useState } from "react";

export default function Certificate() {
  const CampCertificates = [
    { id: 1, title: "Math Camp (KMITL)", image: "/image/camp-comp-image/MathCamp.jpg" },
    { id: 2, title: "Physics Battle (KU)", image: "/image/camp-comp-image/PhyBattlePic-Cert.jpg" },
    { id: 3, title: "CiRA CORE AMI Papaya", image: "/image/camp-comp-image/AMI-Papaya.jpg" },
    { id: 4, title: "CE Next Gen #2 (KMITL)", image: "/image/camp-comp-image/CENextGen.jpg" },
    { id: 5, title: "RAI Frontier Camp (Online)", image: "/image/camp-comp-image/RAICampOnline.jpg" },
    { id: 6, title: "RAI Frontier Camp (Onsite)", image: "/image/camp-comp-image/RaiCamp-Onsite-Cert.jpg" },
    { id: 7, title: "ComCamp36 (KMUTT)", image: "/image/camp-comp-image/ComCamp.jpg" },
    { id: 8, title: "INC Engineering Camp 14 (KMUTT)", image: "/image/camp-comp-image/IncCamp.jpg" },
    { id: 9, title: "IT CAMP 21 (KMITL)", image: "/image/camp-comp-image/ITCAMP21.jpg" },
    { id: 10, title: "NextGenAI Camp (KMITL)", image: "/image/camp-comp-image/Silver-Nextgen.jpg" },
    { id: 11, title: "NextGenAi Hackathon (KMITL)", image: "/image/camp-comp-image/Gold-Nextgen.jpg" },
    { id: 12, title: "SPU Prompt AI Mini Hackathon (SPU)", image: "/image/camp-comp-image/AiAT-SPU.jpg" },
    { id: 13, title: "PSU Mathematic Competition (PSU)", image: "/image/camp-comp-image/PSU.jpg" },
    { id: 14, title: "Web Development Competition (KU)", image: "/image/camp-comp-image/KU-Cert.png" },
    { id: 15, title: "การประกวดนวัตกรรมนาโนเทคโนโลยีระดับประเทศ ครั้งที่ 13 (KMITL)", image: "/image/camp-comp-image/Nano-cert.jpg" },
  ];

  // ---- Lightbox state ----
  const [lightbox, setLightbox] = useState({ open: false, src: "", title: "" });
  const openLightbox = (src, title) => setLightbox({ open: true, src, title });
  const closeLightbox = () => setLightbox({ open: false, src: "", title: "" });

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && closeLightbox();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  // ---- Reveal on scroll (IntersectionObserver) ----
  const gridRef = useRef(null);
  useEffect(() => {
    const items = gridRef.current?.querySelectorAll("[data-reveal]");
    if (!items?.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ---- Subtle tilt on mouse move ----
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5; // -0.5 .. 0.5
    const py = y / rect.height - 0.5;
    card.style.setProperty("--rx", `${py * -6}deg`);
    card.style.setProperty("--ry", `${px * 6}deg`);
  };
  const resetTilt = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--rx", `0deg`);
    card.style.setProperty("--ry", `0deg`);
  };

  return (
    <>
      {/* Local styles for animations & blob background */}
      <style>{`
        @keyframes fadeUp { from {opacity:0; transform: translateY(18px)} to {opacity:1; transform: translateY(0)} }
        .reveal { opacity: 0; transform: translateY(18px); }
        .reveal-visible { opacity: 1; transform: translateY(0); animation: fadeUp .7s ease both; }

        @keyframes floatBlob { 0%{ transform: translate(-10%, -10%) scale(1)} 50%{ transform: translate(10%, 0%) scale(1.05)} 100%{ transform: translate(-10%, -10%) scale(1)} }
        .blob { filter: blur(70px); opacity: .25; animation: floatBlob 18s ease-in-out infinite; }

        .tilt {
          transform: perspective(1000px) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(0);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .tilt:hover { box-shadow: 0 10px 28px rgba(59,130,246,.18); }

        .shimmer { position: relative; overflow: hidden; }
        .shimmer::after {
          content: ""; position: absolute; inset: 0; background: linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.08) 45%, rgba(255,255,255,0) 60%);
          transform: translateX(-120%);
          animation: shimmer 1.7s ease-in-out infinite;
        }
        @keyframes shimmer { 100% { transform: translateX(120%); } }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center py-16 md:py-24">
        {/* floating gradient blob background */}
        <div className="pointer-events-none absolute -top-24 -right-16 w-[42rem] h-[42rem] rounded-full bg-gradient-to-tr from-blue-600/30 via-cyan-400/20 to-indigo-500/30 blob" />

        <div className="relative text-white w-full max-w-7xl px-4">
          <header className="mb-10 md:mb-14 text-center pt-10">
            <h1 className="text-4xl md:text-5xl font-semibold font-sans mt-2 gradient-monochrome-text">Certificates</h1>
          </header>

          {/* Grid */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {CampCertificates.map((cert, idx) => (
              <button
                key={cert.id}
                type="button"
                className="group text-left"
                onClick={() => openLightbox(cert.image, cert.title)}
                data-reveal
                style={{ animationDelay: `${idx * 70}ms` }}
              >
                <div
                  className="tilt bg-white/5 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm transition transform-gpu hover:-translate-y-1"
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                >
                  <div className="relative">
                    <img
                      src={cert.image}
                      alt={cert.title || "certificate"}
                      loading="lazy"
                      className="w-full h-56 md:h-64 object-cover select-none transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 shimmer group-hover:opacity-0 transition-opacity duration-300" aria-hidden="true" />
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-sm md:text-base font-medium text-white/90 line-clamp-1">
                      {cert.title || "Certificate"}
                    </h3>
                    <p className="text-xs md:text-sm text-white/60 mt-1">คลิกเพื่อดูแบบขยาย</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox modal */}
        {lightbox.open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <div className="max-w-5xl w-[94%] md:w-auto p-0" onClick={(e) => e.stopPropagation()}>
              <figure className="relative animate-in zoom-in-95 fade-in duration-200">
                <img src={lightbox.src} alt={lightbox.title} className="max-h-[82vh] w-auto rounded-xl shadow-2xl" />
                <figcaption className="mt-3 text-center text-white/80 text-sm md:text-base">
                  {lightbox.title}
                </figcaption>
                <button
                  onClick={closeLightbox}
                  className="absolute -top-3 -right-3 rounded-full bg-white/90 text-gray-900 w-9 h-9 grid place-items-center shadow"
                  aria-label="Close"
                >
                  ✕
                </button>
              </figure>
          </div>
        </div>
        )}
      </section>
    </>
  );
}
