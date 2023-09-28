import Image from 'next/image';
import TagList from './tagList';
import Link from 'next/link';

const PostItem = () => {
  return (
    <a href="/posts/1" className="flex py-4 border-b-1 border-gray-200">
      <div>
        <Image
          className="rounded-lg bg-slate-400"
          src=""
          alt="썸네일"
          width="170"
          height="170"
        />
      </div>
      <div className="pl-12">
        <div className="py-3">
          <h2 className="pb-5 font-semibold text-2xl">이것은 제목입니다.</h2>
          <p className="pb-3 font-normal text-base text-gray-800">
            이것은 소제목 입니다.
          </p>
          <time className="font-normal text-sm text-gray-700">2023.09.27</time>
        </div>
        <TagList />
      </div>
    </a>
  );
};

export default PostItem;
