import React from "react";

const Link = ({ active, onClick, children}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      >{children}</a>
  )
};

Link.propTypes = {
  active: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired
}

export default Link;