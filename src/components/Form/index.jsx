import { useState } from "react";

/** Icons */
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

/** Styles */
import styles from "./style.module.css";

const Form = ({ inputs, setInputs }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      {
        inputs.map((input, inputIdx) => (
          <div className={styles.form_item} key={inputIdx}>
            {input.label !== "" ? <label>{input.label}</label> : <></>}
            <div className={styles.input_wrapper}>
              {
                input.type === "textarea" ?
                  (
                    <textarea
                      value={input.value}
                      name={input.name}
                      placeholder={input.placeholder}
                      rows={input.content ? "2" : "8"}
                      className={styles.textarea}></textarea>
                  )
                  :
                  (
                    <input
                      type={
                        input.type === "password"
                          ? showPassword
                            ? "text"
                            : "password"
                          : input.type
                      }
                      name={input.name}
                      value={input.value}
                      placeholder={input.placeholder}
                      min={input.min}
                      onChange={(e) =>
                        setInputs(
                          [...inputs],
                          (inputs[inputIdx].value = e.target.value)
                        )
                      }
                      required
                    />
                  )}
              {
                input.type === "password" ?
                  (
                    showPassword ?
                      (
                        <AiOutlineEye
                          className={styles.eye}
                          onClick={handleShowPassword}
                        />
                      )
                      :
                      (
                        <AiOutlineEyeInvisible
                          className={styles.eye}
                          onClick={handleShowPassword}
                        />
                      )
                  )
                  :
                  (
                    <></>
                  )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Form;
