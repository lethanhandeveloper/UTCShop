import ProductItem from "./productitem";


const ViewByCategory = () => {
  return (
    <>
      <div class="page-style-a">
        <div class="container">
          <div class="page-intro">
            <h2>Shop</h2>
            <ul class="bread-crumb">
              <li class="has-separator">
                <i class="ion ion-md-home"></i>
                <a href="home.html">Home</a>
              </li>
              <li class="is-marked">
                <a href="shop-v3-sub-sub-category.html">Shop</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="page-shop u-s-p-t-80">
        <div className="container">
          <div className="shop-intro">
            <ul className="bread-crumb">
              <li className="has-separator">
                <a href="home.html">Home</a>
              </li>
              <li className="has-separator">
                <a href="shop-v1-root-category.html">Men's Clothing</a>
              </li>
              <li className="has-separator">
                <a href="shop-v3-sub-sub-category.html">Tops</a>
              </li>
              <li className="is-marked">
                <a href="shop-v3-sub-sub-category.html">T-Shirts</a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="fetch-categories">
                <h3 className="title-name">Browse Categories</h3>
                <h3 className="fetch-mark-category yes-single">
                  <a href="shop-v3-sub-sub-category.html">
                    T-Shirts
                    <span className="total-fetch-items">(2)</span>
                  </a>
                </h3>
              </div>
              <div className="facet-filter-associates">
                <h3 className="title-name">Size</h3>
                <form className="facet-form" action="#" method="post">
                  <div className="associate-wrapper">
                    <input type="checkbox" className="check-box" id="cbs-01" />
                    <label className="label-text" htmlFor="cbs-01">
                      Male 2XL
                      <span className="total-fetch-items">(2)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-02" />
                    <label className="label-text" htmlFor="cbs-02">
                      Male 3XL
                      <span className="total-fetch-items">(2)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-03" />
                    <label className="label-text" htmlFor="cbs-03">
                      Kids 4<span className="total-fetch-items">(0)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-04" />
                    <label className="label-text" htmlFor="cbs-04">
                      Kids 6<span className="total-fetch-items">(0)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-05" />
                    <label className="label-text" htmlFor="cbs-05">
                      Kids 8<span className="total-fetch-items">(0)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-06" />
                    <label className="label-text" htmlFor="cbs-06">
                      Kids 10
                      <span className="total-fetch-items">(2)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-07" />
                    <label className="label-text" htmlFor="cbs-07">
                      Kids 12
                      <span className="total-fetch-items">(2)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-08" />
                    <label className="label-text" htmlFor="cbs-08">
                      Female Small
                      <span className="total-fetch-items">(0)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-09" />
                    <label className="label-text" htmlFor="cbs-09">
                      Male Small
                      <span className="total-fetch-items">(0)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-10" />
                    <label className="label-text" htmlFor="cbs-10">
                      Female Medium
                      <span className="total-fetch-items">(0)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-11" />
                    <label className="label-text" htmlFor="cbs-11">
                      Male Medium
                      <span className="total-fetch-items">(0)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-12" />
                    <label className="label-text" htmlFor="cbs-12">
                      Female Large
                      <span className="total-fetch-items">(0)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-13" />
                    <label className="label-text" htmlFor="cbs-13">
                      Male Large
                      <span className="total-fetch-items">(0)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-14" />
                    <label className="label-text" htmlFor="cbs-14">
                      Female XL
                      <span className="total-fetch-items">(0)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-15" />
                    <label className="label-text" htmlFor="cbs-15">
                      Male XL
                      <span className="total-fetch-items">(0)</span>
                    </label>
                  </div>
                </form>
              </div>
              {/* Filter-Size */}
              {/* Filter-Color */}
              <div className="facet-filter-associates">
                <h3 className="title-name">Color</h3>
                <form className="facet-form" action="#" method="post">
                  <div className="associate-wrapper">
                    <input type="checkbox" className="check-box" id="cbs-16" />
                    <label className="label-text" htmlFor="cbs-16">
                      Heather Grey
                      <span className="total-fetch-items">(1)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-17" />
                    <label className="label-text" htmlFor="cbs-17">
                      Black
                      <span className="total-fetch-items">(1)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-18" />
                    <label className="label-text" htmlFor="cbs-18">
                      White
                      <span className="total-fetch-items">(3)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-19" />
                    <label className="label-text" htmlFor="cbs-19">
                      Mischka Plain
                      <span className="total-fetch-items">(1)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-20" />
                    <label className="label-text" htmlFor="cbs-20">
                      Black Bean
                      <span className="total-fetch-items">(1)</span>
                    </label>
                  </div>
                </form>
              </div>
              <div className="facet-filter-associates">
                <h3 className="title-name">Brand</h3>
                <form className="facet-form" action="#" method="post">
                  <div className="associate-wrapper">
                    <input type="checkbox" className="check-box" id="cbs-21" />
                    <label className="label-text" htmlFor="cbs-21">
                      Calvin Klein
                      <span className="total-fetch-items">(0)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-22" />
                    <label className="label-text" htmlFor="cbs-22">
                      Diesel
                      <span className="total-fetch-items">(0)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-23" />
                    <label className="label-text" htmlFor="cbs-23">
                      Polo
                      <span className="total-fetch-items">(0)</span>
                    </label>
                    <input type="checkbox" className="check-box" id="cbs-24" />
                    <label className="label-text" htmlFor="cbs-24">
                      Tommy Hilfiger
                      <span className="total-fetch-items">(0)</span>
                    </label>
                  </div>
                </form>
              </div>
              <div className="facet-filter-by-price">
                <h3 className="title-name">Price</h3>
                <form className="facet-form" action="#" method="post">
                  <div className="amount-result clearfix">
                    <div className="price-from">$0</div>
                    <div className="price-to">$3000</div>
                  </div>
                  <div className="price-filter" />
                  <div
                    className="price-slider-range"
                    data-min={0}
                    data-max={5000}
                    data-default-low={0}
                    data-default-high={3000}
                    data-currency="$"
                  />
                  <button type="submit" className="button button-primary">
                    Filter
                  </button>
                </form>
              </div>
              <div className="facet-filter-by-shipping">
                <h3 className="title-name">Shipping</h3>
                <form className="facet-form" action="#" method="post">
                  <input
                    type="checkbox"
                    className="check-box"
                    id="cb-free-ship"
                  />
                  <label className="label-text" htmlFor="cb-free-ship">
                    Free Shipping
                  </label>
                </form>
              </div>
              <div className="facet-filter-by-rating">
                <h3 className="title-name">Rating</h3>
                <div className="facet-form">
                  <div className="facet-link">
                    <div className="item-stars">
                      <div className="star">
                        <span style={{ width: 76 }} />
                      </div>
                    </div>
                    <span className="total-fetch-items">(0)</span>
                  </div>
                  <div className="facet-link">
                    <div className="item-stars">
                      <div className="star">
                        <span style={{ width: 60 }} />
                      </div>
                    </div>
                    <span className="total-fetch-items">&amp; Up (2)</span>
                  </div>
                  <div className="facet-link">
                    <div className="item-stars">
                      <div className="star">
                        <span style={{ width: 45 }} />
                      </div>
                    </div>
                    <span className="total-fetch-items">&amp; Up (0)</span>
                  </div>
                  <div className="facet-link">
                    <div className="item-stars">
                      <div className="star">
                        <span style={{ width: 30 }} />
                      </div>
                    </div>
                    <span className="total-fetch-items">&amp; Up (0)</span>
                  </div>
                  <div className="facet-link">
                    <div className="item-stars">
                      <div className="star">
                        <span style={{ width: 15 }} />
                      </div>
                    </div>
                    <span className="total-fetch-items">&amp; Up (0)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
              <div className="page-bar clearfix">
                <div className="shop-settings">
                  <a id="list-anchor" className="active">
                    <i className="fas fa-th-list" />
                  </a>
                  <a id="grid-anchor">
                    <i className="fas fa-th" />
                  </a>
                </div>
                <div className="toolbar-sorter">
                  <div className="select-box-wrapper">
                    <label className="sr-only" htmlFor="sort-by">
                      Sort By
                    </label>
                    <select className="select-box" id="sort-by">
                      <option selected="selected" value="">
                        Sort By: Best Selling
                      </option>
                      <option value="">Sort By: Latest</option>
                      <option value="">Sort By: Lowest Price</option>
                      <option value="">Sort By: Highest Price</option>
                      <option value="">Sort By: Best Rating</option>
                    </select>
                  </div>
                </div>
                <div className="toolbar-sorter-2">
                  <div className="select-box-wrapper">
                    <label className="sr-only" htmlFor="show-records">
                      Show Records Per Page
                    </label>
                    <select className="select-box" id="show-records">
                      <option selected="selected" value="">
                        Show: 8
                      </option>
                      <option value="">Show: 16</option>
                      <option value="">Show: 28</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row product-container list-style">
                <ProductItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewByCategory;
