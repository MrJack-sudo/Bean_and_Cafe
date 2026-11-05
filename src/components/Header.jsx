import { Clock, MapPin } from "lucide-react";

function Header({ shop }) {
  return (
    <header className="bg-brand-dark py-12">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-brand-text text-xs tracking-widest font-semibold uppercase mb-2">
          OUR MENU
        </p>

        <h1 className="font-display text-white font-bold text-5xl tracking-tight mb-4">
          {shop.name}
        </h1>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex gap-2 items-center text-brand-text text-sm">
            <Clock size={16} />
            <span>{shop.openHours}</span>
          </div>

          <div className="flex gap-2 items-center text-brand-text text-sm">
            <a
              href="https://maps.app.goo.gl/YGh8w3Zyy6c3iJGm6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <MapPin size={16} />
              {shop.location}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
