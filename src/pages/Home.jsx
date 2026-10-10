import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Copy, Check, Send, MessageCircle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo, projectsList } from '../data/portfolioData';
import heroImg from '../img/hero.png';
import serviceHtmlImg from '../img/service_htmlcss.jpg';
import serviceGgsiteImg from '../img/ggsite.png';
import TechMarquee from '../components/TechMarquee';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [contactState, setContactState] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowAll(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!contactState.name || !contactState.email || !contactState.message) return;
    const subject = encodeURIComponent(`[Yêu cầu làm web] Từ ${contactState.name}`);
    const body = encodeURIComponent(
      `Chào Quốc Khánh,\n\nTên: ${contactState.name}\nEmail: ${contactState.email}\n\nNội dung yêu cầu:\n${contactState.message}`
    );
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  const filteredProjects = activeTab === 'all' 
    ? projectsList 
    : projectsList.filter(p => p.type === activeTab);

  const INITIAL_LIMIT = 8;
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_LIMIT);

  // Thống kê số lượng từng loại
  const countLop12 = projectsList.filter(p => p.type === 'lop12').length;
  const countLove = projectsList.filter(p => p.type === 'tinhyeu').length;
  const countKhac = projectsList.filter(p => p.type === 'khac').length;
  const countGoogle = projectsList.filter(p => p.type === 'google-sites').length;

  return (
    <div className="min-h-screen bg-[#080809] text-[#f4efe6]">
      
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-20 px-6 overflow-hidden">
        {/* Subtle Warm Gold Glow Background */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Two-column layout: text left, image right */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

            {/* LEFT — Text Content */}
            <div className="flex-1 min-w-0 text-center md:text-left">

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono mb-3 border border-amber-500/30 bg-amber-500/10 text-amber-300"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>{personalInfo.status}</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gold-gradient mb-4 leading-[1.15] pb-1 overflow-visible"
              >
                {personalInfo.name}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-xl font-light text-neutral-200 mb-3 leading-relaxed"
              >
                {personalInfo.headline}
              </motion.p>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xs sm:text-sm text-neutral-400 mb-8 leading-relaxed max-w-lg"
              >
                {personalInfo.heroDescription}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-4"
              >
                <a
                  href="#san-pham"
                  className="btn-gold px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 group"
                >
                  <span>Xem 27+ mẫu web</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={personalInfo.contact.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl border border-amber-500/30 bg-[#121114]/90 text-amber-200 hover:bg-amber-500/10 font-medium text-sm transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-amber-400" />
                  <span>Nhắn Zalo: {personalInfo.contact.phone}</span>
                </a>
              </motion.div>
            </div>

            {/* RIGHT — Circular Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="shrink-0 flex flex-col items-center gap-4"
            >
              {/* Glow ring + circular image */}
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 blur-xl opacity-30 scale-110"></div>
                {/* Gold gradient border ring */}
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full p-[3px] bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 shadow-2xl shadow-amber-500/20">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1a1a]">
                    <img
                      src={heroImg}
                      alt="Phạm Quốc Khánh"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Decorative dot badge */}
                <div className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-amber-400 border-2 border-[#09090b] shadow-lg animate-pulse"></div>
              </div>

              {/* Name caption below image on mobile */}
              <div className="md:hidden text-center">
                <p className="text-xs text-amber-400/70 tracking-widest uppercase font-mono">Quốc Khánh Portfolio</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT BANNER */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm flex items-center gap-3 text-center sm:text-left">
          <Sparkles className="w-6 h-6 text-amber-400 shrink-0 hidden sm:block" />
          <p className="text-xs sm:text-sm font-semibold text-amber-200 leading-relaxed">
            MÌNH NHẬN CHỈNH SỬA THEO YÊU CẦU, LÀM WEB THEO Ý TƯỞNG CỦA BẠN, GIÁ THỎA THUẬN QUA ZALO NHA: <a href="https://zalo.me/0867679310" target="_blank" rel="noopener noreferrer" className="underline text-amber-300 font-bold ml-1">0867679310</a>
          </p>
        </div>
      </div>

      {/* SERVICE TICKER */}
      <TechMarquee />

      {/* DỊCH VỤ NHẬN LÀM */}
      <section className="py-16 px-6 border-b border-amber-500/15">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase text-amber-400/80 font-mono">
              Dịch vụ hỗ trợ
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white mt-2">
              Tôi Nhận Làm Những Gì?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalInfo.services.map((srv, idx) => (
              <div
                key={idx}
                className="gold-card rounded-2xl relative overflow-hidden group flex flex-col"
              >
                {srv.image && (
                  <div className="relative w-full h-56 overflow-hidden">
                    <img
                      src={srv.image || (idx === 0 ? serviceHtmlImg : serviceGgsiteImg)}
                      alt={srv.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0f11]"></div>
                    <div className="absolute top-3 left-3 text-[10px] font-mono text-amber-300 bg-[#09090b]/80 border border-amber-500/30 backdrop-blur-sm px-2.5 py-1 rounded-full tracking-wider">
                      {srv.tag}
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col gap-2 flex-1">
                  {!srv.image && (
                    <div className="text-xs font-mono text-amber-400/80 mb-1 tracking-wider">{srv.tag}</div>
                  )}
                  <h3 className="font-editorial text-xl text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DANH SÁCH SẢN PHẨM MẪU */}
      <section id="san-pham" className="py-14 sm:py-20 px-4 sm:px-6 border-b border-amber-500/15">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs tracking-widest uppercase text-amber-400/80 font-mono">
                Thư viện mẫu ({projectsList.length} dự án)
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-white mt-1">
                Kho Mẫu Sản Phẩm Đầy Đủ
              </h2>
              <p className="text-xs text-neutral-400 mt-2 max-w-xl">
                Các mẫu web đều có hình ảnh minh họa thực tế. Bạn có thể đặt làm hoặc nhận code tham khảo qua Zalo.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#121114] border border-amber-500/25">
              <button
                onClick={() => handleTabChange('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'all'
                    ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                    : 'text-neutral-400 hover:text-amber-200'
                }`}
              >
                Tất cả ({projectsList.length})
              </button>
              <button
                onClick={() => handleTabChange('lop12')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'lop12'
                    ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                    : 'text-neutral-400 hover:text-amber-200'
                }`}
              >
                Lớp 12 ({countLop12})
              </button>
              <button
                onClick={() => handleTabChange('tinhyeu')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'tinhyeu'
                    ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                    : 'text-neutral-400 hover:text-amber-200'
                }`}
              >
                Tình yêu ({countLove})
              </button>
              <button
                onClick={() => handleTabChange('khac')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'khac'
                    ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                    : 'text-neutral-400 hover:text-amber-200'
                }`}
              >
                Website khác ({countKhac})
              </button>
              <button
                onClick={() => handleTabChange('google-sites')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'google-sites'
                    ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                    : 'text-neutral-400 hover:text-amber-200'
                }`}
              >
                Google Sites ({countGoogle})
              </button>
            </div>
          </div>

          {/* Grid of Projects (2 cột trên điện thoại, 3 cột tablet, 4 cột laptop) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
            {visibleProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          {/* Nút Xem tất cả / Thu gọn */}
          {filteredProjects.length > INITIAL_LIMIT && (
            <div className="mt-8 sm:mt-12 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn-gold px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg shadow-amber-500/10 hover:scale-105 active:scale-95 transition-all"
              >
                {showAll ? (
                  <>
                    <span>Thu gọn danh sách</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Xem tất cả ({filteredProjects.length} mẫu)</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </section>

      {/* LIÊN HỆ GỌN GÀNG */}
      <section id="lien-he" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-xs tracking-widest uppercase text-amber-400/80 font-mono">
              Trao đổi yêu cầu
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white mt-2">
              {personalInfo.contact.title}
            </h2>
            <p className="text-sm text-neutral-300 mt-2 max-w-md mx-auto">
              {personalInfo.contact.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Box thông tin */}
            <div className="gold-card p-6 md:p-8 rounded-2xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400/80 font-mono">
                  Zalo / Điện thoại trực tiếp
                </span>
                <div className="flex items-center justify-between gap-2 mt-2 p-3 rounded-xl bg-neutral-950 border border-amber-500/25">
                  <span className="text-sm font-mono text-amber-300 font-bold">
                    {personalInfo.contact.phone}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handleCopyPhone}
                      className="p-1.5 rounded-lg hover:bg-neutral-800 text-amber-300 transition-colors"
                      title="Sao chép SĐT"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={personalInfo.contact.zalo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-amber-400 text-neutral-950 font-bold text-xs"
                    >
                      Mở Zalo
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400/80 font-mono">
                  Email liên hệ
                </span>
                <div className="flex items-center justify-between gap-2 mt-2 p-3 rounded-xl bg-neutral-950 border border-amber-500/25">
                  <span className="text-xs sm:text-sm font-mono text-neutral-200 truncate">
                    {personalInfo.contact.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg hover:bg-neutral-800 text-amber-300 transition-colors"
                    title="Sao chép email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400/80 font-mono">
                  Cam kết chất lượng
                </span>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  ✓ Giao diện đúng yêu cầu, chạy mượt trên cả điện thoại và máy tính.<br />
                  ✓ Bàn giao mã nguồn rõ ràng, có chú thích chi tiết, dễ thuyết minh bài tập.<br />
                  ✓ Hỗ trợ chỉnh sửa theo góp ý của giáo viên hoặc khách hàng.<br />
                  ✓ Giá cả sinh viên, uy tín và nhiệt tình.
                </p>
              </div>
            </div>

            {/* Form gửi yêu cầu */}
            <form onSubmit={handleSendMessage} className="gold-card p-6 md:p-8 rounded-2xl space-y-4">
              <div>
                <label className="block text-xs text-amber-200/80 mb-1.5">
                  Tên của bạn
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Bạn Nam"
                  value={contactState.name}
                  onChange={(e) => setContactState({ ...contactState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-amber-500/25 bg-neutral-950 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs text-amber-200/80 mb-1.5">
                  Email / Số Zalo của bạn
                </label>
                <input
                  type="text"
                  required
                  placeholder="name@gmail.com hoặc SĐT Zalo"
                  value={contactState.email}
                  onChange={(e) => setContactState({ ...contactState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-amber-500/25 bg-neutral-950 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs text-amber-200/80 mb-1.5">
                  Yêu cầu làm bài / website
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Mô tả mẫu web bạn muốn làm hoặc cần chỉnh sửa theo yêu cầu..."
                  value={contactState.message}
                  onChange={(e) => setContactState({ ...contactState, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-amber-500/25 bg-neutral-950 text-white focus:outline-none focus:border-amber-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Gửi yêu cầu ngay</span>
              </button>

              {formSent && (
                <p className="text-xs text-center text-amber-300 mt-2">
                  Ứng dụng email đã sẵn sàng để gửi tin nhắn đến Quốc Khánh.
                </p>
              )}
            </form>

          </div>

        </div>
      </section>

    </div>
  );
}
