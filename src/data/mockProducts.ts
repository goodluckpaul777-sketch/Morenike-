import { Product, MarketPriceTrend, DeliveryZone } from '../types/market';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Fresh Red Bell Peppers & Scotch Bonnet Mix',
    localName: 'Tatashe, Rodo & Bawa Basket',
    category: 'peppers_vegetables',
    description: 'Crisp, aromatic farm-fresh pepper mix handpicked at dawn. Balanced heat, vibrant crimson color, ideal for party jollof, stews, and restaurant bulk catering.',
    origin: 'Kaduna & Jos Farm Gates via Mile 12',
    storageAdvice: 'Store in dry aerated crates or blend and freeze with vegetable oil.',
    audience: 'both',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Basket_of_scotch_bonnet_pepper.jpg',
    imageCategory: 'pepper',
    badge: 'Harvest Fresh',
    inStock: true,
    freshnessScore: 98,
    consumerOption: {
      type: 'consumer',
      label: 'Medium Market Basket (approx. 5kg)',
      price: 9500,
      moq: 1,
      unitDescription: 'Perfect for 1–2 weeks household cooking'
    },
    retailerOption: {
      type: 'retailer',
      label: 'Big Woven Raffia Basket (approx. 45kg)',
      price: 68000,
      moq: 1,
      unitDescription: 'Wholesale size for restaurants, caterers, and market resellers',
      wholesaleSavingsPercent: 18
    },
    seller: {
      name: 'Morenike Direct Produce',
      type: 'Morenike Direct',
      verified: true
    }
  },
  {
    id: 'prod-2',
    name: 'Benue & Abakaliki Giant Tubers',
    localName: 'Old Crop Pounded Yam Tubers',
    category: 'tubers',
    description: 'Starchy, sweet, non-watery tubers selected specifically for silky pounded yam and crispy yam fries. Sourced from high-grade dry soil harvests.',
    origin: 'Zaki Biam Market, Benue State',
    storageAdvice: 'Keep in a cool, ventilated dry shade elevated on wooden planks.',
    audience: 'both',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yam_2.jpg',
    imageCategory: 'tuber',
    badge: 'Chef Favorite',
    inStock: true,
    freshnessScore: 95,
    consumerOption: {
      type: 'consumer',
      label: '5 Large Heavy Tubers',
      price: 18500,
      moq: 1,
      unitDescription: 'Heavy solid weight tubers for family dining'
    },
    retailerOption: {
      type: 'retailer',
      label: 'Wholesale Bundle (50 Heavy Tubers)',
      price: 165000,
      moq: 1,
      unitDescription: 'Tie-bundle sorted by grade for food retail outlets',
      wholesaleSavingsPercent: 15
    },
    seller: {
      name: 'Tor Tiv Cooperative',
      type: 'Verified Partner Farm',
      verified: true
    }
  },
  {
    id: 'prod-3',
    name: 'Pure Virgin Red Palm Oil (Zero Additives)',
    localName: 'Opo Epo Pupa (Ondo Grade 1)',
    category: 'oils_fats',
    description: 'First-press traditional palm oil extracted from ripe oil palm fruits in Ondo groves. Zero water dilution, rich beta-carotene red hue, aroma-infused for traditional soups.',
    origin: 'Okitipupa Oil Palm Belt, Ondo State',
    storageAdvice: 'Keep tightly sealed away from direct sunlight at room temperature.',
    audience: 'both',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Palm_Oil_-.jpg',
    imageCategory: 'oil',
    badge: '100% Unadulterated',
    inStock: true,
    freshnessScore: 99,
    consumerOption: {
      type: 'consumer',
      label: '5 Litres Food-Grade Gallon',
      price: 12500,
      moq: 1,
      unitDescription: 'Easy pour jug for home pantry'
    },
    retailerOption: {
      type: 'retailer',
      label: '25 Litres Heavy Yellow Jerrycan',
      price: 52000,
      moq: 1,
      unitDescription: 'Commercial sealed drum for retail decanting & bulk kitchen use',
      wholesaleSavingsPercent: 17
    },
    seller: {
      name: 'Morenike Direct Produce',
      type: 'Morenike Direct',
      verified: true
    }
  },
  {
    id: 'prod-4',
    name: 'Crispy White Garri (Fine Grated & Sour)',
    localName: 'Garri Ijebu Super Grade',
    category: 'grains',
    description: 'Crisp, stone-free, thoroughly fermented cassava flakes. Drinks smoothly with chilled water and makes lump-free eba with pleasant tartness.',
    origin: 'Ago-Iwoye Cooperative, Ogun State',
    storageAdvice: 'Store in dry airtight container to preserve crisp crunchiness.',
    audience: 'both',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Garri_also_called_cassava_flakes.jpg',
    imageCategory: 'grain',
    badge: 'Stone-Free Verified',
    inStock: true,
    freshnessScore: 96,
    consumerOption: {
      type: 'consumer',
      label: '1 Big Paint Bucket (approx. 4.2kg)',
      price: 5800,
      moq: 1,
      unitDescription: 'Standard household custard bucket measure'
    },
    retailerOption: {
      type: 'retailer',
      label: '50kg Full Sealed Sack',
      price: 62000,
      moq: 1,
      unitDescription: 'Factory sealed clean burlap sack for retail provisioning',
      wholesaleSavingsPercent: 12
    },
    seller: {
      name: 'Yewa Agro Processors',
      type: 'Verified Partner Farm',
      verified: true
    }
  },
  {
    id: 'prod-5',
    name: 'Clean De-Stoned Long Grain Parboiled Rice',
    localName: 'Royal Paddy Local Rice',
    category: 'grains',
    description: 'Locally milled premium long grain rice with zero stones, polished grains, and fluffy texture when cooked. Retains grain separation without sogginess.',
    origin: 'Kebbi & Niger Rice Mills',
    storageAdvice: 'Store in a cool dry pantry away from damp floors.',
    audience: 'both',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/White_rice_grains.jpg',
    imageCategory: 'grain',
    badge: 'Bumper Harvest',
    inStock: true,
    freshnessScore: 97,
    consumerOption: {
      type: 'consumer',
      label: '10kg Branded Bag',
      price: 19500,
      moq: 1,
      unitDescription: 'Family cooking pack'
    },
    retailerOption: {
      type: 'retailer',
      label: '50kg Wholesale Mill Bag',
      price: 88000,
      moq: 1,
      unitDescription: 'Direct mill sack price for supermarkets and grain traders',
      wholesaleSavingsPercent: 14
    },
    seller: {
      name: 'Morenike Direct Produce',
      type: 'Morenike Direct',
      verified: true
    }
  },
  {
    id: 'prod-6',
    name: 'Derica & Basket Plum Sweet Tomatoes',
    localName: 'Jos Round Plum Tomatoes',
    category: 'peppers_vegetables',
    description: 'Firm, fleshy, thick-skinned plum tomatoes with low water content and rich sweetness. High yield pulp for rich tomato purees and stews.',
    origin: 'Vom Agricultural Hub, Plateau State',
    storageAdvice: 'Spread in single layer in breezy shade; do not trap in plastic bags.',
    audience: 'both',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tomatoes_on_the_vine_2008.jpg',
    imageCategory: 'pepper',
    badge: 'Low Acidity',
    inStock: true,
    freshnessScore: 94,
    consumerOption: {
      type: 'consumer',
      label: 'Household Half Basket (approx. 12kg)',
      price: 16000,
      moq: 1,
      unitDescription: 'Weekly household stew preparation'
    },
    retailerOption: {
      type: 'retailer',
      label: 'Standard Wooden Crate (approx. 40kg)',
      price: 49000,
      moq: 1,
      unitDescription: 'Sturdy wooden crate padded with dry leaves for transit',
      wholesaleSavingsPercent: 20
    },
    seller: {
      name: 'Plateau Farmers Alliance',
      type: 'Verified Partner Farm',
      verified: true
    }
  },
  {
    id: 'prod-7',
    name: 'Oron Crayfish & Smoked Dried Prawns',
    localName: 'Smoked Oron Big Head Crayfish',
    category: 'proteins_seafood',
    description: 'Sand-free, sweet coastal saltwater crayfish dried over hardwood smoke. High protein aroma, unbroken whole pieces with minimal tail dust.',
    origin: 'Oron River Basin, Akwa Ibom',
    storageAdvice: 'Keep in dry airtight jar or plastic drum with bay leaves.',
    audience: 'both',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dried_shrimp.jpg',
    imageCategory: 'protein',
    badge: 'Sand-Free Guarantee',
    inStock: true,
    freshnessScore: 97,
    consumerOption: {
      type: 'consumer',
      label: '1 Paint Bucket Measure (approx. 1.2kg)',
      price: 8900,
      moq: 1,
      unitDescription: 'Sifted whole crayfish for household soups'
    },
    retailerOption: {
      type: 'retailer',
      label: 'Full Wholesale Poly Bag (10 Paint Buckets)',
      price: 79000,
      moq: 1,
      unitDescription: 'Bulk bag directly from Akwa Ibom riverine jetty',
      wholesaleSavingsPercent: 16
    },
    seller: {
      name: 'Calabar Coast Handlers',
      type: 'Wholesale Aggregator',
      verified: true
    }
  },
  {
    id: 'prod-8',
    name: 'Brown Honey Beans (Oloyin)',
    localName: 'Ewa Oloyin (Naturally Sweet)',
    category: 'grains',
    description: 'Weevil-free, naturally sweet soft-cooking brown beans. Cooks quickly to a creamy consistency for porridge beans, moi-moi, and akara.',
    origin: 'Sokoto & Kano Border Markets',
    storageAdvice: 'Keep dry with chili peppers or garlic cloves to deter pests naturally.',
    audience: 'both',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vigna_unguiculata_seeds.jpg',
    imageCategory: 'grain',
    badge: 'Weevil-Free Tested',
    inStock: true,
    freshnessScore: 96,
    consumerOption: {
      type: 'consumer',
      label: 'Paint Bucket (approx. 4.5kg)',
      price: 9200,
      moq: 1,
      unitDescription: 'Household pantry size'
    },
    retailerOption: {
      type: 'retailer',
      label: '50kg Bag (Original Farm Bag)',
      price: 94000,
      moq: 1,
      unitDescription: 'Wholesale sack for restaurants and grain stalls',
      wholesaleSavingsPercent: 12
    },
    seller: {
      name: 'Morenike Direct Produce',
      type: 'Morenike Direct',
      verified: true
    }
  },
  {
    id: 'prod-9',
    name: 'Dry Cameroun Black Pepper & Ground Iru',
    localName: 'Aromatics & Locust Beans Seasoning Pack',
    category: 'spices_seasonings',
    description: 'Sun-dried and wood-smoked black Cameroun pepper blended with stone-free fermented locust beans (iru). Unlocks deep umami flavor in native stews.',
    origin: 'Cross River & Osun Spice Hubs',
    storageAdvice: 'Airtight dry glass container away from moisture.',
    audience: 'both',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Black_pepper_ground.jpg',
    imageCategory: 'spice',
    badge: 'Artisanal Batch',
    inStock: true,
    freshnessScore: 99,
    consumerOption: {
      type: 'consumer',
      label: '500g Glass Seal Pantry Jar',
      price: 4500,
      moq: 1,
      unitDescription: 'Concentrated natural spice blend'
    },
    retailerOption: {
      type: 'retailer',
      label: '5kg Bulk Kitchen Tub',
      price: 36000,
      moq: 1,
      unitDescription: 'Commercial spice tub for hotels, bukaterias & food brands',
      wholesaleSavingsPercent: 20
    },
    seller: {
      name: 'Heritage Spice Guild',
      type: 'Verified Partner Farm',
      verified: true
    }
  },
  {
    id: 'prod-10',
    name: 'Fresh Oven-Smoked Catfish (Point & Kill Grade)',
    localName: 'Aro Eja Gbbigbe (Clean Hardwood Smoke)',
    category: 'proteins_seafood',
    description: 'Gently gutted and slow-smoked catfish using seasoned hardwood. Golden dry skin, bone-intact, sweet clean flesh with zero kerosene/diesel aftertaste.',
    origin: 'Epe Aquaculture Outlets, Lagos State',
    storageAdvice: 'Store dry in breathable rattan basket or deep freezer.',
    audience: 'both',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Smoked_Catfish_Badagry_Market.jpg',
    imageCategory: 'protein',
    badge: 'No Diesel Fumes',
    inStock: true,
    freshnessScore: 98,
    consumerOption: {
      type: 'consumer',
      label: 'Pack of 5 Jumbo Smoked Fish',
      price: 14000,
      moq: 1,
      unitDescription: 'Premium table-size fish for family soups'
    },
    retailerOption: {
      type: 'retailer',
      label: 'Commercial Carton (50 Jumbo Fish)',
      price: 120000,
      moq: 1,
      unitDescription: 'Sturdy corrugated export carton with wax paper layering',
      wholesaleSavingsPercent: 15
    },
    seller: {
      name: 'Morenike Direct Produce',
      type: 'Morenike Direct',
      verified: true
    }
  },
  {
    id: 'prod-11',
    name: 'Unripe & Semi-Ripe Plantains Bundle',
    localName: 'Ogede Agbagba (Cooking & Frying)',
    category: 'tubers',
    description: 'Stout, plump plantain bunches straight from rainforest plantations. Ideal for diabetic-friendly boiled plantain or letting ripen for dodo.',
    origin: 'Ore & Ondo Plantations',
    storageAdvice: 'Hang in shaded airy spot; separate to accelerate ripening.',
    audience: 'both',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Plantains.jpg',
    imageCategory: 'tuber',
    badge: 'Plump Bunches',
    inStock: true,
    freshnessScore: 93,
    consumerOption: {
      type: 'consumer',
      label: '1 Big Bunch (approx. 18-22 Fingers)',
      price: 8500,
      moq: 1,
      unitDescription: 'Freshly harvested bunch'
    },
    retailerOption: {
      type: 'retailer',
      label: 'Wholesale Farm Truck Bundle (10 Large Bunches)',
      price: 72000,
      moq: 1,
      unitDescription: 'Direct farm wholesale bundle for food vendors',
      wholesaleSavingsPercent: 16
    },
    seller: {
      name: 'Ondo Green Farms',
      type: 'Verified Partner Farm',
      verified: true
    }
  },
  {
    id: 'prod-12',
    name: 'Refined Golden Groundnut Oil',
    localName: 'Pure Peanut Cooking Oil',
    category: 'oils_fats',
    description: 'Cold-pressed and double-filtered groundnut oil with high smoke point. Neutral golden clarity, cholesterol-free, perfect for frying puff-puff and dodo.',
    origin: 'Dawanau Grain Market, Kano',
    storageAdvice: 'Room temperature in sealed container.',
    audience: 'both',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Peanut_oil.jpg',
    imageCategory: 'oil',
    badge: 'Heart Healthy',
    inStock: true,
    freshnessScore: 98,
    consumerOption: {
      type: 'consumer',
      label: '5 Litres Bottle',
      price: 14500,
      moq: 1,
      unitDescription: 'Convenient kitchen handle bottle'
    },
    retailerOption: {
      type: 'retailer',
      label: '25 Litres Commercial Can',
      price: 64000,
      moq: 1,
      unitDescription: 'Heavy-duty jerrycan for commercial fryers & distributors',
      wholesaleSavingsPercent: 14
    },
    seller: {
      name: 'Sahel Agro Processors',
      type: 'Wholesale Aggregator',
      verified: true
    }
  }
];

