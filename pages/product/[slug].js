// slug being inside of the square brackets mean that it's going to be dynamic

import React from 'react'
import { client, urlFor } from '../../lib/client';

const ProductDetails = ({ product, products }) => {

    const { image, name, details, price } = product;

    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img src={urlFor(image && image[0])} />
                    </div>
                </div>
            </div>
        </div>
    )
}

// DOCUMENTATION: https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking' // getStaticProps is called before initial render
    }
}



// have Next.js pre-render this page at build time 
export const getStaticProps = async ({ params: { slug } }) => {
    // fetch product details on the page that we're on
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

    // fetch all similar products
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    console.log(product);
    return {
        props: { products, product }
    }
}


export default ProductDetails