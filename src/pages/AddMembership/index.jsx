import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

/** Components */
import Button from "../../components/Button";
import Container from "../../components/Layouts/Container";
import Form from "../../components/Form";
import PageTitle from "../../components/PageTitle";

/** Styles */
import styles from "./style.module.css";

/** Icon */
import { MdVerifiedUser } from "react-icons/md";

const AddMembership = () => {

  const navigate = useNavigate();
  /**
   * user select options came from api
   * fetch from api then put it in user state
   */

  const [userOption, setUserOption] = useState(null);

  const [membershipSelectedOption, setMembershipSelectedOption] = useState(null);

  const [inputs, setInputs] = useState([
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Type your name...",
      value: "",
    },
    {
      label: "Username",
      name: "username",
      type: "text",
      placeholder: "Type your username...",
      value: "",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Type your email...",
      value: "",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Type your password...",
      value: "",
    },
  ]);

  const [secondInputs, setSecondInputs] = useState([
    {
      label: "Contact",
      name: "contact",
      type: "number",
      placeholder: "Type your phone number...",
      value: "",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "Type your address...",
      value: "",
    },
  ]);

  const options = [
    [
      { value: 1, label: "1 Month" },
      { value: 3, label: "3 Months" },
      { value: 6, label: "6 Months" },
    ],
    [
      { value: 1, label: "Laverna" },
      { value: 2, label: "Brynn" },
      { value: 3, label: "Doralynn" },
    ],
  ];

  const handleSave = (e) => {
    e.preventDefault();
    navigate("/membership");
  };

  return (
    <div className="content_wrapper">
      <PageTitle icon={<MdVerifiedUser />} title="Membership" />
      <Container title={"Add New Membership"}>
        <div className="container no-pl mt-4">
          <form onSubmit={handleSave}>
            <div className="row">
              <div className="col">
                <label className="label">User</label>
                <Select
                  className={styles.select_input}
                  defaultValue={userOption}
                  onChange={setUserOption}
                  options={options[1]}
                  placeholder="User"
                />
              </div>
              <div className="col">
                <label className="label">Membership</label>
                <Select
                  className={styles.select_input}
                  defaultValue={membershipSelectedOption}
                  onChange={setMembershipSelectedOption}
                  options={options[0]}
                  placeholder="Membership"
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
        </div>
      </Container>
      <Container title={"Add New Account & Membership"}>
        <div className="container mt-3 no-pl">
          <form onSubmit={handleSave}>
            <div className="row">
              <div className="col">
                <Form inputs={inputs} setInputs={setInputs} />
              </div>
              <div className="col">
                <Form inputs={secondInputs} setInputs={setSecondInputs} />
                <label className="label mt-4">Membership</label>
                <Select
                  className={`mt-3 ${styles.select_input}`}
                  defaultValue={membershipSelectedOption}
                  onChange={setMembershipSelectedOption}
                  options={options[0]}
                  placeholder="Membership"
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
        </div>
      </Container>
    </div>
  );
};

export default AddMembership;
