import React, { useEffect, useState } from "react";
import { user } from "../Join/Join";
import socketIo from "socket.io-client";
import "./Chat.css";
import sendLogo from "../../images/send.png";
import ReactScrollToBottom from "react-scroll-to-bottom";
import closeIcon from "../../images/closeIcon.png";
const ENDPOINT = "http://localhost:7000/";
let socket;

export const Chat = () => {
   useEffect(() => {
      socket = socketIo(ENDPOINT, { transports: ["websocket"] });
      socket.on("connect", () => {
         alert("Connected");
      });
   });

   return (
      <div>
         <h1>Chat</h1>
      </div>
   );
};
