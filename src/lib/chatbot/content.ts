import { ChatMenu } from "@/types/chatbot";

export const chatbotMenus: Record<string, ChatMenu> = {
  welcome: {
    id: "welcome",

    message:
      "Hello! Welcome to our customer service. How can we help you today?",

    options: [
      {
        id: "properties",
        label: "Explore Properties",
        type: "menu",
        target: "properties",
      },
      {
        id: "documentation",
        label: "Documentation",
        type: "menu",
        target: "documentation",
      },
      {
        id: "faq",
        label: "Frequently Asked Questions",
        type: "menu",
        target: "faq",
      },
      {
        id: "contact",
        label: "Contact Us",
        type: "menu",
        target: "contact",
      },
    ],
  },

  properties: {
    id: "properties",

    message:
      "What would you like to know about our properties?",

    options: [
      {
        id: "view-properties",
        label: "View Available Properties",
        type: "link",
        href: "/projects",
      },
      {
        id: "property-faq",
        label: "Property Questions",
        type: "menu",
        target: "property-faq",
      },
      {
        id: "back",
        label: "Back to Main Menu",
        type: "menu",
        target: "welcome",
      },
    ],
  },

  "property-faq": {
    id: "property-faq",

    message:
      "Here are some common questions about our properties.",

    options: [
      {
        id: "payment-plans",
        label: "Do you offer payment plans?",
        type: "answer",
        answer:
          "Yes. Payment plans are available on selected properties. Please contact our sales team for the current payment options.",
        next: "property-faq-next",
      },
      {
        id: "inspection",
        label: "Can I inspect a property?",
        type: "answer",
        answer:
          "Yes. Property inspections can be arranged with our team. Please contact us to schedule an inspection.",
        next: "property-faq-next",
      },
      {
        id: "back",
        label: "Back to Properties",
        type: "menu",
        target: "properties",
      },
    ],
  },

  "property-faq-next": {
    id: "property-faq-next",

    message:
      "Is there anything else we can help you with?",

    options: [
      {
        id: "properties",
        label: "View Properties",
        type: "link",
        href: "/properties",
      },
      {
        id: "contact",
        label: "Contact Us",
        type: "menu",
        target: "contact",
      },
      {
        id: "faq",
        label: "More Questions",
        type: "menu",
        target: "faq",
      },
      {
        id: "home",
        label: "Main Menu",
        type: "menu",
        target: "welcome",
      },
    ],
  },


  documentation: {
    id: "documentation",

    message:
      "What would you like to know about documentation?",

    options: [
      {
        id: "property-documentation",
        label: "Property Documentation",
        type: "answer",
        answer:
          "The documentation available depends on the property and location. Our team can provide the relevant documentation for the property you are interested in.",
        next: "documentation-next",
      },
      {
        id: "verification",
        label: "Property Verification",
        type: "answer",
        answer:
          "Our customer service team can guide you through the available verification information for a property.",
        next: "documentation-next",
      },
      {
        id: "contact",
        label: "Contact Customer Service",
        type: "menu",
        target: "contact",
      },
      {
        id: "back",
        label: "Back to Main Menu",
        type: "menu",
        target: "welcome",
      },
    ],
  },

  "documentation-next": {
    id: "documentation-next",

    message:
      "Would you like to speak with our team or continue exploring?",

    options: [
      {
        id: "contact",
        label: "Contact Us",
        type: "menu",
        target: "contact",
      },
      {
        id: "properties",
        label: "View Properties",
        type: "link",
        href: "/projects",
      },
      {
        id: "back",
        label: "Back to Documentation",
        type: "menu",
        target: "documentation",
      },
    ],
  },


  faq: {
    id: "faq",

    message:
      "Here are some frequently asked questions. What would you like to know?",

    options: [
      {
        id: "payment",
        label: "Do you offer payment plans?",
        type: "answer",
        answer:
          "Yes. Flexible payment plans are available on selected properties.",
        next: "faq-next",
      },
      {
        id: "inspection",
        label: "Can I inspect a property?",
        type: "answer",
        answer:
          "Yes. Contact our team to arrange a property inspection.",
        next: "faq-next",
      },
      {
        id: "locations",
        label: "Where are your properties located?",
        type: "answer",
        answer:
          "Our properties are located in various locations across the country.",
        next: "faq-next",
      },
      {
        id: "contact",
        label: "How can I contact you?",
        type: "menu",
        target: "contact",
      },
      {
        id: "back",
        label: "Back to Main Menu",
        type: "menu",
        target: "welcome",
      },
    ],
  },

  "faq-next": {
    id: "faq-next",

    message:
      "Is there anything else we can help you with?",

    options: [
      {
        id: "properties",
        label: "View Properties",
        type: "link",
        href: "/projects",
      },
      {
        id: "contact",
        label: "Contact Us",
        type: "menu",
        target: "contact",
      },
      {
        id: "faq",
        label: "More Questions",
        type: "menu",
        target: "faq",
      },
      {
        id: "home",
        label: "Main Menu",
        type: "menu",
        target: "welcome",
      },
    ],
  },


  contact: {
  id: "contact",
  message:
    "How would you like to contact our team?",
  options: [
    {
      id: "whatsapp",
      label: "WhatsApp",
      type: "menu",
      target: "whatsapp",
    },
    {
      id: "phone",
      label: "Phone",
      type: "menu",
      target: "phone",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      href: "mailto:info@agrolocale.com",
    },
    {
      id: "back",
      label: "Back to Main Menu",
      type: "menu",
      target: "welcome",
    },
  ],
},

  whatsapp: {
  id: "whatsapp",
  message:
    "Who would you like to contact?",
  options: [
    {
      id: "sales-whatsapp",
      label: "Sales & Property Enquiries",
      type: "menu",
      target: "sales-whatsapp",
    },
    {
      id: "support-whatsapp",
      label: "Customer Support",
      type: "menu",
      target: "support-whatsapp",
    },
    {
      id: "back",
      label: "Back to Contact Options",
      type: "menu",
      target: "contact",
    },
  ],
},

  "sales-whatsapp": {
    id: "sales-whatsapp",
    message:
      "Please choose a Sales & Property Enquiries WhatsApp number.",
    options: [
      {
        id: "sales-whatsapp-1",
        label: "WhatsApp 1",
        type: "external",
        href: "https://wa.me/2348028808079",
      },
      {
        id: "sales-whatsapp-2",
        label: "WhatsApp 2",
        type: "external",
        href: "https://wa.me/234XXXXXXXXXX",
      },
      {
        id: "back",
        label: "Back to WhatsApp",
        type: "menu",
        target: "whatsapp",
      },
    ],
  },

  "support-whatsapp": {
    id: "support-whatsapp",
    message:
      "Please choose a Customer Support WhatsApp number.",
    options: [
      {
        id: "support-whatsapp-1",
        label: "WhatsApp 1",
        type: "external",
        href: "https://wa.me/2349010458648",
      },
      {
        id: "support-whatsapp-2",
        label: "WhatsApp 2",
        type: "external",
        href: "https://wa.me/2347071523904",
      },
      {
        id: "back",
        label: "Back to WhatsApp",
        type: "menu",
        target: "whatsapp",
      },
    ],
  },

  phone: {
    id: "phone",
    message:
      "Who would you like to call?",
    options: [
      {
        id: "sales-phone",
        label: "Sales & Property Enquiries",
        type: "menu",
        target: "sales-phone",
      },
      {
        id: "support-phone",
        label: "Customer Support",
        type: "menu",
        target: "support-phone",
      },
      {
        id: "back",
        label: "Back to Contact Options",
        type: "menu",
        target: "contact",
      },
    ],
  },

  "sales-phone": {
    id: "sales-phone",
    message:
      "Please choose a Sales & Property Enquiries number to call.",
    options: [
      {
        id: "sales-phone-1",
        label: "Call Number 1",
        type: "phone",
        href: "tel:+2348028808079",
      },
      {
        id: "sales-phone-2",
        label: "Call Number 2",
        type: "phone",
        href: "tel:+234xxxxxxxx",
      },
      {
        id: "back",
        label: "Back to Phone",
        type: "menu",
        target: "phone",
      },
    ],
  },

  "support-phone": {
    id: "support-phone",
    message:
      "Please choose a Customer Support number to call.",
    options: [
      {
        id: "support-phone-1",
        label: "Call Number 1",
        type: "phone",
        href: "tel:+2349010458648",
      },
      {
        id: "support-phone-2",
        label: "Call Number 2",
        type: "phone",
        href: "tel:+2347071523904",
      },
      {
        id: "back",
        label: "Back to Phone",
        type: "menu",
        target: "phone",
      },
    ],
  },
}