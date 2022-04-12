import PropTypes from "prop-types";
import "./Col.scss";

type ColType = {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  children: React.ReactNode;
};

const Col = ({ sm, md, lg, xl, xxl, children }: ColType) => {
  let ColClassName = "col";
  ColClassName += !!sm ? ` col-sm-${sm}` : "";
  ColClassName += !!md ? ` col-md-${md}` : "";
  ColClassName += !!lg ? ` col-lg-${lg}` : "";
  ColClassName += !!xl ? ` col-xl-${xl}` : "";
  ColClassName += !!xxl ? ` col-xl-${xxl}` : !!xl ? ` col-xxl-${xl}` : "";

  return <div className={ColClassName}>{children}</div>;
};

Col.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xxl: PropTypes.number,
};

export default Col;
