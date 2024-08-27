import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  return (
    <Link to={`/gallery/${product.id}`}>
      <Card className="mt-6 w-fit h-[1000px] cursor-pointer">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={product.image} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {product.title}
          </Typography>
          <Typography>{product.description}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
export default ProductCard;
