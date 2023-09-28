import HeaderLogo from './logo';
import HeaderMenu from './menu';

const Header: React.FC = () => {
  return (
    <div
      className="border-b-gray-300 border-b-1 flex justify-between items-center px-10"
      style={{ height: '50px' }}
    >
      <HeaderLogo />
      <HeaderMenu />
    </div>
  );
};

export default Header;
