export default function ThreeCardSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center m-28 text-center">
      <div className="w-64 h-60 p-6 bg-pink-600 font-bold text-2xl text-white hover:text-black rounded-lg flex flex-col items-center justify-center">
        <div>Card 1: Zebra</div>
        <p className="text-sm mt-2 text-black">An African animal with black-and-white stripes.</p>
      </div>
      <div className="w-64 h-60 p-6 bg-green-600 font-bold text-2xl text-white hover:text-black rounded-lg flex flex-col items-center justify-center">
        <div>Card 2: Lion</div>
        <p className="text-sm mt-2 text-black">A big, strong cat known as the king of animals.</p>
      </div>
      <div className="w-64 h-60 p-6 bg-purple-900 font-bold text-2xl text-white hover:text-black rounded-lg flex flex-col items-center justify-center">
        <div>Card 3: Elephant</div>
        <p className="text-sm mt-2 text-black">A huge animal with a long trunk and big tusks.</p>
      </div>
    </section>
  );
}
