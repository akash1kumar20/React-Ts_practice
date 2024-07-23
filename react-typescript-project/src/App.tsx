import Greet from "./components/Greet";
import Heading from "./components/Heading";
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
    </div>
  );
};

export default App;
