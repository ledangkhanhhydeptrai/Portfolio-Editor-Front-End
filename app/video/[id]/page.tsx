import MainLayouts from "@/components/layouts/MainLayout";
import VideoContainerById from "@/features/video/container/videoContainerById";
import React from "react";

const VideoPageById: React.FC = () => {
  return (
    <MainLayouts>
      <VideoContainerById />
    </MainLayouts>
  );
};

export default VideoPageById;
