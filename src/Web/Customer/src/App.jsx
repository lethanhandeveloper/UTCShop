import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      {/*[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <![endif]*/}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>
        Groover - Online Shopping for Electronics, Apparel, Computers, Books,
        DVDs &amp; more
      </title>
      {/* Standard Favicon */}
      <link href="favicon.ico" rel="shortcut icon" />
      {/* Base Google Font for Web-app */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
        rel="stylesheet"
      />
      {/* Google Fonts for Banners only */}
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:400,800"
        rel="stylesheet"
      />
      {/* Bootstrap 4 */}
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      {/* Font Awesome 5 */}
      <link rel="stylesheet" href="css/fontawesome.min.css" />
      {/* Ion-Icons 4 */}
      <link rel="stylesheet" href="css/ionicons.min.css" />
      {/* Animate CSS */}
      <link rel="stylesheet" href="css/animate.min.css" />
      {/* Owl-Carousel */}
      <link rel="stylesheet" href="css/owl.carousel.min.css" />
      {/* Jquery-Ui-Range-Slider */}
      <link rel="stylesheet" href="css/jquery-ui-range-slider.min.css" />
      {/* Utility */}
      <link rel="stylesheet" href="css/utility.css" />
      {/* Main */}
      <link rel="stylesheet" href="css/bundle.css" />
      {/* app */}
      <div id="app">
        {/* Header */}
        <header>
          {/* Top-Header */}
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
          {/* Top-Header /- */}
          {/* Mid-Header */}
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
                  <div className="v-menu">
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
                            <div
                              className="v-drop-right"
                              style={{ width: 700 }}
                            >
                              <div className="row">
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <a href="shop-v2-sub-category.html">
                                        Tops
                                      </a>
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
                            <div
                              className="v-drop-right"
                              style={{ width: 700 }}
                            >
                              <div className="row">
                                <div className="col-lg-4">
                                  <ul className="v-level-2">
                                    <li>
                                      <a href="shop-v2-sub-category.html">
                                        Tops
                                      </a>
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
                            <div
                              className="v-drop-right"
                              style={{ width: 700 }}
                            >
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
                          <li className="menu-title">
                            Home &amp; Static Pages
                          </li>
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
                            <a href="wishlist-empty.html">
                              Wishlist Ver 1 Empty
                            </a>
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
                            <a href="lost-password.html">
                              Lost Your Password ?
                            </a>
                          </li>
                          <li className="menu-title">Checkout Variation</li>
                          <li>
                            <a href="confirmation.html">
                              Checkout Confirmation
                            </a>
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
          {/* Bottom-Header /- */}
        </header>
        {/* Header /- */}
        {/* Main-Slider */}
        <div className="default-height ph-item">
          <div className="slider-main owl-carousel">
            <div className="bg-image one">
              <div className="slide-content slide-animation">
                <h1>Casual Clothing</h1>
                <h2>lifestyle / clothing / hype</h2>
              </div>
            </div>
            <div className="bg-image two">
              <div className="slide-content-2 slide-animation">
                <h2 className="slide-2-h2-a">Hiking</h2>
                <h2 className="slide-2-h2-b">Collection</h2>
                <h1>2018</h1>
              </div>
            </div>
            <div className="bg-image three">
              <div className="slide-content slide-animation">
                <h1>
                  Tech
                  <span style={{ color: "#333" }}>Deals</span>
                </h1>
                <h2 style={{ color: "#333" }}># shopping</h2>
              </div>
            </div>
          </div>
        </div>
        {/* Main-Slider /- */}
        {/* Banner-Layer */}
        <div className="banner-layer">
          <div className="container">
            <div className="image-banner">
              <a
                href="shop-v1-root-category.html"
                className="mx-auto banner-hover effect-dark-opacity"
              >
                <img
                  className="img-fluid"
                  src="images/banners/bannerlayer-1.jpg"
                  alt="Winter Season Banner"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Banner-Layer /- */}
        {/* Men-Clothing */}
        <section className="section-maker">
          <div className="container">
            <div className="sec-maker-header text-center">
              <h3 className="sec-maker-h3">MEN'S CLOTHING</h3>
              <ul className="nav tab-nav-style-1-a justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#men-latest-products"
                  >
                    Latest Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#men-best-selling-products"
                  >
                    Best Selling
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#men-top-rating-products"
                  >
                    Top Rating
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#men-featured-products"
                  >
                    Featured Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrapper-content">
              <div className="outer-area-tab">
                <div className="tab-content">
                  <div
                    className="tab-pane active show fade"
                    id="men-latest-products"
                  >
                    <div className="slider-fouc">
                      <div
                        className="products-slider owl-carousel"
                        data-item={4}
                      >
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
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
                                  <a href="shop-v3-sub-sub-category.html">
                                    Hoodies
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Casual Hoodie Full Cotton
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag new">
                            <span>NEW</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
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
                                  <a href="shop-v3-sub-sub-category.html">
                                    T-Shirts
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Mischka Plain Men T-Shirt
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
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
                                  <a href="shop-v4-filter-as-category.html">
                                    T-Shirts
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Black Bean Plain Men T-Shirt
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
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
                                  <a href="shop-v2-sub-category.html">
                                    Bottoms
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Jeans
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Regular Rock Blue Men Jean
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag new">
                            <span>NEW</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
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
                                  <a href="shop-v3-sub-sub-category.html">
                                    Suits
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Black Maire Full Men Suit
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag sale">
                            <span>SALE</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
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
                                  <a href="shop-v2-sub-category.html">
                                    Outwear
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Jackets
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Woodsmoke Rookie Parka Jacket
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
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
                                  <a href="shop-v2-sub-category.html">
                                    Accessories
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Ties
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Blue Zodiac Boxes Reg Tie
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
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
                                  <a href="shop-v2-sub-category.html">
                                    Bottoms
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Shoes
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Zambezi Carved Leather Business Casual Shoes
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag discount">
                            <span>-15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="men-best-selling-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="men-top-rating-products">
                    <div className="slider-fouc">
                      <div
                        className="products-slider owl-carousel"
                        data-item={4}
                      >
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
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
                                  <a href="shop-v3-sub-sub-category.html">
                                    Suits
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Black Maire Full Men Suit
                                </a>
                              </h6>
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
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag sale">
                            <span>SALE</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
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
                                  <a href="shop-v2-sub-category.html">
                                    Outwear
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Jackets
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Woodsmoke Rookie Parka Jacket
                                </a>
                              </h6>
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
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
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
                                  <a href="shop-v2-sub-category.html">
                                    Accessories
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Ties
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Blue Zodiac Boxes Reg Tie
                                </a>
                              </h6>
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
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
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
                                  <a href="shop-v2-sub-category.html">
                                    Bottoms
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Shoes
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Zambezi Carved Leather Business Casual Shoes
                                </a>
                              </h6>
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
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag discount">
                            <span>-15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="men-featured-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Men-Clothing-Timing-Section */}
        <section className="section-maker">
          <div className="container">
            <div className="sec-maker-header text-center">
              <span className="sec-maker-span-text">Men's Clothing</span>
              <h3 className="sec-maker-h3 u-s-m-b-22">Hot Deals</h3>
              <span className="sec-maker-span-text">Ends in</span>
              {/* Timing-Box */}
              <div className="section-timing-wrapper dynamic">
                <span
                  className="fictitious-seconds"
                  style={{ display: "none" }}
                >
                  18000
                </span>
                <div className="section-box-wrapper box-days">
                  <div className="section-box">
                    <span className="section-key">120</span>
                    <span className="section-value">Days</span>
                  </div>
                </div>
                <div className="section-box-wrapper box-hrs">
                  <div className="section-box">
                    <span className="section-key">54</span>
                    <span className="section-value">HRS</span>
                  </div>
                </div>
                <div className="section-box-wrapper box-mins">
                  <div className="section-box">
                    <span className="section-key">3</span>
                    <span className="section-value">MINS</span>
                  </div>
                </div>
                <div className="section-box-wrapper box-secs">
                  <div className="section-box">
                    <span className="section-key">32</span>
                    <span className="section-value">SEC</span>
                  </div>
                </div>
              </div>
              {/* Timing-Box /- */}
            </div>
            {/* Carousel */}
            <div className="slider-fouc">
              <div className="products-slider owl-carousel" data-item={4}>
                <div className="item">
                  <div className="image-container">
                    <a
                      className="item-img-wrapper-link"
                      href="single-product.html"
                    >
                      <img
                        className="img-fluid"
                        src="images/product/product@3x.jpg"
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
                      <a className="item-addCart" href="javascript:void(0)">
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
                          <a href="shop-v2-sub-category.html">Outwear</a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">Jackets</a>
                        </li>
                      </ul>
                      <h6 className="item-title">
                        <a href="single-product.html">
                          Maire Battlefield Jeep Men's Jacket
                        </a>
                      </h6>
                      <div className="item-stars">
                        <div
                          className="star"
                          title="0 out of 5 - based on 0 Reviews"
                        >
                          <span style={{ width: 0 }} />
                        </div>
                        <span>(0)</span>
                      </div>
                    </div>
                    <div className="price-template">
                      <div className="item-new-price">$55.00</div>
                      <div className="item-old-price">$60.00</div>
                    </div>
                  </div>
                  <div className="tag hot">
                    <span>HOT</span>
                  </div>
                </div>
                <div className="item">
                  <div className="image-container">
                    <a
                      className="item-img-wrapper-link"
                      href="single-product.html"
                    >
                      <img
                        className="img-fluid"
                        src="images/product/product@3x.jpg"
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
                      <a className="item-addCart" href="javascript:void(0)">
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
                          <a href="shop-v2-sub-category.html">Outwear</a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">Jackets</a>
                        </li>
                      </ul>
                      <h6 className="item-title">
                        <a href="single-product.html">
                          Fern Green Men's Jacket
                        </a>
                      </h6>
                      <div className="item-stars">
                        <div
                          className="star"
                          title="0 out of 5 - based on 0 Reviews"
                        >
                          <span style={{ width: 0 }} />
                        </div>
                        <span>(0)</span>
                      </div>
                    </div>
                    <div className="price-template">
                      <div className="item-new-price">$55.00</div>
                      <div className="item-old-price">$60.00</div>
                    </div>
                  </div>
                  <div className="tag hot">
                    <span>HOT</span>
                  </div>
                </div>
                <div className="item">
                  <div className="image-container">
                    <a
                      className="item-img-wrapper-link"
                      href="single-product.html"
                    >
                      <img
                        className="img-fluid"
                        src="images/product/product@3x.jpg"
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
                      <a className="item-addCart" href="javascript:void(0)">
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
                          <a href="shop-v2-sub-category.html">Sunglasses</a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">Round</a>
                        </li>
                      </ul>
                      <h6 className="item-title">
                        <a href="single-product.html">
                          Brown Dark Tan Round Double Bridge Sunglasses
                        </a>
                      </h6>
                      <div className="item-stars">
                        <div
                          className="star"
                          title="0 out of 5 - based on 0 Reviews"
                        >
                          <span style={{ width: 0 }} />
                        </div>
                        <span>(0)</span>
                      </div>
                    </div>
                    <div className="price-template">
                      <div className="item-new-price">$55.00</div>
                      <div className="item-old-price">$60.00</div>
                    </div>
                  </div>
                  <div className="tag hot">
                    <span>HOT</span>
                  </div>
                </div>
                <div className="item">
                  <div className="image-container">
                    <a
                      className="item-img-wrapper-link"
                      href="single-product.html"
                    >
                      <img
                        className="img-fluid"
                        src="images/product/product@3x.jpg"
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
                      <a className="item-addCart" href="javascript:void(0)">
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
                          <a href="shop-v2-sub-category.html">Sunglasses</a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">Round</a>
                        </li>
                      </ul>
                      <h6 className="item-title">
                        <a href="single-product.html">
                          Black Round Double Bridge Sunglasses
                        </a>
                      </h6>
                      <div className="item-stars">
                        <div
                          className="star"
                          title="0 out of 5 - based on 0 Reviews"
                        >
                          <span style={{ width: 0 }} />
                        </div>
                        <span>(0)</span>
                      </div>
                    </div>
                    <div className="price-template">
                      <div className="item-new-price">$55.00</div>
                      <div className="item-old-price">$60.00</div>
                    </div>
                  </div>
                  <div className="tag hot">
                    <span>HOT</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel /- */}
          </div>
        </section>
        {/* Men-Clothing-Timing-Section /- */}
        {/* Banner-Image & View-more */}
        <div className="banner-image-view-more">
          <div className="container">
            <div className="image-banner u-s-m-y-40">
              <a
                href="shop-v1-root-category.html"
                className="mx-auto banner-hover effect-dark-opacity"
              >
                <img
                  className="img-fluid"
                  src="images/banners/ban-men.jpg"
                  alt="Banner Image"
                />
              </a>
            </div>
            <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
              <a className="redirect-link" href="store-directory.html">
                <span>View more on this category</span>
              </a>
            </div>
          </div>
        </div>
        {/* Banner-Image & View-more /- */}
        {/* Men-Clothing /- */}
        {/* Women-Clothing */}
        <section className="section-maker">
          <div className="container">
            <div className="sec-maker-header text-center">
              <h3 className="sec-maker-h3">WOMEN'S CLOTHING</h3>
              <ul className="nav tab-nav-style-1-a justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#women-latest-products"
                  >
                    Latest Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#women-best-selling-products"
                  >
                    Best Selling
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#women-top-rating-products"
                  >
                    Top Rating
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#women-featured-products"
                  >
                    Featured Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrapper-content">
              <div className="outer-area-tab">
                <div className="tab-content">
                  <div
                    className="tab-pane active show fade"
                    id="women-latest-products"
                  >
                    <div className="slider-fouc">
                      <div
                        className="products-slider owl-carousel"
                        data-item={4}
                      >
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  White Solitude Dress with mid heel &amp; Bag
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag new">
                            <span>NEW</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Black Rock Dress with High Jewelery Necklace
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Haiti Full Dress with Boots &amp; Jacket
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Black &amp; White Wrap Dress with High
                                  Jewelery Necklace
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag new">
                            <span>NEW</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Grey Nickel Special Occasion Dress
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag sale">
                            <span>SALE</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Red Carmine Winter Special Occasion Dress
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    Bottoms
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Shoes
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Wax Flower with Corn Silk Heel
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    Intimates
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Bras
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Red Wild Bra</a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag discount">
                            <span>-15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="women-best-selling-products"
                  >
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="women-top-rating-products">
                    <div className="slider-fouc">
                      <div
                        className="products-slider owl-carousel"
                        data-item={4}
                      >
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Grey Nickel Special Occasion Dress
                                </a>
                              </h6>
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
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag sale">
                            <span>SALE</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Red Carmine Winter Special Occasion Dress
                                </a>
                              </h6>
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
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    Bottoms
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Shoes
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Wax Flower with Corn Silk Heel
                                </a>
                              </h6>
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
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    Intimates
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Bras
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Red Wild Bra</a>
                              </h6>
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
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag discount">
                            <span>-15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="women-featured-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                </div>
              </div>
            </div>
            <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
              <a className="redirect-link" href="store-directory.html">
                <span>View more on this category</span>
              </a>
            </div>
          </div>
        </section>
        {/* Women-Clothing /- */}
        {/* Toys-Hobbies-&-Robots */}
        <section className="section-maker">
          <div className="container">
            <div className="sec-maker-header text-center">
              <h3 className="sec-maker-h3">Toys Hobbies &amp; Robots</h3>
              <ul className="nav tab-nav-style-1-a justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#toys-latest-products"
                  >
                    Latest Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#toys-best-selling-products"
                  >
                    Best Selling
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#toys-top-rating-products"
                  >
                    Top Rating
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#toys-featured-products"
                  >
                    Featured Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrapper-content">
              <div className="outer-area-tab">
                <div className="tab-content">
                  <div
                    className="tab-pane active show fade"
                    id="toys-latest-products"
                  >
                    <div className="slider-fouc">
                      <div
                        className="products-slider owl-carousel"
                        data-item={4}
                      >
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Toys Drones
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    RC Toys &amp; Hobbies
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    RC Helicopte
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  RC Helicopter 6-Cell
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag new">
                            <span>NEW</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Toys Drones
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    RC Toys &amp; Hobbies
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    RC Drone
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  DJI Phantom with 1080p Camera
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Toys Drones
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    RC Toys &amp; Hobbies
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    RC Drone
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  DJI Inspire with 1080p Camera
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Toys Drones
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    RC Toys &amp; Hobbies
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    RC Drone
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  DJI Phantom with Battery Lights
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag new">
                            <span>NEW</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Toys Drones
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    RC Toys &amp; Hobbies
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    RC Drone
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">DJI Mavic Air</a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag sale">
                            <span>SALE</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Toys Drones
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    RC Toys &amp; Hobbies
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    RC Drone
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  U45 Raven RC Quadcopter
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Toys Drones
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    RC Toys &amp; Hobbies
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    RC Drone
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  DJI Inspire 1 with 1080p Camera
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Toys Drones
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    RC Toys &amp; Hobbies
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    RC Drone
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  DJI Inspire 1 with 360° Camera
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag discount">
                            <span>-15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="toys-best-selling-products"
                  >
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="toys-top-rating-products">
                    <div className="slider-fouc">
                      <div
                        className="products-slider owl-carousel"
                        data-item={4}
                      >
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Toys Drones
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    RC Toys &amp; Hobbies
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    RC Drone
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">DJI Mavic Air</a>
                              </h6>
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
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag sale">
                            <span>SALE</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Toys Drones
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    RC Toys &amp; Hobbies
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    RC Drone
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  U45 Raven RC Quadcopter
                                </a>
                              </h6>
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
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Toys Drones
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    RC Toys &amp; Hobbies
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    RC Drone
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  DJI Inspire 1 with 1080p Camera
                                </a>
                              </h6>
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
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Toys Drones
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    RC Toys &amp; Hobbies
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    RC Drone
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  DJI Inspire 1 with 360° Camera
                                </a>
                              </h6>
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
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag discount">
                            <span>-15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="toys-featured-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                </div>
              </div>
            </div>
            <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
              <a className="redirect-link" href="store-directory.html">
                <span>View more on this category</span>
              </a>
            </div>
          </div>
        </section>
        {/* Toys-Hobbies-&-Robots /- */}
        {/* Mobiles-&-Tablets */}
        <section className="section-maker">
          <div className="container">
            <div className="sec-maker-header text-center">
              <h3 className="sec-maker-h3">Mobiles &amp; Tablets</h3>
              <ul className="nav tab-nav-style-1-a justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#mobiles-latest-products"
                  >
                    Latest Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#mobiles-best-selling-products"
                  >
                    Best Selling
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#mobiles-top-rating-products"
                  >
                    Top Rating
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#mobiles-featured-products"
                  >
                    Featured Products
                  </a>
                </li>
              </ul>
              <span className="sec-maker-span-text u-s-m-b-8 d-block">
                Select products in specific category
              </span>
            </div>
            <div className="wrapper-content">
              <div className="outer-area-tab">
                <div className="tab-content">
                  <div
                    className="tab-pane active show fade"
                    id="mobiles-latest-products"
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-1 col-md-12">
                        <ul className="nav tab-nav-style-2-a">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              data-toggle="tab"
                              href="#smart-phones"
                              title="Smart Phones"
                            >
                              <i className="ion ion-ios-phone-portrait" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#tablets"
                              title="Tablets"
                            >
                              <i className="ion ion-md-phone-landscape" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#smart-watches"
                              title="Smart Watches"
                            >
                              <i className="ion ion-md-watch" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#device-accessories"
                              title="Device Accessories"
                            >
                              <i className="ion ion-md-settings" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#power-banks"
                              title="Power Banks"
                            >
                              <i className="ion ion-md-battery-charging" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-11 col-md-12">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="smart-phones"
                          >
                            <div className="slider-fouc">
                              <div
                                className="specific-category-slider owl-carousel"
                                data-item={3}
                              >
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartphones
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Xiaomi Note 2 Black Color
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag new">
                                    <span>NEW</span>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartphones
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Iphone X Silver Color
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartphones
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Samsung S7 Green Metallic Color
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag sale">
                                    <span>SALE</span>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartphones
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Sony Xperia 3 Black Color
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag discount">
                                    <span>-15%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="tablets">
                            {/* Product Not Found */}
                            <div className="product-not-found">
                              <div className="not-found">
                                <h2>SORRY!</h2>
                                <h6>
                                  There is not any product in specific
                                  catalogue.
                                </h6>
                              </div>
                            </div>
                            {/* Product Not Found /- */}
                          </div>
                          <div className="tab-pane fade" id="smart-watches">
                            <div className="slider-fouc">
                              <div
                                className="specific-category-slider owl-carousel"
                                data-item={3}
                              >
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartwatches
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Outatime Mix Smartwatch
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag new">
                                    <span>NEW</span>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartwatches
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Mombo Full Wrist Smartwatch
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartwatches
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Apollo Sport Think Smartwatch
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag sale">
                                    <span>SALE</span>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartwatches
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Rhythm Pulse Smartwatch
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag discount">
                                    <span>-15%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="device-accessories"
                          >
                            {/* Product Not Found */}
                            <div className="product-not-found">
                              <div className="not-found">
                                <h2>SORRY!</h2>
                                <h6>
                                  There is not any product in specific
                                  catalogue.
                                </h6>
                              </div>
                            </div>
                            {/* Product Not Found /- */}
                          </div>
                          <div className="tab-pane fade" id="power-banks">
                            {/* Product Not Found */}
                            <div className="product-not-found">
                              <div className="not-found">
                                <h2>SORRY!</h2>
                                <h6>
                                  There is not any product in specific
                                  catalogue.
                                </h6>
                              </div>
                            </div>
                            {/* Product Not Found /- */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="mobiles-best-selling-products"
                  >
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="mobiles-top-rating-products"
                  >
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="mobiles-featured-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                </div>
              </div>
            </div>
            <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
              <a className="redirect-link" href="store-directory.html">
                <span>View more on this category</span>
              </a>
            </div>
          </div>
        </section>
        {/* Mobiles-&-Tablets /- */}
        {/* Consumer-Electronics */}
        <section className="section-maker">
          <div className="container">
            <div className="sec-maker-header text-center">
              <h3 className="sec-maker-h3">Consumer Electronics</h3>
              <ul className="nav tab-nav-style-1-a justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#consumer-latest-products"
                  >
                    Latest Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#consumer-best-selling-products"
                  >
                    Best Selling
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#consumer-top-rating-products"
                  >
                    Top Rating
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#consumer-featured-products"
                  >
                    Featured Products
                  </a>
                </li>
              </ul>
              <span className="sec-maker-span-text u-s-m-b-8 d-block">
                Select products in specific category
              </span>
            </div>
            <div className="wrapper-content">
              <div className="outer-area-tab">
                <div className="tab-content">
                  <div
                    className="tab-pane active show fade"
                    id="consumer-latest-products"
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-1 col-md-12">
                        <ul className="nav tab-nav-style-2-a">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              data-toggle="tab"
                              href="#laptops"
                              title="Laptops"
                            >
                              <i className="ion ion-md-laptop" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#pc-and-accessories"
                              title="PC & Accessories"
                            >
                              <i className="ion ion-ios-settings" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#tv"
                              title="TV's"
                            >
                              <i className="ion ion-md-tv" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#cam-corder"
                              title="Camera & Camcorders"
                            >
                              <i className="ion ion-md-camera" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#audio-amplifiers"
                              title="Audio & Amplifiers"
                            >
                              <i className="ion ion-md-microphone" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-11 col-md-12">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="laptops"
                          >
                            <div className="slider-fouc">
                              <div
                                className="specific-category-slider owl-carousel"
                                data-item={3}
                              >
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Consumer Electronics
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Laptops
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          HP Pavilion 15 Notebook
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag new">
                                    <span>NEW</span>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Consumer Electronics
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Laptops
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Apple Macbook Pro 2017
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Consumer Electronics
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Laptops
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Dell Inspiron 15
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag sale">
                                    <span>SALE</span>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Consumer Electronics
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Laptops
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Dell Inspiron 1525
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag discount">
                                    <span>-15%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pc-and-accessories"
                          >
                            {/* Product Not Found */}
                            <div className="product-not-found">
                              <div className="not-found">
                                <h2>SORRY!</h2>
                                <h6>
                                  There is not any product in specific
                                  catalogue.
                                </h6>
                              </div>
                            </div>
                            {/* Product Not Found /- */}
                          </div>
                          <div className="tab-pane fade" id="tv">
                            <div className="slider-fouc">
                              <div
                                className="specific-category-slider owl-carousel"
                                data-item={3}
                              >
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Consumer Electronics
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            TV/LCD/LED
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Hisense 4k LED TV
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag new">
                                    <span>NEW</span>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Consumer Electronics
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            TV/LCD/LED
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          TCL 4k LED TV
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Consumer Electronics
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            TV/LCD/LED
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Sony 4k LED TV
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag sale">
                                    <span>SALE</span>
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="images/product/product@3x.jpg"
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
                                      <a
                                        className="item-mail"
                                        href="javascript:void(0)"
                                      >
                                        Mail
                                      </a>
                                      <a
                                        className="item-addwishlist"
                                        href="javascript:void(0)"
                                      >
                                        Add to Wishlist
                                      </a>
                                      <a
                                        className="item-addCart"
                                        href="javascript:void(0)"
                                      >
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Consumer Electronics
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            TV/LCD/LED
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          China Petrei 4k LED TV
                                        </a>
                                      </h6>
                                      <div className="item-stars">
                                        <div
                                          className="star"
                                          title="0 out of 5 - based on 0 Reviews"
                                        >
                                          <span style={{ width: 0 }} />
                                        </div>
                                        <span>(0)</span>
                                      </div>
                                    </div>
                                    <div className="price-template">
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag discount">
                                    <span>-15%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="cam-corder">
                            {/* Product Not Found */}
                            <div className="product-not-found">
                              <div className="not-found">
                                <h2>SORRY!</h2>
                                <h6>
                                  There is not any product in specific
                                  catalogue.
                                </h6>
                              </div>
                            </div>
                            {/* Product Not Found /- */}
                          </div>
                          <div className="tab-pane fade" id="audio-amplifiers">
                            {/* Product Not Found */}
                            <div className="product-not-found">
                              <div className="not-found">
                                <h2>SORRY!</h2>
                                <h6>
                                  There is not any product in specific
                                  catalogue.
                                </h6>
                              </div>
                            </div>
                            {/* Product Not Found /- */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="consumer-best-selling-products"
                  >
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="consumer-top-rating-products"
                  >
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="consumer-featured-products"
                  >
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                </div>
              </div>
            </div>
            <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
              <a className="redirect-link" href="store-directory.html">
                <span>View more on this category</span>
              </a>
            </div>
          </div>
        </section>
        {/* Consumer-Electronics /- */}
        {/* Books-&-Audible */}
        <section className="section-maker">
          <div className="container">
            <div className="sec-maker-header text-center">
              <h3 className="sec-maker-h3">Books &amp; Audible</h3>
              <ul className="nav tab-nav-style-1-a justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#books-latest-products"
                  >
                    Latest Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#books-best-selling-products"
                  >
                    Best Selling
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#books-top-rating-products"
                  >
                    Top Rating
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#books-featured-products"
                  >
                    Featured Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrapper-content">
              <div className="outer-area-tab">
                <div className="tab-content">
                  <div
                    className="tab-pane active show fade"
                    id="books-latest-products"
                  >
                    <div className="slider-fouc">
                      <div
                        className="products-slider owl-carousel"
                        data-item={4}
                      >
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li>
                                  <a href="shop-v1-root-category.html">Books</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  JavaScript The Definitive Guide by David
                                  Flanagan
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag new">
                            <span>NEW</span>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li>
                                  <a href="shop-v1-root-category.html">Books</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Eloquent JavaScript by Marijn Haverbeke
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li>
                                  <a href="shop-v1-root-category.html">Books</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Secret of the JavaScript Ninja by Bear
                                  Bibeault &amp; John Resig
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="images/product/product@3x.jpg"
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
                              <a
                                className="item-mail"
                                href="javascript:void(0)"
                              >
                                Mail
                              </a>
                              <a
                                className="item-addwishlist"
                                href="javascript:void(0)"
                              >
                                Add to Wishlist
                              </a>
                              <a
                                className="item-addCart"
                                href="javascript:void(0)"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li>
                                  <a href="shop-v1-root-category.html">Books</a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  JavaScript The Good Parts by Douglas Crockford
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="0 out of 5 - based on 0 Reviews"
                                >
                                  <span style={{ width: 0 }} />
                                </div>
                                <span>(0)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag new">
                            <span>NEW</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="books-best-selling-products"
                  >
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="books-top-rating-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="books-featured-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                </div>
              </div>
            </div>
            <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
              <a className="redirect-link" href="store-directory.html">
                <span>View more on this category</span>
              </a>
            </div>
          </div>
        </section>
        {/* Books-&-Audible /- */}
        {/* Continue-Link */}
        <div className="continue-link-wrapper u-s-p-b-80">
          <a
            className="continue-link"
            href="store-directory.html"
            title="View all products on site"
          >
            <i className="ion ion-ios-more" />
          </a>
        </div>
        {/* Continue-Link /- */}
        {/* Brand-Slider */}
        <div className="brand-slider u-s-p-b-80">
          <div className="container">
            <div className="brand-slider-content owl-carousel" data-item={5}>
              <div className="brand-pic">
                <a href="#">
                  <img src="images/brand-logos/b1.png" alt="Brand Logo 1" />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img src="images/brand-logos/b1.png" alt="Brand Logo 2" />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img src="images/brand-logos/b1.png" alt="Brand Logo 3" />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img src="images/brand-logos/b1.png" alt="Brand Logo 5" />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img src="images/brand-logos/b1.png" alt="Brand Logo 6" />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img src="images/brand-logos/b1.png" alt="Brand Logo 7" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Brand-Slider /- */}
        {/* Site-Priorities */}
        <section className="app-priority">
          <div className="container">
            <div className="priority-wrapper u-s-p-b-80">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-item-wrapper">
                    <div className="single-item-icon">
                      <i className="ion ion-md-star" />
                    </div>
                    <h2>Great Value</h2>
                    <p>
                      We offer competitive prices on our 100 million plus
                      product range
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-item-wrapper">
                    <div className="single-item-icon">
                      <i className="ion ion-md-cash" />
                    </div>
                    <h2>Shop with Confidence</h2>
                    <p>
                      Our Protection covers your purchase from click to delivery
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-item-wrapper">
                    <div className="single-item-icon">
                      <i className="ion ion-ios-card" />
                    </div>
                    <h2>Safe Payment</h2>
                    <p>
                      Pay with the world’s most popular and secure payment
                      methods
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-item-wrapper">
                    <div className="single-item-icon">
                      <i className="ion ion-md-contacts" />
                    </div>
                    <h2>24/7 Help Center</h2>
                    <p>
                      Round-the-clock assistance for a smooth shopping
                      experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Site-Priorities /- */}
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            {/* Outer-Footer */}
            <div className="outer-footer-wrapper u-s-p-y-80">
              <h6>For special offers and other discount information</h6>
              <h1>Subscribe to our Newsletter</h1>
              <p>
                Subscribe to the mailing list to receive updates on promotions,
                new arrivals, discount and coupons.
              </p>
              <form className="newsletter-form">
                <label className="sr-only" htmlFor="newsletter-field">
                  Enter your Email
                </label>
                <input
                  type="text"
                  id="newsletter-field"
                  placeholder="Your Email Address"
                />
                <button type="submit" className="button">
                  SUBMIT
                </button>
              </form>
            </div>
            {/* Outer-Footer /- */}
            {/* Mid-Footer */}
            <div className="mid-footer-wrapper u-s-p-b-80">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="footer-list">
                    <h6>CUSTOMER SERVICE</h6>
                    <ul>
                      <li>
                        <a href="faq.html">FAQs</a>
                      </li>
                      <li>
                        <a href="track-order.html">Track Order</a>
                      </li>
                      <li>
                        <a href="terms-and-conditions.html">
                          Terms &amp; Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="footer-list">
                    <h6>COMPANY</h6>
                    <ul>
                      <li>
                        <a href="home.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="footer-list">
                    <h6>INFORMATION</h6>
                    <ul>
                      <li>
                        <a href="store-directory.html">Categories Directory</a>
                      </li>
                      <li>
                        <a href="wishlist.html">My Wishlist</a>
                      </li>
                      <li>
                        <a href="cart.html">My Cart</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="footer-list">
                    <h6>Address</h6>
                    <ul>
                      <li>
                        <i className="fas fa-location-arrow u-s-m-r-9" />
                        <span>819 Sugar Camp Road, West Concord, MN 55985</span>
                      </li>
                      <li>
                        <a href="tel:+923086561801">
                          <i className="fas fa-phone u-s-m-r-9" />
                          <span>+111-444-989</span>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:contact@domain.com">
                          <i className="fas fa-envelope u-s-m-r-9" />
                          <span>contact@domain.com</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Mid-Footer /- */}
            {/* Bottom-Footer */}
            <div className="bottom-footer-wrapper">
              <div className="social-media-wrapper">
                <ul className="social-media-list">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-rss" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
              <p className="copyright-text">
                Copyright © 2018
                <a href="home.html">Groover</a> All Right Reserved
              </p>
            </div>
          </div>
          {/* Bottom-Footer /- */}
        </footer>
        {/* Footer /- */}
        {/* Dummy Selectbox */}
        <div className="select-dummy-wrapper">
          <select id="compute-select">
            <option id="compute-option">All</option>
          </select>
        </div>
        {/* Dummy Selectbox /- */}
        {/* Responsive-Search */}
        <div className="responsive-search-wrapper">
          <button
            type="button"
            className="button ion ion-md-close"
            id="responsive-search-close-button"
          />
          <div className="responsive-search-container">
            <div className="container">
              <p>Start typing and press Enter to search</p>
              <form className="responsive-search-form">
                <label className="sr-only" htmlFor="search-text">
                  Search
                </label>
                <input
                  id="search-text"
                  type="text"
                  className="responsive-search-field"
                  placeholder="PLEASE SEARCH"
                />
                <i className="fas fa-search" />
              </form>
            </div>
          </div>
        </div>
        {/* Responsive-Search /- */}
        {/* Newsletter-Modal */}
        <div id="newsletter-modal" className="modal fade">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <button
                type="button"
                className="button dismiss-button ion ion-ios-close"
                data-dismiss="modal"
              />
              <div className="modal-body u-s-p-x-0">
                <div className="row align-items-center u-s-m-x-0">
                  <div className="col-lg-6 col-md-6 col-sm-12 u-s-p-x-0">
                    <div className="newsletter-image">
                      <a
                        href="shop-v1-root-category.html"
                        className="banner-hover effect-dark-opacity"
                      >
                        <img
                          className="img-fluid"
                          src="images/banners/newsletter-1.jpg"
                          alt="Newsletter Image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="newsletter-wrapper">
                      <h1>
                        New to
                        <span>Groover</span> ?
                        <br />
                        Subscribe Newsletter
                      </h1>
                      <h5>Get latest product update...</h5>
                      <form>
                        <div className="u-s-m-b-35">
                          <input
                            type="text"
                            className="newsletter-textfield"
                            placeholder="Enter Your Email"
                          />
                        </div>
                        <div className="u-s-m-b-35">
                          <button className="button button-primary d-block w-100">
                            Subscribe
                          </button>
                        </div>
                      </form>
                      <h6>
                        Be the first for getting special deals and offers, Send
                        directly to your inbox.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter-Modal /- */}
        {/* Quick-view-Modal */}
        <div id="quick-view" className="modal fade">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <button
                type="button"
                className="button dismiss-button ion ion-ios-close"
                data-dismiss="modal"
              />
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    {/* Product-zoom-area */}
                    <div className="zoom-area">
                      <img
                        id="zoom-pro-quick-view"
                        className="img-fluid"
                        src="images/product/product@4x.jpg"
                        data-zoom-image="images/product/product@4x.jpg"
                        alt="Zoom Image"
                      />
                      <div id="gallery-quick-view" className="u-s-m-t-10">
                        <a
                          className="active"
                          data-image="images/product/product@4x.jpg"
                          data-zoom-image="images/product/product@4x.jpg"
                        >
                          <img
                            src="images/product/product@2x.jpg"
                            alt="Product"
                          />
                        </a>
                        <a
                          data-image="images/product/product@4x.jpg"
                          data-zoom-image="images/product/product@4x.jpg"
                        >
                          <img
                            src="images/product/product@2x.jpg"
                            alt="Product"
                          />
                        </a>
                        <a
                          data-image="images/product/product@4x.jpg"
                          data-zoom-image="images/product/product@4x.jpg"
                        >
                          <img
                            src="images/product/product@2x.jpg"
                            alt="Product"
                          />
                        </a>
                        <a
                          data-image="images/product/product@4x.jpg"
                          data-zoom-image="images/product/product@4x.jpg"
                        >
                          <img
                            src="images/product/product@2x.jpg"
                            alt="Product"
                          />
                        </a>
                        <a
                          data-image="images/product/product@4x.jpg"
                          data-zoom-image="images/product/product@4x.jpg"
                        >
                          <img
                            src="images/product/product@2x.jpg"
                            alt="Product"
                          />
                        </a>
                        <a
                          data-image="images/product/product@4x.jpg"
                          data-zoom-image="images/product/product@4x.jpg"
                        >
                          <img
                            src="images/product/product@2x.jpg"
                            alt="Product"
                          />
                        </a>
                      </div>
                    </div>
                    {/* Product-zoom-area /- */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    {/* Product-details */}
                    <div className="all-information-wrapper">
                      <div className="section-1-title-breadcrumb-rating">
                        <div className="product-title">
                          <h1>
                            <a href="single-product.html">
                              Casual Hoodie Full Cotton
                            </a>
                          </h1>
                        </div>
                        <ul className="bread-crumb">
                          <li className="has-separator">
                            <a href="home.html">Home</a>
                          </li>
                          <li className="has-separator">
                            <a href="shop-v1-root-category.html">
                              Men's Clothing
                            </a>
                          </li>
                          <li className="has-separator">
                            <a href="shop-v2-sub-category.html">Tops</a>
                          </li>
                          <li className="is-marked">
                            <a href="shop-v3-sub-sub-category.html">Hoodies</a>
                          </li>
                        </ul>
                        <div className="product-rating">
                          <div
                            className="star"
                            title="4.5 out of 5 - based on 23 Reviews"
                          >
                            <span style={{ width: 67 }} />
                          </div>
                          <span>(23)</span>
                        </div>
                      </div>
                      <div className="section-2-short-description u-s-p-y-14">
                        <h6 className="information-heading u-s-m-b-8">
                          Description:
                        </h6>
                        <p>
                          This hoodie is full cotton. It includes a muff sewn
                          onto the lower front, and (usually) a drawstring to
                          adjust the hood opening. Throughout the U.S., it is
                          common for middle-school, high-school, and college
                          students to wear this sweatshirts—with or without
                          hoods—that display their respective school names or
                          mascots across the chest, either as part of a uniform
                          or personal preference.
                        </p>
                      </div>
                      <div className="section-3-price-original-discount u-s-p-y-14">
                        <div className="price">
                          <h4>$55.00</h4>
                        </div>
                        <div className="original-price">
                          <span>Original Price:</span>
                          <span>$60.00</span>
                        </div>
                        <div className="discount-price">
                          <span>Discount:</span>
                          <span>8%</span>
                        </div>
                        <div className="total-save">
                          <span>Save:</span>
                          <span>$5</span>
                        </div>
                      </div>
                      <div className="section-4-sku-information u-s-p-y-14">
                        <h6 className="information-heading u-s-m-b-8">
                          Sku Information:
                        </h6>
                        <div className="availability">
                          <span>Availability:</span>
                          <span>In Stock</span>
                        </div>
                        <div className="left">
                          <span>Only:</span>
                          <span>50 left</span>
                        </div>
                      </div>
                      <div className="section-5-product-variants u-s-p-y-14">
                        <h6 className="information-heading u-s-m-b-8">
                          Product Variants:
                        </h6>
                        <div className="color u-s-m-b-11">
                          <span>Available Color:</span>
                          <div className="color-variant select-box-wrapper">
                            <select className="select-box product-color">
                              <option value={1}>Heather Grey</option>
                              <option value={3}>Black</option>
                              <option value={5}>White</option>
                            </select>
                          </div>
                        </div>
                        <div className="sizes u-s-m-b-11">
                          <span>Available Size:</span>
                          <div className="size-variant select-box-wrapper">
                            <select className="select-box product-size">
                              <option value="">Male 2XL</option>
                              <option value="">Male 3XL</option>
                              <option value="">Kids 4</option>
                              <option value="">Kids 6</option>
                              <option value="">Kids 8</option>
                              <option value="">Kids 10</option>
                              <option value="">Kids 12</option>
                              <option value="">Female Small</option>
                              <option value="">Male Small</option>
                              <option value="">Female Medium</option>
                              <option value="">Male Medium</option>
                              <option value="">Female Large</option>
                              <option value="">Male Large</option>
                              <option value="">Female XL</option>
                              <option value="">Male XL</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="section-6-social-media-quantity-actions u-s-p-y-14">
                        <form action="#" className="post-form">
                          <div className="quick-social-media-wrapper u-s-m-b-22">
                            <span>Share:</span>
                            <ul className="social-media-list">
                              <li>
                                <a href="#">
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-google-plus-g" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-rss" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-pinterest" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="quantity-wrapper u-s-m-b-22">
                            <span>Quantity:</span>
                            <div className="quantity">
                              <input
                                type="text"
                                className="quantity-text-field"
                                defaultValue={1}
                              />
                              <a className="plus-a" data-max={1000}>
                                +
                              </a>
                              <a className="minus-a" data-min={1}>
                                -
                              </a>
                            </div>
                          </div>
                          <div>
                            <button
                              className="button button-outline-secondary"
                              type="submit"
                            >
                              Add to cart
                            </button>
                            <button className="button button-outline-secondary far fa-heart u-s-m-l-6" />
                            <button className="button button-outline-secondary far fa-envelope u-s-m-l-6" />
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* Product-details /- */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quick-view-Modal /- */}
      </div>
      {/* app /- */}
      {/*[if lte IE 9]>
<div class="app-issue">
    <div class="vertical-center">
  <div class="text-center">
      <h1>You are using an outdated browser.</h1>
      <span>This web app is not compatible with following browser. Please upgrade your browser to improve your security and experience.</span>
  </div>
    </div>
</div>
<style> #app {
    display: none;
} </style>
<![endif]*/}
      {/* NoScript */}
      <noscript>
        &lt;div class="app-issue"&gt; &lt;div class="vertical-center"&gt;
        &lt;div class="text-center"&gt; &lt;h1&gt;JavaScript is disabled in your
        browser.&lt;/h1&gt; &lt;span&gt;Please enable JavaScript in your browser
        or upgrade to a JavaScript-capable browser to register for
        Groover.&lt;/span&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
        &lt;style&gt; #app {"{"}
        display: none;
        {"}"}
        &lt;/style&gt;
      </noscript>
      {/* Google Analytics: change UA-XXXXX-Y to be your site's ID. */}
      {/* Modernizr-JS */}
      {/* NProgress */}
      {/* jQuery */}
      {/* Bootstrap JS */}
      {/* Popper */}
      {/* ScrollUp */}
      {/* Elevate Zoom */}
      {/* jquery-ui-range-slider */}
      {/* jQuery Slim-Scroll */}
      {/* jQuery Resize-Select */}
      {/* jQuery Custom Mega Menu */}
      {/* jQuery Countdown */}
      {/* Owl Carousel */}
      {/* Main */}
    </>
  );
}

export default App;
