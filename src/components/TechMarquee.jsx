import React from 'react';

export default function TechMarquee() {
  const items = [
    "Nhận Làm Bài Tập Lớn HTML / CSS / JS",
    "Thiết Kế Website Google Sites",
    "Giao Diện Chuẩn Responsive",
    "Code Sạch Dễ Hiểu & Dễ Báo Cáo",
    "Tối Ưu Trực Quan & Thẩm Mỹ",
    "Hỗ Trợ Sinh Viên & Đồ Án",
  ];

  const duplicated = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-3.5 border-y border-amber-500/20 bg-[#0d0d10] relative">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8">
        {duplicated.map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-xs tracking-wider uppercase font-medium text-amber-200/90 whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
