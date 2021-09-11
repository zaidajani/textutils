import React from "react";

function Alert(props) {
  const capitalizeFirst = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show mt-4`} role="alert">
        <strong>{capitalizeFirst(props.alert.type)}</strong> : {props.alert.msg}
      </div>
    </div>
  );
}

export default Alert;
