import React, { useState } from 'react';
import { Image as ImageIcon, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Tự động nạp toàn bộ ảnh trong thư mục src/img với Vite
const localImages = import.meta.glob('/src/img/**/*.{png,jpg,jpeg,svg,webp,PNG,JPG,JPEG}', {
  eager: true,
  import: 'default'
});

export default function ProjectCard({ project, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Chuẩn hóa và lấy ảnh từ src/img hoặc online
  const resolvedImageSrc = React.useMemo(() => {
    if (!project.image) return '';
    
    // Nếu là link ảnh online (http, https, data:)
    if (project.image.startsWith('http://') || project.image.startsWith('https://') || project.image.startsWith('data:')) {
      return project.image;
    }

    // Chuẩn hóa key tìm trong localImages
    const clean = project.image.startsWith('/') ? project.image.slice(1) : project.image;
    
    // Thử các dạng key: /src/img/... hoặc /src/...
    const possibleKeys = [
      `/src/${clean}`,
      clean.startsWith('img/') ? `/src/${clean}` : `/src/img/${clean}`,
      `/${clean}`
    ];

    for (const key of possibleKeys) {
      if (localImages[key]) {
        return localImages[key];
      }
    }

    // Fallback: nếu không thấy trong localImages thì trả về đường dẫn tương đối
    return project.image.startsWith('/') ? project.image : `/${project.image}`;
  }, [project.image]);

  const zaloHref = project.zaloLink || "https://zalo.me/0867679310";

  return (
    <motion.article 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3) }}
      className="gold-card rounded-xl sm:rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-500/5"
    >
      <div>
        {/* Khung ảnh Thumbnail (nhỏ gọn, vừa vặn trên cả mobile 2 cột) */}
        <div className="relative w-full h-28 sm:h-36 md:h-44 bg-neutral-900 overflow-hidden border-b border-amber-500/15">
          {!imageError ? (
            <img 
              src={resolvedImageSrc} 
              alt={project.imageAlt || project.title}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-neutral-500 bg-neutral-900 p-2 text-center">
              <ImageIcon className="w-6 h-6 text-amber-500/40 mb-1" />
              <span className="text-[9px] text-amber-200/70 font-mono truncate max-w-[120px]">
                {project.image}
              </span>
            </div>
          )}

          {/* Tag Thể loại */}
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold bg-neutral-950/85 text-amber-300 border border-amber-500/30 backdrop-blur-md shadow-md pointer-events-none truncate max-w-[85%]">
            {project.category}
          </div>
        </div>

        {/* Phần nội dung Card nhỏ gọn */}
        <div className="p-3 sm:p-4">
          <h3 className="font-editorial text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5 leading-snug line-clamp-1" title={project.title}>
            {project.title}
          </h3>

          <p className="text-[10px] sm:text-xs text-neutral-300 leading-relaxed mb-2.5 line-clamp-2">
            {project.shortDesc}
          </p>

          {/* Features Pills (hiển thị 1-2 tag ngắn) */}
          {project.features && (
            <div className="flex flex-wrap gap-1">
              {project.features.slice(0, 2).map((feat, i) => (
                <span
                  key={i}
                  className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-neutral-900/90 text-amber-200/80 border border-amber-500/20 truncate max-w-[130px]"
                >
                  {feat}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Card: Nút Nhắn Zalo nhỏ gọn */}
      <div className="px-3 py-2 sm:px-4 sm:py-2.5 border-t border-amber-500/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between text-xs bg-neutral-950/40 gap-1.5">
        <span className="text-neutral-400 text-[10px] sm:text-xs hidden sm:inline truncate">
          Mẫu sẵn có
        </span>

        <a
          href={zaloHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-400 hover:text-neutral-950 text-amber-300 font-semibold transition-all border border-amber-500/30 text-[11px] sm:text-xs"
        >
          <MessageCircle className="w-3 h-3" />
          <span>Nhắn Zalo</span>
        </a>
      </div>
    </motion.article>
  );
}
