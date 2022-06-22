import Student from "../components/Student";

export default function Home() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="mx-44 my-10">
      <h1>Form</h1>
      <div className="my-10">
        <Student />
      </div>
    </div>
  );
}
