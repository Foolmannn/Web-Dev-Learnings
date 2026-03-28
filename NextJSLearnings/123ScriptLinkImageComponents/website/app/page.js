import Image from "next/image";
//image component help to optimixe the image loading and also helps us to improve the SEO 

export default function Home() {
  return (
<>
This is home page.
<div className="bgimage ">
  <img className="mx-auto" src="https://imgs.search.brave.com/HIpkydoRK_IJJPGSw4bhFsP8xdWUakiymOid79_comM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/MDU0Lzg5OS9zbWFs/bC9mbG93ZXJzLXdh/bGxwYXBlci1oZC13/YWxscGFwZXItZnJl/ZS1waG90by5qcGVn" alt="" />

  <img className="mx-auto"  src="https://imgs.search.brave.com/vP79nYdNulVL-lZx12UdIUhRGcQGBT7RV9EEg1z1OKs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/MzI5LzQ0MC9zbWFs/bC9haS1nZW5lcmF0/ZWQtaWYteW91LW5l/ZWQtd2FsbHBhcGVy/LWZvci1mcmVlLXRy/eS15b3VyLWRlc2t0/b3AtZnJlZS1waG90/by5qcGc" alt=""  />
  <div className="container bg-red-500 size-100 relative ">

    <Image
      src="https://imgs.search.brave.com/HIpkydoRK_IJJPGSw4bhFsP8xdWUakiymOid79_comM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/MDU0Lzg5OS9zbWFs/bC9mbG93ZXJzLXdh/bGxwYXBlci1oZC13/YWxscGFwZXItZnJl/ZS1waG90by5qcGVn"
      // width={500}
      // height={500}
      fill={true}
      objectFit="contain"
      alt="Picture of the author"
      /> 
      </div>
    {/* for to use the remote image we need to configure the next.config.js file */}
</div>
</>
  );
}
