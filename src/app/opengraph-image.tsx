import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";

export const alt = "Helena Melo, terapeuta holística";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#0E3A44",
          color: "#F3EFE6",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8ECFC6",
          }}
        >
          Terapeuta holística
        </div>
        <div style={{ fontSize: 92, marginTop: 12, lineHeight: 1 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#D7EBE6" }}>
          Hipnoterapia · Astrologia · Tarot
        </div>
      </div>
    ),
    { ...size },
  );
}
