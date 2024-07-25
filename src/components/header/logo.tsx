import Image from 'next/image';
import logo from '../../../public/logo.png';

export const Logo = () => {
  return (
    <div className="flex logo-icon logo pt-3 ">
      <Image
        src={logo}
        alt="Logo"
        width={80}
        height={80}
        className="rounded-full "
      />
    </div>
  );
};
