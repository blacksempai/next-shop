import classes from '@/styles/AddProduct.module.css'
import {db} from '@/db';

export default function Page() {

    async function addProduct(data: FormData) {
        'use server';

        const product = {
            name: data.get('name'),
            price: data.get('price'),
            description: data.get('description'),
            imageURL: data.get('imageURL')
        } 
        await db.Product.create(product);
    }

    return (
        <div className={classes.container}>
            <form className={classes.form} action={addProduct}>
                <h2>Create new product</h2>

                <div className={classes.input_container}>
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" name="name" placeholder="name" required/>
                </div>

                <div className={classes.input_container}>
                    <label htmlFor="price">price</label>
                    <input type="text" id="price" name="price" placeholder="price" required pattern='\d+'/>
                </div>
                
                <div className={classes.input_container}>
                    <label htmlFor="description">description</label>
                    <textarea id="description" name="description" placeholder="description" required/>
                </div>

                <div className={classes.input_container}>
                    <label htmlFor="imageURL">imageURL</label>
                    <input type="url" id="imageURL" name="imageURL" placeholder="imageURL" required/>
                </div>

                <button className={classes.btn}>Create</button>

            </form>
        </div>
    )
}