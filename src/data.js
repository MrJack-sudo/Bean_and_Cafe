// data.js — all the data for the Café Menu lives here.
// App imports everything, then passes it DOWN through props.
// Photos are free Unsplash images, cropped to squares for the round thumbnails.

export const shop = {
  name: "Bean & Leaf Café",
  openHours: "Open daily · 7:00 AM – 9:00 PM",
  location: "Phnom Penh, Cambodia",
};

// Set once here, used by Price at the very bottom of the tree (5 layers down).
// Try changing it to "៛" and see every price update.
export const currencies = [
  { id: "usd", name: "US", symbol: "$" },
  { id: "khr", name: "Cambodia", symbol: "៛" },
];

// Today's special is NOT a copy — it points to an item that already exists below.
// export const specialItemId = "c4";
export const specialItemIds = ["c4", "t2"];

// Test cases built in on purpose:
// - "Mocha" is sold out            → show "Sold out" and a crossed-out price
// - "Butter Croissant" has no tags → the tag row should not appear
// - "Jasmine Tea" has no image     → MenuItem should fall back to a default image
export const categories = [
  {
    id: "coffee",
    name: "Coffee",
    items: [
      {
        id: "c1",
        name: "Iced Latte",
        description: "Espresso with cold milk over ice.",
        price: 2.5,
        tags: ["Iced"],
        isSoldOut: false,
        // image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop",
      },
      {
        id: "c2",
        name: "Americano",
        description: "Espresso topped with hot or cold water.",
        price: 1.75,
        tags: ["Hot", "Iced"],
        isSoldOut: false,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop",
      },
      {
        id: "c3",
        name: "Cappuccino",
        description: "Espresso, steamed milk and thick foam.",
        price: 2.25,
        tags: ["Hot"],
        isSoldOut: false,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop",
      },
      {
        id: "c4",
        name: "Iced Coconut Coffee",
        description: "Our signature: espresso shaken with fresh coconut milk.",
        price: 2.75,
        tags: ["Iced", "Signature"],
        isSoldOut: false,
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&h=600&fit=crop",
      },
      {
        id: "c5",
        name: "Mocha",
        description: "Espresso, chocolate and steamed milk.",
        price: 2.75,
        tags: ["Hot"],
        isSoldOut: true,
        image: "https://images.unsplash.com/photo-1596078841242-12f73dc697c6?w=300&h=300&fit=crop",
      },
    ],
  },
  {
    id: "tea",
    name: "Tea",
    items: [
      {
        id: "t1",
        name: "Matcha Latte",
        description: "Japanese green tea whisked with milk.",
        price: 2.75,
        tags: ["Iced"],
        isSoldOut: false,
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=300&fit=crop",
      },
      {
        id: "t2",
        name: "Khmer Milk Tea",
        description: "Strong black tea with sweet condensed milk.",
        price: 2.0,
        tags: ["Iced"],
        isSoldOut: false,
        image: "https://images.unsplash.com/photo-1644031995386-fe9665dc5b57?w=300&h=300&fit=crop",
      },
      {
        id: "t3",
        name: "Lemon Iced Tea",
        description: "Black tea with fresh lemon and a little honey.",
        price: 1.5,
        tags: ["Iced"],
        isSoldOut: false,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop",
      },
      {
        id: "t4",
        name: "Jasmine Tea",
        description: "Light, floral and served hot.",
        price: 1.25,
        tags: ["Hot"],
        isSoldOut: false,
      },
    ],
  },
  {
    id: "food",
    name: "Food",
    items: [
      {
        id: "f1",
        name: "Num Pang Pâté",
        description: "Khmer baguette with pâté, pickled vegetables and chili.",
        price: 2.0,
        tags: ["Spicy"],
        isSoldOut: false,
        image: "https://images.unsplash.com/photo-1600454309261-3dc9b7597637?w=300&h=300&fit=crop",
      },
      {
        id: "f2",
        name: "Chicken Sandwich",
        description: "Grilled chicken, lettuce and tomato on toasted bread.",
        price: 3.5,
        tags: ["Bestseller"],
        isSoldOut: false,
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=300&h=300&fit=crop",
      },
      {
        id: "f3",
        name: "Butter Croissant",
        description: "Flaky and freshly baked every morning.",
        price: 1.75,
        tags: [],
        isSoldOut: false,
        image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=300&h=300&fit=crop",
      },
      {
        id: "f4",
        name: "Banana Muffin",
        description: "Soft muffin made with ripe local bananas.",
        price: 1.5,
        tags: ["Vegan"],
        isSoldOut: false,
        image: "https://images.unsplash.com/photo-1557925923-6982bd9650ff?w=300&h=300&fit=crop",
      },
    ],
  },
];
