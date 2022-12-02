import React from "react";

import JavaScriptImage from "../../../../images/javascript.svg";
import SassImage from "../../../../images/sass-icon.png";
import ReactImage from "../../../../images/reactbadge3.png";
import MongoImage from "../../../../images/mongodbbadge.png";
import AWSImage from "../../../../images/aws-icon.png";
import NodeImage from "../../../../images/nodejsbadge.png";
import SocketImage from "../../../../images/socketio.png";
import CSSImage from "../../../../images/css-3.svg";
import VueImage from "../../../../images/vuebadge.png";
import DjangoImage from "../../../../images/djangobadge2.png";
import PythonImage from "../../../../images/pythonbadge.png";

interface TechCardProps {
  image?: string;
}

const TechCardMini = ({ image }: TechCardProps) => {
  switch (image) {
    case "javascript":
      return (
        <img
          src={JavaScriptImage}
          alt="tech badge"
          className="h-12 w-12 rounded"
        />
      );
    case "sass":
      return (
        <img src={SassImage} alt="tech badge" className="h-12 w-12 rounded" />
      );
    case "react":
      return (
        <img src={ReactImage} alt="tech badge" className="h-12 w-12 rounded" />
      );
    case "mongodb":
      return (
        <img src={MongoImage} alt="tech badge" className="h-12 w-12 rounded" />
      );
    case "aws":
      return (
        <img src={AWSImage} alt="tech badge" className="h-12 w-12 rounded" />
      );
    case "nodejs":
      return (
        <img src={NodeImage} alt="tech badge" className="h-12 w-12 rounded" />
      );
    case "socketio":
      return (
        <img src={SocketImage} alt="tech badge" className="h-12 w-12 rounded" />
      );
    case "css":
      return (
        <img src={CSSImage} alt="tech badge" className="h-12 w-12 rounded" />
      );
    case "vue":
      return (
        <img src={VueImage} alt="tech badge" className="h-12 w-12 rounded" />
      );
    case "django":
      return (
        <img src={DjangoImage} alt="tech badge" className="h-12 w-12 rounded" />
      );
    case "python":
      return (
        <img src={PythonImage} alt="tech badge" className="h-12 w-12 rounded" />
      );
    default:
      return null;
  }

  // if (image === "javascript")
  //   return <img src={JavaScriptImage} alt="tech badge" />;

  // return (
  //   <div>
  //     <img src={image} alt="Tech Badge" />
  //     <p>{title}</p>
  //   </div>
  // );
};

export default TechCardMini;
