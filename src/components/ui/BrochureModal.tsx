import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download, Maximize } from "lucide-react";
import { useEffect, useState } from "react";
import brochureFront from "../../../brochure_front.png";
import brochureBack from "../../../brochure_back.png";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [page, setPage] = useState<0 | 1>(0);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = brochureFront; // Providing the front page for download as a placeholder
    link.download = "New_Ridge_School_Brochure.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFullScreen = () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[110] rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close brochure"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Modal Content container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative flex h-full max-h-[90vh] w-full max-w-[1200px] flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Desktop Side-by-Side View */}
            <div className="hidden h-full w-full md:flex md:items-center md:justify-center md:gap-2 lg:gap-6">
              <div className="relative h-full w-1/2 overflow-hidden rounded-xl bg-white/5 shadow-2xl">
                <img
                  src={brochureFront}
                  alt="Brochure Front Cover"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="relative h-full w-1/2 overflow-hidden rounded-xl bg-white/5 shadow-2xl">
                <img
                  src={brochureBack}
                  alt="Brochure Back Cover"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Mobile Swipe/Carousel View */}
            <div className="relative flex h-full w-full items-center justify-center md:hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={page}
                  initial={{ opacity: 0, x: page === 1 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: page === 1 ? -50 : 50 }}
                  transition={{ duration: 0.3 }}
                  src={page === 0 ? brochureFront : brochureBack}
                  alt={`Brochure Page ${page + 1}`}
                  className="h-full max-h-[70vh] w-full object-contain"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000) {
                      setPage(1);
                    } else if (swipe > 10000) {
                      setPage(0);
                    }
                  }}
                />
              </AnimatePresence>

              {/* Mobile Prev/Next Buttons */}
              <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-2">
                <button
                  onClick={() => setPage(0)}
                  disabled={page === 0}
                  className="rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-all hover:bg-black/70 disabled:opacity-0"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setPage(1)}
                  disabled={page === 1}
                  className="rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-all hover:bg-black/70 disabled:opacity-0"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Page Indicator */}
              <div className="absolute -bottom-8 flex gap-2">
                <div className={`h-2 w-2 rounded-full transition-colors ${page === 0 ? "bg-white" : "bg-white/30"}`} />
                <div className={`h-2 w-2 rounded-full transition-colors ${page === 1 ? "bg-white" : "bg-white/30"}`} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="absolute -bottom-16 flex gap-4 md:-bottom-12">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-blue-600"
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </button>
              <button
                onClick={handleFullScreen}
                className="hidden items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/20 md:flex"
              >
                <Maximize className="h-4 w-4" />
                Full Screen
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
