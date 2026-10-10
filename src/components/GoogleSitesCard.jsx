import React from 'react';
import { Layout, Globe2, Sparkles, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GoogleSitesCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm hover:shadow-lg relative overflow-hidden"
    >
      <div>
        {/* Banner visual representation with gradients & subtle patterns */}
        <div className={`h-36 w-full rounded-xl mb-5 bg-gradient-to-br ${project.previewColor} border border-neutral-200/50 dark:border-neutral-800/80 flex flex-col justify-end p-4 relative overflow-hidden`}>
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-medium text-neutral-200 border border-white/10">
            <Layout className="w-3 h-3 text-rose-300" />
            <span>Google Sites</span>
          </div>

          <div className="relative z-10">
            <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-300">
              Không gian số trực quan
            </span>
            <h4 className="text-base font-bold text-white leading-snug">
              {project.title}
            </h4>
          </div>
        </div>

        {/* Subtitle & Description */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-rose-500 dark:text-rose-400 mb-1.5">
            {project.subtitle}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
            {project.description}
          </p>
          <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-200/60 dark:border-neutral-800/60 text-xs text-neutral-600 dark:text-neutral-400">
            <strong className="text-neutral-800 dark:text-neutral-200">Điểm nhấn: </strong>
            {project.focus}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer & Action */}
      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between">
        <div className="flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Tổ chức nội dung & Nhúng UI</span>
        </div>

        {project.demoLink ? (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 dark:text-white hover:underline"
          >
            <span>Xem website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-[11px] text-neutral-400 dark:text-neutral-500 italic">
            Chưa cập nhật liên kết
          </span>
        )}
      </div>
    </motion.div>
  );
}
