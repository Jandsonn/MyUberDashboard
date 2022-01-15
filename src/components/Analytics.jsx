import React from "react";
import styled from "styled-components";
import { cardStyle } from "./ReusableStyles";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup, BiSearch } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/bs";


export default function Analytics() {
  return (

    <Section>
      
      <div className="analytic">
        <div className="content">
          <h5>Spent this month </h5>
          <h2>$598.9</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      
      </div>
      <div className="analytic">
        <div class="content"></div>
        <div class="logo">
          <IoStatsChart />
        </div>
      </div>
      
      <div className="analytic">
        <div class="content">
          <h5>Earnings</h5>
          <h2>$589.49</h2>
        </div>
        <div class="logo">
          <BiGroup />
        </div>
      </div>


      <div className="analytic">
        <div class="content">
          <h5>New Clients</h5>
          <h2>321</h2>
        </div>

        <div className="analytic">
          <div className="content">
            <h5>Activity</h5>
            <h2>$694.78</h2>
          </div>
          <div className="logo">
            <FiActivity />
          </div>
        </div>
      </div>
    </Section>


  )
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyle};
    padding:1rem;
    margin: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color:#F7A501;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }

  }
   



`;