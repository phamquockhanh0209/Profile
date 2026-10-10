import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { projectsList } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setShowAll(false);
  };

  const filtered = filter === 'all'
    ? projectsList
    : projectsList.filter(p => p.type === filter);

  const INITIAL_LIMIT = 8;
  const visibleProjects = showAll ? filtered : filtered.slice(0, INITIAL_LIMIT);

  const countLop12 = projectsList.filter(p => p.type === 'lop12').length;
  const countLove = projectsList.filter(p => p.type === 'tinhyeu').length;
  const countKhac = projectsList.filter(p => p.type === 'khac').length;
  const countGoogle = projectsList.filter(p => p.type === 'google-sites').length;

  return (
    <div className="min-h-screen bg-[#080809] text-[#f4efe6] pt-20 sm:pt-24 pb-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="text-xs tracking-widest uppercase text-amber-400/80 font-mono">
            Sản phẩm & Dịch vụ ({projectsList.length} mẫu)
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-white mt-1 mb-2 sm:mb-3">
            Kho Mẫu Sản Phẩm
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300">
            Tổng hợp đầy đủ các mẫu website học tập lớp 12, website tình yêu tỏ tình, website bán hàng và Google Sites. Liên hệ qua Zalo để nhận tư vấn và đặt làm.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 pb-4 border-b border-amber-500/15">
          <button
            onClick={() => handleFilterChange('all')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                : 'bg-[#121114] text-neutral-400 hover:text-amber-200 border border-amber-500/20'
            }`}
          >
            Tất cả ({projectsList.length})
          </button>
          <button
            onClick={() => handleFilterChange('lop12')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'lop12'
                ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                : 'bg-[#121114] text-neutral-400 hover:text-amber-200 border border-amber-500/20'
            }`}
          >
            Học tập lớp 12 ({countLop12})
          </button>
          <button
            onClick={() => handleFilterChange('tinhyeu')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'tinhyeu'
                ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                : 'bg-[#121114] text-neutral-400 hover:text-amber-200 border border-amber-500/20'
            }`}
          >
            Website tình yêu ({countLove})
          </button>
          <button
            onClick={() => handleFilterChange('khac')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'khac'
                ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                : 'bg-[#121114] text-neutral-400 hover:text-amber-200 border border-amber-500/20'
            }`}
          >
            Website khác ({countKhac})
          </button>
          <button
            onClick={() => handleFilterChange('google-sites')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'google-sites'
                ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                : 'bg-[#121114] text-neutral-400 hover:text-amber-200 border border-amber-500/20'
            }`}
          >
            Google Sites ({countGoogle})
          </button>
        </div>

        {/* Grid (2 cột điện thoại, 3 cột tablet, 4 cột laptop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
          {visibleProjects.map((item, idx) => (
            <ProjectCard key={item.id} project={item} index={idx} />
          ))}
        </div>

        {/* Nút Xem tất cả / Thu gọn */}
        {filtered.length > INITIAL_LIMIT && (
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
                  <span>Xem tất cả ({filtered.length} mẫu)</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
