import React, { useState } from 'react'

const VerifyOtp = () => {
    const [otp, setOtp] = useState("");
    const [errors, setErrors] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
    }


  return (
    <div className="max-h-full w-full">
      <h1 className="w-full text-center text-3xl my-3">Verify OTP</h1>
      <p className="text-center">Enter the OTP sent to ******</p>
      <form onSubmit={submitHandler} className="max-w-md mx-auto">
        {/* OTP Field */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="otp"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            OTP
          </label>
        </div>

        {/* Error Message */}
        {errors && <p className="text-red-500 text-sm mb-4">{errors}</p>}

        {/* Verify OTP Button */}
        <button
          type="submit"
          className="text-white bg-black font-light border-black border-[1px] rounded-md w-full px-5 py-2.5 text-center"
        >
          Verify OTP
        </button>
      </form>

      {/* Resend OTP Link */}
      <div className="text-center mt-4">
        <p>
          Didn't receive OTP?{" "}
          <button className="text-blue-600">Resend OTP</button>
        </p>
      </div>
    </div>
  )
}

export default VerifyOtp