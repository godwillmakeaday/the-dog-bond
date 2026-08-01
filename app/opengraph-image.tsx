import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "The Dog Bond — African dog ownership intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f4efe6",
        color: "#201a15",
        padding: "72px 84px",
      }}
    >
      <div style={{ display: "flex", fontSize: 24, letterSpacing: 5, textTransform: "uppercase", color: "#596b58" }}>
        African dog ownership intelligence
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -4 }}>{site.name}</div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 38, color: "#51473d" }}>{site.tagline}</div>
      </div>
      <div style={{ display: "flex", width: 180, height: 5, background: "#596b58" }} />
    </div>,
    size,
  );
}
