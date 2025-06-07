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
                  My Account
                  <i className="fas fa-chevron-down u-s-m-l-9" />
                </a>
                <ul className="g-dropdown" style={{ width: 200 }}>
                  <li>
                    <a href="cart.html">
                      <i className="fas fa-cog u-s-m-r-9" />
                      My Cart
                    </a>
                  </li>
                  <li>
                    <a href="wishlist.html">
                      <i className="far fa-heart u-s-m-r-9" />
                      My Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="checkout.html">
                      <i className="far fa-check-circle u-s-m-r-9" />
                      Checkout
                    </a>
                  </li>
                  <li>
                    <a href="account.html">
                      <i className="fas fa-sign-in-alt u-s-m-r-9" />
                      Login / Signup
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
                    src="images/main-logo/groover-branding-1.png"
                    alt="Groover Brand Logo"
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
                  placeholder="Search everything"
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
            <div className="col-lg-3">
              <div className="v-menu v-close">
                <span className="v-title">
                  <i className="ion ion-md-menu" />
                  All Categories
                  <i className="fas fa-angle-down" />
                </span>
                <nav>
                  <div className="v-wrapper">
                    <ul className="v-list animated fadeIn">
                      <li className="js-backdrop">
                        <a href="shop-v1-root-category.html">
                          <i className="ion ion-md-shirt" />
                          Men's Clothing
                          <i className="ion ion-ios-arrow-forward" />
                        </a>
                        <button className="v-button ion ion-md-add" />
                        <div className="v-drop-right" style={{ width: 700 }}>
                          <div className="row">
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        T-Shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Hoodies
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Suits
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v4-filter-as-category.html">
                                        Black Bean T-Shirt
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v2-sub-category.html">
                                    Outwear
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Jackets
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Trench
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Parkas
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Sweaters
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v1-root-category.html">
                                    Accessories
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Watches
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Ties
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Scarves
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Belts
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v2-sub-category.html">
                                    Bottoms
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Casual Pants
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Shoes
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Jeans
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Shorts
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v2-sub-category.html">
                                    Underwear
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Boxers
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Briefs
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Robes
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Socks
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v2-sub-category.html">
                                    Sunglasses
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Pilot
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Wayfarer
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Square
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Round
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="js-backdrop">
                        <a href="shop-v1-root-category.html">
                          <i className="ion ion-ios-shirt" />
                          Women's Clothing
                          <i className="ion ion-ios-arrow-forward" />
                        </a>
                        <button className="v-button ion ion-md-add" />
                        <div className="v-drop-right" style={{ width: 700 }}>
                          <div className="row">
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Dresses
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Blouses &amp; Shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        T-shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Sweater
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v2-sub-category.html">
                                    Intimates
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Bras
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Brief Sets
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Bustiers &amp; Corsets
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Panties
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v2-sub-category.html">
                                    Wedding &amp; Events
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Wedding Dresses
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v2-sub-category.html">
                                        Evening Dresses
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Prom Dresses
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Flower Dresses
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v2-sub-category.html">
                                    Bottoms
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Skirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Shoes
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Leggings
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Jeans
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v2-sub-category.html">
                                    Outwear &amp; Jackets
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Blazers
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Basics Jackets
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Trench
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Leather &amp; Suede
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v2-sub-category.html">
                                    Accessories
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Sunglasses
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Headwear
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Baseball Caps
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Belts
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="js-backdrop">
                        <a href="shop-v1-root-category.html">
                          <i className="ion ion-md-rocket" />
                          Toys Hobbies &amp; Robots
                          <i className="ion ion-ios-arrow-forward" />
                        </a>
                        <button className="v-button ion ion-md-add" />
                        <div className="v-drop-right" style={{ width: 700 }}>
                          <div className="row">
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v2-sub-category.html">
                                    RC Toys &amp; Hobbies
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        RC Helicopter
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        RC Lego Robots
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        RC Drone
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        RC Car
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        RC Boat
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        RC Robot
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Multi Rotor Parts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        FPV System
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Radios &amp; Receiver
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Battery &amp; Charger
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-4">
                              <ul className="v-level-2">
                                <li>
                                  <a href="shop-v2-sub-category.html">
                                    Solar Energy
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Solar Powered Toy
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html">
                                        Solar Powered System
                                      </a>
                                    </li>
                                    <li className="view-more-flag">
                                      <a href="store-directory.html">
                                        View More
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Remember layer image should be place on empty space and its not overlap your list items because user could not read your list items. */}
                          <div
                            className="v-image"
                            style={{ bottom: 0, right: "-25px" }}
                          >
                            <a href="#" className="d-block">
                              <img
                                src="images/banners/mega-3.png"
                                className="img-fluid"
                                alt="Product"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="shop-v1-root-category.html">
                          <i className="ion ion-md-phone-portrait" />
                          Mobiles &amp; Tablets
                        </a>
                      </li>
                      <li>
                        <a href="shop-v1-root-category.html">
                          <i className="ion ion-md-tv" />
                          Consumer Electronics
                        </a>
                      </li>
                      <li>
                        <a href="shop-v1-root-category.html">
                          <i className="ion ion-ios-book" />
                          Books &amp; Audible
                        </a>
                      </li>
                      <li>
                        <a href="shop-v1-root-category.html">
                          <i className="ion ion-md-heart" />
                          Beauty &amp; Health
                        </a>
                      </li>
                      <li className="v-none" style={{ display: "none" }}>
                        <a href="shop-v1-root-category.html">
                          <i className="ion ion-md-easel" />
                          Furniture Home &amp; Office
                        </a>
                      </li>
                      <li>
                        <a className="v-more">
                          <i className="ion ion-md-add" />
                          <span>View More</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
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
                        <a href="terms-and-conditions.html">
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                      <li className="menu-title">Single Product Page</li>
                      <li>
                        <a href="single-product.html">
                          Single Product Fullwidth
                        </a>
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
                        <a href="shop-v2-sub-category.html">
                          Shop Ver 2 Sub Category
                        </a>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
