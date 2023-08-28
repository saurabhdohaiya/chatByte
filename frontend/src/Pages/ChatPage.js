import {useState} from 'react'
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/MyChats';
import Chatbox from '../components/ChatBox';
import {ChatState} from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";


const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
