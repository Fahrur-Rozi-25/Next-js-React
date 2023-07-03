
import Image from "next/image"

const MyComponent = () => {
    return (
      <div>
        <h1>Contoh Gambar di Next.js</h1>
        <Image 
          src="/components/images/mlbb.jpg"
          alt="Gambar Contoh" 
          width={500} 
          height={300} 
        />
      </div>
    );
  };
  
  export default MyComponent;