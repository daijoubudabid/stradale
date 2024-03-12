/* eslint-disable react/prop-types */

export const MenuTitle = ({ title, options }) => {
  return (
    <div className="menu-titles">
      <div>
        <h3>{title}</h3>
      </div>
      <div className="d-flex gap-5 gap-md-3 gap-lg-5 pe-0 pe-lg-4">
        {options.map((option, index) => (
          <div key={index}>
            <h5>{option.label}</h5>
            <small>{option.size}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

