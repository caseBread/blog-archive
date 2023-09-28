import Image from 'next/image';
import Link from 'next/link';

const HeaderMenu = () => {
  return (
    <div className="flex gap-8">
      <button>
        <Image
          src="/icon/ic-darkmode-light.svg"
          alt="다크모드-전환"
          width="20"
          height="20"
        />
      </button>
      <Link href="/about">about</Link>
      <Link href="/posts">posts</Link>
    </div>
  );
};

export default HeaderMenu;
