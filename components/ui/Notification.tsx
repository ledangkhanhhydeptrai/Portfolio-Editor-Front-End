"use client";

import React from "react";

import { Alert, AlertTitle, Box, IconButton, Snackbar } from "@mui/material";
import { keyframes } from "@mui/system";
import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";

import SlideTransitions from "@/slide/SlideTransition";

type Severity = "success" | "error" | "info" | "warning";

interface NotificationProps {
  open: boolean;
  message: string;
  severity: Severity;
  onClose: () => void;
  autoHideDuration?: number;
}

const ICONS: Record<Severity, React.ReactNode> = {
  success: <CheckCircle2 size={20} strokeWidth={2} />,
  error: <XCircle size={20} strokeWidth={2} />,
  warning: <AlertTriangle size={20} strokeWidth={2} />,
  info: <Info size={20} strokeWidth={2} />,
};

const ACCENTS: Record<Severity, string> = {
  success: "#5CC8A1",
  error: "#F0847C",
  warning: "#F2B544",
  info: "#8FA2FF",
};

const TITLES: Record<Severity, string> = {
  success: "Thành công",
  error: "Có lỗi xảy ra",
  warning: "Lưu ý",
  info: "Thông báo",
};

// Thanh tiến trình tự khai báo, không phụ thuộc CSS global
const shrink = keyframes`
  from { transform: scaleX(1); }
  to { transform: scaleX(0); }
`;

const Notification: React.FC<NotificationProps> = ({
  open,
  message,
  severity,
  onClose,
  autoHideDuration = 4000,
}) => {
  const accent = ACCENTS[severity];

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    onClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      slots={{
        transition: SlideTransitions,
      }}
      sx={{ top: { xs: 12, sm: 24 }, right: { xs: 12, sm: 24 } }}
    >
      <Alert
        severity={severity}
        icon={ICONS[severity]}
        action={
          <IconButton
            size="small"
            aria-label="Đóng thông báo"
            onClick={() => onClose()}
            sx={{
              width: 28,
              height: 28,
              color: "rgba(255,255,255,0.4)",
              transition: "all .2s",
              "&:hover": { color: "#fff", bgcolor: "rgba(255,255,255,0.08)" },
              "&.Mui-focusVisible": { outline: `2px solid ${accent}` },
            }}
          >
            <X size={16} />
          </IconButton>
        }
        sx={{
          position: "relative",
          overflow: "hidden",
          alignItems: "flex-start",

          width: "100%",
          minWidth: { xs: 0, sm: 380 },
          maxWidth: 420,

          p: 1.75,
          pb: 2,

          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.09)",

          bgcolor: "#111A1C",
          backgroundImage: `radial-gradient(120% 120% at 0% 0%, ${accent}1F 0%, transparent 55%)`,
          color: "#E9EFEC",

          boxShadow: "0 24px 60px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3)",

          "& .MuiAlert-icon": {
            p: 0,
            m: 0,
            mr: 1.5,
            width: 38,
            height: 38,
            flexShrink: 0,

            alignItems: "center",
            justifyContent: "center",

            borderRadius: "12px",

            color: accent,
            bgcolor: `${accent}24`,
            boxShadow: `inset 0 0 0 1px ${accent}40`,
          },

          "& .MuiAlert-message": {
            flex: 1,
            minWidth: 0,
            p: 0,
            pt: 0.125,

            fontSize: 13.5,
            lineHeight: 1.55,
            wordBreak: "break-word",

            color: "rgba(233,239,236,0.68)",
          },

          "& .MuiAlertTitle-root": {
            m: 0,
            mb: 0.25,

            fontSize: 14.5,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.4,

            color: "#F4F6F5",
          },

          "& .MuiAlert-action": {
            p: 0,
            m: 0,
            ml: 1.5,
            mr: -0.25,
            alignSelf: "flex-start",
          },

          "&:hover .notification-progress": {
            animationPlayState: "paused",
          },
        }}
      >
        <AlertTitle>{TITLES[severity]}</AlertTitle>

        {message}

        <Box
          component="span"
          className="notification-progress"
          aria-hidden
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,

            height: 3,

            bgcolor: accent,
            opacity: 0.85,

            transformOrigin: "left",
            animation: `${shrink} ${autoHideDuration}ms linear forwards`,

            "@media (prefers-reduced-motion: reduce)": {
              display: "none",
            },
          }}
        />
      </Alert>
    </Snackbar>
  );
};

export default Notification;
