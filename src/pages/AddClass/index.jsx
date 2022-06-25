import React, { useState } from "react";
import Select from "react-select";

/** Components */
import Container from "../../components/Layouts/Container";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Form from "../../components/Form";

/** Icons */
import { IoIosPeople } from "react-icons/io";

/** Style */
import styles from "./style.module.css";

const AddClass = () => {

  const tomorrow = new Date(new Date());

  tomorrow.setDate(tomorrow.getDate() + 1);

  const temp =
    tomorrow.getFullYear() +
    "-" +
    String(tomorrow.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(tomorrow.getDate()).padStart(2, "0");

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
      placeholder: "Type class capacity...",
      value: "",
    },
  ]);

  const [descriptionInput, setDescriptionInput] = useState([
    {
      label: "Description",
      name: "description",
      type: "textarea",
      placeholder: "Type class details...",
      value: "",
    },
  ]);

  const [scheduleInput, setScheduleInput] = useState([
    {
      label: "Schedule",
      name: "schedule",
      type: "date",
      placeholder: "dd/mm/yy",
      value: "",
      min: temp,
    },
  ]);
  const [priceInput, setPriceInput] = useState([
    {
      label: "Price",
      name: "price",
      type: "number",
      placeholder: "Type class price...",
      value: "",
    },
  ]);

  const options = [
    [], //room
    [
      { value: 1, label: "Laverna" }, // instructure
      { value: 2, label: "Brynn" },
      { value: 3, label: "Doralynn" },
    ],
    [], //type
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

  const handleSave = () => { };

  return (
    <>
      <PageTitle icon={<IoIosPeople />} title="Class" />
      <Container title="Add New Class">
        <div className="container no-pl mt-4">
          <form onSubmit={handleSave}>
            <div className="row">
              <div className="col">
                <label className="label">Room</label>
                <Select
                  className={styles.select_input}
                  defaultValue={roomSelectedOption}
                  onChange={setRoomSelectedOption}
                  options={options[0]}
                  placeholder="Room"
                />

                <label className="label">Instructure</label>
                <Select
                  className={styles.select_input}
                  defaultValue={instructureOption}
                  onChange={setInstructureSelectedOption}
                  options={options[1]}
                  placeholder="Instructure"
                />

                <label className="label">Type</label>
                <Select
                  className={styles.select_input}
                  defaultValue={typeSelectedOption}
                  onChange={setTypeSelectedOption}
                  options={options[2]}
                  placeholder="Type"
                />
                <span className={styles.input}>
                  <Form
                    inputs={descriptionInput}
                    setInputs={setDescriptionInput}
                  />
                </span>
              </div>
              <div className="col">
                <label className="label">Category</label>
                <Select
                  className={styles.select_input}
                  defaultValue={categorySelectedOption}
                  onChange={setCategorySelectedOption}
                  options={options[3]}
                  placeholder="Category"
                />

                <label className="label">Status</label>
                <Select
                  className={styles.select_input}
                  defaultValue={statusSelectedOption}
                  onChange={setStatusSelectedOption}
                  options={options[4]}
                  placeholder="Status"
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
    </>
  );
};

export default AddClass;
