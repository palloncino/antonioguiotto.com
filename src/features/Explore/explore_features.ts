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

export type featureType = 'app' | 'demo' | 'business';

export const featureTypes = ['app', 'demo', 'business'];

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
      videos: [{ videoId: "" }],
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
    id: 2100101,
    type: "business",
    buttonCard: {
      title: "Online Shop",
      description:
        "In this shop you will find creative artifacts and more, take a look, the prices are low and the passion behind these artifact is of immense value.",
      route: "/",
      media: squareGraph,
    },
    previewCard: {
      title: "Online Shop",
      keys: "Online Shopping, Art, Creative endevours.",
      description:
        "In this shop you will find creative artifacts and more, take a look, the prices are low and the passion behind these artifact is of immense value.",
      status: "🚧 Page under construction 🏗️",
      images: [squareGraph],
      // route: "/shop",
      gifs: [],
      videos: [{ videoId: "" }],
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
  // {
  //   id: 2141212,
  //   type: "business",
  //   buttonCard: {
  //     title: "Life menthoring",
  //     description:
  //       "I can teach you everithing I know about the way I conduct my life in a healthy way, integrating the professional, psycological and phisical aspect of your lifes, questioning old habits to try new approach to life. Let's grow together.",
  //     route: "/",
  //     media: squareGraph,
  //   },
  //   previewCard: {
  //     title: "Life menthoring",
  //     keys: "Professional, Psycological and Phisical refinement.",
  //     description:
  //       "I can teach you everithing I know about the way I conduct my life in a healthy way, integrating the professional, psycological and phisical aspect of your lifes, questioning old habits to try new approach to life.",
  //     status: "Available under request.",
  //     route: "/",
  //     githubRepos: undefined,
  //     images: [squareGraph],
  //     gifs: [],
  //     videos: [{ videoId: 'p1GAoNg76LU' }],
  //   },
  // }
];