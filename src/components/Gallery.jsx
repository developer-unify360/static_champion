import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";

const PHOTOS = [
  {
    src: "/images/WhatsApp_Image_2026-06-02_at_4.12.05_PM.jpeg",
    caption: "Manufacturing Facility",
    sub: "Champion Magnesite LLP Plant",
  },
  {
    src: "/images/WhatsApp_Image_2026-06-02_at_4.12.05_PM_(1).jpeg",
    caption: "Production Unit",
    sub: "High-quality refractory manufacturing",
  },
  {
    src: "/images/WhatsApp_Image_2026-06-02_at_4.12.05_PM_(2).jpeg",
    caption: "Factory Operations",
    sub: "State-of-the-art production infrastructure",
  },
  {
    src: "/images/WhatsApp_Image_2026-06-02_at_4.12.06_PM.jpeg",
    caption: "Our Products",
    sub: "Premium refractory solutions",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="accent-bar mx-auto" />
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A glimpse into our manufacturing facility, production operations and
            refractory products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className="card-hover group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                border: "1px solid #e2e8f0",
              }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={p.src}
                alt={p.caption}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 60%)",
                }}
              >
                <p className="text-white font-semibold text-sm">{p.caption}</p>
                <p className="text-xs mt-0.5" style={{ color: "#fbbf24" }}>
                  {p.sub}
                </p>
              </div>
              <div
                className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg,#d97706,#f59e0b)",
                }}
              >
                <FiZoomIn className="w-4 h-4" style={{ color: "#0f172a" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PHOTOS[lightbox].src}
                alt={PHOTOS[lightbox].caption}
                className="w-full max-h-[80vh] object-contain"
                style={{ background: "#000" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{
                  background: "linear-gradient(transparent,rgba(15,23,42,0.9))",
                }}
              >
                <p className="text-white font-semibold">
                  {PHOTOS[lightbox].caption}
                </p>
                <p className="text-sm" style={{ color: "#fbbf24" }}>
                  {PHOTOS[lightbox].sub}
                </p>
              </div>

              {/* Close */}
              <button
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ background: "rgba(0,0,0,0.6)" }}
                onClick={() => setLightbox(null)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(217,119,6,0.9)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(0,0,0,0.6)")
                }
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Prev */}
              {lightbox > 0 && (
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                  style={{ background: "rgba(0,0,0,0.6)" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(lightbox - 1);
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(217,119,6,0.9)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(0,0,0,0.6)")
                  }
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next */}
              {lightbox < PHOTOS.length - 1 && (
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                  style={{ background: "rgba(0,0,0,0.6)" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(lightbox + 1);
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(217,119,6,0.9)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(0,0,0,0.6)")
                  }
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
