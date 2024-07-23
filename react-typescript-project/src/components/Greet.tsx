type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  //here it means if the messageCount props is passed, then use it value or else use zero, for optional props we also used question mark.
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Hello ${props.name}! You have ${messageCount} unread message`
          : "Hello Guest"}
      </h2>
    </div>
  );
};

export default Greet;
