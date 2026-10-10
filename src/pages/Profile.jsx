import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { personalInfo, projectsList } from '../data/portfolioData';

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#080809] text-[#f4efe6] pt-24 pb-32 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Profile Header */}
        <div className="gold-card p-8 sm:p-12 rounded-3xl flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden">
          {/* Avatar Monogram */}
          <div className="w-28 h-28 shrink-0 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 text-[#09090b] font-display font-extrabold flex items-center justify-center text-3xl shadow-xl border-4 border-amber-500/30">
            QK
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
              {personalInfo.status}
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-white">
              {personalInfo.name}
            </h1>
            <p className="text-sm text-neutral-300 max-w-xl">
              {personalInfo.heroDescription}
            </p>
          </div>
        </div>

        {/* Dịch vụ cung cấp */}
        <div className="space-y-6">
          <h2 className="font-editorial text-3xl text-white">
            Dịch Vụ Trọng Tâm
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {personalInfo.services.map((srv, idx) => (
              <div key={idx} className="gold-card p-6 rounded-2xl">
                <span className="text-xs font-mono text-amber-400/80">{srv.tag}</span>
                <h3 className="font-editorial text-xl text-white mt-1 mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nguyên tắc làm việc */}
        <div className="gold-card p-8 rounded-2xl space-y-4">
          <h3 className="font-editorial text-2xl text-white">
            Tiêu Chuẩn Thực Hiện Sản Phẩm
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Code chuẩn HTML, CSS, JavaScript:</strong> Viết tường minh, có chú thích để bạn dễ hiểu và tự tin báo cáo bài tập.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Google Sites thẩm mỹ:</strong> Bố cục hiện đại, màu sắc hài hòa, tối ưu hiển thị trên cả điện thoại và máy tính.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Giao bài đúng hẹn:</strong> Hỗ trợ giải thích và điều chỉnh nhanh theo yêu cầu cụ thể.</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <a
            href="/#lien-he"
            className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm"
          >
            <span>Liên hệ trao đổi ngay</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
