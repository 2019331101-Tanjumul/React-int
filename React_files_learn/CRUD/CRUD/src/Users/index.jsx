
const User = () => {
    return (
      
     <div className=" flex justify-center  ">
        <form action="" className="flex justify-center align-center">

       <div className="mt-2 flex flex-col gap-2 w-[290%]">
       <input type="name " name="name" id="name" autocomplete="" placeholder="Enter your name"required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        
        <input type="email" name="email" id="email" autocomplete="" placeholder="Enter your email"  required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />

        <input type="contact" name="Number" id="age" autocomplete="" placeholder="Enter age" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        <button type ="submit" className="bg-blue-400">Sign In</button>
       </div>
        </form>
        
     </div>
    );
};

export default User;