import Link from "next/link";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/6pgmK43/banner.jpg') ",
      }}
      className="hero min-h-[600px] bg-cover bg-center container mx-auto"
    >
      <div className="hero-overlay bg-black/60"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-4xl md:text-5xl font-bold">
            Discover Your Perfect Tile Aesthetic
          </h1>
          <p className="mb-5 text-lg">
            Explore a wide collection of premium tiles including ceramic,
            marble, and modern designs to transform your space beautifully.
          </p>
          <Link href={'/all-tiles'}><button className="btn btn-primary">Browse Tiles</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
