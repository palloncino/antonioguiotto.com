import squareGraph from "../../media/images/graph-paper.svg";
import banner_ita_completo from "../../media/images/banner-ita-completo.png";
import banner_ita_button from "../../media/images/banner-ita-button.png";
import WP from "../../media/images/WP.png";
import dalla_mora_preview from "../../media/images/dalla-mora-preview.png";
import wes from "../../media/images/wes.png";

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
      title: "Creative garage",
      description:
        "Studing animations and 3d models next",
      route: "/",
      media: banner_ita_button,
    },
    previewCard: {
      title: "Creative garage",
      keys: "Online Business, Engineering, Design, Marketing, Art.",
      description:
      "On this page you can find services provided by Antonio Guiotto. Currently working on public advertising, web design and engineering. Find my contacts in the Footer (Quick Links)",
      status: "Under constant development. It's caotic",
      images: [banner_ita_completo],
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
      "Animations created with the following technologies: HTML Canvas, WebGL, Threejs. Find one example here http://eclipse-animation.s3-website-us-east-1.amazonaws.com",
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
      title: "SquareUp - Mobile",
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
      images: [wes],
      gifs: [],
      videos: [],
    },
  },
  {
    id: 2141203,
    type: "business",
    buttonCard: {
      title: "WordPress Website",
      description:
        "Whether you are looking to build a new e-commerce, or you just need a nice looking fast and effective showcase site, I am ready to get my team to work on in in no time you will be up and running, taking care of all sides of your business, from client engagement actual shopping.",
      media: squareGraph,
    },
    previewCard: {
      title: "New WordPress website.",
      keys: "Showcase, E-commerce.",
      description:
        "Whether you are looking to build a new e-commerce, or you just need a nice looking fast and effective showcase site, I am ready to get my team to work on in in no time you will be up and running, taking care of all sides of your business, from client engagement actual shopping. Here an example of a website I built for a client lately:",
      status: "Online",
      route: 'https://apsproncegno.chebellagiornata.it',
      images: [dalla_mora_preview],
      gifs: [],
      videos: [],
    },
  },

{
  id: 233023441200,
  type: "demo",
  buttonCard: {
    title: "Placeholder",
    description:
      "Lorem placeholder Ipsum",
    route: "/",
    media: squareGraph,
  },
  previewCard: {
    title: "Next soon",
    keys: "Lorem placeholder Ipsum",
    description:
    "Lorem placeholder Ipsum Lorem placeholder Ipsum Lorem placeholder Ipsum",
    status: "draft",
    images: [squareGraph],
    gifs: [],
    videos: [],
  },
},
{
  id: 23302111200,
  type: "demo",
  buttonCard: {
    title: "Placeholder",
    description:
      "Lorem placeholder Ipsum",
    route: "/",
    media: squareGraph,
  },
  previewCard: {
    title: "Next soon",
    keys: "Lorem placeholder Ipsum",
    description:
    "Lorem placeholder Ipsum Lorem placeholder Ipsum Lorem placeholder Ipsum",
    status: "draft",
    images: [squareGraph],
    gifs: [],
    videos: [],
  },
},
];