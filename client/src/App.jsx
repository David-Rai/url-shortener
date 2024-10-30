import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";

const App = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShort] = useState("short id");
  
           //Sending post request
  const handleSubmit = async (e) => {
    e.preventDefault()

let response = await fetch("http://localhost:1111/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body:JSON.stringify({url})
});

let data = await response.json();
setShort(data.shortUrl)

  };
// Copy to clipboard
const copyToclipboard = async () => {
  try {
    await navigator.clipboard.writeText(shortUrl);
    alert(`Copied: ${shortUrl}`); // Show alert with the copied URL
  } catch (err) {
    console.error("Error copying text: ", err);
    alert("Failed to copy!"); // Inform the user if copying failed
  }
};

  return (
    <main className="h-screen w-full flex bg-slate-100 items-center justify-center">
      <form
   onSubmit={handleSubmit}
className="rounded-md flex flex-col 
       bg-slate-200 p-2 shadow-sm h-[40vh] justify-around items-center w-[60%]
       lg:w-[40%]
       ">
        <input
          className="pl-2 h-[20%] w-[90%]"
          type="text"
          placeholder="Enter url"
          onChange={(e) => setUrl(e.target.value)}
        />
        <p>{shortUrl}</p>
        <MdContentCopy onClick={copyToclipboard}/>
        <button
          type="submit"
          className="text-white h-[40px] w-[120px] bg-green-600 rounded-md"
        >
          Generate
        </button>
      </form>
    </main>
  );
};

export default App;
