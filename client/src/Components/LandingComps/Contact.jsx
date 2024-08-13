import React, { useState } from "react";



const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  return (
    <div className="flex flex-col justify-center items-center p-10" id="contact">
      <div className="text-[24px] sm:text-[34px] md:text-[44px] font-bold p-8">
        Get in Touch Now
      </div>
      <div className=" flex flex-col gap-4 text-[18px] ">
        <div className="flex gap-4 flex-wrap">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="border w-full md:w-[300px] shadow-lg py-4 px-8 rounded-full "
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border w-full md:w-[300px] shadow-lg py-4 px-8 rounded-full "
            placeholder="Email"
          />
        </div>

        <div>
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="border w-full shadow-lg py-4 px-8 rounded-full "
            placeholder="Phone"
          />
        </div>

        <div>
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            rows={2}
            className="border w-full shadow-lg py-4 px-8 rounded-full "
            placeholder="Message"
          />
        </div>
      </div>
      <div className="py-8" >
      <button className="text-white w-32 h-14 rounded-full font-bold px-6 hidden min-[500px]:block">
        Submit
      </button>
      </div> 
    </div>
  );
};

export default Contact;