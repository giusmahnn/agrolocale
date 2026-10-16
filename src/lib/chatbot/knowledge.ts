/**
 * Approved Agrolocale knowledge for the customer-service chatbot.
 *
 * IMPORTANT:
 * This file contains information the AI is allowed to use when
 * answering customer questions.
 *
 * Do not add assumptions, guesses, or unverified information here.
 *
 * Dynamic information such as:
 * - current prices
 * - availability
 * - promotions
 * - payment plans
 * - inventory
 *
 * should eventually come from Sanity or another live data source.
 */

export const agrolocaleKnowledge = {
  company: {
    name: "Agrolocale",
    legalName: "Agrolocale Investment Limited",

    description:
      "Agrolocale is a Nigerian agro-realty company focused on agricultural land discovery and acquisition, premium farm estate developments, farm-resort projects, agricultural investment, and farm produce.",

    founded: "2024",

    positioning:
      "Agrolocale aims to make agricultural land ownership and investment more transparent, accessible, efficient, and rewarding.",

    vision:
      "To be the go-to company in Africa and the world for everything Agro purchase, investment, research, and technology.",

    mission:
      "To produce as many farmland owners as possible within premium farm estate developments for food security and sufficiency in the economy.",

    values: [
      "Family",
      "Excellence",
      "Quality",
      "Humility",
      "Integrity",
      "Teamwork",
      "Communication",
      "Innovation",
      "Accountability",
      "Technology",
    ],

    services: [
      "Agricultural land discovery",
      "Agricultural land acquisition",
      "Farm estate development",
      "Farm and resort investment",
      "Agro-realty advisory",
      "Property listing and sales",
      "Property due diligence",
      "Agricultural investment opportunities",
      "Farm produce",
    ],
  },

  locations: {
    headquarters: {
      address:
        "Ayobola Daodu, Lekki Scheme II, Ajah, Lagos State, Nigeria",
    },

    farm: {
      name: "Paradiso Farms",
      address:
        "Alabata, FUNAAB, Abeokuta, Ogun State, Nigeria",
    },
  },

  contact: {
    phones: [
      "+234 707 152 3904",
      "+234 901 045 8648",
    ],

    emails: [
      "info@agrolocale.com",
      "customercare@agrolocale.com",
    ],

    officeHours: {
      mondayToThursday: "9:00 AM – 4:00 PM",
      friday: "10:00 AM – 4:00 PM",
    },

    responseTime:
      "Customers who submit a contact enquiry are generally expected to receive a response within 24 hours.",
  },

  propertyServices: {
    overview:
      "Agrolocale helps individuals, families, farmers, and investors discover and acquire agricultural land and participate in farm estate and farm-resort developments.",

    verification:
      "Agrolocale states that its listings undergo verification and due diligence before being presented to customers.",

    physicalVerification:
      "Agrolocale states that listings go through on-site inspection by its field agents.",

    transactionTimeline:
      "Agrolocale states that many transactions close within approximately 4 to 8 weeks, depending on due diligence and documentation.",

    financing:
      "Agrolocale states that it partners with agricultural finance institutions and may connect suitable customers with financing options.",

    sellingProperty:
      "Property owners can contact Agrolocale about listing their property and reaching qualified buyers.",
  },

  currentPropertyOfferings: [
    {
        name: "Aduke Cottages",

        category: "Housing Plan",

        location:
            "Inside Elysian Farm & Resort, Ido-Eruwa Expressway, Ibadan",

        status: "Available on sale",

        description:
            "Aduke Cottages is a housing plan within Elysian Farm & Resort offering completed housing options together with the land on which the building is situated.",

        housingOptions: [
            {
            type: "1 Bedroom",
            price: "Current price should be confirmed with Agrolocale.",
            },
            {
            type: "2 Bedroom",
            price: "Current price should be confirmed with Agrolocale.",
            },
            {
            type: "3 Bedroom",
            price: "Current price should be confirmed with Agrolocale.",
            },
        ],

        pricingStructure:
            "The price paid for an Aduke Cottage covers both the land and the building. It is not a land-only purchase.",

        payment:
            "Payment plan is available. Customers should contact Agrolocale to confirm the current payment terms for their preferred housing option.",

        titleInformation:
            "The Agrolocale website currently displays CofO information for the development.",

        note:
            "Customers should contact Agrolocale to confirm the current price, availability, specific house type, payment terms, documentation, and other transaction details.",
    },

    {
      name: "Elysian Farms and Resort",

      category: "Farm & Resort / Land",

      location:
        "Ido-Eruwa Expressway, Ibadan, Oyo State",

      status: "Available on sale",

      titleInformation:
        "The current website displays CofO information for the offering.",

      payment:
        "Payment plan is available.",

      description:
        "Elysian Farm & Resort is a farm-resort and eco-community development combining agricultural, residential, commercial, recreational, and leisure opportunities.",

      developmentSize:
        "The Elysian project website describes the development as spanning approximately 50 acres.",

      opportunities: [
        "Residential ownership",
        "Farming",
        "Commercial use",
        "Eco-resort opportunities",
        "Agritourism",
        "Leisure and recreation",
        "Greenhouse farming",
      ],

      features: [
        "Tree-lined streets",
        "Solar lighting",
        "Crop fields",
        "Orchards",
        "Fish ponds",
        "Picnic areas",
        "BBQ areas",
        "Obstacle courses",
        "Wellness and recreation areas",
        "Conference spaces",
        "Wedding/event spaces",
        "Helipad access",
        "Bus and shuttle services",
        "Zoos and animal enclosures",
      ],

      plannedFeatures: [
        "Resort-grade cabanas",
        "Villas",
        "Additional hospitality and leisure facilities",
      ],

      note:
        "Customers should contact Agrolocale for current plot availability, current prices, payment terms, development fees, infrastructure status, and allocation details.",
    },

    {
      name: "Paradiso III – Cocoa & Oil-palm",

      category: "Agricultural Land",

      location:
        "Alabata Road, Abeokuta, Ogun State",

      status: "Available on sale",

      titleInformation:
        "The current Agrolocale website displays CofO information for this listing.",

      payment:
        "Payment plan is available.",

      focus: [
        "Cocoa",
        "Oil palm",
        "Agricultural investment",
      ],

      note:
        "Customers should contact Agrolocale for current pricing, available plot sizes, plantation details, payment terms, and documentation.",
    },
  ],

  historicalOrAdditionalProjects: [
    {
      name: "Paradiso Farms",

      location:
        "Alabata, FUNAAB, Abeokuta, Ogun State",

      description:
        "Paradiso Farms is one of Agrolocale's agricultural farm projects and production locations.",

      note:
        "Specific availability and investment terms should be confirmed directly with Agrolocale.",
    },

    {
      name: "Bounty Harvest",

      category: "Agricultural Farm Estate",

      description:
        "Bounty Harvest is referenced by Agrolocale as one of its active production farm estates in Abeokuta.",

      note:
        "The chatbot should not provide current pricing or availability unless supplied by a live Agrolocale data source.",
    },
  ],

  elysian: {
    name: "Elysian Farm & Resort",

    location:
      "Along the Ido-Eruwa Expressway, Ibadan, Oyo State",

    landmark:
      "The development is described as being directly opposite Ibadan City Polytechnic.",

    concept:
      "A gated eco-community combining agriculture, residential ownership, commercial opportunities, recreation, hospitality, and agrotourism.",

    development:
      "The project is planned around agriculture, leisure, nature, and eco-friendly community living.",

    ownershipTypes: [
      "Residential plots",
      "Farming plots",
      "Commercial plots",
    ],

    payment:
      "The project has offered structured installment payment plans. Current terms must be confirmed with Agrolocale.",

    infrastructure:
      [
        "Road infrastructure",
        "Security",
        "Gate house",
        "Green areas",
        "Perimeter fencing",
        "Electricity",
      ],

    customerAction:
      "Customers interested in Elysian should contact Agrolocale for a site inspection, current pricing, payment plans, documentation, and allocation information.",
  },

  produce: {
    overview:
      "Agrolocale also offers farm-fresh agricultural produce and promotes locally grown food products.",

    quality:
      "Agrolocale states that its produce is farm-fresh, locally grown, and traceable from farm to table.",

    produceApproach:
      "Agrolocale states that it grows produce without synthetic pesticides or artificial fertilisers.",

    products: [
      {
        name: "Garri Go! – Fresh & Crispy",

        category: "Farm Produce",

        availability:
          "The website currently lists this product for nationwide delivery.",

        currentListedPrice:
          "₦24,590 for 25kg",

        note:
          "Price and stock should be confirmed before purchase.",
      },

      {
        name: "Garri Go Mix! – Crunchy & Creamy",

        category: "Farm Produce",

        description:
          "A ready-to-eat combination of garri, milk, sugar, and groundnut.",

        sizes: [
          "330ml",
          "500ml",
        ],

        currentListedPrice:
          "The website currently displays ₦2,800 on the homepage. A product page has also previously displayed a different price, so customers should confirm the current price before purchase.",

        availability:
          "Nationwide delivery is listed.",

        note:
          "The chatbot must not guarantee the current price without checking a live product source.",
      },

      {
        name: "Habanero",

        category: "Farm Produce",

        size:
          "1kg",

        currentListedPrice:
          "₦4,000",

        availability:
          "Listed as in stock on the current website.",

        note:
          "Price and stock should be confirmed before purchase.",
      },

      {
        name: "Tomato",

        category: "Farm Produce",

        size:
          "1kg",

        currentListedPrice:
          "₦3,000",

        availability:
          "Listed as in stock on the current website.",

        note:
          "Price and stock should be confirmed before purchase.",
      },

      {
        name: "Plantain",

        category: "Farm Produce",

        unit:
          "Bunch",

        currentListedPrice:
          "₦10,000",

        availability:
          "Listed as in stock on the current website.",

        note:
          "Price and stock should be confirmed before purchase.",
      },
    ],
  },

  documentation: {
    general:
      "Property documentation varies by project and transaction. Customers should contact Agrolocale to confirm the exact documentation attached to a particular property.",

    verification:
      "Agrolocale emphasizes property verification, due diligence, and secure transactions.",

    titles:
      [
        "Certificate of Occupancy (CofO)",
        "Registered survey",
        "Other project-specific documentation",
      ],

    important:
      "The chatbot must never claim that a specific property has a particular title unless that information is explicitly present in the approved property data.",
  },

  payments: {
    general:
      "Some Agrolocale property offerings have structured payment plans.",

    installment:
      "Payment-plan availability and duration vary by project.",

    deposit:
      "Some Elysian Farm & Resort offers have previously advertised an initial deposit of ₦500,000 with installment periods of up to 12 months. This should NOT be presented as the current payment policy without confirmation.",

    currentTerms:
      "Customers should contact Agrolocale to confirm the current price, deposit, installment duration, development fees, and payment instructions for any property.",

    safety:
      "The chatbot must never invent bank details, account numbers, payment links, payment deadlines, or transfer instructions.",
  },

  inspections: {
    available:
      true,

    description:
      "Customers interested in properties can contact Agrolocale to arrange or enquire about a site inspection.",

    recommendation:
      "Customers should inspect the property and complete appropriate due diligence before committing to a purchase.",
  },

  frequentlyAskedQuestions: [
    {
      question:
        "What does Agrolocale do?",

      answer:
        "Agrolocale is a Nigerian agro-realty company focused on agricultural land acquisition, farm estate developments, farm-resort projects, agricultural investment, and farm produce.",
    },

    {
      question:
        "Where is Agrolocale located?",

      answer:
        "Agrolocale's headquarters is in Lekki Scheme II, Ajah, Lagos State. The company also operates farm projects including Paradiso Farms in Alabata, Abeokuta, Ogun State.",
    },

    {
      question:
        "Where is Elysian Farm & Resort?",

      answer:
        "Elysian Farm & Resort is located along the Ido-Eruwa Expressway in Ibadan, Oyo State.",
    },

    {
      question:
        "Can I inspect a property before buying?",

      answer:
        "Yes. Customers interested in a property can contact Agrolocale to enquire about arranging a site inspection.",
    },

    {
      question:
        "Does Agrolocale offer payment plans?",

      answer:
        "Yes. Some property offerings have payment plans, but the terms vary by project. Contact Agrolocale for the current payment plan for a specific property.",
    },

    {
      question:
        "Can I buy agricultural land through Agrolocale?",

      answer:
        "Yes. Agricultural land discovery and acquisition are core parts of Agrolocale's business.",
    },

    {
      question:
        "Can Agrolocale help me sell my land?",

      answer:
        "Yes. Agrolocale accepts enquiries from property owners who want to list their property and reach qualified buyers.",
    },

    {
      question:
        "Does Agrolocale offer financing?",

      answer:
        "Agrolocale states that it partners with agricultural finance institutions and can connect suitable customers with financing options.",
    },

    {
      question:
        "How long does a property transaction take?",

      answer:
        "Agrolocale states that many transactions close within approximately 4 to 8 weeks, depending on due diligence and documentation.",
    },

    {
      question:
        "Who developed Elysian Farm & Resort?",

      answer:
        "Elysian Farm & Resort is a project developed by Agrolocale Investment Limited.",
    },
  ],

  importantRules: [
    "Never invent property prices.",
    "Never invent property availability.",
    "Never invent payment plans.",
    "Never invent documentation or land titles.",
    "Never invent plot sizes.",
    "Never invent development timelines.",
    "Never invent contact details.",
    "Never claim that a promotion is currently active unless the live data confirms it.",
    "Never guarantee investment returns.",
    "Never provide legal advice as if it were professional legal advice.",
    "For transaction-specific questions, direct customers to Agrolocale customer service.",
    "When information is unavailable, say so clearly rather than guessing.",
  ],

  customerService: {
    recommendation:
      "Customers who need current pricing, availability, payment details, documentation, allocation information, site inspection arrangements, or transaction-specific assistance should contact Agrolocale directly.",

    phone: [
      "+234 707 152 3904",
      "+234 901 045 8648",
    ],

    email: [
      "info@agrolocale.com",
      "customercare@agrolocale.com",
    ],
  },
} as const;