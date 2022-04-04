import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "./Dashboard.css";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="dbcontainer">
      <div>
        <h3>INVESTMENT VS REVENUE</h3>
        <br />
        <div>
          <LineChart
            width={400}
            height={250}
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
      <div>
        <h3>MONTH WISE SELL</h3>
        <br />
        <div>
          <AreaChart
            width={400}
            height={250}
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="sell"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </div>

      <div>
        <h3>MONTH WISE SELL</h3>
        <br />
        <div>
          <BarChart width={400} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="sell" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
      <div>
        <h3>MONTH WISE SELL</h3>
        <br />
        <div>
          <PieChart width={400} height={250}>
            <Pie
              data={data}
              dataKey="investment"
              nameKey="month"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={data}
              dataKey="investment"
              nameKey="month"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
