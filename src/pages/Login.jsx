import React, { useRef, useState } from "react";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [password,setPassword] =useState("")
  const [mobile, setMobile] = useState("");


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function submitHandler(e){
    e.preventDefault()
    console.log(password)
    console.log(mobile)
  }


  return (
    <div className="max-h-full w-full">
      <h1 className="w-full text-center  text-3xl my-3">LogIn </h1>

      <form onSubmit={submitHandler} className="max-w-md mx-auto">
        {/* Mobile Number Field */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            name="mobile"
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="mobile_number"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mobile Number
          </label>
        </div>

        {/* Password Field */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-0 top-3 focus:outline-none"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_724_8275)">
                <path
                  d="M3.81799 12.1821C4.9576 13.0508 6.34526 13.532 7.77799 13.5555C12.4447 13.5555 15.1113 8.22213 15.1113 8.22213C14.2821 6.67672 13.1319 5.32653 11.738 4.26213M9.17799 3.04879C8.71911 2.94138 8.24929 2.88769 7.77799 2.88879C3.11133 2.88879 0.444661 8.22213 0.444661 8.22213C0.849341 8.9792 1.33196 9.69195 1.88466 10.3488M6.36466 9.63546C6.54776 9.83196 6.76856 9.98956 7.01389 10.0989C7.25922 10.2082 7.52406 10.267 7.7926 10.2717C8.06114 10.2764 8.32789 10.227 8.57692 10.1265C8.82596 10.0259 9.05218 9.87615 9.2421 9.68623C9.43201 9.49631 9.58173 9.27009 9.68232 9.02105C9.78291 8.77202 9.83231 8.50527 9.82757 8.23673C9.82283 7.96819 9.76406 7.70336 9.65474 7.45803C9.54543 7.21269 9.38783 6.99189 9.19133 6.80879M15.1113 0.888794L0.444661 15.5555"
                  stroke="#ABABAB"
                  stroke-width="0.584071"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_724_8275">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="matrix(-1 0 0 1 16 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="text-white bg-black font-light border-black border-[1px] rounded-md w-full px-5 py-2.5 text-center"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
