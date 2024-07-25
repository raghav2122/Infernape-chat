import Image from 'next/image';
import heroImage from '../../../public/infernape.png';

export const HeroImage = () => {
  return (
    <div className="hero-image">
      <Image
        src={heroImage}
        alt="Infernape"
        width={500}
        height={500}
        className="rounded-lg"
      />
    </div>
  );
};
