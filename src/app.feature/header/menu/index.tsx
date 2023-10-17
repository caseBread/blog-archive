import Image from 'next/image';
import Link from 'next/link';

const HeaderMenu = () => {
  return (
    <div className="flex gap-8">
      <Link href="/posts/about.mdx">about</Link>
      <Link href="/posts">posts</Link>
    </div>
  );
};

export default HeaderMenu;
