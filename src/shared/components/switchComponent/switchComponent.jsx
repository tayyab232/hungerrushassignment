import React from "react";
import Switch from "react-switch";

const SwitchComponent = (props) => {
  return (
    <Switch
      className="switch"
      onChange={props.onChange}
      checkedIcon={false}
      uncheckedIcon={false}
      checked={props.checked}
      onColor="#0e8476"
    />
  );
};

export default SwitchComponent;
