import React from "react";
import { Link } from "react-router";

const FilterLink = ({ filter, children}) => (
  <Link
    to={filter === 'all' ? '/' : filter}
    activeStyle={{
      textDecoration: "none",
      color: "black"
    }}
    >
      {children}
    </Link>
);

FilterLink.propTypes = {
  filter: React.PropTypes.oneOf(["all", "active", "completed"]).isRequired,
  children: React.PropTypes.node.isRequired
}

export default FilterLink;
