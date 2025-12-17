import { Link, useLocation } from "react-router-dom";
import "./Style.scss";
import { IoChevronForwardSharp } from "react-icons/io5";


function BreadCrumbBtn() {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter(Boolean);

  const formatName = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="breadcrumb-btn">
      <Link to="/">Ana səhifə</Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={index}>
            {<IoChevronForwardSharp className="breadcrumb-icon" />}
            {isLast ? (
              <span>{formatName(name)}</span>
            ) : (
              <Link to={routeTo}>{formatName(name)}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default BreadCrumbBtn;
