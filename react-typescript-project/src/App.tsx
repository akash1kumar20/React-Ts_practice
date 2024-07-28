import Buttox from "./components/Buttox";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

const App = () => {
  const personName = {
    first: "Akash",
    last: "Kumar",
  };

  const personList = [
    { first: "Sachin", last: "Tendulkar" },
    {
      first: "Virendar",
      last: "Sehwag",
    },
    {
      first: "Gautam",
      last: "Gambhir",
    },
  ];
  return (
    <div>
      <Greet name="First User" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Status status="success" />
      <Heading>How are You?</Heading>
      <Oscar>
        <Heading>Hope You're Doing Well!</Heading>
      </Oscar>
      <Buttox
        handleClick={(event, id) => console.log("Button Clicked", event, id)}
      />
      <Input handleChange={(event) => console.log(event)} value="" />
      <Container
        styles={{
          padding: 10,
          border: "1px solid black",
          color: "rgba(115,125,130,0.4)",
        }}
      />
    </div>
  );
};

export default App;
