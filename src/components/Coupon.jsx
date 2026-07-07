
import { useState } from "react";

const Coupon = ({ total }) => {
  const [code,setCode] = useState("");
  const [discount,setDiscount] = useState(0);

  const applyCoupon = () => {
    if(code === "SAVE10"){
      setDiscount(total * 0.1);
      alert("Coupon Applied");
    }else{
      alert("Invalid Coupon");
    }
  };

  return (
    <div className="coupon-box">
      <h2>🎁 Coupon</h2>

      <input
        type="text"
        placeholder="Enter Coupon"
        value={code}
        onChange={(e)=>setCode(e.target.value)}
      />

      <button onClick={applyCoupon}>
        Apply
      </button>

      <h3>
        Final Price: ₹{(total-discount).toFixed(2)}
      </h3>
    </div>
  );
};

export default Coupon;
