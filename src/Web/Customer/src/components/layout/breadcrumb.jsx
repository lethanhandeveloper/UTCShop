function BreadCrumb({ pageName }) {
  return (
    <div className="page-style-a">
      <div className="container">
        <div className="page-intro">
          <h2>Account</h2>
          <ul className="bread-crumb">
            <li className="has-separator">
              <i className="ion ion-md-home" />
              <a href="home.html">Home</a>
            </li>
            <li className="is-marked">
              <a href="account.html">Account</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
