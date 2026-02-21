import { createContext, useState } from "react";

export const DataContext = createContext();

const UserContext = ({ children }) => {

  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [videos, setVideos] = useState([]);
  const [sigup,setSignup]=useState(false);

  return (
    <DataContext.Provider
      value={{
        login,
        setLogin,
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        avatar,
        setAvatar,
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