import { Name } from "./Person.types";

type personListProps = {
  names: Name[];
};

const PersonList = (props: personListProps) => {
  return (
    <div>
      <h4>Batting Sequence is:</h4>
      {props.names.map((name, i) => (
        <p key={name.first}>
          {i + 1} {name.first} {name.last}
        </p>
      ))}
    </div>
  );
};

export default PersonList;
