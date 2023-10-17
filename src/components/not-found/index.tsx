import React, { memo } from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      Không tìm thấy
    </div>
  );
};

NotFound.displayName = "NotFound";

export default memo(NotFound);
