function HorizontalMenu() {
  return (
    <div className="col-lg-9">
      <ul className="bottom-nav g-nav u-d-none-lg">
        <li>
          <a href="custom-deal-page.html">
            New Arrivals
            <span className="superscript-label-new">NEW</span>
          </a>
        </li>
        <li>
          <a href="custom-deal-page.html">
            Exclusive Deals
            <span className="superscript-label-hot">HOT</span>
          </a>
        </li>
        <li>
          <a href="custom-deal-page.html">Flash Deals</a>
        </li>
        <li className="mega-position">
          <a>
            Pages
            <i className="fas fa-chevron-down u-s-m-l-9" />
          </a>
          <div className="mega-menu mega-3-colm">
            <ul>
              <li className="menu-title">Home &amp; Static Pages</li>
              <li>
                <a href="home.html" className="u-c-brand">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
              <li>
                <a href="store-directory.html">Store Directory</a>
              </li>
              <li>
                <a href="terms-and-conditions.html">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="404.html">404</a>
              </li>
              <li className="menu-title">Single Product Page</li>
              <li>
                <a href="single-product.html">Single Product Fullwidth</a>
              </li>
              <li className="menu-title">Blog</li>
              <li>
                <a href="blog.html">Blog Page</a>
              </li>
              <li>
                <a href="blog-detail.html">Blog Details</a>
              </li>
            </ul>
            <ul>
              <li className="menu-title">Ecommerce Pages</li>
              <li>
                <a href="shop-v2-sub-category.html">Shop</a>
              </li>
              <li>
                <a href="cart.html">Cart</a>
              </li>
              <li>
                <a href="checkout.html">Checkout</a>
              </li>
              <li>
                <a href="account.html">My Account</a>
              </li>
              <li>
                <a href="wishlist.html">Wishlist</a>
              </li>
              <li>
                <a href="track-order.html">Track your Order</a>
              </li>
              <li className="menu-title">Cart Variations</li>
              <li>
                <a href="cart-empty.html">Cart Ver 1 Empty</a>
              </li>
              <li>
                <a href="cart.html">Cart Ver 2 Full</a>
              </li>
              <li className="menu-title">Wishlist Variations</li>
              <li>
                <a href="wishlist-empty.html">Wishlist Ver 1 Empty</a>
              </li>
              <li>
                <a href="wishlist.html">Wishlist Ver 2 Full</a>
              </li>
            </ul>
            <ul>
              <li className="menu-title">Shop Variations</li>
              <li>
                <a href="shop-v1-root-category.html">
                  Shop Ver 1 Root Category
                </a>
              </li>
              <li>
                <a href="shop-v2-sub-category.html">Shop Ver 2 Sub Category</a>
              </li>
              <li>
                <a href="shop-v3-sub-sub-category.html">
                  Shop Ver 3 Sub Sub Category
                </a>
              </li>
              <li>
                <a href="shop-v4-filter-as-category.html">
                  Shop Ver 4 Filter as Category
                </a>
              </li>
              <li>
                <a href="shop-v5-product-not-found.html">
                  Shop Ver 5 Product Not Found
                </a>
              </li>
              <li>
                <a href="shop-v6-search-results.html">
                  Shop Ver 6 Search Results
                </a>
              </li>
              <li className="menu-title">My Account Variation</li>
              <li>
                <a href="lost-password.html">Lost Your Password ?</a>
              </li>
              <li className="menu-title">Checkout Variation</li>
              <li>
                <a href="confirmation.html">Checkout Confirmation</a>
              </li>
              <li className="menu-title">Custom Deals Page</li>
              <li>
                <a href="custom-deal-page.html">Custom Deal Page</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="custom-deal-page.html">
            Super Sale
            <span className="superscript-label-discount">-15%</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HorizontalMenu;
