import { Product, MarketPriceTrend, DeliveryZone } from '../types/market';

export const INITIAL_PRODUCTS: Product[] = [
  {
    "id": "agro-1",
    "name": "Fresh Bell Pepper (Tatashe) - Bucket Size",
    "localName": "Ose Tatashe Fresh Basket",
    "category": "peppers_vegetables",
    "description": "Crisp, aromatic farm-fresh red bell peppers directly sourced from northern vegetable corridors. Rich red color and firm flesh for stews and catering.",
    "origin": "Northern Farms via Mile 12 Hub",
    "storageAdvice": "Store in aerated baskets or blend and freeze.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR891-0671a66b537f1f.jpeg",
    "imageCategory": "pepper",
    "badge": "Direct Farm Fresh",
    "inStock": true,
    "freshnessScore": 98,
    "consumerOption": {
      "type": "consumer",
      "label": "Half Bucket Measure (approx. 6kg)",
      "price": 6500,
      "moq": 1,
      "unitDescription": "Household kitchen measure"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Standard Full Raffia Basket (approx. 40kg)",
      "price": 42000,
      "moq": 1,
      "unitDescription": "Wholesale basket for caterers & market stalls",
      "wholesaleSavingsPercent": 20
    },
    "seller": {
      "name": "Agrohandlers Produce Hub",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-2",
    "name": "Fresh Tomato Zaria - Half Bucket Size",
    "localName": "Jos & Zaria Plum Tomatoes",
    "category": "peppers_vegetables",
    "description": "Plum, sweet, thick-skinned tomatoes with low seed water content. Thick puree yield for rich native stews and restaurant catering.",
    "origin": "Zaria & Plateau Farming Hubs",
    "storageAdvice": "Keep spread out in ventilated room temperature.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR1265-0671f97bf80cd8.jpeg",
    "imageCategory": "pepper",
    "badge": "Thick Pulp Yield",
    "inStock": true,
    "freshnessScore": 97,
    "consumerOption": {
      "type": "consumer",
      "label": "Half Bucket Measure",
      "price": 6000,
      "moq": 1,
      "unitDescription": "Weekly family cooking pack"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Full Wooden Crate (approx. 45kg)",
      "price": 44000,
      "moq": 1,
      "unitDescription": "Heavy timber crate packed for transit",
      "wholesaleSavingsPercent": 18
    },
    "seller": {
      "name": "Agrohandlers Produce Hub",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-3",
    "name": "Fresh Cayenne Pepper (Bawa) - Half Bucket Size",
    "localName": "Sombo / Bawa Long Red Pepper",
    "category": "peppers_vegetables",
    "description": "Long red cayenne chillies offering intense aroma and vivid color for balanced native soups and party jollof blends.",
    "origin": "Kano & Kaduna Agricultural Hubs",
    "storageAdvice": "Dry shade or blend immediately.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR1268-0671f99c8d868c.jpeg",
    "imageCategory": "pepper",
    "badge": "Spicy & Vibrant",
    "inStock": true,
    "freshnessScore": 96,
    "consumerOption": {
      "type": "consumer",
      "label": "Half Bucket Measure",
      "price": 5000,
      "moq": 1,
      "unitDescription": "Family cooking portion"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Full Woven Sack (approx. 35kg)",
      "price": 38000,
      "moq": 1,
      "unitDescription": "Wholesale sack for commercial restaurants",
      "wholesaleSavingsPercent": 16
    },
    "seller": {
      "name": "Agrohandlers Produce Hub",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-4",
    "name": "Ijebu White Garri (Custard Paint Size)",
    "localName": "Garri Ijebu Super Grade",
    "category": "grains",
    "description": "Crisp, stone-free fermented cassava flakes. Drinks pleasantly with ice and groundnuts or prepares smooth tart lump-free eba.",
    "origin": "Ijebu Agro-Processing Belt, Ogun State",
    "storageAdvice": "Keep sealed in airtight bucket.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR841-066f695cbc496b.webp",
    "imageCategory": "grain",
    "badge": "Crispy & Tart",
    "inStock": true,
    "freshnessScore": 99,
    "consumerOption": {
      "type": "consumer",
      "label": "Custard Paint Size (approx. 4.2kg)",
      "price": 3500,
      "moq": 1,
      "unitDescription": "Pantry paint container measure"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "50kg Full Sealed Mill Sack",
      "price": 38000,
      "moq": 1,
      "unitDescription": "Mill-sealed sack for grain retailers",
      "wholesaleSavingsPercent": 14
    },
    "seller": {
      "name": "Agrohandlers Grain Depot",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-5",
    "name": "Yellow Garri (Full Bag 50kg)",
    "localName": "Garri Bendel Yellow with Palm Extract",
    "category": "grains",
    "description": "Properly fried yellow cassava flakes infused with natural palm oil during processing. Crisp and rich flavor for traditional dining.",
    "origin": "Delta & Edo Cassava Cooperatives",
    "storageAdvice": "Dry wooden pallets elevated from floor.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR835-066f69076e778f.jpg",
    "imageCategory": "grain",
    "badge": "Authentic Bendel",
    "inStock": true,
    "freshnessScore": 96,
    "consumerOption": {
      "type": "consumer",
      "label": "Paint Bucket Measure (approx. 4.5kg)",
      "price": 4800,
      "moq": 1,
      "unitDescription": "Convenient household size"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "50kg Full Sealed Sack",
      "price": 48000,
      "moq": 1,
      "unitDescription": "Commercial wholesale bag",
      "wholesaleSavingsPercent": 15
    },
    "seller": {
      "name": "Agrohandlers Grain Depot",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-6",
    "name": "Drum Honey Beans (Ewa Oloyin) x 1 Paint Plastic",
    "localName": "Ewa Oloyin Sweet Brown Beans",
    "category": "grains",
    "description": "Naturally sweet honey brown beans, hand-sifted to ensure zero weevils and stones. Tender, creamy cooking time for porridge and akara.",
    "origin": "Sokoto & Kano Border Hubs",
    "storageAdvice": "Store in cool dry air with bay leaves or cloves.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR617-064d63b9468e7d.jpg",
    "imageCategory": "grain",
    "badge": "Weevil-Free Checked",
    "inStock": true,
    "freshnessScore": 98,
    "consumerOption": {
      "type": "consumer",
      "label": "1 Paint Plastic (approx. 4kg)",
      "price": 8000,
      "moq": 1,
      "unitDescription": "Clean household cooking measure"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "50kg Farm Gate Sack",
      "price": 89000,
      "moq": 1,
      "unitDescription": "Original farm bag for commercial kitchens",
      "wholesaleSavingsPercent": 12
    },
    "seller": {
      "name": "Agrohandlers Grain Depot",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-7",
    "name": "My Choice Premium Parboiled Rice 50kg",
    "localName": "Long Grain De-Stoned Milled Rice",
    "category": "grains",
    "description": "Top quality stone-free long grain parboiled rice. Fluffy cooked texture, distinct grain separation, and delicious taste for family dining and parties.",
    "origin": "Kebbi & Niger Rice Processing Mills",
    "storageAdvice": "Keep dry away from moisture.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR834-066f67e29b63f1.png",
    "imageCategory": "grain",
    "badge": "Best Selling Rice",
    "inStock": true,
    "freshnessScore": 99,
    "consumerOption": {
      "type": "consumer",
      "label": "10kg Sealed Family Bag",
      "price": 19500,
      "moq": 1,
      "unitDescription": "Home kitchen bag"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "50kg Full Wholesale Sack",
      "price": 92000,
      "moq": 1,
      "unitDescription": "Direct distributor mill sack",
      "wholesaleSavingsPercent": 14
    },
    "seller": {
      "name": "Agrohandlers Food Hub",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-8",
    "name": "Pure Virgin Red Palm Oil (5L + Keg)",
    "localName": "Opo Epo Pupa Ondo First Grade",
    "category": "oils_fats",
    "description": "Pure first-press red palm oil extracted traditionally from ripe oil palms in Ondo. Unadulterated, rich natural red aroma and thick soup consistency.",
    "origin": "Okitipupa Oil Palm Belt, Ondo State",
    "storageAdvice": "Room temperature in tightly closed keg.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR989-066fd641aa0ff6.jpg",
    "imageCategory": "oil",
    "badge": "100% Unadulterated",
    "inStock": true,
    "freshnessScore": 99,
    "consumerOption": {
      "type": "consumer",
      "label": "5 Litres Sealed Food-Grade Keg",
      "price": 13000,
      "moq": 1,
      "unitDescription": "Sturdy handle jug for kitchen"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "25 Litres Heavy Yellow Jerrycan",
      "price": 58000,
      "moq": 1,
      "unitDescription": "Commercial drum for caterers & retail resellers",
      "wholesaleSavingsPercent": 16
    },
    "seller": {
      "name": "Agrohandlers Produce Hub",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-9",
    "name": "Devon King's Pure Vegetable Oil - 2L",
    "localName": "Devon King's Cooking Oil",
    "category": "oils_fats",
    "description": "Naturally fortified with Vitamin A. Clear, healthy, cholesterol-free vegetable oil for high-temperature deep frying and cooking.",
    "origin": "PZ Wilmar Distribution Network",
    "storageAdvice": "Keep away from direct sunlight.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR1025-067d2cae6b10db.jpg",
    "imageCategory": "oil",
    "badge": "Heart Healthy",
    "inStock": true,
    "freshnessScore": 98,
    "consumerOption": {
      "type": "consumer",
      "label": "2L Bottle",
      "price": 8400,
      "moq": 1,
      "unitDescription": "Easy pour kitchen bottle"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Full Carton (2L x 6 Bottles)",
      "price": 48000,
      "moq": 1,
      "unitDescription": "Factory sealed distributor carton",
      "wholesaleSavingsPercent": 10
    },
    "seller": {
      "name": "Agrohandlers Direct Store",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-10",
    "name": "Devon Kings Vegetable Oil 25L Jerrycan",
    "localName": "Devon Kings Wholesale 25L Drum",
    "category": "oils_fats",
    "description": "Bulk commercial yellow jerrycan of double-refined Devon Kings vegetable oil. High smoke point for industrial fryers, bakeries, and restaurants.",
    "origin": "PZ Wilmar Factory Depots",
    "storageAdvice": "Store on raised wooden floorboards.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR179-06703db48e220c.jpg",
    "imageCategory": "oil",
    "badge": "Wholesale Bulk Pack",
    "inStock": true,
    "freshnessScore": 99,
    "consumerOption": {
      "type": "consumer",
      "label": "5L Decanted Jug",
      "price": 18500,
      "moq": 1,
      "unitDescription": "Home pantry size"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "25L Heavy Duty Jerrycan",
      "price": 85000,
      "moq": 1,
      "unitDescription": "Factory sealed commercial container",
      "wholesaleSavingsPercent": 15
    },
    "seller": {
      "name": "Agrohandlers Direct Store",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-11",
    "name": "Mamador Pure Vegetable Oil 1.5L",
    "localName": "Mamador Heart-Friendly Cooking Oil",
    "category": "oils_fats",
    "description": "Pure vegetable oil with cholesterol-free formula, enriched with Vitamins A and E. Crispy golden fries with light texture.",
    "origin": "Mamador National Distribution Hub",
    "storageAdvice": "Room temperature in sealed bottle.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR001-066fd1966ea757.jpg",
    "imageCategory": "oil",
    "badge": "Vitamin Enriched",
    "inStock": true,
    "freshnessScore": 97,
    "consumerOption": {
      "type": "consumer",
      "label": "1.5L Ergonomic Bottle",
      "price": 6350,
      "moq": 1,
      "unitDescription": "Household size bottle"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Carton of 6 (1.5L x 6)",
      "price": 36500,
      "moq": 1,
      "unitDescription": "Wholesale carton for retail shelves",
      "wholesaleSavingsPercent": 8
    },
    "seller": {
      "name": "Agrohandlers Direct Store",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-12",
    "name": "Oron Crayfish (1 Paint Measure)",
    "localName": "Eja Oron / Coastal Big Head Crayfish",
    "category": "proteins_seafood",
    "description": "Smoked saltwater crayfish with zero sand guaranteed. Whole unbroken pieces, deeply aromatic and rich in natural seafood flavor.",
    "origin": "Oron Jetty, Akwa Ibom State",
    "storageAdvice": "Keep dry in airtight jar with bay leaves.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR1346-067e291758d14a.jpg",
    "imageCategory": "protein",
    "badge": "Sand-Free Guaranteed",
    "inStock": true,
    "freshnessScore": 98,
    "consumerOption": {
      "type": "consumer",
      "label": "1 Paint Plastic Measure",
      "price": 16000,
      "moq": 1,
      "unitDescription": "Whole sifted crayfish"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Wholesale Poly Bag (10 Paint Measures)",
      "price": 145000,
      "moq": 1,
      "unitDescription": "Direct riverine bundle for market traders",
      "wholesaleSavingsPercent": 12
    },
    "seller": {
      "name": "Calabar & Oron Handlers",
      "type": "Wholesale Aggregator",
      "verified": true
    }
  },
  {
    "id": "agro-13",
    "name": "Frozen Titus Fish - 1/2 Carton",
    "localName": "Imported Mackerel (Original Titus)",
    "category": "frozen_foods",
    "description": "Firm flesh, oily, nutrient-dense ocean mackerel. Freshly cold-stored with intact silver skin, ideal for grilling, frying, and rich soups.",
    "origin": "Cold Chain Storage, Lagos Terminals",
    "storageAdvice": "Keep strictly frozen below -18C.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR860-066f6bff06271d.jpg",
    "imageCategory": "protein",
    "badge": "Cold Chain Fresh",
    "inStock": true,
    "freshnessScore": 99,
    "consumerOption": {
      "type": "consumer",
      "label": "1kg Family Fish Pack (approx. 3-4 fish)",
      "price": 8500,
      "moq": 1,
      "unitDescription": "Thoroughly preserved table size"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Half Carton (10kg net)",
      "price": 70000,
      "moq": 1,
      "unitDescription": "Direct cold room wholesale box",
      "wholesaleSavingsPercent": 18
    },
    "seller": {
      "name": "Agrohandlers Cold Chain",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-14",
    "name": "Frozen Shawa Fish - Full Carton (20kg)",
    "localName": "Shawa Herring Bulk Cold Store",
    "category": "frozen_foods",
    "description": "Grade 1 cold storage ocean herring. Economical, high protein fish beloved across Nigerian bukaterias, canteens, and households.",
    "origin": "Lagos Frozen Fish Depot",
    "storageAdvice": "Deep freeze until preparation.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR865-066f6c4c384633.jpg",
    "imageCategory": "protein",
    "badge": "High Value Bulk",
    "inStock": true,
    "freshnessScore": 96,
    "consumerOption": {
      "type": "consumer",
      "label": "2kg Value Pack",
      "price": 8500,
      "moq": 1,
      "unitDescription": "Clean home pack"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Full 20kg Heavy Carton",
      "price": 75350,
      "moq": 1,
      "unitDescription": "Original frozen sea carton",
      "wholesaleSavingsPercent": 15
    },
    "seller": {
      "name": "Agrohandlers Cold Chain",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-15",
    "name": "Frozen Chicken (Orobo) - Full Carton",
    "localName": "Plump Orobo Broiler Chicken Bulk",
    "category": "frozen_foods",
    "description": "Plump, tender, thoroughly dressed broiler chicken parts. Clean cuts, high meat-to-bone ratio, blast frozen to lock in juiciness and freshness.",
    "origin": "Verified Poultry Cold Stores, Ogun & Lagos",
    "storageAdvice": "Store in deep freezer at -18C.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR853-066f6b9af21073.jpg",
    "imageCategory": "protein",
    "badge": "Blast Frozen Fresh",
    "inStock": true,
    "freshnessScore": 97,
    "consumerOption": {
      "type": "consumer",
      "label": "2kg Dressed Cuts Pack",
      "price": 9800,
      "moq": 1,
      "unitDescription": "Ready to season household tray"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Full Wholesale Carton (10kg)",
      "price": 46000,
      "moq": 1,
      "unitDescription": "Sealed export quality poultry box",
      "wholesaleSavingsPercent": 14
    },
    "seller": {
      "name": "Agrohandlers Cold Chain",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-16",
    "name": "Golden Penny Semovita - 2kg Pack",
    "localName": "Golden Penny Semovita Flour",
    "category": "pasta_packaged",
    "description": "Fortified with Vitamin A and iron. Made from high-protein wheat for velvety smooth, lump-free swallow that pairs delightfully with all native soups.",
    "origin": "Flour Mills of Nigeria Factory Direct",
    "storageAdvice": "Store in a dry cupboard.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR948-066fbfcca28f1b.jpg",
    "imageCategory": "staple",
    "badge": "Silky Swallow",
    "inStock": true,
    "freshnessScore": 98,
    "consumerOption": {
      "type": "consumer",
      "label": "2kg Branded Pouch",
      "price": 3995,
      "moq": 1,
      "unitDescription": "Household pantry size"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Carton of 5 (2kg x 5 = 10kg)",
      "price": 19000,
      "moq": 1,
      "unitDescription": "Wholesale supermarket outer carton",
      "wholesaleSavingsPercent": 10
    },
    "seller": {
      "name": "Agrohandlers Packaged Store",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-17",
    "name": "Golden Penny Spaghetti (Slim) 500g x 20 Carton",
    "localName": "Golden Penny Slim Pasta Carton",
    "category": "pasta_packaged",
    "description": "100% durum wheat semolina pasta that cooks non-sticky and al dente in 8 minutes. Loved by families, food vendors, and fast-casual diners.",
    "origin": "Flour Mills of Nigeria Depot",
    "storageAdvice": "Cool and dry storage.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR921-066faaa912af04.png",
    "imageCategory": "staple",
    "badge": "Durum Wheat Quality",
    "inStock": true,
    "freshnessScore": 99,
    "consumerOption": {
      "type": "consumer",
      "label": "Pack of 3 (500g x 3)",
      "price": 3000,
      "moq": 1,
      "unitDescription": "Family pasta dinner pack"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Full 20-Pack Master Carton",
      "price": 18400,
      "moq": 1,
      "unitDescription": "Sealed distributor carton",
      "wholesaleSavingsPercent": 12
    },
    "seller": {
      "name": "Agrohandlers Packaged Store",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-18",
    "name": "Indomie Chicken Flavour Noodles 70g x 40 Carton",
    "localName": "Indomie Indomitable Chicken",
    "category": "pasta_packaged",
    "description": "Nigeria's favorite instant noodle with signature aromatic spice oil and seasoned chicken broth powder. Fast 3-minute preparation.",
    "origin": "Dufil Prima Foods Factory Direct",
    "storageAdvice": "Store off floor in dry room.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR796-066fa9d5ba5ba0.jpg",
    "imageCategory": "staple",
    "badge": "Nation's Favorite",
    "inStock": true,
    "freshnessScore": 99,
    "consumerOption": {
      "type": "consumer",
      "label": "Half Carton (20 packs)",
      "price": 5200,
      "moq": 1,
      "unitDescription": "Convenient family stash"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Full Carton (40 packs)",
      "price": 10000,
      "moq": 1,
      "unitDescription": "Direct distributor outer carton",
      "wholesaleSavingsPercent": 8
    },
    "seller": {
      "name": "Agrohandlers Packaged Store",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-19",
    "name": "Clean Ogbono Seeds (1 Paint Measure)",
    "localName": "Apon Seed / Wild Mango Seed",
    "category": "grains",
    "description": "Premium wild mango seeds sun-dried to perfection. Exceptional draw ability, zero stones or dust, producing rich glistening traditional ogbono soup.",
    "origin": "Enugu & Edo Forest Corridors",
    "storageAdvice": "Dry airtight tin with dry chillies.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR1342-067e2895521451.jpg",
    "imageCategory": "grain",
    "badge": "High Draw Guarantee",
    "inStock": true,
    "freshnessScore": 98,
    "consumerOption": {
      "type": "consumer",
      "label": "1/2 Derica Measure (approx. 500g)",
      "price": 6000,
      "moq": 1,
      "unitDescription": "Concentrated seed portion"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "1 Full Paint Plastic Measure",
      "price": 46000,
      "moq": 1,
      "unitDescription": "Whole seeds for food stalls & catering businesses",
      "wholesaleSavingsPercent": 15
    },
    "seller": {
      "name": "Agrohandlers Grain Depot",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-20",
    "name": "Tasty Tom Tomato Paste 65g x 5",
    "localName": "Tasty Tom Enriched Tomato Sachet",
    "category": "spices_seasonings",
    "description": "Double concentrated tomato paste infused with essential vitamins. Gives vibrant red base and robust tangy flavor to party rice and gravies.",
    "origin": "Olam International Agro Depot",
    "storageAdvice": "Cool dry pantry.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR823-0670e1e2ccba60.jpg",
    "imageCategory": "spice",
    "badge": "Double Concentrated",
    "inStock": true,
    "freshnessScore": 98,
    "consumerOption": {
      "type": "consumer",
      "label": "Pack of 5 Sachets (65g each)",
      "price": 950,
      "moq": 1,
      "unitDescription": "Quick stew preparation pack"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Full Wholesale Carton (100 Sachets)",
      "price": 17500,
      "moq": 1,
      "unitDescription": "Commercial outer box for grocery stalls",
      "wholesaleSavingsPercent": 12
    },
    "seller": {
      "name": "Agrohandlers Packaged Store",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-21",
    "name": "Mr. Chef Pure Iodized Salt 1kg x 20 Pack",
    "localName": "Mr Chef Fine Table Salt Carton",
    "category": "spices_seasonings",
    "description": "Free-flowing, clean, iodized table salt with zero moisture lumps. Refined for daily culinary precision and commercial kitchen seasoning.",
    "origin": "Pure Chem Industries Hub",
    "storageAdvice": "Airtight container away from moisture.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR1187-0670cd24605629.png",
    "imageCategory": "spice",
    "badge": "Free Flowing Iodized",
    "inStock": true,
    "freshnessScore": 99,
    "consumerOption": {
      "type": "consumer",
      "label": "1kg Pantry Pack",
      "price": 600,
      "moq": 1,
      "unitDescription": "Standard household bag"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Full Outer Bale (1kg x 20 Bags)",
      "price": 9005,
      "moq": 1,
      "unitDescription": "Wholesale bale for retail shops and caterers",
      "wholesaleSavingsPercent": 25
    },
    "seller": {
      "name": "Agrohandlers Seasonings Hub",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-22",
    "name": "Maggi Chicken Flavour Seasoning Cubes (10g x 60)",
    "localName": "Maggi Chicken Cubes Pack",
    "category": "spices_seasonings",
    "description": "Enriched with iron and herbs, infusing savoury poultry umami into jollof rice, pepper soup, chicken stew, and vegetable dishes.",
    "origin": "Nestle Nigeria Central Depot",
    "storageAdvice": "Cool dry pantry cupboard.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR759-0670d4165683fc.jpg",
    "imageCategory": "spice",
    "badge": "Iron Enriched",
    "inStock": true,
    "freshnessScore": 99,
    "consumerOption": {
      "type": "consumer",
      "label": "1 Pack (60 Cubes)",
      "price": 4500,
      "moq": 1,
      "unitDescription": "Household seasoning pack"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Wholesale Carton (24 Packs = 1,440 Cubes)",
      "price": 98000,
      "moq": 1,
      "unitDescription": "Commercial restaurant master carton",
      "wholesaleSavingsPercent": 15
    },
    "seller": {
      "name": "Agrohandlers Seasonings Hub",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-23",
    "name": "Peak Instant Milk Powder Sachets 16g x 10",
    "localName": "Peak Full Cream Milk Pack",
    "category": "drinks_beverages",
    "description": "Rich and creamy full cream instant powdered milk fortified with 28 essential vitamins and minerals for tea, cereal, and garri drinking.",
    "origin": "FrieslandCampina WAMCO Nigeria",
    "storageAdvice": "Cool dry pantry.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR327-067053319e2c8f.png",
    "imageCategory": "staple",
    "badge": "Rich & Creamy",
    "inStock": true,
    "freshnessScore": 99,
    "consumerOption": {
      "type": "consumer",
      "label": "Roll of 10 Sachets (16g each)",
      "price": 1900,
      "moq": 1,
      "unitDescription": "Household breakfast roll"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Carton of 24 Rolls (240 Sachets)",
      "price": 42500,
      "moq": 1,
      "unitDescription": "Wholesale supermarket carton",
      "wholesaleSavingsPercent": 10
    },
    "seller": {
      "name": "Agrohandlers Beverages Hub",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-24",
    "name": "Coca-Cola Classic Drink 60cl Pet x 12 Pack",
    "localName": "Coke 60cl Pet Shrink Pack",
    "category": "drinks_beverages",
    "description": "Refreshing, crisp Coca-Cola in 60cl plastic bottles. Perfect for family celebrations, events, catering setups, and cold retail sale.",
    "origin": "Nigerian Bottling Company (NBC) Depot",
    "storageAdvice": "Serve chilled.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR065-067053ed4e025c.png",
    "imageCategory": "staple",
    "badge": "Ice Cold Refreshment",
    "inStock": true,
    "freshnessScore": 99,
    "consumerOption": {
      "type": "consumer",
      "label": "Shrink Pack of 12 (60cl Bottles)",
      "price": 5400,
      "moq": 1,
      "unitDescription": "Family party pack"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Wholesale Pallet (10 Shrink Packs = 120 Bottles)",
      "price": 49000,
      "moq": 1,
      "unitDescription": "Event & retail store pallet price",
      "wholesaleSavingsPercent": 10
    },
    "seller": {
      "name": "Agrohandlers Beverages Hub",
      "type": "Morenike Direct",
      "verified": true
    }
  },
  {
    "id": "agro-25",
    "name": "Agrohandlers Mini Pack Hamper (Festive & Corporate)",
    "localName": "Foodstuffs Gift Hamper Deluxe",
    "category": "hampers",
    "description": "Carefully curated luxury food basket packed with pure vegetable oil, semovita, seasoned canned proteins, spices, and pasta. Gorgeous festive packaging.",
    "origin": "Agrohandlers Custom Assembly Hub, Lagos",
    "storageAdvice": "Keep in presentation packaging.",
    "audience": "both",
    "imageUrl": "/agrohandlers/products/PR1305-067531c52cadd7.png",
    "imageCategory": "staple",
    "badge": "Gift & Reward Ready",
    "inStock": true,
    "freshnessScore": 100,
    "consumerOption": {
      "type": "consumer",
      "label": "1 Complete Wrapped Hamper Basket",
      "price": 50000,
      "moq": 1,
      "unitDescription": "Ready to gift wrapped with satin ribbon"
    },
    "retailerOption": {
      "type": "retailer",
      "label": "Corporate Bundle (10 Wrapped Hampers)",
      "price": 460000,
      "moq": 1,
      "unitDescription": "Company staff welfare / end-of-year gift tier",
      "wholesaleSavingsPercent": 8
    },
    "seller": {
      "name": "Agrohandlers Gift Concierge",
      "type": "Morenike Direct",
      "verified": true
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
