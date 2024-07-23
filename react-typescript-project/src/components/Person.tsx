type personProps = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: personProps) => {
  return (
    <div>
      <h3>
        User First Name:{props.name.first} & Last Name is {props.name.last}
      </h3>
    </div>
  );
};

export default Person;
