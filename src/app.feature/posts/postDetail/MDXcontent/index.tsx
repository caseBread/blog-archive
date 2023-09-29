type TProps = {
  component: React.ReactNode;
};

const MDXContent: React.FC<TProps> = ({ component }) => {
  return <div className="mt-[60px]">{component}</div>;
};

export default MDXContent;
