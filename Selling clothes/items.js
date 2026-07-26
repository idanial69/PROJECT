// ---------- ITEM DATA ----------
// This is the ONLY file you need to touch to add, edit, or remove items.
//
// To add a new item: copy one whole { ... } block below (including the comma after it),
// paste it before the closing "];", then change the values.
//
// category options currently used by the filter buttons: 'outerwear', 'bottoms', 'tops', 'dresses', 'tudung'
//   (if you want a new category, also add a matching filter button in index.html)
// isNew: true shows a gold "New" badge and includes the item under the "New Arrivals" filter.
// isSold: true grays out the item, disables the buy button, and shows a "Sold" badge — use this
//   instead of deleting an item, so buyers can still see it was real stock.
// image: paste a link to your own photo here once you have one (or a local path like 'images/blazer.jpg')

const items = [
  {
    name: 'Beige Oversized Blazer',
    category: 'outerwear',
    price: 45,
    details: 'Size M · Worn twice · Like new',
    image: 'https://picsum.photos/seed/blazer/500/600',
    isNew: false,
    isSold: true
  },
  {
    name: 'Denim Wide-Leg Jeans',
    category: 'bottoms',
    price: 30,
    details: 'Size 28 · Light wear · Good condition',
    image: 'https://picsum.photos/seed/denim-jeans/500/600',
    isNew: false
  },
  {
    name: 'Black Tapered Trousers',
    category: 'bottoms',
    price: 28,
    details: 'Size 27 · Worn a few times · Good condition',
    image: 'https://picsum.photos/seed/black-trousers/500/600',
    isNew: false
  },
  {
    name: 'Linen Shorts',
    category: 'bottoms',
    price: 18,
    details: 'Size S · Barely worn · Like new',
    image: 'https://picsum.photos/seed/linen-shorts/500/600',
    isNew: false
  },
  {
    name: 'High-Waist Culottes',
    category: 'bottoms',
    price: 22,
    details: 'Size M · Worn twice · Excellent condition',
    image: 'https://picsum.photos/seed/culottes/500/600',
    isNew: false
  },
  {
    name: 'Cargo Pants',
    category: 'bottoms',
    price: 32,
    details: 'Size 29 · Light wear · Good condition',
    image: 'https://picsum.photos/seed/cargo-pants/500/600',
    isNew: false
  },
  {
    name: 'Pleated Midi Skirt',
    category: 'bottoms',
    price: 24,
    details: 'Size M · Worn once · Excellent condition',
    image: 'https://picsum.photos/seed/pleated-skirt/500/600',
    isNew: false
  },
  {
    name: 'Straight Leg Jeans',
    category: 'bottoms',
    price: 30,
    details: 'Size 28 · Good condition',
    image: 'https://picsum.photos/seed/straight-jeans/500/600',
    isNew: false
  },
  {
    name: 'Corduroy Pants',
    category: 'bottoms',
    price: 26,
    details: 'Size 30 · Light wear · Good condition',
    image: 'https://picsum.photos/seed/corduroy-pants/500/600',
    isNew: false
  },
  {
    name: 'Denim Mini Skirt',
    category: 'bottoms',
    price: 20,
    details: 'Size S · Worn a few times · Good condition',
    image: 'https://picsum.photos/seed/denim-mini/500/600',
    isNew: false
  },
  {
    name: 'Knit Cardigan',
    category: 'tops',
    price: 25,
    details: 'Size S/M · Worn once · Excellent condition',
    image: 'https://picsum.photos/seed/cardigan/500/600',
    isNew: true
  },
  {
    name: 'Floral Midi Dress',
    category: 'dresses',
    price: 38,
    details: 'Size M · A few wears · Good condition',
    image: 'https://picsum.photos/seed/midi-dress/500/600',
    isNew: true
  },
  {
    name: 'Chiffon Tudung Bawal',
    category: 'tudung',
    price: 15,
    details: 'Plain colour · Worn once · Like new',
    image: 'https://picsum.photos/seed/tudung-1/500/600',
    isNew: true
  }
];