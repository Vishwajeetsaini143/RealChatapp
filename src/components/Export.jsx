import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firbase";

const Export = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  const { currentUser } = useContext(AuthContext);
  console.log("myuserid", data.combineId);


  useEffect(() => {
    getChats();
  }, [currentUser.uid, data.combineId]);

  const getChats = () => {
    const unsub = onSnapshot(doc(db, "userChats", "QhfQE3C8oqZ1kmPm7FKtxuciNsx2NFgMqXR5YOak8es1N2VwYAUpov62"), (doc) => {
      setMessages(doc.data());
      console.log("doc data runn", doc.data());
    });

    return () => {
      unsub();
    };
  };
  console.log("export mesages", messages);

  const exportUserInfo = () => {
    alert("run");
    let file = "";
    Object?.values(messages)?.forEach((item) => {
      const time = new Date(item?.date.seconds * 1000).toLocaleTimeString();
      const date = new Date(item?.date.seconds * 1000).toLocaleDateString();
      console.log("time", time);

      file += `${date} ${time} ${item?.userInfo.displayName} ${item?.lastMessage?.text} \n`;
    });
    const blob = new Blob([file], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "user-info.txt";
    link.href = url;
    link.click();
  };
  return (
    <div>
      <button onClick={exportUserInfo}>Exportdata</button>
    </div>
  );
};

export default Export;
