import React, { useRef, useState, useEffect } from "react";

export default function App() {
  //ex1
  const inputRef = useRef();
  const handlefocus = () => {
    console.log("hello");
  };
  //eg2
  const [sec, setSec] = useState(0);
  const inputTimer = useRef();

  useEffect(() => {
    inputTimer.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(inputTimer.current);
  }, []);

  //ex3
  const [newProductImg, setnewProductImg] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const inputImg = useRef();

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageUrl(preview);
      setnewProductImg(false);
    }
  };
  return (
    <div>
      {/* //eg1 */}
      <input type="text" placeholder="Enter input" ref={inputRef} />
      <button onClick={handlefocus}>click me</button>
      {/* //eg2 */}
      <h2>second :{sec}</h2>
      <button onClick={() => clearInterval(inputTimer.current)}>Stop</button>
      {/* //eg3 */}
      {newProductImg ? (
        <div className="image-box" onClick={() => inputImg.current.click()}>
          upload image...
        </div>
      ) : (
        <img
          src={imageUrl}
          alt="image"
          onClick={() => inputImg.current.click()}
        />
      )}
      <input
        type="file"
        accept="image/*"
        ref={inputImg}
        onClick={handleImgChange}
        hidden
      />
      {/* <input type="range" />
      <input type="time" />
      <input type="color" /> */}
    </div>
  );
}
