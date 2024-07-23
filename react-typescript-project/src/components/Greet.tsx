type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Hello {props.name}! You have {props.messageCount} unread message`
          : "Hello Guest"}
      </h2>
    </div>
  );
};

export default Greet;
