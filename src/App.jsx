import { motion } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import profile from "./assets/profile.png";
import agustinus from "./assets/agustinus.png";
import portfolio from "./assets/portfolio.png";
import poster from "./assets/poster.png";
import logo from "./assets/logo.jpg";
import penelitian from "./assets/penelitian.png";
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaPalette,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";

import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

function App() {
   const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
    useEffect(() => {

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const moveCursor = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", moveCursor);

  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
    clearTimeout(timer);
  };

}, []);

  return (
  <div className="relative bg-gradient-to-b from-[#020617] via-[#0f172a] to-black text-white min-h-screen overflow-hidden">

    {loading && (

      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-[999]"
      >

        {/* GLOW */}
        <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full"></div>

        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
          }}
          className="text-4xl md:text-6xl font-black tracking-[8px] text-white relative z-10"
        >
          EGA
        </motion.h1>

        {/* LOADING BAR */}
        <div className="w-52 h-1 bg-white/10 rounded-full overflow-hidden mt-10 relative z-10">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
            }}
            className="h-full bg-cyan-400"
          />

        </div>

      </motion.div>

    )}
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[160px] opacity-10"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[160px] opacity-20"></div>

      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-sky-400 rounded-full blur-[120px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>

      {/* NAVBAR */}
<nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/5 border-b border-cyan-500/10 z-50">

  <div className="w-full px-8 md:px-20 py-5 flex justify-between items-center">

    {/* LOGO */}
    <h1 
      className="text-2xl md:text-3xl font-bold tracking-widest text-white">
      Portofolio <span className="text-cyan-400"> EGA</span>
    </h1>

    {/* DESKTOP MENU */}
    <ul className="hidden md:flex gap-10 text-gray-300">

      <li>
  <a
    href="#home"
    className="hover:text-cyan-400 cursor-pointer transition duration-300"
  >
    Home
  </a>
</li>

      <li>
  <a
    href="#about"
    className="hover:text-cyan-400 cursor-pointer transition duration-300"
  >
    About
  </a>
</li>

      <li>
  <a
    href="#skills"
    className="hover:text-cyan-400 cursor-pointer transition duration-300"
  >
    Skills
  </a>
</li>

      <li>
  <a
    href="#projects"
    className="hover:text-cyan-400 cursor-pointer transition duration-300"
  >
    Projects
  </a>
</li>

      <li>
  <a
    href="#contact"
    className="hover:text-cyan-400 cursor-pointer transition duration-300"
  >
    Contact
  </a>
</li>

    </ul>

    {/* MOBILE BUTTON */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-3xl text-cyan-400"
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>

  </div>

  {/* MOBILE MENU */}
  {menuOpen && (

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden bg-[#081120]/95 backdrop-blur-xl border-t border-cyan-500/10"
    >

      <ul className="flex flex-col items-center gap-8 py-10 text-lg text-gray-300">

        <li className="hover:text-cyan-400 transition">
          Home
        </li>

        <li className="hover:text-cyan-400 transition">
          About
        </li>

        <li className="hover:text-cyan-400 transition">
          Skills
        </li>

        <li className="hover:text-cyan-400 transition">
          Projects
        </li>

        <li className="hover:text-cyan-400 transition">
          Contact
        </li>

      </ul>

    </motion.div>

  )}

</nav>

      {/* HERO SECTION */}
      <section id="home" className="h-screen flex flex-col justify-center items-center px-6 text-center relative z-10">

        <motion.h1
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-8xl font-black leading-tight"
>
  Creative <br />

  <TypeAnimation
    sequence={[
      "Web Developer",
      2000,
      "Data Scientist",
      2000,
      "UI/UX Designer",
      2000,
      "Machine Learning Enthusiast",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-cyan-400"
  />

</motion.h1>
    
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-gray-400 text-lg md:text-2xl max-w-3xl leading-relaxed"
        >
          Saya menciptakan website modern, aesthetic,
          dan pengalaman digital interaktif dengan desain
          futuristik dan clean user interface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-5 mt-10 flex-wrap justify-center"
        >

          <button
  onClick={() => {
    document
      .getElementById("projects")
      .scrollIntoView({ behavior: "smooth" });
  }}
  className="group px-10 py-5 rounded-full bg-cyan-400 text-black font-bold text-lg hover:scale-105 transition duration-500 shadow-[0_0_40px_rgba(34,211,238,0.5)] flex items-center gap-3"
>

  Explore Portfolio

  <FaArrowRight className="group-hover:translate-x-2 transition duration-300" />

</button>

         <button
  onClick={() => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  }}
  className="group px-10 py-5 rounded-full border border-cyan-400 text-cyan-400 font-semibold text-lg hover:bg-cyan-400 hover:text-black transition duration-500 flex items-center gap-3"
>

  Contact Me

  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />

</button>
        </motion.div>

      </section>

{/* ABOUT SECTION */}
<section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">

  {/* TITLE */}
  <motion.h2
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-5xl md:text-7xl font-bold mb-16 text-center"
  >
    halo perkenalkan saya Fernando,
  
  </motion.h2>

  <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center justify-center">

    {/* FOTO FLOATING */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative z-20 md:-mr-20 mb-10 md:mb-0"
    >

      <div className="absolute inset-0 bg-cyan-400 blur-[80px] opacity-20 rounded-3xl"></div>

      <img
        src={profile}
        alt="Profile"
        className="relative w-[240px] md:w-[320px] h-[360px] rounded-3xl border border-cyan-400/20 shadow-[0_0_50px_rgba(34,211,238,0.25)] object-cover"
      />

    </motion.div>

    {/* CARD TEXT */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex items-center h-[360px] flex-1 bg-white/5 border border-cyan-500/10 backdrop-blur-xl rounded-[40px] p-10 md:pl-28 shadow-[0_0_60px_rgba(34,211,238,0.08)]"
    >

      <p className="text-gray-400 leading-9 text-lg md:text-xl max-w-3xl">
      Saya merupakan lulusan S1 Informatika Universitas Amikom Yogyakarta yang memiliki ketertarikan dan kompetensi dalam bidang Web Development, Data Science, dan Machine Learning.
      Memiliki pengalaman dalam pengolahan serta analisis data menggunakan Python dan SQL, serta penerapan machine learning melalui berbagai proyek akademik.
      Selain memiliki kemampuan teknis di bidang pengembangan website modern dan interaktif, saya juga memiliki minat dalam menciptakan tampilan antarmuka yang clean,
      profesional, dan berorientasi pada pengalaman pengguna. Saya terbiasa bekerja secara individu maupun dalam tim, memiliki kemampuan adaptasi yang baik, serta semangat belajar yang tinggi untuk terus berkembang mengikuti perkembangan teknologi digital.
      </p>

    </motion.div>

  </div>

</section>
      {/* SKILLS SECTION */}
<section id="skills" className="min-h-screen px-6 py-24 relative z-10">

  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-5xl md:text-7xl font-bold text-center mb-20"
  >
    My Skills
  </motion.h2>

  <motion.div
   variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
>
  

    {/* CARD */}
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.03 }}
      className="group bg-white/5 border border-cyan-500/10 rounded-[30px] p-10 backdrop-blur-xl hover:border-cyan-400/40 transition duration-500 text-center"
    >

      <FaReact className="text-6xl text-cyan-400 mx-auto mb-6 group-hover:rotate-180 transition duration-700" />

      <h3 className="text-3xl font-bold mb-4">
        React JS
      </h3>

      <p className="text-gray-400 leading-7">
        Membangun website modern, responsive,
        dan interaktif menggunakan React.
      </p>

    </motion.div>

    {/* CARD */}
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.03 }}
      className="group bg-white/5 border border-cyan-500/10 rounded-[30px] p-10 backdrop-blur-xl hover:border-cyan-400/40 transition duration-500 text-center"
    >
   <FaPython className="text-6xl text-cyan-400 mx-auto mb-6 group-hover:-translate-y-3 transition duration-500" />

      <h3 className="text-3xl font-bold mb-4">
        Python
      </h3>

      <p className="text-gray-400 leading-7">
        Analisis data, machine learning,
        dan automation menggunakan Python.
      </p>

    </motion.div>

    {/* CARD */}
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.03 }}
      className="group bg-white/5 border border-cyan-500/10 rounded-[30px] p-10 backdrop-blur-xl hover:border-cyan-400/40 transition duration-500 text-center"
    >

      <FaDatabase className="text-6xl text-cyan-400 mx-auto mb-6 group-hover:translate-x-2 transition duration-300" />

      <h3 className="text-3xl font-bold mb-4">
        SQL & Database
      </h3>

      <p className="text-gray-400 leading-7">
        Pengolahan dan manajemen database
        menggunakan SQL.
      </p>

    </motion.div>

    {/* CARD */}
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.03 }}
      className="group bg-white/5 border border-cyan-500/10 rounded-[30px] p-10 backdrop-blur-xl hover:border-cyan-400/40 transition duration-500 text-center"
    >

      <SiTensorflow className="text-6xl text-cyan-400 mx-auto mb-6 group-hover:scale-125 transition duration-500" />

      <h3 className="text-3xl font-bold mb-4">
        Machine Learning
      </h3>

      <p className="text-gray-400 leading-7">
        Pembuatan model machine learning
        dan pengolahan data cerdas.
      </p>

    </motion.div>

    {/* CARD */}
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.03 }}
      className="group bg-white/5 border border-cyan-500/10 rounded-[30px] p-10 backdrop-blur-xl hover:border-cyan-400/40 transition duration-500 text-center"
    >

      <SiTailwindcss className="text-6xl text-cyan-400 mx-auto mb-6 group-hover:-rotate-12 transition duration-500" />

      <h3 className="text-3xl font-bold mb-4">
        Tailwind CSS
      </h3>

      <p className="text-gray-400 leading-7">
        Styling modern dan responsive
        menggunakan Tailwind CSS.
      </p>

    </motion.div>

    {/* CARD */}
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.03 }}
      className="group bg-white/5 border border-cyan-500/10 rounded-[30px] p-10 backdrop-blur-xl hover:border-cyan-400/40 transition duration-500 text-center"
    >

      <FaPalette className="text-6xl text-cyan-400 mx-auto mb-6 group-hover:scale-110 transition duration-500" />

      <h3 className="text-3xl font-bold mb-4">
        UI/UX Design
      </h3>

      <p className="text-gray-400 leading-7">
        Mendesain tampilan modern,
        aesthetic, dan user friendly.
      </p>

    </motion.div>

  </motion.div>


