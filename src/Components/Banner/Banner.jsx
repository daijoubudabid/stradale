/* eslint-disable react/prop-types */
import './Banner.scss';

export const Banner = ({ title, subtitle, className }) => {
  return (
    <div className={`banner-section ${className}`}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};
