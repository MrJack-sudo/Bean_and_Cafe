import { Image, ImageOff } from "lucide-react";
import Tags from "./Tags";
import Counter from "./Counter";
import HeartLike from "./HeartLike";

function MenuItems({ name, description, price, tags, isSoldOut, image, currency, formatPrice }) {
  return (
    <div className="group relative flex gap-4 rounded-xl border border-line bg-surface p-4 shadow-sm transition-all hover:shadow-md">
      <div
        className={`relative flex size-15 shrink-0 items-center justify-center overflow-hidden rounded-full text-muted ${
          image ? "bg-line" : "border border-dashed border-line-strong bg-chip"
        }`}
      >
        {image ? <Image size={18} /> : <ImageOff size={18} />}

        {/* Covers the placeholder once the image exists */}
        {image ? (
          <img src={image} alt={name} className="absolute inset-0 size-full object-cover" />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          {/* Header: Name and Price */}
          <div className="flex items-start justify-between gap-2">
            <h3 className={`font-semibold text-ink `}>{name}</h3>
            <span
              className={`font-display font-bold text-brand ${isSoldOut ? "line-through text-muted" : ""}`}
            >
              {formatPrice ? formatPrice(price) : `${currency}${price}`}
            </span>
          </div>

          {/* Description */}
          <p className="mt-1 text-sm text-muted line-clamp-2">{description}</p>
        </div>

        {/* Footer: Tags and Sold Out Badge */}

        <Tags tags={tags} />

        <div>
          {isSoldOut ? (
            <span className="inline-flex h-5 w-fit items-center justify-center rounded-md bg-ink px-1.5 text-[10px] font-medium leading-none text-page">
              SOLD OUT
            </span>
          ) : null}
        </div>

        <article className="relative flex items-center justify-between">
          <HeartLike />
          <Counter />
        </article>
      </div>
    </div>
  );
}

export default MenuItems;
