"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getVideoRequest } from "../videoSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

import VideoProjectSection from "../components/VideoProjectSection";

const VideoContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.video);

  React.useEffect(() => {
    dispatch(getVideoRequest());
  }, [dispatch]);

  const videos = React.useMemo(
    () => [...(data ?? [])].sort((a, b) => a.displayOrder - b.displayOrder),
    [data],
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  // Rỗng thì Section tự hiện VideoProjectEmpty
  return <VideoProjectSection videos={videos} />;
};

export default VideoContainer;