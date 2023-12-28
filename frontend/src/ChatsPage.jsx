import { PrettyChatWindow } from "react-chat-engine-pretty";
import PropTypes from "prop-types";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="73a4e02d-0530-42ae-86f4-96aad57d679e"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

ChatsPage.propTypes = {
  user: PropTypes.object,
};

export default ChatsPage;
