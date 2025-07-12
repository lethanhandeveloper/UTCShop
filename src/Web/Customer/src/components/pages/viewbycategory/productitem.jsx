import { useEffect, useState } from "react";
import productApi from "../../../services/api/productAPI";
import { formatCurrency } from "../../../utils/format";
import authAPI from "../../../services/api/authAPI";
import cartAPI from "../../../services/api/cartAPI";

const ProductItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await productApi.fetchProducts(1, 10);
    setProducts(res.data);
  };

  const handleAddToCart = async (productId) => {
    await cartAPI.addToCart(productId);
  };

  return (
    <>
      {products.map((product) => {
        return (
          <div className="product-item col-lg-4 col-md-6 col-sm-6">
            <div className="item">
              <div className="image-container">
                <a className="item-img-wrapper-link" href="">
                  <img
                    className="img-fluid"
                    src={`${import.meta.env.VITE_SERVER_FILE_URL}/${product.imageUrl}`}
                    alt="Product"
                  />
                </a>
                <div className="item-action-behaviors">
                  <a
                    className="item-quick-look"
                    data-toggle="modal"
                    href="#quick-view"
                  >
                    Quick Look
                  </a>
                  <a className="item-mail" href="javascript:void(0)">
                    Mail
                  </a>
                  <a className="item-addwishlist" href="javascript:void(0)">
                    Add to Wishlist
                  </a>
                  <a
                    className="item-addCart"
                    href="javascript:void(0)"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="item-content">
                <div className="what-product-is">
                  <ul className="bread-crumb">
                    <li className="has-separator">
                      <a href="shop-v1-root-category.html">Men's</a>
                    </li>
                    <li className="has-separator">
                      <a href="shop-v2-sub-category.html">Tops</a>
                    </li>
                    <li>
                      <a href="shop-v3-sub-sub-category.html">T-Shirts</a>
                    </li>
                  </ul>
                  <h6 className="item-title">
                    <a href="single-product.html">{product.name}</a>
                  </h6>
                  <div className="item-description">
                    <p>
                      Mo Mo taMo taMo taMo taMo taMo taMo taMo taMo taMo taMo
                      taMo taMo taMo taMo taMo taMo taMo taMo taMo taMo taMo
                      taMo taMo ta Mo taMo taMo taMo taMo taMo taMo taMo taMo
                      taMo taMo taMo taMo taMo taMo taMo taMo ta Mo taMo taMo
                      taMo taMo taMo taMo taMo taMo taMo taMo taMo taMo taMo
                      taMo taMo taMo taMo taMo taMo taMo taMo taMo ta Mo taMo
                      taMo taMo taMo taMo taMo taMo taMo taMo taMo ta Mo taMo
                      taMo taMo taMo taMo taMo taMo taMo taMo taMo taMo taMo
                      taMo taMo ta Mo ta
                    </p>
                  </div>
                  <div className="item-stars">
                    <div
                      className="star"
                      title="4.5 out of 5 - based on 23 Reviews"
                    >
                      <span style={{ width: 67 }} />
                    </div>
                    <span>(23)</span>
                  </div>
                </div>
                <div className="price-template">
                  <div className="item-new-price">
                    {formatCurrency(product.price)}
                  </div>
                  <div className="item-old-price">$60.00</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductItem;
