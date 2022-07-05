import { useEffect } from "react";
import { useState } from "react";

export default function Stepper(props) {
  const [isInit,SetIsinit] = useState(true);

  useEffect(()=>{
    console.log("");
    return (()=>{
      console.log("out");
    })
  },[])
  return (
    <>
      <div style={{ display: "flex" }}>
        {new Array(props.stepCount).fill("").map((_, i) => (
          <StepperItem
            step={i + 1}
            isLastIndex={i + 1 === new Array(props.stepCount).fill("").length}
            activeStep={props.curruntIndex}
          />
        ))}
      </div>
    </>
  );
}

const StepperItem = (props) => (
  <div style={{ display: "flex", marginTop: "200px" ,alignItems:"center"}}>
    <div style={{ width: "100px", display: "flex" ,alignItems:"center"}}>
      <div
        style={{
          width: "50px",
          height:"50px",
          backgroundColor: "black",
          borderRadius: "200px",
          color: "white",
          marginLeft: "12px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        {props.step <= props.activeStep ? "✔️" : props.step}
      </div>
      <span style={{ marginLeft: "12px" }}>one</span>
    </div>
    {!props.isLastIndex && (
      <div
        style={{
          width: "200px",
          height: "1px",
          borderColor: "black",
          borderTop: "2px solid",
           margin: "0 10px",
        }}
      ></div>
    )}
  </div>
);
