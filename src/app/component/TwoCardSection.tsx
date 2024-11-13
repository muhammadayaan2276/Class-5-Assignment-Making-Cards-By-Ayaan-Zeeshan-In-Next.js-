export default function TwoCardSection() {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 justify-items-center m-28 text-center px-40">
        <div className="w-64 h-60 p-6 bg-orange-600 font-bold text-2xl text-white hover:text-black rounded-lg flex flex-col items-center justify-center">
          <div>Card 4: Tiger</div>
          <p className="text-sm mt-2 text-black">A big, striped cat that hunts in Asia.</p>
        </div>
  
        <div className="w-64 h-60 p-6 bg-gray-500 font-bold text-2xl text-white hover:text-black rounded-lg flex flex-col items-center justify-center ">
          <div>Card 5: Bear</div>
          <p className="text-sm mt-2 text-black">A strong, furry animal that eats plants and meat.</p>
        </div>
      </section>
    );
  }
  