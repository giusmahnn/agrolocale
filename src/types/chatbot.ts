export type ChatOption =
  | {
      id: string;
      label: string;
      type: "menu";
      target: string;
    }
  | {
      id: string;
      label: string;
      type: "answer";
      answer: string;
      next?: string;
    }
  | {
      id: string;
      label: string;
      type: "link";
      href: string;
    }
  | {
      id: string;
      label: string;
      type: "external";
      href: string;
    }
  | {
      id: string;
      label: string;
      type: "phone";
      href: string;
    }
  | {
      id: string;
      label: string;
      type: "email";
      href: string;
    };

export type ChatMenu = {
  id: string;
  message: string;
  options: ChatOption[];
};

export type ChatMessage = {
  id: string;
  sender: "bot" | "user";
  text: string;
};