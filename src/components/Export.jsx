import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firbase";
const Export = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const{combineId}=data;
  console.log("my id",combineId);
  // console.log("my chat", messages);

  // useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "userChats",combineId
        ),
        (doc) => {
          setMessages(doc.data());
          console.log("data", doc.data());
        }
      );

      return () => {
        unsub();
      };
    };
  //   currentUser.uid && getChats();
  // }, [currentUser.uid]);

const processData=[]

  Object.values(messages).forEach((item)=>{
    console.log('chatting process',item.date.seconds)

    processData.push({
      date:item?.date?.seconds,
    messages:item?.lastMessage?.text,
  displayName:item?.userInfo?.displayName
    })

  })

  console.log('process dt',processData)

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
    alert("run");
    getChats();
    let file = "";
    processData.length>0&& processData?.forEach((item) => {
      const time = new Date(item?.date * 1000).toLocaleTimeString();
      const date = new Date(item?.date* 1000).toLocaleDateString();
      console.log("time", time);

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
