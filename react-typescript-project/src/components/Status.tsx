type StatusProps = {
  status: string;
};

const Status = (props: StatusProps) => {
  let message: string;
  if (props.status === "loading") {
    message = "Loading";
  } else if (props.status === "success") {
    message = "Data Fetched Successfully!";
  } else {
    message = "Error 404";
  }
  return <div>Status - {message}</div>;
};

export default Status;
