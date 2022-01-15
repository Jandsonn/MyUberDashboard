import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Analytics from "./Analytics";
import FAQ from "./FAQ";
import Earnings from "./Earnings";

export default function Dashboard() {
  return(
    <Section>
      <Navbar />
      <div className="row__one">
      <Analytics />
      <FAQ />
      </div>
      <div className="row__two">
        <Earnings />
      </div>
    
    </Section>


  )
}

const Section = styled.Section``;
