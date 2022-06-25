import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

/** Components */
import Container from "../../components/Layouts/Container";
import PageTitle from "../../components/PageTitle";
import Details from "../../components/Details";
import Button from "../../components/Button";

/** Icon */
import { MdEventAvailable } from "react-icons/md";

/** Styles */
import styles from "./style.module.css";

const DetailsBooking = () => {

  const navigate = useNavigate();

  const [userSelectedOption, setUserSelectedOption] = useState(null);
  const [classSelectedOption, setClassSelectedOption] = useState(null);
  const [statusSelectedOption, setStatusSelectedOption] = useState(null);

  const props = {
    id: 1123,
    class: "A",
    userID: 1,
    category: 1,
    user: "Genta Fatuh",
    instructure: "Ahmad Fauze",
    address: "Jakarta",
    status: "Active",
    schedule: "2022-06-22",
    price: 100000,
  };

  let priceIDR = Intl.NumberFormat("en-ID");

  const options = [
    [], //class
    [
      { value: "all", label: "All" },
      { value: 1, label: "Active" },
      { value: 0, label: "Non-Active" },
    ],
    [
      //user
    ],
  ];

  const tomorrow = new Date(new Date());
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleSave = () => {
    navigate("/booking");
  };

  return (
    <>
      <PageTitle icon={<MdEventAvailable />} title="Booking" />
      <Container title={"Details Booking"}>
        <div className="container no-pl mt-2">
          <div className="row">
            <div className="col">
              <Details title={"Booking ID"} text={props.id} />
              <Details title={"Booking Class"} text={props.class} />
              <Details
                title={"User"}
                text={`${props.userID} - ${props.user}`}
              />
            </div>
            <div className="col">
              <Details title={"Instructure"} text={props.instructure} />
              {props.category === 1 ? (
                <Details title={"Category"} text={"Online"} />
              ) : (
                <Details title={"Category"} text={"Offline"} />
              )}
              <Details title={"Address"} text={props.address} />
            </div>
            <div className="col">
              <Details title={"Schedule"} text={props.schedule} />
              <Details
                title={"Price"}
                text={`Rp. ${priceIDR.format(props.price)}`}
              />
            </div>
          </div>
        </div>
      </Container>
      <Container title="Edit Booking">
        <form onSubmit={handleSave}>
          <div className="row">
            <div className="col">
              <label className="label mt-3">Class</label>
              <Select
                className={`mt-3 ${styles.select_input}`}
                defaultValue={classSelectedOption}
                onChange={setClassSelectedOption}
                options={options[0]}
                placeholder={""}
              />
              <label className="label mt-3">Status</label>
              <Select
                className={`mt-3 ${styles.select_input}`}
                defaultValue={statusSelectedOption}
                onChange={setStatusSelectedOption}
                options={options[1]}
                placeholder={""}
              />
            </div>
            <div className="col">
              <label className="label mt-3">User</label>
              <Select
                className={`mt-3 ${styles.select_input}`}
                defaultValue={userSelectedOption}
                onChange={setUserSelectedOption}
                options={options[2]}
                placeholder={""}
              />
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
      </Container>
    </>
  );
};

export default DetailsBooking;
