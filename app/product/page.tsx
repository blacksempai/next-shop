import { db } from "@/db"
import classes from "@/styles/Products.module.css";
import Product from '@/components/Product/Product';
import { Product as ProductType } from "@/components/Product/Product.domain";

export default async function Products() {

    const products: ProductType[] = await db.Product.find();

    return (
        <>
            <h1>Products</h1>
            <div className={classes.products_container}>
                {products.map(p => <Product key={p._id} product={p}/>)}
            </div>
        </>
    )
}