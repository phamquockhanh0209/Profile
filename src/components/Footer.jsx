import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, CreditCard, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import qrImg from '../img/qr.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-amber-500/20 bg-[#070708] py-12 px-6 pb-28 md:pb-16">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Payment / Ủng hộ QR Box */}
        <div className="p-6 rounded-2xl bg-[#0f0e12] border border-amber-500/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
              <span>Ủng hộ & Thanh toán</span>
            </div>
            <h4 className="font-editorial text-lg sm:text-xl font-bold text-white">
              Cảm ơn bạn đã ghé thăm & ủng hộ!
            </h4>
            <p className="text-xs text-neutral-300 max-w-lg leading-relaxed">
              Nếu bạn thấy web mẫu hay và hữu ích thì ủng hộ cho mình ly cà phê nhé. Chúc bạn học tập tốt và đạt điểm cao!
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-amber-200/90 pt-1">
              <span><strong>Momo:</strong> 0867679310</span>
              <span><strong>Ngân hàng:</strong> VietinBank</span>
              <span><strong>STK:</strong> 0867679310</span>
              <span><strong>Chủ TK:</strong> Phạm Quốc Khánh</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center gap-2 p-3 bg-white rounded-xl shadow-xl shadow-amber-500/5">
            <img 
              src={qrImg} 
              alt="Mã QR thanh toán Vietinbank" 
              className="w-32 h-32 object-contain rounded"
            />
            <span className="text-[10px] font-mono text-neutral-800 font-bold">Quét mã QR</span>
          </div>
        </div>

        {/* Top Info row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-neutral-800/80">
          {/* Brand */}
          <div className="space-y-2">
            <span className="font-editorial text-2xl font-bold text-white tracking-wide">
              {personalInfo.name}
            </span>
            <p className="text-xs text-amber-300/80 max-w-md">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Contact Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <a
              href={personalInfo.contact.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-300 hover:bg-amber-500/20 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Zalo: {personalInfo.contact.phone}</span>
            </a>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
              <CreditCard className="w-3.5 h-3.5 text-amber-400" />
              <span>Vietinbank: {personalInfo.contact.bank.stk}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-[11px]">{personalInfo.contact.email}</span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-amber-300 transition-colors">
              Trang chủ
            </Link>
            <Link to="/projects" className="hover:text-amber-300 transition-colors">
              Kho mẫu (30 mẫu)
            </Link>
            <Link to="/profile" className="hover:text-amber-300 transition-colors">
              Về tôi
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-neutral-500">
              © {currentYear} {personalInfo.name} · 2026 Phạm Quốc Khánh
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
