import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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
      <Greet name="First User" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  );
};

export default App;
