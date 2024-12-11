"use client"
import React, {useState} from 'react';

const RenderComponent = () =>{
    const [isBold,setBold] = useState(false);
    return (
      <div className ={`text-based cursor-pointer transition-all duration-300 ${isBold ? 'font-bold' : ''}`}>
        <button onClick={() => setBold(!isBold)}>Toggle Bold</button>
        This is a text component.
      </div>
    );
}

export default RenderComponent;