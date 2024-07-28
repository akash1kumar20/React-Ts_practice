import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return (
    <div>
      <h4 style={props.styles}>Hello Style</h4>
    </div>
  );
};

export default Container;
