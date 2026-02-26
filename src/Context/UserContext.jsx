import { createContext, useState } from "react";

export const DataContext = createContext();

const UserContext = ({ children }) => {

  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  
  const [videos, setVideos] = useState([]);
  const [sigup,setSignup]=useState(false);
  const [formdata,setFormdata]=useState({
    username:"",
    email:"",
    password:"",
    fullname:"",
    avatar:null,
    cover:null
  });

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        videos,
        setVideos,
        sigup,
        setSignup
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default UserContext;