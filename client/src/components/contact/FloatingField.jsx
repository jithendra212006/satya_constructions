"use client";

import { useState } from "react";

export default function FloatingField({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  textarea = false,
}) {
  const [focused, setFocused] = useState(false);

  const active = focused || value.length > 0;

  const baseCls =
    "w-full bg-transparent border-b border-white/15 focus:border-gold outline-none transition-colors pt-6 pb-2 text-white";

  return (
    <div className="relative">
      <label
        className={`absolute left-0 pointer-events-none transition-all duration-300 ${
          active
            ? "top-0 text-[10px] uppercase tracking-[0.3em] text-gold"
            : "top-6 text-sm text-white/40"
        }`}
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          rows={4}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${baseCls} resize-none`}
        />
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={baseCls}
        />
      )}
    </div>
  );
}
