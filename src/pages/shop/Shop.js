import React, { useEffect, useState } from 'react'
import './Shop.css'
import { Link } from 'react-router-dom'
import Sales from '../../components/adverts/sale/Sale';
import { useProduct } from '../../contexts/ProductProvider';
import ProductCard from '../../components/cards/product/ProductCard';
import { useSearch } from '../../contexts/SearchProvider';

export default function Shop() {

  // get the products from the context
  const { products, loading, setLoading } = useProduct()

  // import the search context from the search provider
  const { searchTerm, setSearchTerm } = useSearch()

  // state to filter the products
  const [ filteredProducts, setFilteredProducts ] = useState(products) // initial state is all the filtered products


  // useEffect to filter the products
  useEffect(() => {
    // if there is no searchTerm
    if (!searchTerm) {
      // update the filteredProducts to store all the products Meaning that initially, the shop will display all the products
      setFilteredProducts(products)

      // Otherwise, if we are filtering
    } else {
      setFilteredProducts(
        products.filter(product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.sku.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

  }, [products, searchTerm]) // watch the searchTerm and the products

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  })

  console.log('PRODUCTS IN THE SHOP: ', filteredProducts)

  return (
    <section className='shop-page'>
      <div>
        <Sales />
      </div>

      <div>
        {/* <div className='search-products'>
          <input 
            type='text'
            placeholder='Search, Hoodie, t-shirt, Bakcpack'
            name='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}

        <div className='shop-products'>
          { loading ? (
            <div className='fetching-products'>
              <h6>Fetching.....</h6>
            </div>
          ) : (
            filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  key={product._id}
                  to={`/users/productdetails/${product._id}`}
                >
                  <ProductCard
                    productCategory={product.category} 
                    productName={product.name} 
                    productPrice={product.price} 
                    productImage={product.image}
                  />
                </Link>
              ))
            ) : (
              <div className='no-products'>
                <h6>No Products Available</h6>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
