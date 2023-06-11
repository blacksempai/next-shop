type Props = {params: {id: number}}; 

export default function Product({params}: Props) {
    return <h1>Product: {params.id}</h1>
}