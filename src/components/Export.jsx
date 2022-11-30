import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";
import { db } from "../firbase";
const Export = () => {
  const [messages, setMessages] = useState([]);
  // const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  // const { combineId } = data;
  // console.log("my id", combineId);
  //  const id="cJDWEKs69dhsO3MmvOEbA2HwAZe279vBUj2IrQZi7X5l5LSuGUPsD0O2"

  const processData = [];
  const getChats = () => {
    // alert("run");
    const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
      // console.log("data", doc.data());

      const data = doc.data();
      Object.values(data)?.forEach((item) => {
        // console.log("chatting process", item);

        processData.push({
          date: item?.date?.seconds,
          messages: item?.lastMessage?.text,
          displayName: item?.userInfo?.displayName,
        });
      });
      setMessages(processData);
    });

    return () => {
      unsub();
    };
  };

  // console.log('process dt',processData)
  // console.log('process MSG',messages)

  // return () => {
  //   unsub();
  // };

  // const objectData=[
  //   {name:"vishu",date:"1/02/2002",text:"hello"}
  // ]
  // console.log("export mesages", messages);
  // const exportUserInfo = () => {
  //   alert("run");
  //   let file = "";
  //   objectData?.forEach((item) => {
  //     // const time = new Date(item?.date.seconds * 1000).toLocaleTimeString();
  //     // const date = new Date(item?.date.seconds * 1000).toLocaleDateString();
  //     // console.log("time", time);

  //     file += `${item.date}  ${item?.name} ${item?.text} \n`;
  //   });
  //   const blob = new Blob([file], { type: "text/plain" });
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement("a");
  //   link.download = "user-info.txt";
  //   link.href = url;
  //   link.click();
  // };

  const exportUserInfo = () => {
    getChats();
    let file = "";
    messages.length > 0 &&
      messages?.forEach((item) => {
        const time = new Date(item?.date * 1000).toLocaleTimeString();
        const date = new Date(item?.date * 1000).toLocaleDateString();
        // console.log("time", time);

        file += `${date} ${time} ${item?.displayName} ${item?.messages} \n`;
      });
    const blob = new Blob([file], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "user-info.txt";
    link.href = url;
    link.click();
  };
  return (
    <div className="export-info">
      <button onClick={exportUserInfo}>Exportdata</button>
    </div>
  );
};

export default Export;
