import { Link } from 'react-router-dom';

const PROUCTS = [
    {id: 'p1', title: 'Product 1'},
    {id: 'p2', title: 'Product 2'},
    {id: 'p3', title: 'Product 3'},
];

const Products = () => {
    return (
        <>
            <h1>The Products Page</h1>
            <ul>
                {PROUCTS.map((prod) => (
                    <li key={prod.id}>
                        <Link to={prod.id} relative=''>{prod.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Products;