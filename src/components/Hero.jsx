import {React,useState} from "react";
import styled from "styled-components";
import homeImage from "../assets/mainBackground.jpg";
import Navbar from "./Navbar2";
import TimePicker from "react-time-picker";
import { Button } from "@mui/material";

export default function Hero() {
  const [time, setTime] = useState("10:00");
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="navW">
          <Navbar />
        </div>
        <div className="title">
          <h1>Moving doesn't have to be stressful </h1>

        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">What is your current address ?</label>
            <input type="text" />
            <label htmlFor="">Where you want to move ?</label>
            <input type="text" />
            <label htmlFor="">What items do you have ?

            </label>
            <input type="text" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="btns">
          <button className="btn1">Whats App</button>
          <button className="btn2">Gmail</button>

          </div>


        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
background-color:white;

.btns{
  display: flex;
    justify-content: space-around;
}
.btn1{
 flex:1;
 margin-right:5px;
 padding-left: 1.5rem;
 padding-right: 1.5rem;

 cursor: pointer;
 border-radius: 0.3rem;
 border: none;
 color: white;
 background-color: rgb(31, 207, 31);;
 font-size: 0.8rem;
 transition: 0.3s ease-in-out;
 &:hover {
   background-color: #023e8a;}
}
.btn2{
  flex:1;
 margin-left:5px;
 padding-left: 1.5rem;
 padding-right: 1.5rem;
 cursor: pointer;
 border-radius: 0.3rem;
 border: none;
 color: white;
 background-color: #4361ee;
 font-size: 0.8rem;
 transition: 0.3s ease-in-out;
 &:hover {
   background-color: #023e8a;}

}
  position: relative;
  width: 100%;
  .navW{
    position: absolute;
    top: 10px;
    width:100%;
    margin-bottom:3rem;

  }
  height: 100%;

  .background {
    height: 100%;
    img {
      width: 100%;
      height:90vh;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: rgb(61, 54, 54);;
          }
          &:focus {
            outline: none;
          }
        }
      }

      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
   margin-bottom:10vh;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
        height:70vh;
      }
    }
    .content {
      .title {
        margin-top:7rem;
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
