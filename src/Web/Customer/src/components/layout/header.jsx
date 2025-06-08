import DropdownMenu from "../menu/dropdownmenu";
import HorizontalMenu from "../menu/horizontalmenu";

const AppHeader = () => {
  return (
    <header>
      <div className="full-layer-outer-header">
        <div className="container clearfix">
          <nav>
            <ul className="primary-nav g-nav">
              <li>
                <a href="tel:+111444989">
                  <i className="fas fa-phone u-c-brand u-s-m-r-9" />
                  Telephone:+111-444-989
                </a>
              </li>
              <li>
                <a href="mailto:contact@domain.com">
                  <i className="fas fa-envelope u-c-brand u-s-m-r-9" />
                  E-mail: contact@domain.com
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="secondary-nav g-nav">
              <li>
                <a>
                  Tài khoản
                  <i className="fas fa-chevron-down u-s-m-l-9" />
                </a>
                <ul className="g-dropdown" style={{ width: 200 }}>
                  <li>
                    <a href="cart.html">
                      <i className="fas fa-cog u-s-m-r-9" />
                      Giỏ hàng
                    </a>
                  </li>
                  <li>
                    <a href="wishlist.html">
                      <i className="far fa-heart u-s-m-r-9" />
                     Sản phẩm yêu thích 
                    </a>
                  </li>
                  <li>
                    <a href="checkout.html">
                      <i className="far fa-check-circle u-s-m-r-9" />
                      Thanh toán
                    </a>
                  </li>
                  <li>
                    <a href="account.html">
                      <i className="fas fa-sign-in-alt u-s-m-r-9" />
                      Đăng nhập / Đăng ký
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  USD
                  <i className="fas fa-chevron-down u-s-m-l-9" />
                </a>
                <ul className="g-dropdown" style={{ width: 90 }}>
                  <li>
                    <a href="#" className="u-c-brand">
                      ($) USD
                    </a>
                  </li>
                  <li>
                    <a href="#">(£) GBP</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  ENG
                  <i className="fas fa-chevron-down u-s-m-l-9" />
                </a>
                <ul className="g-dropdown" style={{ width: 70 }}>
                  <li>
                    <a href="#" className="u-c-brand">
                      ENG
                    </a>
                  </li>
                  <li>
                    <a href="#">ARB</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="full-layer-mid-header">
        <div className="container">
          <div className="row clearfix align-items-center">
            <div className="col-lg-3 col-md-9 col-sm-6">
              <div className="brand-logo text-lg-center">
                <a href="home.html">
                  <img
                    src={`/images/logo.png`}
                    alt="Groover Brand Logo"
                    style={{ width: 200, height: 'auto' }}
                    className="app-brand-logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 u-d-none-lg">
              <form className="form-searchbox">
                <label className="sr-only" htmlFor="search-landscape">
                  Search
                </label>
                <input
                  id="search-landscape"
                  type="text"
                  className="text-field"
                  placeholder="Nhập tại đây để tìm kiếm"
                />
                <div className="select-box-position">
                  <div className="select-box-wrapper select-hide">
                    <label className="sr-only" htmlFor="select-category">
                      Choose category for search
                    </label>
                    <select className="select-box" id="select-category">
                      <option selected="selected" value="">
                        All
                      </option>
                      <option value="">Men's Clothing</option>
                      <option value="">Women's Clothing</option>
                      <option value="">Toys Hobbies &amp; Robots</option>
                      <option value="">Mobiles &amp; Tablets</option>
                      <option value="">Consumer Electronics</option>
                      <option value="">Books &amp; Audible</option>
                      <option value="">Beauty &amp; Health</option>
                      <option value="">Furniture Home &amp; Office</option>
                    </select>
                  </div>
                </div>
                <button
                  id="btn-search"
                  type="submit"
                  className="button button-primary fas fa-search"
                />
              </form>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <nav>
                <ul className="mid-nav g-nav">
                  <li className="u-d-none-lg">
                    <a href="home.html">
                      <i className="ion ion-md-home u-c-brand" />
                    </a>
                  </li>
                  <li className="u-d-none-lg">
                    <a href="wishlist.html">
                      <i className="far fa-heart" />
                    </a>
                  </li>
                  <li>
                    <a id="mini-cart-trigger">
                      <i className="ion ion-md-basket" />
                      <span className="item-counter">4</span>
                      <span className="item-price">$220.00</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Mid-Header /- */}
      {/* Responsive-Buttons */}
      <div className="fixed-responsive-container">
        <div className="fixed-responsive-wrapper">
          <button
            type="button"
            className="button fas fa-search"
            id="responsive-search"
          />
        </div>
        <div className="fixed-responsive-wrapper">
          <a href="wishlist.html">
            <i className="far fa-heart" />
            <span className="fixed-item-counter">4</span>
          </a>
        </div>
      </div>
      {/* Responsive-Buttons /- */}
      {/* Mini Cart */}
      <div className="mini-cart-wrapper">
        <div className="mini-cart">
          <div className="mini-cart-header">
            YOUR CART
            <button
              type="button"
              className="button ion ion-md-close"
              id="mini-cart-close"
            />
          </div>
          <ul className="mini-cart-list">
            <li className="clearfix">
              <a href="single-product.html">
                <img src="images/product/product@1x.jpg" alt="Product" />
                <span className="mini-item-name">
                  Casual Hoodie Full Cotton
                </span>
                <span className="mini-item-price">$55.00</span>
                <span className="mini-item-quantity"> x 1 </span>
              </a>
            </li>
            <li className="clearfix">
              <a href="single-product.html">
                <img src="images/product/product@1x.jpg" alt="Product" />
                <span className="mini-item-name">
                  Black Rock Dress with High Jewelery Necklace
                </span>
                <span className="mini-item-price">$55.00</span>
                <span className="mini-item-quantity"> x 1 </span>
              </a>
            </li>
            <li className="clearfix">
              <a href="single-product.html">
                <img src="images/product/product@1x.jpg" alt="Product" />
                <span className="mini-item-name">
                  Xiaomi Note 2 Black Color
                </span>
                <span className="mini-item-price">$55.00</span>
                <span className="mini-item-quantity"> x 1 </span>
              </a>
            </li>
            <li className="clearfix">
              <a href="single-product.html">
                <img src="images/product/product@1x.jpg" alt="Product" />
                <span className="mini-item-name">Dell Inspiron 15</span>
                <span className="mini-item-price">$55.00</span>
                <span className="mini-item-quantity"> x 1 </span>
              </a>
            </li>
          </ul>
          <div className="mini-shop-total clearfix">
            <span className="mini-total-heading float-left">Total:</span>
            <span className="mini-total-price float-right">$220.00</span>
          </div>
          <div className="mini-action-anchors">
            <a href="cart.html" className="cart-anchor">
              View Cart
            </a>
            <a href="checkout.html" className="checkout-anchor">
              Checkout
            </a>
          </div>
        </div>
      </div>
      {/* Mini Cart /- */}
      {/* Bottom-Header */}
      <div className="full-layer-bottom-header">
        <div className="container">
          <div className="row align-items-center">
              <DropdownMenu />
              <HorizontalMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
