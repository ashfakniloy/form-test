import Teacher from "../components/Teacher";
import Link from "next/link";

function Teacherpage() {
  return (
    <div className="p-20">
      <Link href="/">Go to home</Link>
      <Teacher />
    </div>
  );
}

export default Teacherpage;
