import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ReturnButton() {
     const navigate = useNavigate();
  return (
    
    
      <button className="return-btn" onClick={() => navigate(-1)}>
        <FaLongArrowAltLeft />
        go back
      </button>
    
  );
}

export default ReturnButton