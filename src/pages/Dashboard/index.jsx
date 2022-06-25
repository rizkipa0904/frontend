import React, { useState } from "react";

/** Icon */
import { navItems } from "../../utils/navItems";

/** Styles */
import styles from "./style.module.css";

/** Components */
import PageTitle from "../../components/PageTitle";
import Information from "../../components/Information";
import CustomCalendar from "../../components/Calendar";
import Table from "../../components/Table";
import { Line } from "react-chartjs-2";

const Dashboard = () => {
  const [sumMember, setSumMember] = useState(32);
  const [sumUser, setSumUser] = useState(52);
  const [sumBooking, setSumBooking] = useState(24);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total User",
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
        borderColor: "rgba(236, 155, 39)",
      },
      {
        label: "Total Member",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "rgba(54, 159, 0)",
      },
    ],
  };
  const [datas, setDatas] = useState([
    {
      class: "Cardio - Online",
      member: 20,
    },
    {
      class: "Cardio - Online",
      member: 20,
    },
  ]);
  const [trainerData, setTrainerData] = useState([
    {
      id: 1,
      name: "Averill",
      phone: "689-252-6374",
      address: "9 North Park",
    },
    {
      id: 2,
      name: "Prudy",
      phone: "333-547-0419",
      address: "04 Bluejay Court",
    },
    {
      id: 3,
      name: "Jemmie",
      phone: "606-420-3354",
      address: "27 Reindahl Plaza",
    },
    {
      id: 4,
      name: "Richart",
      phone: "330-302-9271",
      address: "274 Oriole Street",
    },
    {
      id: 5,
      name: "Josias",
      phone: "872-918-8311",
      address: "60111 Alpine Hill",
    },
  ]);
  const [memberData, setMemberData] = useState([
    {
      id: 1,
      class: "Zumba",
      type: "Online",
      member: 20,
    },
    {
      id: 2,
      class: "Yoga",
      type: "Online",
      member: 40,
    },
    {
      id: 3,
      class: "Zumba",
      type: "Online",
      member: 30,
    },
    {
      id: 4,
      class: "Yoga",
      type: "Online",
      member: 40,
    },
  ]);
  return (
    <>
      <PageTitle icon={navItems[0].logo} title="Dashboard" />
      <div className={styles.content_wrapper}>
        <div className={styles.left_wrapper}>
          <div className={styles.info_wrapper}>
            <Information title={"Membership"} icon={navItems[2].logo}>
              {sumMember}
            </Information>
            <Information title={"User"} icon={navItems[1].logo}>
              {sumUser}
            </Information>
            <Information title={"Booking"} icon={navItems[4].logo}>
              {sumBooking}
            </Information>
          </div>
          <div className={styles.container}>
            <h4 className={styles.title}>Analytics</h4>
            <div className={styles.graph_wrapper}>
              <Line data={data} />
            </div>
          </div>
          <div className={styles.container}>
            <h4 className={styles.title}>Trainer</h4>
            <div className={styles.table_wrapper}>
              <Table
                headers={["ID", "Name", "Contact", "Address"]}
                datas={trainerData}
                name="trainer"
              />
            </div>
          </div>
        </div>
        <div className={styles.right_wrapper}>
          <CustomCalendar />
          <div className={styles.container}>
            <div className={styles.side_wrapper}>
              <Table
                headers={["Class", "Member"]}
                datas={memberData}
                name="member"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
