import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

/** Icon */
import { MdVerifiedUser } from "react-icons/md";

/** Components */
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Table from "../../components/Table";

const Membership = () => {
  const navigate = useNavigate();

  const [membershipSelectedOption, setMembershipSelectedOption] = useState(null);

  const [statusSelectedOption, setStatusSelectedOption] = useState(null);

  const options = [
    [],
    [
      { value: 1, label: "1 Month" },
      { value: 3, label: "3 Months" },
      { value: 6, label: "6 Months" },
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

    navigate("details-membership");
  };

  return (
    <div className={styles.content_wrapper}>
      <main>
        <PageTitle icon={<MdVerifiedUser />} title="Membership" />
        <section className={styles.top_section}>
          <div className={styles.filter_wrapper}>
            <Select
              className={styles.select_input}
              defaultValue={membershipSelectedOption}
              onChange={setMembershipSelectedOption}
              options={options[0]}
              placeholder="User"
            />
            <Select
              className={styles.select_input}
              defaultValue={membershipSelectedOption}
              onChange={setMembershipSelectedOption}
              options={options[1]}
              placeholder="Membership"
            />
            <Select
              className={styles.select_input}
              defaultValue={statusSelectedOption}
              onChange={setStatusSelectedOption}
              options={options[2]}
              placeholder="Status"
            />
          </div>
          <Button
            className={styles.btn_add}
            text="+ Add New Member"
            type="button"
            onClick={() => navigate("add-membership")}
          />
        </section>
        <section>
          <Table
            headers={[
              "ID",
              "Name",
              "Contact",
              "Membership",
              "Expired",
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

export default Membership;
