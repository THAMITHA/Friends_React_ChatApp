import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../assets/HomePage.module.css";

import firebase from "firebase/app";
import "firebase/firestore";

export default function HomePage() {
  const navigate = useNavigate();
  const [userID, setUserID] = useState("");
  const [toggleMe, setToogleMe] = useState(true);

  async function onSubmitHandler(event) {
    event.preventDefault();
    const snapshot = await firebase
      .firestore()
      .collection("friends")
      .where("friendId", "==", userID)
      .get();
    if (snapshot.docs.length > 0) {
      console.log(snapshot.docs);
      console.log(snapshot.docs[0]);
      const doc = snapshot.docs[0].data();
      const docId = snapshot.docs[0].id;

      navigate(`/reactChatWeb/${doc.friendId}`);
      await firebase
        .firestore()
        .collection("friends")
        .doc(docId)
        .update({ friendOnline: true });
    } else {
      console.log("No Such Id exist");
    }
  }

  return (
    <React.Fragment>
      <main className={style.homeMain}>
        <h1 style={styles.heading}>Friends_Chat_Web</h1>
        <section className={style.homeSection}>
          <img
            className={style.homeImg}
            src="https://media3.giphy.com/media/8a2k6QNzq0BHJvoxeA/200w.webp?cid=ecf05e472nh509ge87nk1tx9bu7jmo6y6wlwbb1j22b6p4zm&rid=200w.webp&ct=g"
            alt="friends"
          ></img>

          <form className={style.homeForm} onSubmit={onSubmitHandler}>
            <h1>"Communication Is Very Important"</h1>    
            <small>
              <i>
                "In order for any relationship to stand the test of time, solid
                lines of communication must be established in order for both
                parties to feel fully understood and have a safe place to voice
                their true feelings."
              </i>
              <br></br>
              <strong>
                <i>- Tanya</i>
              </strong>
            </small>
            <input
              onChange={(e) => {
                setUserID(e.target.value);
              }}
              value={userID}
              type="text"
              className="form-control my-3"
              id="inputEmail3"
              placeholder="Enter ID"
              required
            />
            <div className="d-flex justify-content-between w-100">
              <button type="submit" className="btn btn-outline-dark">
                Chat Friends{" "}
              </button>
              <button
                type="button"
                onClick={() => {
                  setUserID("");
                }}
                className="btn btn-outline-danger"
              >
                Clear{" "}
              </button>
            </div>
            <div className="w-100 text-center">
              <button
                onClick={() => {
                  setToogleMe((preVal) => {
                    return !preVal;
                  });
                }}
                type="button"
                className="btn btn-primary my-3"
                style={{ fontWeight: "bold" }}
              >
                ?{" "}
              </button>
              <div className={style.friendsId} hidden={toggleMe ? true : false}>
                <p> Friends Ids </p>
                <small> 2Ben | 10Jeo | 12Lily | 19Shally </small>
              </div>
            </div>
          </form>
        </section>
      </main>
    </React.Fragment>
  );
}
const styles={
    heading:{
        color:"white"
    }
}