export const DELIVERY_ZONES: DeliveryZone[] = [
  {
    id: 'lagos-mainland',
    name: 'Lagos Mainland (Ikeja, Yaba, Surulere, Gbagada, Magodo)',
    description: 'Fast dispatch from central market hub within 24 hours',
    fee: 3500,
    estimatedDelivery: 'Same Day / Next Morning'
  },
  {
    id: 'lagos-island',
    name: 'Lagos Island & Lekki Phase 1 / Ikoyi / VI / Ajah',
    description: 'Direct van logistics with temperature preserved cartons',
    fee: 5000,
    estimatedDelivery: 'Next Day Morning Delivery'
  },
  {
    id: 'lagos-outskirts',
    name: 'Lagos Outskirts & Ogun Border (Ikorodu, Epe, Sango Ota)',
    description: 'Dedicated logistics van for bulk produce & household orders',
    fee: 6500,
    estimatedDelivery: '1 - 2 Business Days'
  },
  {
    id: 'interstate-hub',
    name: 'Inter-State Depot Dispatch (Abuja, Ibadan, Port Harcourt, Enugu)',
    description: 'Packed in reinforced wooden crates and bags for waybill freight',
    fee: 14000,
    estimatedDelivery: '2 - 3 Days via Certified Transport Hauler'
  },
  {
    id: 'market-pickup',
    name: 'Self-Pickup at Morenike Central Market Hub (Mile 12 Annex)',
    description: 'Inspect your order on arrival, zero handling or delivery cost',
    fee: 0,
    estimatedDelivery: 'Ready in 3 Hours'
  }
];

