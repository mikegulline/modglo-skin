import logo from 'public/modglo-center.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-screen flex justify-center items-center bg-slate-100'>
      <Image
        src={logo}
        width={300}
        height={300}
        alt='ModGlo Skincare Logo'
        priority={true}
      />
    </div>
  );
}
