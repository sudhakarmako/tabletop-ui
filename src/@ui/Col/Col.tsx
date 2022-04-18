import "./Col.scss";

type ColType = {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  children?: React.ReactNode;
};

const Col = ({ sm, md, lg, xl, xxl, children }: ColType) => {
  let ColClassName = "col";
  ColClassName += !!sm ? ` col-sm-${sm}` : "";
  ColClassName += !!md ? ` col-md-${md}` : "";
  ColClassName += !!lg ? ` col-lg-${lg}` : "";
  ColClassName += !!xl ? ` col-xl-${xl}` : "";
  ColClassName += !!xxl ? ` col-xxl-${xxl}` : !!xl ? ` col-xxl-${xl}` : "";

  return <div className={ColClassName}>{children}</div>;
};

export default Col;
