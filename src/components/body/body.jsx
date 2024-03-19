import styles from "../body/body.module.css";
import React, { useState , useRef } from "react";

function Body() {
  let name;
  let email;
  let text;
  let shouldRenderDiv=false;

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Text, setText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const formRef = useRef(null); // Ref to the form element

 

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    name = event.target[0].value;
    email = event.target[1].value;
    text = event.target[2].value;

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log(name);
    console.log(email);
    console.log(text);

    if (name && email && text) {
      setShowResult(true); // If all fields are filled out, show the result
    }
  };


  const handleReset=() =>{

    setName('');
    setEmail('');
    setText('');
    setShowResult(false);
    // Reset the form using formRef
    formRef.current.reset();

  }

  return (
    <div className={styles.bodyContainer}>
      <h2>CONTACT US</h2>
      <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
      <div className={styles.FormContainer}>
        <div className={styles.Form}>
          <div className={styles.formButton}>
            <button >VIA SUPPORT CHAT</button>
            <button >VIA CALL</button>
          </div>

          <br />

          <div className={styles.EmailButton}>
            <button>VIA EMAIL FORM</button>
          </div>

          <form ref={formRef} onSubmit={onSubmit}>
            <div className={styles.InputValueForm}>
              <label>Name</label>
              <input type="text" />

              <label>Email</label>
              <input type="email" />

              <label>Text</label>
              <input className={styles.text} type="text" />

              <button>SUBMIT</button>
              
            </div>
          </form>
        </div>

        <div className={styles.FormImage}>
          <img src="assets/photo.svg" alt="Image" />
        </div>
      </div>

       
      {showResult && (
        <div>
          <p>Name: {Name}</p>
          <p>Email: {Email}</p>
          <p>Text: {Text}</p>
          <button onClick={handleReset} >RESET</button>
          
        </div>
      )}
      
    </div>
  );
}

export default Body;
