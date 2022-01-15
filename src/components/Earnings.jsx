import React from "react";
import styled from "styled-components";
import { Area, Tooltip, ResponsiveContainer, AreaChart } from "recharts";
import { cardStyle } from "./ReusableStyles";

const data = [
  { data: 4500 },
  {
    data: 5000
  },
  {
    data: 4700
  },
  {
    data: 4400
  },
  {
    data: 4800
  },
  {
    data: 5000
  },
  {
    data: 5600
  },
  {
    data: 5700
  },
  {
    data: 5800
  },
  {
    data: 6000
  },
  {
    data: 6500
  },
  {
    data: 6510
  },
  {
    data: 6700
  },
  {
    data: 6900
  },
  {
    data: 7600
  },
  {
    data: 7700
  },
  {
    data: 7800
  },
  {
    data: 7900
  },
  {
    data: 8000
  },
  {
    data: 8500
  },
  {
    data: 8700
  },
  {
    data: 8800
  },
  {
    data: 9000
  },
  {
    data: 9500
  },
  {
    data: 10000
  },
  {
    data: 10100
  },
  {
    data: 10200
  },
  {
    data: 10300
  },
  {
    data: 10400
  },
  {
    data: 10500
  },
  {
    data: 10600
  },
  {
    data: 10700
  },
  {
    data: 10800
  },
  {
    data: 10900
  },
  {
    data: 11000
  },
  {
    data: 11500
  },
  {
    data: 11600
  },
];

export default function s() {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h4>This month earnings</h4>
          <h1>$683.9</h1>
          <div className="growth">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#ffc107"
              fill="#8068233e"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 20rem;
    ${cardStyle}
    padding: 2rem 0 0 0;
      .top {
        display:flex;
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
        h1 {
          font-size: 2rem;
          .growth {
            background-color:#d7e41e1d;
            padding: 0.5rem;
            border-radius: 1rem;
            transition: 0.3s ease-in-out;
            &:hover {
                background-color:#ffc107;
                span {
                  color:black;
                 }
            }
          }
          span {
            color:#ffc107;

          }
        }
      }
     .chart {
       height: 70%;
       .recharts-default-tooltip {
          background-color: black !important;
          border-color: black !important;
       }
        
     }
  
  `;
