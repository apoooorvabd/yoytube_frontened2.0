import React, { useContext } from "react";
import { DataContext } from "../../Context/UserContext";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
function SubscribedChannel() {
    const { subscribedChannel,setSubscribedChannel } = useContext(DataContext);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        const fetchSubscribedChannels = async () => {
          try {
            const response = await axios.get( 
              `http://localhost:8000/api/v1/subscriptions/u/${storedUser?.id}`,
              {
                headers: {  
                  Authorization: `Bearer ${storedUser?.accessToken}`,
                },
              }
            );
            setSubscribedChannel(response.data.data);
          } catch (err) {
            console.error(err);
            toast.error("Failed to load subscribed channels");
          }
        };
        fetchSubscribedChannels();
      }, [storedUser]);

  return (
    <div>
      <h1>Subscribed Channel</h1>
      <ul>
        {subscribedChannel.map((channel) => (
          <li key={channel._id}>{channel.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default SubscribedChannel;