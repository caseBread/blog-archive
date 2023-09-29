type TProps = {
  component: React.ReactNode;
};

const MDXContent: React.FC<TProps> = ({ component }) => {
  return <div className="markdown-body">{component}</div>;
};

export default MDXContent;
