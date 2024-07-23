type GreetProps = {
  name: string;
};
const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Hello {props.name}! You have 10 unread message</h2>
    </div>
  );
};

export default Greet;
