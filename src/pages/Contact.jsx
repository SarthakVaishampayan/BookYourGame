/* eslint-disable no-unused-vars */


import React from "react";
import { Gamepad2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, FacebookIcon,Github  } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d2d52fd3-a355-410c-959d-27fdccdb0b86");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>


    <Navbar/>
    <div className=" bg-gradient-to-b  text-white">
     


      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">



          <div className="bg-black w-2/3 bg-opacity-50 justify-self-end backdrop-blur-sm border border-white p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" name="name" id="name" placeholder="Your name" className="w-full p-2 text-white bg-white border bg-opacity-35 rounded" required/>
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" name="email" id="email" placeholder="Your email" className="w-full p-2 bg-white  bg-opacity-35 rounded" required/>
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea name="message" id="message" placeholder="Your message" className="w-full p-2 bg-white  bg-opacity-35  rounded" rows={4} required />
              </div>
              <button type="submit" className="w-full bg-white bg-opacity-50 hover:bg-purple-700 p-2 rounded">Send Message</button>
            </form>
          </div>

         
          <div className="space-y-6">
            <div className="bg-black w-2/3 bg-opacity-50 border backdrop-blur-sm  border-gray-700 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-white opacity-50 hover:text-purple-400 hover:scale-125 hover:opacity-80" />
                  <span>sarthakvaishampayan22@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-white opacity-50 hover:text-purple-400 hover:scale-125 hover:opacity-80" />
                  <span>+91 9425340813</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-white opacity-50 hover:text-purple-400 hover:scale-125 hover:opacity-80" />
                  <span>B1-457 GHS Hostel Manipal University Jaipur, Rajasthan ,India&quot;</span>
                </li>
              </ul>
            </div>

        
            <div className="bg-black w-2/3 bg-opacity-50 border backdrop-blur-sm border-gray-700 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/sarthak.vaishampayan/" className="text-white  opacity-50 hover:text-purple-400 hover:scale-125 hover:opacity-80">
                  <FacebookIcon className="w-8 h-8" />
                </a>
                <a href="https://github.com/SarthakVaishampayan" className="text-white  opacity-50 hover:text-purple-400 hover:scale-125 hover:opacity-80">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://www.instagram.com/_sxrthxkk_/" className="text-white opacity-50 hover:text-purple-400 hover:scale-125 hover:opacity-80">
                  <Instagram className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
    </>
  );
}
