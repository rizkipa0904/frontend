import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

/** Icon */
import { IoIosPeople } from "react-icons/io";

/** Components */
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Table from "../../components/Table";

const Class = () => {
  const navigate = useNavigate();

  const [classSelectedOption, setClassSelectedOption] = useState(null);
  const [instructureOption, setInstructureSelectedOption] = useState(null);
  const [typeSelectedOption, setTypeSelectedOption] = useState(null);
  const [categorySelectedOption, setCategorySelectedOption] = useState(null);
  const [statusSelectedOption, setStatusSelectedOption] = useState(null);

  const options = [
    [],
    [],
    [],
    [
      { value: 0, label: "Online" },
      { value: 1, label: "Offline" },
    ],
    [
      { value: "all", label: "All" },
      { value: 1, label: "Active" },
      { value: 0, label: "Non-Active" },
    ],
  ];

  const handleDelete = (id) => {
    // Delete
  };

  const handleDetail = (id) => {
    // Detail

    navigate("details-class");
  };

  return (
    <div className={styles.content_wrapper}>
      <main>
        <PageTitle icon={<IoIosPeople />} title="Class" />
        <section className={styles.top_section}>
          <div className={styles.filter_wrapper_top}>
            <Select
              className={styles.select_input}
              defaultValue={classSelectedOption}
              onChange={setClassSelectedOption}
              options={options[0]}
              placeholder="Class"
            />
            <Select
              className={styles.select_input}
              defaultValue={instructureOption}
              onChange={setInstructureSelectedOption}
              options={options[1]}
              placeholder="Instructure"
            />
            <Select
              className={styles.select_input}
              defaultValue={typeSelectedOption}
              onChange={setTypeSelectedOption}
              options={options[2]}
              placeholder="Type"
            />
          </div>
          <div className={styles.filter_wrapper_bottom}>
            <div>
              <Select
                className={styles.select_input}
                defaultValue={categorySelectedOption}
                onChange={setCategorySelectedOption}
                options={options[3]}
                placeholder="Category"
              />
              <Select
                className={styles.select_input}
                defaultValue={statusSelectedOption}
                onChange={setStatusSelectedOption}
                options={options[4]}
                placeholder="Status"
              />
            </div>
            <Button
              className={styles.btn_add}
              text="+ Add New Class"
              type="button"
              onClick={() => navigate("add-class")}
            />
          </div>
        </section>
        <section>
          <Table
            headers={[
              "ID Class",
              "Room",
              "Instructure",
              "Type",
              "Category",
              "Status",
            ]}
            datas={[]}
            handleDetail={() => handleDetail()}
            handleDelete={() => { }}
          />
        </section>
      </main>
    </div>
  );
};

export default Class;
