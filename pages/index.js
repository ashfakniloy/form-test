import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 p-14">
      <h1 className="text-3xl mb-5">Form</h1>
      <Link href="/student">Student page</Link>
      <Link href="/teacher">Teacher page</Link>
      <Link href="/parent">Parent page</Link>
    </div>
  );
}