export const MARKET_PRICE_WATCH: MarketPriceTrend[] = [
  {
    commodity: 'Scotch Bonnet Pepper (Rodo)',
    unit: '50kg Raffia Basket',
    marketLocation: 'Mile 12 Market, Lagos',
    currentPrice: 68000,
    previousPrice: 75000,
    trend: 'down',
    changePercent: -9.3
  },
  {
    commodity: 'Plum Tomatoes (Jos Grade)',
    unit: 'Wooden Crate',
    marketLocation: 'Mile 12 / Bodija',
    currentPrice: 49000,
    previousPrice: 44000,
    trend: 'up',
    changePercent: 11.4
  },
  {
    commodity: 'White Garri (Ijebu Fine)',
    unit: '50kg Sack',
    marketLocation: 'Bodija Market, Ibadan',
    currentPrice: 62000,
    previousPrice: 64000,
    trend: 'down',
    changePercent: -3.1
  },
  {
    commodity: 'New Harvest Yam (Benue Giant)',
    unit: '100 Tubers Haul',
    marketLocation: 'Zaki Biam, Benue',
    currentPrice: 310000,
    previousPrice: 295000,
    trend: 'up',
    changePercent: 5.1
  },
  {
    commodity: 'Pure Virgin Palm Oil',
    unit: '25L Jerrycan',
    marketLocation: 'Okitipupa Hub, Ondo',
    currentPrice: 52000,
    previousPrice: 52000,
    trend: 'stable',
    changePercent: 0.0
  },
  {
    commodity: 'Long Grain Milled Rice',
    unit: '50kg Bag',
    marketLocation: 'Dawanau, Kano',
    currentPrice: 88000,
    previousPrice: 92000,
    trend: 'down',
    changePercent: -4.3
  }
];
