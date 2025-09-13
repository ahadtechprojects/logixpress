// src/database.js

// Fixed start date for all shipments: 14th September 2025, IST
const fixedStartDate = new Date("2025-09-14T00:00:00+05:30"); // IST offset +5:30

export const shipmentsDB = {
  // === AIR SHIPMENTS ===
  KE628IND: {
    mode: "air",
    startDate: fixedStartDate,
    durationMinutes: 1440, // 1 day in minutes → Delivered on 15th Sept
    packageDetails: [
      "Access Card",
      "Personalized Love Letter",
      "Cartier Jewelry",
      "Dior Perfume & Skincare",
      "Customized Keepsake",
      "Ulwi Pashmina Shawl",
      "Queen Baton (Torch)",
      "Gold",
      "$10,000.",
    ],
    routeTimeline: {
      air: [
        "Package Received in Seoul (Oksu-dong, Seongdong-gu)",
        "Arrived at Incheon International Airport",
        "Air Shipment in Flight to India",
        "Arrived at Mumbai Airport – Customs Clearance",
        "Out for Delivery → Mira Bhayandar, Maharashtra → Delivered",
      ],
    },
  },

  AIR2IND54321: {
    mode: "air",
    startDate: fixedStartDate,
    durationMinutes: 2880, // 2 days → Delivered on 16th Sept
    packageDetails: ["Samsung Galaxy S25", "Cosmetics"],
    routeTimeline: {
      air: [
        "Package Received in Seoul (Gangnam)",
        "Arrived at Incheon International Airport",
        "In Flight to India",
        "Arrived at Delhi Airport – Customs Clearance",
        "Out for Delivery → New Delhi → Delivered",
      ],
    },
  },

  AIR2IND24680: {
    mode: "air",
    startDate: fixedStartDate,
    durationMinutes: 2880, // 2 days → Delivered on 16th Sept
    packageDetails: ["Medical Supplies", "Documents"],
    routeTimeline: {
      air: [
        "Package Received in Seoul",
        "Arrived at Incheon International Airport",
        "Air Shipment in Flight to India",
        "Arrived at Bengaluru Airport – Customs Clearance",
        "Out for Delivery → Bengaluru → Delivered",
      ],
    },
  },

  // === SEA SHIPMENTS ===
  SEA2IND67890: {
    mode: "sea",
    startDate: fixedStartDate,
    durationMinutes: 10080, // 7 days → Delivered on 21st Sept
    packageDetails: ["Electronics", "Furniture"],
    routeTimeline: {
      sea: [
        "Package Received in Seoul",
        "At Busan Port – Export Loading",
        "On Vessel – En route to India",
        "Arrived at Nhava Sheva Port (Mumbai) – Customs Clearance",
        "Inland Transit to Mira Bhayandar",
        "Out for Delivery → Mira Bhayandar, Maharashtra → Delivered",
      ],
    },
  },

  SEA2IND13579: {
    mode: "sea",
    startDate: fixedStartDate,
    durationMinutes: 10080, // 7 days → Delivered on 21st Sept
    packageDetails: ["Automobile Parts", "Machinery"],
    routeTimeline: {
      sea: [
        "Package Received in Seoul",
        "At Busan Port – Export Loading",
        "On Vessel – En route to India",
        "Arrived at Chennai Port – Customs Clearance",
        "Inland Transit to Tamil Nadu",
        "Out for Delivery → Chennai → Delivered",
      ],
    },
  },

  SEA2IND11223: {
    mode: "sea",
    startDate: fixedStartDate,
    durationMinutes: 10080, // 7 days → Delivered on 21st Sept
    packageDetails: ["Clothing Shipment", "Handbags"],
    routeTimeline: {
      sea: [
        "Package Received in Seoul",
        "At Busan Port – Export Loading",
        "On Vessel – En route to India",
        "Arrived at Kochi Port – Customs Clearance",
        "Inland Transit to Kerala",
        "Out for Delivery → Kochi → Delivered",
      ],
    },
  },
};
