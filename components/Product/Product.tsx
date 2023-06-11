import Image from "next/image";
import { Product } from "./Product.domain";
import classes from "./Product.module.css";

type ProductProps = {
    product: Product
}

export default function Product({product}: ProductProps) {

    return (
        <div className={classes.product}>
            <Image src={product.imageURL} alt={product.name} width={200} height={200}/>
            <h2 className={classes.product_title}>{product.name}</h2>
            <p className={classes.product_price}>{product.price} UAH</p>
        </div>
    )
}