import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Container from "../../components/Layouts/Container";
import PageTitle from "../../components/PageTitle";
import Details from "../../components/Details";
import Form from "../../components/Form";
import Button from "../../components/Button";
import Table from "../../components/Table";

/** Icon */
import { IoIosPeople } from "react-icons/io";

/** React js  chart */
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const DetailsClass = () => {
  const navigate = useNavigate();

  const props = {
    id: 1123,
    type: "Yoga",
    room: "A",
    instructure: "Ahmad Fauze",
    contact: "08219398",
    address: "Jakarta",
    status: "Active",
    category: 1,
    members: 10,
    capacity: 30,
    schedule: "2022-06-22",
    price: 100000,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat odio, nobis impedit maiores nemo consequuntur rerum cupiditate porro suscipit quos accusamus? Omnis velit, tempora ea magni blanditiis perferendis consectetur.",
  };

  const percentage = Math.round((props.members / props.capacity) * 100);

  const rest = props.capacity - props.members;

  const [roomSelectedOption, setRoomSelectedOption] = useState(null);
  const [instructureOption, setInstructureSelectedOption] = useState(null);
  const [typeSelectedOption, setTypeSelectedOption] = useState(null);
  const [categorySelectedOption, setCategorySelectedOption] = useState(null);
  const [statusSelectedOption, setStatusSelectedOption] = useState(null);

  const [capacityInput, setCapacityInput] = useState([
    {
      label: "Capacity",
      name: "capacity",
      type: "number",
      placeholder: props.capacity,
      value: props.capacity,
    },
  ]);

  const [descriptionInput, setDescriptionInput] = useState([
    {
      label: "Description",
      name: "description",
      type: "textarea",
      placeholder: props.description,
      value: props.description,
    },
  ]);

  const [scheduleInput, setScheduleInput] = useState([
    {
      label: "Schedule",
      name: "schedule",
      type: "date",
      placeholder: props.schedule,
      value: props.schedule,
    },
  ]);

  const [priceInput, setPriceInput] = useState([
    {
      label: "Price",
      name: "price",
      type: "number",
      placeholder: props.price,
      value: props.price,
    },
  ]);

  const [data, setData] = useState({
    datasets: [
      {
        data: [props.members, rest],
        backgroundColor: ["#0583d2", "#E8F4FC"],
      },
    ],
    labels: ["Members", "Available"],
  });

  let priceIDR = Intl.NumberFormat("en-ID");

  const options = [
    [
      { value: 1, label: "A" },
      { value: 2, label: "B" },
    ], //room
    [
      { value: 1, label: "Laverna" }, // instructure
      { value: 2, label: "Brynn" },
      { value: 3, label: "Doralynn" },
      { value: 4, label: "Ahmad Fauze" },
    ],
    [
      { value: 1, label: "Yoga" },
      { value: 2, label: "Zumba" },
    ], //type
    [
      { value: 1, label: "Online" }, //category
      { value: 0, label: "Offline" },
    ],
    [
      { value: "all", label: "All" }, //status
      { value: 1, label: "Active" },
      { value: 0, label: "Non-Active" },
    ],
  ];
  const lists = [
    {
      id: 1,
      name: "Duff",
      status: false,
      created_at: "05/08/2022",
    },
    {
      id: 2,
      name: "Hailee",
      status: true,
      created_at: "04/30/2022",
    },
    {
      id: 3,
      name: "Angele",
      status: true,
      created_at: "08/11/2021",
    },
    {
      id: 4,
      name: "Philippe",
      status: true,
      created_at: "10/11/2021",
    },
    {
      id: 5,
      name: "Tymon",
      status: false,
      created_at: "11/07/2021",
    },
    {
      id: 6,
      name: "Verile",
      status: true,
      created_at: "08/27/2021",
    },
    {
      id: 7,
      name: "Eudora",
      status: true,
      created_at: "01/16/2022",
    },
    {
      id: 8,
      name: "Harland",
      status: true,
      created_at: "11/22/2021",
    },
    {
      id: 9,
      name: "Evyn",
      status: false,
      created_at: "10/09/2021",
    },
    {
      id: 10,
      name: "Darwin",
      status: true,
      created_at: "12/05/2021",
    },
  ];
  const handleSave = () => {
    //save to database
    navigate("/class");
  };

  return (
    <div className={styles.content_wrapper}>
      <PageTitle icon={<IoIosPeople />} title="Class" />
      <Container title={"Details Class"}>
        <div className="container no-pl mt-2">
          <div className="row">
            <div className="col">
              <Details title={"ID Class"} text={props.id} />
              <Details title={"Type"} text={props.type} />
              <Details title={"Room"} text={props.room} />
              <Details title={"Instructure"} text={props.instructure} />
            </div>
            <div className="col">
              <Details title={"Contact Instructure"} text={props.contact} />

              <Details title={"Status"} text={props.status} />
              {props.category === 1 ? (
                <Details title={"Category"} text={"Online"} />
              ) : (
                <Details title={"Category"} text={"Offline"} />
              )}
            </div>
            <div className="col">
              {props.members > 1 ? (
                <Details
                  title={"Total Members"}
                  text={`${props.members} persons`}
                />
              ) : (
                <Details
                  title={"Total Members"}
                  text={`${props.members} person`}
                />
              )}
              <Details
                title={"Price"}
                text={`Rp. ${priceIDR.format(props.price)}`}
              />
              <Details title={"Held On"} text={props.schedule} />
            </div>
          </div>
        </div>
      </Container>
      <Container title={"Edit Class"}>
        <div className="container no-pl mt-4">
          <form onSubmit={handleSave}>
            <div className="row">
              <div className="col">
                <label className="label mt-3">Room</label>
                <Select
                  className={`mt-3 ${styles.select_input}`}
                  defaultValue={roomSelectedOption}
                  onChange={setRoomSelectedOption}
                  options={options[0]}
                  placeholder={props.room}
                />

                <label className="label mt-3">Instructure</label>
                <Select
                  className={`mt-3 ${styles.select_input}`}
                  defaultValue={instructureOption}
                  onChange={setInstructureSelectedOption}
                  options={options[1]}
                  placeholder={props.instructure}
                />

                <label className="label mt-3">Type</label>
                <Select
                  className={`mt-3 ${styles.select_input}`}
                  defaultValue={typeSelectedOption}
                  onChange={setTypeSelectedOption}
                  options={options[2]}
                  placeholder={props.type}
                />
                <span className={styles.input}>
                  <Form
                    inputs={descriptionInput}
                    setInputs={setDescriptionInput}
                  />
                </span>
              </div>
              <div className="col">
                <label className="label mt-3">Category</label>
                <Select
                  className={`mt-3 ${styles.select_input}`}
                  defaultValue={categorySelectedOption}
                  onChange={setCategorySelectedOption}
                  options={options[3]}
                  placeholder={props.category}
                />

                <label className="label mt-3">Status</label>
                <Select
                  className={`mt-3 ${styles.select_input}`}
                  defaultValue={statusSelectedOption}
                  onChange={setStatusSelectedOption}
                  options={options[4]}
                  placeholder={props.status}
                />
                <span className={styles.input}>
                  <Form inputs={capacityInput} setInputs={setCapacityInput} />
                </span>
                <Form inputs={scheduleInput} setInputs={setScheduleInput} />
                <Form inputs={priceInput} setInputs={setPriceInput} />
              </div>
            </div>

            <span className={styles.button}>
              <Button
                text="Save"
                type="submit"
                onClick={(e) => {
                  handleSave(e);
                }}
              />
            </span>
          </form>
        </div>
      </Container>

      <PageTitle icon={<IoIosPeople />} title="Class Members" />
      <div className={styles.wrapper}>
        <span className={styles.left}>
          <Container>
            <Table
              headers={["ID", "Name", "Status", "Joined At"]}
              datas={lists}
              name="class"
            />
          </Container>
        </span>

        <section className={styles.doughnut}>
          <h5>Current Students</h5>
          <Doughnut data={data} />
          <div className={styles.donut_inner}>
            <h3>{percentage} %</h3>
            <h5>Available</h5>
          </div>
          <div className={styles.info}>
            <b>Capactiy : </b> {props.capacity} people
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailsClass;
