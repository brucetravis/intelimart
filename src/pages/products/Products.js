import React, { useEffect, useState } from 'react'
import './Products.css'
import { PlusCircle } from 'lucide-react';
import Button from '../../components/buttons/Button';
import AddProduct from '../../components/modals/products/addProduct/AddProduct';
import { AnimatePresence } from 'framer-motion';
import { useProduct } from '../../contexts/ProductProvider';
// import the funtion to delete a product
import deleteProduct from '../../services/products/deleteProduct'
import UpdateProduct from '../../components/modals/products/updateProduct/UpdateProduct';
import ViewProduct from '../../components/modals/products/viewProduct/ViewProduct';

export default function Products() {

  // get the products, state and the state function from the context
  const { products, fetchProducts, loading } = useProduct()

  // state to open the modal to add a product
  const [ openModal, setOpenModal ] = useState(false) // initially, the modal is closed
  
  const [ openUpdateModal, setOpenUpdateModal ] = useState(false) // initially, the modal is closed

  const [ openView, setOpenView ] = useState(false)

  // state to filter the products
  const [ filteredProducts, setFilteredProducts ] = useState(products) // initial state conatins all products

  // search term to handle the search input
  const [ searchTerm, setSearchTerm ] = useState('') // empty strings for flexibility

  // state to store the selected product so that we can update it's details
  const [ selectedProduct, setSelectedProduct ] = useState(null)

  // const filterOptions = ['category', 'status', 'price']

  // function to open and close the modal
  const openProductModal = () => {
    setOpenModal(prev => !prev)
  }

  // funtion to open and close the modal t o update the product
  const openUpdateProductModal = () => {
    setOpenUpdateModal(prev => !prev)
  }

  // function to open the modal to view product details
  const openProductView = (product) => {
    setSelectedProduct(product)
    setOpenView(true)
  }

  const closeProductView = () => [
    setOpenView(false)
  ]

  // function to handle the change in the input
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  // useEffect to filter the products
  useEffect(() => {
    fetchProducts()
    
    // if the search term is empty meaning that nothing has been typed in the input
    if (!searchTerm) {
      setFilteredProducts(products) // show the empty products array

    } else {
      // update the filtered products with the product typed in the input
      setFilteredProducts(
        products.filter(product => 
          product.name.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm) ||
          product.sku.toLowerCase().includes(searchTerm) ||
          product.status.toLowerCase().includes(searchTerm)
        )
      ) 
    }

  }, [searchTerm, products, fetchProducts]) // watch out for the search term and the products

  // useEffects for side effects
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <section
        className='products-page'
      >
        <h4>Products</h4>
        
        <div
          className='product-controls'
        >
          <input
            type='text'
            placeholder='Search Hoodie, t-shirt, backpack'
            name='search'
            value={searchTerm.toLowerCase()}
            onChange={handleChange}
            className='product-search'
          />

          <button
            className='add-product'
            onClick={openProductModal}
          >
            <PlusCircle size={15} stroke='#ffffff' />
            Add Product
          </button>
        </div>

        {/* <div
          className='product-filters'
        >
          {products.map((product) => (
            <div
              className='filter'
              key={product.id}
            >
              <h5>{product.option}</h5>

              <div
                className='filter-input'
              >
                <span>All</span>

                <div
                  className='drop-down'
                >
                  {filterOptions === product.map((item, idx) => (
                    <div
                      key={idx}
                      className='dropdown-item'
                    >
                      {typeof item === "string" ? item : Object.keys(item).join(",")}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div> */}

        <div
          className='products-table-wrapper'
        >
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Value</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {!loading && filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product._id}>
                    <td className='product-name'>
                      <img 
                        src={product.image}
                        alt={product.name}
                        className='product-image'
                      />
                      {product.name.length > 20 ? product.name.substring(0, 20) + '...' : product.name}
                    </td>
                    <td>{product.sku.length > 15 ? product.sku.substring(0, 15) + '...': product.sku}</td>
                    <td>{product.category}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>{product.total}</td>
                    <td>{product.quantity}</td>
                    <td
                      className={
                        product.status === "Active" ? "status-active" :
                        product.status === "Out of Stock" ? "status-outofstock" :
                        "status-disabled"
                      }
                    >
                      {product.status}
                    </td>
                    <td>{new Date(product.updatedAt).toLocaleString()}</td>
                    <td>
                      <Button 
                        name="view" 
                        text="View"
                        clickFunction={() => openProductView(product)}
                      />

                      <Button 
                        name="update" 
                        text="Update" 
                        clickFunction={() => {
                            setSelectedProduct(product)
                            setOpenUpdateModal(true)
                          }
                        } 
                      />

                      <Button name="delete" text="Delete" clickFunction={() => deleteProduct(product._id)} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td 
                    className='no-products'
                    colSpan={10}
                  >
                    {
                      loading ? 'Fetching Products' : 
                      filteredProducts.length === 0 ? 'No Products Available.' : filteredProducts
                    }
                  </td>
                </tr>
              )}
              
            </tbody>
          </table>
        </div>

      </section>
      
      <AnimatePresence>
        { openModal && <AddProduct onClose={openProductModal} />}
      </AnimatePresence>

      <AnimatePresence>
        { openUpdateModal && <UpdateProduct onClose={openUpdateProductModal} productData={selectedProduct} />}
      </AnimatePresence>

      <AnimatePresence>
        { openView && <ViewProduct product={selectedProduct} onClick={closeProductView} />}
      </AnimatePresence>

    </>
  )
}
