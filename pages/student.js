import Student from "../components/Student";
import Link from "next/link";

function StudentPage() {
  return (
    <div className="p-20">
      <Link href="/">Go to home</Link>
      <Student />
    </div>
  );
}

export default StudentPage;
