type OscarProps = {
  children: React.ReactNode;
};
//React.ReactNode is required when we pass to react a component inside another component
const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
