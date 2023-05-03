import Link from "next/link";

function Nav() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

export default Nav;
