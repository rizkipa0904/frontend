import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

/** Icon */
import { FaUserCircle } from "react-icons/fa";

/** Components */
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Container from "../../components/Layouts/Container";
import Details from "../../components/Details";
import Form from "../../components/Form";

const AddUser = () => {
  const navigate = useNavigate();
  
  const handleSave = () => {
    navigate("/user");
  };

  const [firstInput, setFirstInput] = useState([
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Type user name...",
      value: "",
    },
    {
      label: "Username",
      name: "username",
      type: "text",
      placeholder: "Type user username...",
      value: "",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Type user email...",
      value: "",
    },
  ]);

  const [secondInput, setSecondInput] = useState([
    {
      label: "Contact",
      name: "contact",
      type: "text",
      placeholder: "Type user contact...",
      value: "",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "Type user address...",
      value: "",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Type user password...",
      value: "",
    },
  ]);

  return (
    <>
      <PageTitle icon={<FaUserCircle />} title="User" />
      <Container title="Add New Account">
        <form onSubmit={handleSave}>
          <div className="row">
            <div className="col">
              <Form inputs={firstInput} setInputs={setFirstInput} />
            </div>
            <div className="col">
              <Form inputs={secondInput} setInputs={setSecondInput} />
              <span className={styles.button}>
                <Button
                  text="Save"
                  type="submit"
                  onClick={(e) => {
                    handleSave(e);
                  }}
                />
              </span>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default AddUser;
