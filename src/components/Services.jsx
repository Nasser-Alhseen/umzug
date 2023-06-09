import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
const icons=[
  <LocalShippingOutlinedIcon style={{ fontSize: '3rem', color: 'white' }} />,          
  <Inventory2OutlinedIcon style={{ fontSize: '3rem', color: 'white' }} />,          

  <HandymanOutlinedIcon style={{ fontSize: '3rem', color: 'white' }} />,          

  <CleaningServicesOutlinedIcon style={{ fontSize: '3rem', color: 'white' }} />,          


];
export default function Services() {
  const data = [
  
    {
      icon: 0,
      subTitle:
        "Packing and unpacking services",
      
    },
    {
      icon: 1,
      subTitle:
        "Transportation of belongings to the new home",
    },
    {
      icon: 2,
      subTitle:
        "Assembly and disassembly of furniture",
    },
    {
      icon: 3,
      subTitle:
        "Cleaning the new home",
    },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
{              icons[service.icon]
}              </div>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  p{
    color:white;
  }
  gap: 1rem;
  .service {
    display: flex;
    border-radius:8px;
margin-left:1rem;
margin-right:1rem;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: #4854A1;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
