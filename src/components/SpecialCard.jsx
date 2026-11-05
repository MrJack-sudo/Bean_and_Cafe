import { Star, Image, ImageOff } from "lucide-react";
import Tags from "./Tags";

function SpecialCard({ name, description, price, tags, image, currency, formatPrice }) {
  return (
    <article className="bg-surface rounded-3xl border border-line shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2">
      {/* Left Side: Photo Placeholder */}
      <div
        className={`relative overflow-hidden flex flex-col items-center justify-center gap-2 text-muted min-h-60 ${
          image ? "bg-line" : "border-r border-dashed border-line-dashed bg-chip"
        }`}
      >
        {image ? <Image size={20} /> : <ImageOff size={20} />}
        <p className="font-display text-xs z-10">
          {image ? image.split("/").pop() : "placeholder.png (default)"}
        </p>
        {image ? (
          <img src={image} className="absolute inset-0 w-full h-full object-cover z-20" />
        ) : null}
      </div>

      {/* Right Side: Content */}
      <div className="p-8 flex flex-col justify-between items-start space-y-4">
        <div className="space-y-3">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-special-bg text-special-text text-xs font-display font-bold">
            <Star className="w-3.5 h-3.5 fill-special-icon text-special-icon" />
            <span>Today's Special</span>
          </div>

          {/* Item Title */}
          <h2 className="text-2xl font-bold text-ink font-display tracking-tight">{name}</h2>

          {/* Item Description */}
          <p className="text-body leading-relaxed">{description}</p>

          {/* tags */}
          <Tags tags={tags} />

          <p className="text-brand font-display font-bold text-2xl">
            {formatPrice ? formatPrice(price) : `${currency}${price}`}
          </p>
        </div>
      </div>
    </article>
  );
}

export default SpecialCard;