</section>

      {/* PROJECT SECTION */}
      <section id="projects" className="min-h-screen px-6 py-24 relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-center mb-20"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {/* CARD */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="group bg-white/5 border border-cyan-500/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:border-cyan-400/40 transition duration-500"
          >

            <img
              src={agustinus}
              alt="Agustinus Design"
              className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition">
                T-SHIRT AGUSTINUS
              </h3>

              <p className="text-gray-400 leading-7">
                Desain baju dengan konsep modern, clean,
                dan visual aesthetic untuk kebutuhan komunitas
                dan branding kreatif.
              </p>

            </div>

          </motion.div>

          {/* CARD */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="group bg-white/5 border border-cyan-500/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:border-cyan-400/40 transition duration-500"
          >

            <img
            src={penelitian}
            alt="Portfolio Website"
            className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition">
                Portfolio Website
              </h3>

              <p className="text-gray-400 leading-7">
                Website portfolio modern menggunakan React,
                Tailwind CSS, dan animasi Framer Motion.
              </p>

            </div>

          </motion.div>

          {/* CARD */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="group bg-white/5 border border-cyan-500/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:border-cyan-400/40 transition duration-500"
          >

            <img
            src={poster}
            alt="Creative Poster"
            className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition">
                Creative Poster
              </h3>

              <p className="text-gray-400 leading-7">
                Desain poster digital dengan konsep cinematic
                dan futuristic visual experience.
              </p>

            </div>

          </motion.div>
          {/* CARD */}
<motion.div
  whileHover={{ y: -10, scale: 1.03 }}
  className="group bg-white/5 border border-cyan-500/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:border-cyan-400/40 transition duration-500"
>

  <img
    src={logo}
    alt="Logo Design"
    className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
  />

  <div className="p-8">

    <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition">
      Logo Design
    </h3>

    <p className="text-gray-400 leading-7">
      Desain logo modern dengan konsep clean,
      aesthetic, dan visual branding profesional
      untuk kebutuhan komunitas maupun bisnis.
    </p>

  </div>

</motion.div>

        </div>


{/* TIMELINE SECTION */}
<section
  id="timeline"
  className="min-h-screen px-6 py-24 relative z-10"
>

  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-5xl md:text-7xl font-bold text-center mb-24"
  >
    Experience & Education
  </motion.h2>

  <div className="relative max-w-4xl mx-auto">

    {/* LINE */}
    <div className="absolute left-1/2 top-0 w-1 h-full bg-cyan-400/30 -translate-x-1/2"></div>

    {/* ITEM */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-20 flex justify-start w-full"
    >

      <div className="w-[45%] bg-white/5 border border-cyan-500/10 backdrop-blur-xl rounded-[30px] p-8">

        <h3 className="text-cyan-400 text-xl font-bold mb-2">
          2022-2026
        </h3>

        <h2 className="text-3xl font-bold mb-4">
          S1 Informatika
        </h2>

        <p className="text-gray-400 leading-7">
          Universitas Amikom Yogyakarta dengan fokus
          pada Pemrograman Basis Data dan lulus dengan judul penelitian
          "ANALISIS SENTIMEN ULASAN PENGGUNA APLIKASI JOGJAKITA PADA GOOGLE PLAY STORE
          MENGGUNAKAN ALGORITMA SUPPORT VECTOR MACHINE".
        </p>

      </div>

    </motion.div>

    {/* ITEM */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-20 flex justify-end w-full"
    >

      <div className="w-[45%] bg-white/5 border border-cyan-500/10 backdrop-blur-xl rounded-[30px] p-8">

        <h3 className="text-cyan-400 text-xl font-bold mb-2">
          2019-2022
        </h3>

        <h2 className="text-3xl font-bold mb-4">
          MEKANIK & QC
        </h2>

        <p className="text-gray-400 leading-7">
          Menjadi mekanik di Hoda Bintang Cimone selama 2 tahun 8 bulan,
          Menjadi Qualty Control Selama kuranglebih 6 bulan
        </p>

      </div>

    </motion.div>

    {/* ITEM */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-start w-full"
    >

      <div className="w-[45%] bg-white/5 border border-cyan-500/10 backdrop-blur-xl rounded-[30px] p-8">

        <h3 className="text-cyan-400 text-xl font-bold mb-2">
          2019
        </h3>

        <h2 className="text-3xl font-bold mb-4">
          SMK N 2 DEPOK SLEMAN
        </h2>

        <p className="text-gray-400 leading-7">
          lulus dari Jurusan Teknik Perbaikan Bodi Otomotif
        </p>

      </div>

    </motion.div>

  </div>

</section>
      </section>

      
      {/* CONTACT SECTION */}
<section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24 relative z-10">

  <div className="max-w-5xl w-full">

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-7xl font-bold text-center mb-20"
    >
      Contact Me
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white/5 border border-cyan-500/10 backdrop-blur-xl rounded-[40px] p-10 md:p-16 shadow-[0_0_60px_rgba(34,211,238,0.08)]"
    >

      <p className="text-center text-gray-400 text-lg md:text-xl leading-8 max-w-3xl mx-auto">
        Saya terbuka untuk peluang kerja, kolaborasi,
        maupun project freelance. Jangan ragu untuk
        menghubungi saya melalui platform berikut.
      </p>

      {/* CONTACT GRID */}
      <div className="grid md:grid-cols-2 gap-8 mt-14">

        {/* EMAIL */}
        <motion.a
          whileHover={{ scale: 1.03 }}
          href="mailto:emailkamu@gmail.com"
          className="flex items-center gap-5 bg-white/5 border border-cyan-500/10 rounded-3xl p-6 hover:border-cyan-400/40 transition duration-500"
        >

          <FaEnvelope className="text-4xl text-cyan-400" />

          <div>
            <h3 className="text-2xl font-bold">
              Email
            </h3>

            <p className="text-gray-400">
              emailkamu@gmail.com
            </p>
          </div>

        </motion.a>

        {/* WHATSAPP */}
        <motion.a
          whileHover={{ scale: 1.03 }}
          href="https://wa.me/628xxxxxxxxxx"
          target="_blank"
          className="flex items-center gap-5 bg-white/5 border border-cyan-500/10 rounded-3xl p-6 hover:border-cyan-400/40 transition duration-500"
        >

          <FaWhatsapp className="text-4xl text-cyan-400" />

          <div>
            <h3 className="text-2xl font-bold">
              WhatsApp
            </h3>

            <p className="text-gray-400">
              +62 xxx xxxx xxxx
            </p>
          </div>

        </motion.a>

        {/* GITHUB */}
        <motion.a
          whileHover={{ scale: 1.03 }}
          href="https://github.com/"
          target="_blank"
          className="flex items-center gap-5 bg-white/5 border border-cyan-500/10 rounded-3xl p-6 hover:border-cyan-400/40 transition duration-500"
        >

          <FaGithub className="text-4xl text-cyan-400" />

          <div>
            <h3 className="text-2xl font-bold">
              GitHub
            </h3>

            <p className="text-gray-400">
              github.com/username
            </p>
          </div>

        </motion.a>

        {/* LINKEDIN */}
        <motion.a
          whileHover={{ scale: 1.03 }}
          href="https://linkedin.com/"
          target="_blank"
          className="flex items-center gap-5 bg-white/5 border border-cyan-500/10 rounded-3xl p-6 hover:border-cyan-400/40 transition duration-500"
        >

          <FaLinkedin className="text-4xl text-cyan-400" />

          <div>
            <h3 className="text-2xl font-bold">
              LinkedIn
            </h3>

            <p className="text-gray-400">
              linkedin.com/in/username
            </p>
          </div>

        </motion.a>

      </div>

    </motion.div>

  </div>

</section>
      {/* FOOTER */}
      <footer className="border-t border-cyan-500/10 py-10 text-center text-gray-500 relative z-10">
        <p>
          © 2026 Ega Portfolio — Designed with React & Tailwind CSS
        </p>
      </footer>

    </div>
  );
}

export default App;