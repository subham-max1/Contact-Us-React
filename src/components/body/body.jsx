import styles from "../body/body.module.css";

function Body() {


  const onViaCall=() =>{
    console.log("Iam on call");
  }

  const onViaChat=() =>{
    console.log("Iam on chat");
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
            <button onClick={onViaChat}>VIA SUPPORT CHAT</button>
            <button onClick={onViaCall}>VIA CALL</button>
          </div>

          <br />

          <div className={styles.EmailButton}>
            <button>VIA EMAIL FORM</button>
          </div>
          <div className={styles.InputValueForm}>
            <label>Name</label>
            <input type="text" />

            <label>Email</label>
            <input type="email" />

            <label>Text</label>
            <input className={styles.text} type="text" />
          </div>
        </div>

        <div className={styles.FormImage}>
          <img src="assets/photo.svg" alt="Image" />
        </div>

        
      </div>
      <button>SUBMIT</button>
    </div>
  );
}

export default Body;
