import React from "react";
import "./FilesShare.css";
import { FaPaperclip, FaSearch, FaUsers } from "react-icons/fa";
import { IoChatbox, IoSettingsSharp } from "react-icons/io5";
import { IoIosPaperPlane } from "react-icons/io";

export default function Group() {
  return (
    <div className="filesShare">
      <div className="main-container">
        <div className="left-container">
          <div className="header" id="header">
            <div className="user-img">
              <img src="https://images.pexels.com/photos/8367221/pexels-photo-8367221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="User" />
            </div>
            <div className="nav-icons">
              <li>
                <i class="fa-solid fa-magnifying-glass" />
              </li>
              <li>
                <i class="fa-solid fa-ellipsis-vertical" />
              </li>
            </div>
            <a href="/filesshare/chat" title="Discussions privées">
              <IoChatbox size={25} color="white"/>

              {/* <FaUsers  size={40} color="white"/> */}
            </a>
          </div>

          <div className="search-container">
            {/* <FaSearch /> */}
            <div className="input">
                <input type="text" placeholder="Rechercher" />
            </div>
          </div>

          <div className="chat-list">
            <div className="chat-box">
              <div className="img-box">
                <img
                  className="img-cover"
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
                />
              </div>
              <div className="chat-details">
                <div className="text-head">
                  <h4>Leo</h4>
                </div>
              </div>
            </div>

           


            

      
          
          </div>
          <hr />
          {/* Mettre un truc ici */}
          <p style={{ color: "blue" , textAlign: "center",fontSize: "20px", fontWeight: "bold"}}>Discussions De Groupe</p>
        </div>

        <div className="right-container">
          <div className="header">
            <div className="img-text">
              <div className="user-img">
                <img
                  className="dp"
                  src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="User"
                />
              </div>
              <h4>Leo</h4>
            </div>
            <div className="nav-icons">
              <FaSearch />
              <i class="fa-solid fa-ellipsis-vertical" />
              <i class="fa-solid fa-ellipsis-vertical" />
              <IoSettingsSharp />
            </div>
          </div>

          <div className="chat-container">
            <div className="message-box my-message">
              <p>Bonjour!<br/><span>07:45</span></p>
            </div>

            <div className="message-box friend-message">
              <p>Bonjour!<br/><span>07:45</span></p>
            </div>
          </div>
          
<div className="chatbox-input">
<FaPaperclip size={30} style={{marginLeft:"10px"}} color="blue"/>
<input type="text" placeholder="Type a message" />
<IoIosPaperPlane size={30}  style={{marginRight:"10px"}} color="blue" />
</div>

        </div>
      </div>
    </div>
  );
}
