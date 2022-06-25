import React from "react";

/** Styles */
import styles from "./style.module.css";

const ContentCard = ({ lists }) => {
  return (
    <div className={styles.container}>
      <h5>List of Content</h5>
      {lists?.length > 0 ? (
        <>
          {lists?.map((list) => {
            return (
              <div className={styles.wrapper} key={list?.id}>
                <p className={styles.title}>{list.title}</p>
                <p className={styles.link}>Link Youtube: <span>{list.link}</span></p>
              </div>
            );
          })}
        </>
      ) : (
        <div className={styles.wrapper}>
          <h5 className={styles.title}>{lists.title}</h5>
          <p className={styles.link}>Link Youtube: {lists.link}</p>
        </div>
      )}
    </div>
  );
};

export default ContentCard;
