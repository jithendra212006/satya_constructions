"use client";

// Added 'speed = "120s"' as a parameter
export default function Marquee({
  children,
  direction = "left",
  speed = "120s",
}) {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-8 w-max"
        style={{
          animation:
            direction === "left"
              ? `marquee-left ${speed} linear infinite`
              : `marquee-right ${speed} linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
