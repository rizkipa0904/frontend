import { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/** Styles */
import styles from "./style.module.css";

/** Icon */
import { MdVpnKey } from "react-icons/md";

/** Components */
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Table from "../../components/Table";

const Admin = () => {
  const navigate = useNavigate();

  const [adminSelectedOption, setAdminSelectedOption] = useState([]);
  const [adminOption, setAdminOption] = useState([{ value: 0, label: "All" }]);
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
    setAdminOption([]);

    datas?.map((admin) => {
      let temp = { value: admin.id, label: `${admin.id} - ${admin.name}` };
      return setAdminOption((oldData) => [...oldData, temp]);
    });
  }, [datas]);

  useEffect(() => {
    if (adminSelectedOption.value === 0) {
      axios
        .get("https://62a1942bcc8c0118ef4e77a7.mockapi.io/capstone-10/api/user")
        .then((response) => {
          setShow(response.data);
        });
    } else {
      axios
        .get(
          `https://62a1942bcc8c0118ef4e77a7.mockapi.io/capstone-10/api/user/${adminSelectedOption.value}`
        )
        .then((response) => {
          setShow([response.data]);
        });
    }
  }, [adminSelectedOption]);

  const handleDelete = (id) => {
    // Delete
  };

  const handleDetail = (id) => {
    navigate(`details-admin/${id}`);
  };

  return (
    <div className={styles.content_wrapper}>
      <main>
        <PageTitle icon={<MdVpnKey />} title="Manage Admin" />
        <section className={styles.top_section}>
          <div className={styles.filter_wrapper_top}>
            <Select
              className={styles.select_input}
              defaultValue={adminSelectedOption}
              onChange={setAdminSelectedOption}
              options={adminOption}
              placeholder="Admin"
            />

            <Button
              className={styles.btn_add}
              text="+ Add New Admin"
              type="button"
              onClick={() => navigate("add-admin")}
            />
          </div>
        </section>
        <section>
          {show ? (
            <Table
              name="admin"
              headers={["ID", "Name", "Contact", "Email", "Address"]}
              datas={show}
              handleDetail={handleDetail}
              handleDelete={() => {}}
            />
          ) : (
            <Table
              name="admin"
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

export default Admin;
