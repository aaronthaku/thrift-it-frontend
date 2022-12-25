import React from "react";
import { Link } from "react-router-dom";
import { AiFillRightCircle } from "react-icons/ai";
import users from "../../assets/users.svg";
import user from "../../assets/user.svg";
import setting from "../../assets/setting.svg";
import sales from "../../assets/sales.svg";
import product from "../../assets/product.svg";
import category from "../../assets/category.svg";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import "./dashboardHome.scss";
const barChartData = [
  { month: "Jan", users: 10 },
  { month: "Feb", users: 25 },
  { month: "Mar", users: 35 },
  { month: "Apr", users: 50 },
  { month: "May", users: 35 },
  { month: "Jun", users: 60 },
  { month: "Jul", users: 76 },
];
const LineChartData = [
  { month: "Jan", products: 5 },
  { month: "Feb", products: 17 },
  { month: "Mar", products: 25 },
  { month: "Apr", products: 20 },
  { month: "May", products: 48 },
  { month: "Jun", products: 58 },
  { month: "Jul", products: 79 },
];

const DashboardHome = () => {
  return (
    <>
      <h1 className="title">Admin Dashboard</h1>
      <div className="dashboard-home">
        <div className="dashboard-home__cards">
          <DashboardCard
            heading="users"
            icon={users}
            count={150}
            link={"/users"}
          />
          <DashboardCard
            heading="Products"
            icon={product}
            count={600}
            link={"/books"}
          />
          <DashboardCard
            heading="sales"
            icon={sales}
            count={500}
            link={"/sales"}
          />
        </div>
        <div className="dashboard-home__cards">
          <DashboardCard
            heading="Category"
            icon={category}
            count={18}
            link={"/sales"}
          />
          <DashboardCard
            heading="Profile"
            icon={user}
            // count={18}
            link={"/sales"}
          />
          <DashboardCard
            heading="Settings"
            icon={setting}
            //   count={18}
            link={"/sales"}
          />
        </div>

        {/* <div className="dashboard-charts">
          <div className="dashboard-charts__chart">
            <h1 className="dashboard-charts__chart--heading">Users Growth</h1>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barChartData} className="barchart">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#045e17" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="dashboard-charts__chart">
            <h1 className="dashboard-charts__chart--heading">
              Product Traffic
            </h1>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={LineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="products" stroke="#045e17" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div> */}
      </div>
    </>
  );
};

const DashboardCard = ({ heading, icon, count, link }) => {
  return (
    <div className="dash-card">
      <div className="dash-card__heading">
        <span className="dash-card__heading--text">{heading}</span>
        <Link to={link}>
          <AiFillRightCircle className="dash-card__heading--icon" />
        </Link>
      </div>
      <div className="dash-card__icon">
        <img src={icon} alt={heading} />
      </div>
      <p className="dash-card__count">
        {`${heading === "sales" ? "Rs. " : ""}`}
        {count}
      </p>
    </div>
  );
};

export default DashboardHome;
