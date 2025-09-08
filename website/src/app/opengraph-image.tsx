import { SimpleOpengraphImage } from "../components/simple-opengraph-image";
export {
  contentType,
  generateStaticParams,
  size,
} from "../components/simple-opengraph-image";

export default SimpleOpengraphImage.bind(null, {
  pageTitle: "GraphQL Day at FOST",
});
