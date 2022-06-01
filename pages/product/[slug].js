// slug being inside of the square brackets mean that it's going to be dynamic

import React from 'react'
import { client, urlFor } from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';


const ProductDetails = ({ product, products }) => {

    const { image, name, details, price } = product;

    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img src={urlFor(image && image[0])} />
                    </div>
                    {/* <div className='small-images-container'>
                        {image?.map((item, i) => (
                            <img
                                src={urlFor(item)}
                                className=''
                                onMouseEnter=''
                            />
                        ))}
                    </div> */}
                    <div className='product-detail-desc'>
                        <h1>{name}</h1>
                        <div className='reviews'>
                            <div>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                            </div>
                            <p>(20)</p>
                        </div>
                        <h4>details: </h4>
                        <p>{details}</p>
                        <p className='price'>${price}</p>
                        <div className='quantity'>
                            <h3>Quantity:</h3>
                            <p className='quantity-desc'>
                                <span className='minus' onClick="">
                                    <AiOutlineMinus />
                                </span>
                                <span className='num' onClick="">
                                    0
                                </span>
                                <span className='plus' onClick="">
                                    <AiOutlinePlus />
                                </span>
                            </p>
                        </div>
                        <div className='buttons'>
                            <button type='button' className='add-to-cart' onClick="">
                                Add to Cart
                            </button>

                            <button type='button' className='buy-now' onClick="">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='maylike-products-wrapper'>
                    <h2> You may also like</h2>
                    {/* marquee refers to a scrolling part (usually divs) */}
                    <div className='marquee'>
                        <div className='maylike-products-container'>
                            {products.map((item) => (
                                <Product key={item._id}
                                    product={item} />
                            ))}
                        </div>
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