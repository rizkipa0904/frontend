import { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/** Styles */
import styles from "./style.module.css";

/** Icon */
import { FaUserCircle } from "react-icons/fa";

/** Components */
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Table from "../../components/Table";

const User = () => {
  const navigate = useNavigate();

  const [userSelectedOption, setUserSelectedOption] = useState([]);
  const [userOption, setUserOption] = useState([{ value: 0, label: "All" }]);
  const [datas, setDatas] = useState([]);
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get("https://62a1942bcc8c0118ef4e77a7.mockapi.io/capstone-10/api/user")
      .then((response) => {
        setDatas(response.data);
        setShow(response.data);
      });
  }, []);

  useEffect(() => {
    setUserOption([]);

    datas?.map((user) => {
      let temp = { value: user.id, label: `${user.id} - ${user.name}` };
      return setUserOption((oldData) => [...oldData, temp]);
    });
  }, [datas]);

  useEffect(() => {
    if (userSelectedOption.value === 0) {
      axios
        .get("https://62a1942bcc8c0118ef4e77a7.mockapi.io/capstone-10/api/user")
        .then((response) => {
          setShow(response.data);
        });
    } else {
      axios
        .get(
          `https://62a1942bcc8c0118ef4e77a7.mockapi.io/capstone-10/api/user/${userSelectedOption.value}`
        )
        .then((response) => {
          setShow([response.data]);
        });
    }
  }, [userSelectedOption]);

  const handleDelete = (id) => {
    // Delete
  };

  const handleDetail = (id) => {
    navigate(`details-user/${id}`);
  };

  return (
    <div className={styles.content_wrapper}>
      <main>
        <PageTitle icon={<FaUserCircle />} title="User" />
        <section className={styles.top_section}>
          <div className={styles.filter_wrapper_top}>
            <Select
              className={styles.select_input}
              defaultValue={userSelectedOption}
              onChange={setUserSelectedOption}
              options={userOption}
              placeholder="User"
            />

            <Button
              className={styles.btn_add}
              text="+ Add New User"
              type="button"
              onClick={() => navigate("add-user")}
            />
          </div>
        </section>
        <section>
          {show ? (
            <Table
              name="user"
              headers={["ID", "Name", "Contact", "Email", "Address"]}
              datas={show}
              handleDetail={handleDetail}
              handleDelete={() => {}}
            />
          ) : (
            <Table
              name="user"
              headers={["ID", "Name", "Contact", "Email", "Address"]}
              datas={datas}
              handleDetail={handleDetail}
              handleDelete={() => {}}
            />
          )}
        </section>
      </main>
    </div>
  );
};

export default User;
