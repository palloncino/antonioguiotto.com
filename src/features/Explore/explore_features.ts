import squareGraph from "../../media/images/graph-paper.svg";


export type previewFeature = {
  id: number;
  type: featureType;
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

export type featureType = 'app' | 'demo' | 'business' | 'animation';

export const featureTypes = ['app', 'demo', 'business', 'animation'];

export const features: previewFeature[] = [
  {
    id: 2100001,
    type: "demo",
    buttonCard: {
      title: "A warm welcome",
      description:
        "On this page you can find the services provided by Antonio Guiotto. Currently working on public advertising, web design and engineering. Find my contact below under \"Quick Contacts\" section.",
      route: "/",
      media: squareGraph,
    },
    previewCard: {
      title: "A warm welcome",
      keys: "Online Business, Engineering, Design, Marketing, Art.",
      description:
      "On this page you can find the services provided by Antonio Guiotto. Currently working on public advertising, web design and engineering. Find my contact below under \"Quick Contacts\" section.",
      status: "Under constant development.",
      images: [squareGraph],
      gifs: [],
      videos: [],
    },
  },
  {
    id: 2330200,
    type: "animation",
    buttonCard: {
      title: "2D and 3D Animations",
      description:
        "Animations created with the following technologies: HTML Canvas, WebGL, Threejs",
      route: "/",
      media: squareGraph,
    },
    previewCard: {
      title: "2D and 3D Animations",
      keys: "Canvas, WebGL, Threejs, Interactive Web Animations",
      description:
      "Animations created with the following technologies: HTML Canvas, WebGL, Threejs. You can play with this previous and move forward the animation steps by clicking inside the thumbnail above.",
      status: "Updated on 15 Feb 2024",
      images: [squareGraph],
      gifs: [],
      videos: [],
    },
  },
  {
    id: 12345201,
    type: "app",
    buttonCard: {
      title: "ChatUp - Web App (go to App)",
      description:
        "This is a DEMO representing a personal assistant chatbot, using openai APIs and langchain js framework. Currently out of service ⚠️.",
      media: squareGraph,
    },
    previewCard: {
      title: "ChatUp",
      keys: "Desktop",
      description:
        "This is a DEMO representing a personal assistant chatbot, using openai APIs and langchain js framework.",
      status: "Currently out of service for exceeded maintenance costs.",
      route: "/chat-up",
      images: [squareGraph],
      gifs: [],
      videos: [],
    },
  },
  {
    id: 2141200,
    type: "app",
    buttonCard: {
      title: "SquareUp - Mobile (Preview)",
      description:
        "This application allow easy edit of videos and images to match a 1:1 ratio while maintain the original aspect of the video. IOS App created with react-native.",
      route: "/",
      media: squareGraph,
    },
    previewCard: {
      title: "Square Up",
      keys: "Mobile, iOS",
      description:
        "This application allow easy edit of videos and images to match a 1:1 ratio while maintain the original aspect of the video. IOS App created with react-native.",
      status: "DEMO, not released.",
      route: "/",
      githubRepos: ["SquareUp", "CustomVideoEditingService"],
      images: [squareGraph],
      gifs: [],
      videos: [{ videoId: "3JtrRG6w0oU" }],
    },
  },
  {
    id: 2200022,
    type: "business",
    buttonCard: {
      title: "Graphic Design",
      description:
        "I am on a journey to switch career path from web developer to graphic design.",
      route: "/",
      media: squareGraph,
    },
    previewCard: {
      title: "Graphic Design",
      keys: "Graphic Design, Art, SVG, pixels, style",
      description:
      "I am on a journey to switch career path from web developer to graphic design.",
      status: "Started the 8th of February 2024",
      images: [squareGraph],
      gifs: [],
      videos: [{ videoId: "" }],
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
      media: squareGraph,
    },
    previewCard: {
      title: "New WordPress website.",
      keys: "Showcase, E-commerce.",
      description:
        "Whether you are looking to build a new e-commerce, or you just need a nice looking fast and effective showcase site, I am ready to get my team to work on in in no time you will be up and running, taking care of all sides of your business, from client engagement actual shopping.",
      status: "🚧 Page under construction 🏗️",
      images: [squareGraph],
      gifs: [],
      videos: [],
    },
  },
];