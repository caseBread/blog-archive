import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex gap-4 flex-col">
      <Link href="/posts">go to posts</Link>
      <Link href="/about">go to about</Link>
    </div>
  );
}
