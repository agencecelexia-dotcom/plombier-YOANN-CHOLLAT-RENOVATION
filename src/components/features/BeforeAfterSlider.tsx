"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  aspectRatio?: string;
}

function SliderHandle() {
  return (
    <ReactCompareSliderHandle
      buttonStyle={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "var(--color-accent-500, #f59e0b)",
        border: "3px solid white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
      }}
      linesStyle={{
        width: 3,
        background: "white",
        opacity: 0.8,
      }}
    />
  );
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Avant",
  afterAlt = "Après",
  aspectRatio = "4/3",
}: BeforeAfterSliderProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg">
      <div style={{ aspectRatio }}>
        <ReactCompareSlider
          handle={<SliderHandle />}
          itemOne={
            <ReactCompareSliderImage
              src={beforeImage}
              alt={beforeAlt}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={afterImage}
              alt={afterAlt}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          }
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-800/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
          Avant
        </span>
      </div>
      <div className="pointer-events-none absolute bottom-4 right-4 z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
          Après
        </span>
      </div>

      {/* Drag hint */}
      <div className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
          <ArrowLeftRight size={14} />
          Glissez pour comparer
        </span>
      </div>
    </div>
  );
}
