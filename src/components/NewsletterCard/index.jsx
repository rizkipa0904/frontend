import React from "react";

/** Styles */
import styles from "./style.module.css";

const NewsLetterCard = ({ lists }) => {
  return (
    <div className={styles.container}>
      <h5>List of Newsletter</h5>
      {lists?.length > 0 ? (
        <>
          {lists?.map((list) => {
            return (
              <div className={styles.wrapper} key={list?.id}>
                <p className={styles.title}>{list.title}</p>
                <p className={styles.content}>{list.content}</p>
                <p className={styles.time}>Published: 20 June 2022</p>
              </div>
            );
          })}
        </>
      ) : (
        <div className={styles.wrapper}>
          <h5 className={styles.title}>{lists.title}</h5>
          <p className={styles.content}>{lists.content}</p>
        </div>
      )}
    </div>
  );
};

export default NewsLetterCard;
