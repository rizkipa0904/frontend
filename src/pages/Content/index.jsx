import React, { useState } from "react";

/** Component */
import Button from "../../components/Button";
import Form from "../../components/Form";
import Container from "../../components/Layouts/Container";
import PageTitle from "../../components/PageTitle";
import ContentCard from "../../components/ContentCard";

/** Styles */
import styles from "./style.module.css";

/** Icons */
import { MdLibraryAdd } from "react-icons/md";

const Content = () => {
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
      placeholder: "Type your link youtube here",
      value: "",
      content: true,
    },
  ]);

  const [lists, setLists] = useState([
    {
      id: 1,
      title: "When You Burn Fat, Where Does it Go?",
      link: "https://youtu.be/C8ialLlcdcw"
    },
    {
      id: 2,
      title: "When You Burn Fat, Where Does it Go?",
      link: "https://youtu.be/C8ialLlcdcw"
    },
  ]);

  const handleClick = () => {
    //
  };

  return (
    <>
      <PageTitle icon={<MdLibraryAdd />} title="Content" />
      <div className={styles.container}>
        <div className={styles.head}>
          <h5>Add New Content</h5>
          <Button text="Send" type="submit" onClick={() => handleClick()} />
        </div>
        <div className={styles.wrapper}>
          <Form inputs={inputs} setInputs={setInputs} />
        </div>
      </div>
      <Container>
        <ContentCard lists={lists} />
      </Container>
    </>
  );
};

export default Content;
