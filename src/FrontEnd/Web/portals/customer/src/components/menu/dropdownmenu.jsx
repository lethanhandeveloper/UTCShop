import { useEffect, useState } from "react";
import categoryAPI from "../../services/api/categoryAPI";

function DropdownMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await categoryAPI.fetchAllCategories();
    console.log(res);
    setCategories(res);
  };

  return (
    <div className="col-lg-3">
      <div className="v-menu v-close">
        <span className="v-title">
          <i className="ion ion-md-menu" />
          Danh sách danh mục
          <i className="fas fa-angle-down" />
        </span>
        <nav>
          <div className="v-wrapper">
            <ul className="v-list animated fadeIn">
              {/* <li className="js-backdrop">
                <a href="shop-v1-root-category.html">
                  <i className="ion ion-md-rocket" />
                  Toys Hobbies &amp; Robots
                  <i className="ion ion-ios-arrow-forward" />
                </a>
                <button className="v-button ion ion-md-add" />
                <div className="v-drop-right" style={{ width: 250 }}>
                  <div className="row">
                    <div >
                      <ul className="v-level-3">
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Dien thoai
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            RC Helicopter
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            RC Helicopter
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li> */}
              {categories
                .filter((category) => category.parentId === null)
                .map((category) => {
                  return (
                    <li className="v-none">
                      <a href="shop-v1-root-category.html">
                        {/* <i className="ion ion-md-easel" /> */}
                        {category.name}
                      </a>
                    </li>
                  );
                })}

              {/* <li className="v-none" style={{ display: "none" }}>
                <a href="shop-v1-root-category.html">
                  <i className="ion ion-md-easel" />
                  Furniture Home &amp; Office
                </a>
              </li> */}
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
  );
}

export default DropdownMenu;
