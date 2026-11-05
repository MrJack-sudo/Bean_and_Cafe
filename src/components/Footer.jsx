import { Copyright } from "lucide-react";

export default function Footer({ shop, totalItems }) {
  return (
    <footer className="bg-ink py-12 text-footer-text">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Header Section */}
        <h1 className="font-display font-bold text-2xl tracking-tight text-white mb-1">
          {shop.name}
        </h1>

        {/* Hours and Item Count Bar */}
        <article className="flex justify-between items-center pb-6 border-b border-footer-line">
          <span className="text-sm">{shop.openHours}</span>
          <span className="border border-footer-border rounded-full px-4 py-1.5 text-xs text-footer-text">
            {totalItems?.length ?? 0} items on the menu
          </span>
        </article>

        {/* Copyright Footer Line */}
        <div className="pt-6">
          <p className="flex items-center gap-1.5 text-xs text-footer-text/70">
            <Copyright size={14} />
            <span>2026 {shop.name} · Built with React</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
