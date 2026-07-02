"use client";

import { useState } from "react";
import {
  ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { ebGaramond } from "@/lib/fonts";

export default function ProjectGallery({ project }) {
  const gallery = project.gallery || [];
  const hasAdditionalImages = gallery.length > 1;

  // Lightbox State
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setIsZoomed(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (gallery.length <= 1) return;
    setIsZoomed(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (gallery.length <= 1) return;
    setIsZoomed(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length,
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <p className="text-violet-400 uppercase tracking-[0.35em] text-xs mb-4">
        Visual Tour
      </p>

      <h2
        className={`${ebGaramond.className} text-4xl md:text-5xl leading-[1.1] mb-14`}
      >
        Project Gallery
      </h2>

      {/* Main Responsive Grid Layout */}
      <div className="grid lg:grid-cols-3 gap-5">
        {/* Featured Image - Takes full width if it's the only image */}
        <div
          onClick={() => gallery[0] && openLightbox(0)}
          className={`
            h-[450px] rounded-[32px] border border-white/10 bg-white/[0.02] 
            backdrop-blur-xl overflow-hidden cursor-pointer group relative
            ${hasAdditionalImages ? "lg:col-span-2" : "lg:col-span-3"}
          `}
        >
          {gallery[0] ? (
            <>
              <img
                src={gallery[0]}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-5xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="text-white drop-shadow" size={32} />
              </div>
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-white/30 cursor-default">
              <ImageIcon size={50} />
              <p className="mt-4 uppercase tracking-[0.3em] text-xs">
                Featured Image
              </p>
            </div>
          )}
        </div>

        {/* Side Images (Indices 1 and 2) - Only renders container if images exist */}
        {gallery.slice(1, 3).length > 0 && (
          <div className="grid gap-5">
            {gallery.slice(1, 3).map((url, sliceIndex) => {
              const actualIndex = sliceIndex + 1;
              return (
                <div
                  key={actualIndex}
                  onClick={() => openLightbox(actualIndex)}
                  className="h-[212px] rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden cursor-pointer group relative"
                >
                  <img
                    src={url}
                    alt={`${project.name}-${actualIndex}`}
                    className="w-full h-full object-cover transition-transform duration-5xl group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="text-white drop-shadow" size={24} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Row Images (Indices 3 and 4) - Only renders row grid if images exist */}
      {gallery.slice(3, 5).length > 0 && (
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          {gallery.slice(3, 5).map((url, sliceIndex) => {
            const actualIndex = sliceIndex + 3;
            return (
              <div
                key={actualIndex}
                onClick={() => openLightbox(actualIndex)}
                className="h-[250px] rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden cursor-pointer group relative"
              >
                <img
                  src={url}
                  alt={`${project.name}-${actualIndex}`}
                  className="w-full h-full object-cover transition-transform duration-5xl group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white drop-shadow" size={24} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Interactive Lightbox Modal */}
      {isOpen && gallery[currentIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md select-none"
          onClick={closeLightbox}
        >
          {/* Top Control Bar */}
          <div className="absolute top-6 right-6 flex items-center gap-4 z-50">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
              className="p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              title={isZoomed ? "Zoom Out" : "Zoom In"}
            >
              {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
            </button>
            <button
              onClick={closeLightbox}
              className="p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Image Counter */}
          <div className="absolute top-8 left-8 text-white/60 text-sm tracking-widest font-mono">
            {currentIndex + 1} / {gallery.length}
          </div>

          {/* Left Arrow Button */}
          {gallery.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-6 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-105 z-50"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Center Image Container */}
          <div
            className={`max-w-[85vw] max-h-[80vh] transition-all duration-300 ease-out cursor-default overflow-auto
              ${isZoomed ? "scale-125 cursor-zoom-out" : "scale-100"}`}
            onClick={(e) => {
              if (isZoomed) {
                setIsZoomed(false);
                e.stopPropagation();
              } else {
                e.stopPropagation();
              }
            }}
          >
            <img
              src={gallery[currentIndex]}
              alt={`Expanded view ${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl pointer-events-auto"
            />
          </div>

          {/* Right Arrow Button */}
          {gallery.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-6 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-105 z-50"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
