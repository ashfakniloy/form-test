import Parent from "../components/Parent";
import Link from "next/link";

function ParentPage() {
  return (
    <div className="p-4 lg:p-20">
      <Link href="/">Go to home</Link>
      <Parent />
    </div>
  );
}

export default ParentPage;
