import Image from "next/image";
import RenderComponent from '../components/renderable';
import Link from 'next/link';
export default function Home() {
  return (
    <div>

      <RenderComponent/>
      <Link href = "/renderTest">
       GO TO RENDERTEST
      </Link>

    </div>
  );
}
