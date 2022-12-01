import React from "react";
import Avatar from "../../../common/components/Avatar";

const HeaderAuth = () => {
  const src = "https://i.pinimg.com/originals/60/a8/a5/60a8a5bb6cba38ab1eaa1e0c83c78d35.jpg";
  return (
    <div>
      <Avatar srcAvt={src} name="Roseeee" status="active" />
    </div>
  );
};

export default HeaderAuth;
