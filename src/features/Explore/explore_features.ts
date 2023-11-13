import squareThumb from "../../media/images/graph-paper.svg";
import chatupThumb from "../../media/images/graph-paper.svg";

type previewFeature = {
  id?: number;
  type: "business" | "demo" | "app";
  buttonCard: {
    title: string;
    description: string;
    route?: string;
    media: any;
  };
  previewCard: {
    title: string;
    keys: string;
    description: string;
    status: string;
    route?: string;
    images: any[];
    gifs: any[];
    videos: { videoId: string }[];
    githubRepos?: string[];
  };
};

export const defaultPreviewCard: previewFeature = {
  type: "demo",
  buttonCard: {
    title: "Welcome page.",
    description:
      "On this page you can find the services provided by Antonio Guiotto.",
    route: "/",
    media: squareThumb,
  },
  previewCard: {
    title: "A warm welcome.",
    keys: "Online Business, Engineering, Design, Marketing, Art and more.",
    description:
      "On this page you can find the services provided by Antonio Guiotto.",
    status: "DEMO, not released.",
    images: [chatupThumb],
    gifs: [],
    videos: [{ videoId: "JY6SPRNjvZE" }],
  },
}

export const features: previewFeature[] = [
  {
    id: 2141210,
    type: "business",
    buttonCard: {
      title: "Re-brand your website!",
      description:
        "Get a neat user interface for your business, having a user friendly website can increase your sales! Get a personalized experience for your clients. We can fix the online presence of your business, effectively, in a short period of time.",
      route: "/",
      media: squareThumb,
    },
    previewCard: {
      title: "Business rebranding",
      keys: "Web browser, Social Media, online presence",
      description:
        "Get a neat user-interface for your business, having a user friendly website will increase your sales! Get a personalized experience for your clients. We can fix the online presence of your business, effectively, in a short period of time.",
      status: "🚧 Page under construction 🏗️",
      images: [chatupThumb],
      gifs: [],
      videos: [{ videoId: "z0AEwKad7GU" }],
    },
  },
  {
    id: 2141203,
    type: "business",
    buttonCard: {
      title: "Need a WordPress website?",
      description:
        "Whether you are looking to build a new e-commerce, or you just need a nice looking fast and effective showcase site, I am ready to get my team to work on in in no time you will be up and running, taking care of all sides of your business, from client engagement actual shopping.",
      route: "/",
      media: squareThumb,
    },
    previewCard: {
      title: "New WordPress website.",
      keys: "Showcase, E-commerce.",
      description:
        "Whether you are looking to build a new e-commerce, or you just need a nice looking fast and effective showcase site, I am ready to get my team to work on in in no time you will be up and running, taking care of all sides of your business, from client engagement actual shopping.",
      status: "🚧 Page under construction 🏗️",
      images: [chatupThumb],
      gifs: [],
      videos: [{ videoId: "z0AEwKad7GU" }],
    },
  },
  {
    id: 12345201,
    type: "demo",
    buttonCard: {
      title: "ChatUp - Web App (go to App)",
      description:
        "This is a DEMO representing a personal assistant chatbot, using openai APIs and langchain js framework. Currently out of service ⚠️.",
      media: chatupThumb,
    },
    previewCard: {
      title: "ChatUp",
      keys: "Desktop",
      description:
        "This is a DEMO representing a personal assistant chatbot, using openai APIs and langchain js framework.",
      status: "Currently out of service for exceeded maintenance costs.",
      route: "/chat-up",
      images: [chatupThumb],
      gifs: [],
      videos: [],
    },
  },
  {
    id: 2141202,
    type: "app",
    buttonCard: {
      title: "SquareUp - Mobile (Preview)",
      description:
        "This application allow easy edit of videos and images to match a 1:1 ratio while maintain the original aspect of the video. IOS App created with react-native.",
      route: "/",
      media: squareThumb,
    },
    previewCard: {
      title: "Square Up",
      keys: "Mobile, iOS",
      description:
        "This application allow easy edit of videos and images to match a 1:1 ratio while maintain the original aspect of the video. IOS App created with react-native.",
      status: "DEMO, not released.",
      route: "/",
      githubRepos: ["SquareUp", "CustomVideoEditingService"],
      images: [chatupThumb],
      gifs: [],
      videos: [{ videoId: "3JtrRG6w0oU" }],
    },
  }
];