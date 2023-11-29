import ItemGrid from "../../components/ItemGrid";
import ItemPreview from "../../components/ItemPreview";
import "./shop.css";

const REACT_APP_S3_MEDIA_BUCKET = "https://ag-medias.s3.amazonaws.com";

const Shop = () => {

  return (
    <div className="shop-page-container">

      <ItemGrid />

      <ItemPreview />

    </div>

  )
};

export default Shop;


const PRODUCTS = [
  {
    id: 1000,
    title: "Cave",
    price: 800,
    description: "Marker on canvas",
    dated: "2018",
    thumbnail: `${REACT_APP_S3_MEDIA_BUCKET}/cave.png`,
    media: [
      `${REACT_APP_S3_MEDIA_BUCKET}/cave.png`,
      `https://picsum.photos/300/200`,
      `${REACT_APP_S3_MEDIA_BUCKET}/cave.png`,
      `https://picsum.photos/300/200`,
      `${REACT_APP_S3_MEDIA_BUCKET}/cave.png`,
    ],
  },
  {
    id: 1001,
    title: "Frog",
    price: 200,
    description: "Marker on paperbox",
    dated: "2018",
    thumbnail: `${REACT_APP_S3_MEDIA_BUCKET}/frog.png`,
    media: [`${REACT_APP_S3_MEDIA_BUCKET}/frog.png`],
  },
  {
    id: 1002,
    title: "Marina",
    price: 150,
    description: "Marker on canvas",
    dated: "2018",
    thumbnail: `${REACT_APP_S3_MEDIA_BUCKET}/marina.png`,
    media: [`${REACT_APP_S3_MEDIA_BUCKET}/marina.png`],
  },
  {
    id: 1003,
    title: "Shark",
    price: 500,
    description: "Marker on canvas",
    dated: "2018",
    thumbnail: `${REACT_APP_S3_MEDIA_BUCKET}/shark.png`,
    media: [`${REACT_APP_S3_MEDIA_BUCKET}/shark.png`],
  },
  {
    id: 1004,
    title: "Shark",
    price: 500,
    description: "Marker on canvas",
    dated: "2018",
    thumbnail: `${REACT_APP_S3_MEDIA_BUCKET}/shark.png`,
    media: [`${REACT_APP_S3_MEDIA_BUCKET}/shark.png`],
  },
  {
    id: 1005,
    title: "Shark",
    price: 500,
    description: "Marker on canvas",
    dated: "2018",
    thumbnail: `${REACT_APP_S3_MEDIA_BUCKET}/shark.png`,
    media: [`${REACT_APP_S3_MEDIA_BUCKET}/shark.png`],
  },
  {
    id: 1006,
    title: "Shark",
    price: 500,
    description: "Marker on canvas",
    dated: "2018",
    thumbnail: `${REACT_APP_S3_MEDIA_BUCKET}/shark.png`,
    media: [`${REACT_APP_S3_MEDIA_BUCKET}/shark.png`],
  },
];