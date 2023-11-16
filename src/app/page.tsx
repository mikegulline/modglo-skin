import logo from 'public/modglo-center.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Image src={logo} width={200} height={200} alt='ModGlo Skincare Logo' />
    </div>
  );
}
