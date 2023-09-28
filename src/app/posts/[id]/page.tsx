type TPageProps = {
  params: {
    id: string;
  };
};

const Page = ({ params }: TPageProps) => {
  const postId = params.id;

  return <div>post {postId}</div>;
};

export default Page;
