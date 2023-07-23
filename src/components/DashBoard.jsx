import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import '../assets/scss/components/DashBoard.scss'
import { Space } from "antd";
import { useEffect, useState } from "react";
import DashBoardCard from "./DashBoardCard";
import { dataProducts, dataRevenue, dataUser } from "../data";
import BarChartBox from "./BarChartBox";
import PieChartBox from "./PieChartBox";
import AreaChartBox from "./AreaChartBox";

function Dashboard() {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-sum">
        <Space size={20} direction="vertical">
          {/* <Typography.Title level={4}>Trang chủ</Typography.Title> */}
          <Space direction="horizontal"
            style={{
              display: "flex",
              justifyContent: 'space-around',
              width: '100%'
            }}>
            <DashBoardCard
              icon={
                <ShoppingCartOutlined
                  style={{
                    color: "green",
                    backgroundColor: "rgba(16, 236, 16, 0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Số đơn đặt hàng"}
              value="500"
              data={dataUser}
            />
            <DashBoardCard
              icon={
                <ShoppingOutlined
                  style={{
                    color: "blue",
                    backgroundColor: "rgba(21, 202, 238, 0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Số hàng tồn kho"}
              value='12354'
              data={dataProducts}
            />
            <DashBoardCard
              icon={
                <UserOutlined
                  style={{
                    color: "purple",
                    backgroundColor: "rgba(203, 127, 236, 0.5)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Tổng số khách hàng"}
              value="1500"
              data={dataUser}
            />
            <DashBoardCard
              icon={
                <DollarCircleOutlined
                  style={{
                    color: "red",
                    backgroundColor: "rgba(244, 12, 12, 0.2)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Doanh thu"}
              value="151269999"
              data={dataRevenue}
            />

          </Space>
        </Space>
      </div>
      <div className="dashboard-main-charts">
        <div className="dashboard-barchart">
          <BarChartBox />
        </div>
        <div className="dashboard-areachart">
          <AreaChartBox />
        </div>
        <div className="dashboard-piechart">
          <PieChartBox />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
