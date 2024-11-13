export default  function Navbar(){
    return(
        <div>
      <nav className="bg-red-800 h-20 py-4 px-32 flex justify-between items-center text-white font-bold">
        <div className="-mx-24">
        <h1 className="font-extrabold text-2xl hover:text-black py-2">Making Cards By Ayaan Zeeshan</h1>
        </div>
<div className="flex space-x-28 justify-between mx-14 items-center">
        <div className="hover:text-blue-600 rounded-md py-1 ">Home</div>
        <div className="hover:text-blue-600 rounded-md py-1 ">Blog</div>
        <div className="hover:text-blue-600 rounded-md py-1 ">Service</div>
        <div className="hover:text-blue-600 rounded-md py-1 ">Details</div>
</div>
</nav>

</div>
    )
       
}