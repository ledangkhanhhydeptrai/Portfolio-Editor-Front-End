"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import {
  getVideoRequest,
  getVideoUserRequest,
} from "../videoSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";
import VideoProjectSection from "../components/VideoProjectSection";

const VideoContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    video,
    data,
    loading,
    error,
  } = useAppSelector((state) => state.video);

  React.useEffect(() => {
    dispatch(getVideoUserRequest());
    dispatch(getVideoRequest());
  }, [dispatch]);

  const videos = React.useMemo(() => {
    const userVideoList = data ?? [];
    const publicVideo = video ? [video] : [];

    return [...userVideoList, ...publicVideo].sort(
      (a, b) => a.displayOrder - b.displayOrder
    );
  }, [data, video]);

  if (loading) return <Loading />;

  if (error) return <ErrorMessage />;

  return <VideoProjectSection videos={videos} />;
};

export default VideoContainer;