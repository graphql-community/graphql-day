import { SimpleOpengraphImage } from "../components/simple-opengraph-image";
export {
  generateStaticParams,
  contentType,
  size,
} from "../components/simple-opengraph-image";

export default SimpleOpengraphImage.bind(null, {
  pageTitle: "GraphQL Day at FOST",
});
