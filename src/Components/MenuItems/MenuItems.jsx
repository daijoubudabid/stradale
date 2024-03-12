/* eslint-disable react/prop-types */

const MenuItem = ({ name, mediumPrice, largePrice }) => (
  <div className="menu-item">
    <div>
      <p>{name}</p>
    </div>
    <div className="d-flex gap-5 gap-md-3 gap-lg-5 pe-0 pe-lg-4">
      {mediumPrice !== undefined && (
        <h6>
          <small>$</small> {mediumPrice}
        </h6>
      )}
      <h6>
        <small>$</small> {largePrice}
      </h6>
    </div>
  </div>
);

export default MenuItem;
