import React, { useState, useEffect, useRef } from "react";
import { getAppMediaItems, AppMediaFolder, AppMediaDevice, AppMediaItem } from "./app-media.manifest";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface AppScreenshotGalleryProps {
  folder: AppMediaFolder;
  device?: AppMediaDevice;
  title?: string;
  description?: string;
  autoPlay?: boolean;
  delay?: number;
  showDots?: boolean;
  showArrows?: boolean;
  loop?: boolean;
  className?: string;
  imageClassName?: string;
}

export const AppScreenshotGallery: React.FC<AppScreenshotGalleryProps> = ({
  folder,
  device = "all",
  title,
  description,
  autoPlay = false,
  delay = 3500,
  showDots = true,
  showArrows = true,
  loop = true,
  className = "",
  imageClassName = "",
}) => {
  const items = getAppMediaItems(folder, device as AppMediaDevice);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    if (autoPlay && items.length > 1 && !isPaused) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, delay);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoPlay, delay, items.length, isPaused, currentIndex]);

  if (items.length === 0) {
    return null;
  }

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev === items.length - 1) {
        return loop ? 0 : prev;
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return loop ? items.length - 1 : prev;
      }
      return prev - 1;
    });
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Swipe event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const currentItem = items[currentIndex];

  // Detect if current item is mobile to adjust container proportions
  const isMobileItem = currentItem.device === "mobile";

  return (
    <div 
      className={`flex flex-col gap-4 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      id={`gallery-${folder}`}
    >
      {(title || description) && (
        <div className="text-center md:text-left mb-2">
          {title && <h3 className="text-lg font-bold text-slate-900 font-display">{title}</h3>}
          {description && <p className="text-sm text-slate-500">{description}</p>}
        </div>
      )}

      <div className="relative w-full flex justify-center items-center">
        {/* Gallery container */}
        <div 
          className={`relative overflow-hidden bg-slate-900/5 dark:bg-slate-950/20 border border-slate-100 rounded-3xl shadow-xl w-full flex justify-center transition-all duration-300 ${
            isMobileItem ? "max-w-[320px] mx-auto aspect-[9/19.5]" : "max-w-full aspect-video"
          }`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Images Wrapper */}
          <div className="absolute inset-0 flex items-center justify-center">
            {items.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={item.src}
                  className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                    isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-full h-full object-cover select-none ${imageClassName}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    referrerPolicy="no-referrer"
                    {...({ fetchPriority: index === 0 ? "high" : "auto" } as any)}
                  />
                </div>
              );
            })}
          </div>

          {/* Swipe indicator badge (shows up on touch screens) */}
          <div className="absolute bottom-4 left-4 z-20 bg-slate-950/70 text-[9px] font-bold text-white px-2 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm pointer-events-none sm:hidden">
            Arraste para o lado
          </div>

          {/* Device Mockup Bezels / Details */}
          {!isMobileItem ? (
            // Browser window bar mockup
            <div className="absolute top-0 left-0 right-0 h-10 bg-slate-950/80 backdrop-blur-md flex items-center px-4 gap-1.5 z-20 border-b border-white/5 select-none pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <div className="mx-auto bg-white/10 text-[10px] text-slate-300 font-mono py-1 px-12 rounded-md max-w-sm text-center truncate">
                app.petvex.com.br
              </div>
            </div>
          ) : (
            // Mobile phone notch/pill indicator
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-20 flex items-center justify-center gap-1 select-none pointer-events-none border border-white/10 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
              <span className="w-8 h-1 rounded-full bg-slate-800"></span>
            </div>
          )}

          {/* Nav Arrows */}
          {showArrows && items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-slate-950/40 hover:bg-slate-950/70 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 active:scale-95 cursor-pointer ${
                  isMobileItem ? "opacity-0 hover:opacity-100" : ""
                }`}
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-slate-950/40 hover:bg-slate-950/70 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 active:scale-95 cursor-pointer ${
                  isMobileItem ? "opacity-0 hover:opacity-100" : ""
                }`}
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Dots and counters outside of frame for clean design */}
      {showDots && items.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-2 select-none">
          {/* Custom Dots */}
          <div className="flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer ${
                  index === currentIndex ? "w-6 bg-emerald-500" : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Index count */}
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-md">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      )}
    </div>
  );
};
