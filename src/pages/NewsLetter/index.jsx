import { useState } from "react";

/** Component */
import Button from "../../components/Button";
import Form from "../../components/Form";
import Container from "../../components/Layouts/Container";
import PageTitle from "../../components/PageTitle";
import NewsLetterCard from "../../components/NewsletterCard";

/** Styles */
import styles from "./style.module.css";

/** Icons */
import { TiNews } from "react-icons/ti";

const Newsletter = () => {
  const [inputs, setInputs] = useState([
    {
      label: "",
      name: "title",
      type: "text",
      placeholder: "Type your Title",
      value: "",
    },
    {
      label: "",
      name: "content",
      type: "textarea",
      placeholder: "Type your text here",
      value: "",
    },
  ]);

  const [lists, setLists] = useState([
    {
      id: 1,
      title: "About Your Privacy",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, earum expedita doloribus, nisi eius id placeat delectus vitae corporis a reprehenderit beatae accusamus. Saepe excepturi velit autem ab exercitationem ea.",
    },
    {
      id: 2,
      title: "About Your Privacy",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, earum expedita doloribus, nisi eius id placeat delectus vitae corporis a reprehenderit beatae accusamus. Saepe excepturi velit autem ab exercitationem ea.",
    },
  ]);

  const handleClick = () => {
    //
  };

  return (
    <>
      <PageTitle icon={<TiNews />} title="Newsletter" />
      <div className={styles.container}>
        <div className={styles.head}>
          <h5>Add New Newsletter</h5>
          <Button text="Send" type="submit" onClick={() => handleClick()} />
        </div>
        <div className={styles.wrapper}>
          <Form inputs={inputs} setInputs={setInputs} />
        </div>
      </div>
      <Container>
        <NewsLetterCard lists={lists} />
      </Container>
    </>
  );
};

export default Newsletter;
