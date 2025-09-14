import React from "react";

export const About = () => {
  const skills = [
    "React", "TailwindCSS", "Bootstrap", "JavaScript",
    "HTML", "CSS", "Python", "Canva",
  ];

  const education = [
    {
      year: "2020 – 2023",
      institution: "Winitsuksa School",
      degree: "Mid-School",
      details: "Graduated from Winitesuksa School",
      logo: "/image/school-image/winit.jpg",
    },
    {
      year: "2023 – 2026",
      institution: "Pibulwittayalai School",
      degree: "High-School",
      department: "Sci–Math",
      details: "Graduated from Pibulwittayalai School",
      logo: "/image/school-image/pibul.png",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 container mx-auto">
      <div className="max-w-7xl mx-auto px-4">
        {/* ===== Profile ===== */}
        <header className="mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold mt-[100px]">Profile</h2>
        </header>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 hover:shadow-[0_10px_28px_rgba(59,130,246,0.1)] transition">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Intro */}
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-semibold">
                สวัสดีครับ, ผม <span className="gradient-monochrome-text">Thawin</span>
              </h3>
              <p className="text-white/80 mt-3 leading-relaxed">
                สนใจงานพัฒนาเว็บไซต์ด้าน <span class='font-bold'>Frontend</span> เป็นหลัก และในตอนนีกำลังศึกษา <span class='font-bold'>Deep Learning Backend </span> และ <span class='font-bold'>Data Science</span> เพิ่มเติมเพื่อพัฒนาตัวเองให้มีความสามารถรอบด้านมากขึ้นพร้อมสำหรับการทำงานในอนาคตครับ
              </p>

              <div className="mt-6">
                <h1 className="text-gray-100 text-3xl">
                  My Tech <span className="gradient-monochrome-text">Skills</span>
                </h1>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((s, i) => (
                    <span
                      key={i}
                      className="text-sm md:text-base px-3 py-1.5 rounded-lg bg-white/8 border border-white/0 text-white/90 hover:bg-white/12 transition"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Photos */}
            <div className="flex items-start justify-center md:justify-end gap-3">
              <img
                src="\image\camp-comp-image\ThawinPic.jpg"
                alt="Thawin portrait"
                className="w-32 h-44 md:w-36 md:h-48 rounded-xl object-cover shadow-lg shadow-black/30"
              />
            </div>
          </div>
        </div>

        {/* ===== Skills (icons) ===== */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
          <h3 className="text-3xl font-semibold">เครื่องมือที่ใช้บ่อยในการทำโปรเจกต์</h3>
          <p className="text-white/70 mt-2">เครื่องมือที่ใช้บ่อยในการทำงานและโปรเจกต์ส่วนตัว</p>

          {/* ไม่มีขอบรอบโลโก้แล้ว + เงานุ่ม */}
          <div className="mt-6 flex flex-row flex-wrap gap-6">
            <img src="/image/skills-image/react.png" alt="React" className="w-16 h-16 rounded-xl object-contain shadow-lg shadow-black/30" />
            <img src="/image/skills-image/tailwind.png" alt="Tailwind" className="w-16 h-16 rounded-xl object-contain shadow-lg shadow-black/30" />
            <img src="/image/skills-image/js.png" alt="JavaScript" className="w-16 h-16 rounded-xl object-contain shadow-lg shadow-black/30" />
            <img src="/image/skills-image/CSS.png" alt="CSS" className="w-18 h-18 rounded-xl object-contain shadow-lg shadow-black/30" />
            <img src="/image/skills-image/HTML.webp" alt="HTML" className="w-16 h-16 rounded-xl object-contain shadow-lg shadow-black/30" />
            <img src="/image/skills-image/BootStrap.png" alt="Bootstrap" className="w-16 h-16 rounded-xl object-contain shadow-lg shadow-black/30" />
            <img src="/image/skills-image/python-logo.png" alt="Python" className="w-16 h-16 rounded-xl object-contain shadow-lg shadow-black/30" />
            <img src="/image/skills-image/Canva.png" alt="Canva" className="w-16 h-16 rounded-xl object-contain shadow-lg shadow-black/30" />
          </div>
        </div>

        {/* ===== Education ===== */}
        <div className="mt-16 mb-20">
          <h3 className="text-3xl font-semibold mb-6">Education</h3>

          <div className="relative">
            {/* เส้นกลางชัดขึ้น: หนาขึ้น + ไล่เฉด + เงาเรืองเบา ๆ */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400/80 via-blue-400/60 to-blue-400/80 shadow-[0_0_22px_rgba(96,165,250,0.35)]" />

            {/* มือถือ: เส้นด้านซ้ายให้ชัดขึ้นเหมือนกัน */}
            <div className="hidden md:hidden absolute left-2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400/80 via-blue-400/60 to-blue-400/80 shadow-[0_0_18px_rgba(96,165,250,0.3)]" />

            <div className="space-y-12">
              {education.map((e, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* ฝั่งเนื้อหา (สลับซ้าย/ขวาบนเดสก์ท็อป) */}
                  <div className={`${i % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"}`}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/25 border border-blue-400/50 grid place-items-center text-blue-100 shadow-[0_0_10px_rgba(96,165,250,0.35)]">
                        {i + 1}
                      </div>
                      <span className="text-blue-300 font-medium">{e.year}</span>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                          <img src={e.logo} alt={e.institution} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold">{e.degree}</h4>
                          <p className="text-white/70">{e.institution}</p>
                        </div>
                      </div>

                      {e.department && (
                        <p className="text-white/80">
                          <span className="text-white/60">Department: </span>
                          <span className="text-blue-300">{e.department}</span>
                        </p>
                      )}
                      <p className="text-white/70 mt-2">{e.details}</p>
                    </div>
                  </div>

                  {/* ตัวเว้นวรรคฝั่งตรงข้าม (รักษา balance บนเดสก์ท็อป) */}
                  <div className={`${i % 2 === 0 ? "" : "md:order-1"} hidden md:block`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
