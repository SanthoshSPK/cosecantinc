import React from "react";
import { Box } from "@mui/material";
import "./Content.css";
const Content = () => {
  return (
    < Box >
      <div className="bg1"></div>

      <Box className="bg2">
        <img  src="https://cosecantinc.com/wp-content/uploads/2022/10/bg1-600x800.jpg"></img>
      </Box>
      <Box className="bg3"><img
          src="https://cosecantinc.com/wp-content/uploads/2022/10/slide7-550x550.jpg"
        ></img>
        </Box>
        <Box className="smallbx">
          <img
            className="bg4"
            src="https://cosecantinc.com/wp-content/uploads/2022/11/image-1.jpg"
          ></img>
          <h1 className="num">99 +</h1>
          <p className="num_1">Satisfied Client</p>
        </Box>



      <div className="bx">
        <Box className="bx1"></Box>

        <div className="content1">
          <h4 className="cnt1">ABOUT OUR COMPANY______</h4>
          <h1 className="cnt2">Our success formula is D³</h1>
          <p className="cnt3">
            We're a young and talented group of entrepreneurs and engineers with
            a groundbreaking idea designed to contribute towards a better
            tomorrow. We provide smart solutions for companies of all sizes and
            pride ourselves on our unparalleled, dedicated service. At Cosecant
            Inc, we believe that the right understanding and technological edge
            can lead companies towards a successful future.
          </p>

          <div className="imgicon">
            <img src="C:\claritwebsite\src\components\Assests\data1.png"></img>
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8D7qXeRSJEotmp5QhMudqkBPI8UPcl4nq9QheyCXX04TIa7_6"></img>
          </div>

          <p className="cnt4">
            Great results, can be achieved with small forces.
          </p>
          <button className="btn_2">DISCOVER MORE</button>
          <Box className="bx_1">
            <p className="cnt5">High Quality IT Solutions for Startup</p>

            <p className="contact">
              CONTACT US<span>&#10230;</span>
            </p>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default Content;
