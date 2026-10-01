"use client";

import React from "react";

import {
  Alert,
  AlertTitle,
  Box,
  GlobalStyles,
  Snackbar
} from "@mui/material";

import SlideTransitions from "@/slide/SlideTransition";

type Severity = "success" | "error" | "info" | "warning";

interface NotificationProps {
  open: boolean;
  message: string;
  severity: Severity;
  onClose: () => void;
  /** Thời gian tự đóng (ms). Mặc định 4000. */
  autoHideDuration?: number;
}

// ============================================================
// ICONS (SVG nội bộ, không cần cài thêm @mui/icons-material)
// ============================================================

const Icon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const ICONS: Record<Severity, React.ReactNode> = {
  success: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.5 2.8 2.8L16 9.5" />
    </Icon>
  ),
  error: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5.5M12 16.5h.01" />
    </Icon>
  ),
  warning: (
    <Icon>
      <path d="M12 4 3 20h18L12 4Z" />
      <path d="M12 10v4M12 17h.01" />
    </Icon>
  ),
  info: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5M12 7.5h.01" />
    </Icon>
  )
};

const ACCENTS: Record<Severity, string> = {
  success: "#5CC8A1",
  error: "#E5736B",
  warning: "#F2B544",
  info: "#7FB8E6"
};

const SURFACES: Record<Severity, string> = {
  success: "#10261F",
  error: "#2C1719",
  warning: "#2B2313",
  info: "#122432"
};

const TITLES: Record<Severity, string> = {
  success: "Thành công",
  error: "Có lỗi xảy ra",
  warning: "Lưu ý",
  info: "Thông báo"
};

// ============================================================
// COMPONENT
// ============================================================

const Notification: React.FC<NotificationProps> = ({
  open,
  message,
  severity,
  onClose,
  autoHideDuration = 4000
}) => {
  const accent = ACCENTS[severity];

  // Không đóng khi người dùng bấm ra ngoài thông báo
  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    onClose();
  };

  return (
    <>
      <GlobalStyles
        styles={{
          "@keyframes notificationProgress": {
            from: { transform: "scaleX(1)" },
            to: { transform: "scaleX(0)" }
          }
        }}
      />

      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        slots={{ transition: SlideTransitions }}
      >
        <Alert
          onClose={onClose}
          severity={severity}
          icon={ICONS[severity]}
          sx={{
            position: "relative",
            overflow: "hidden",
            alignItems: "center",
            width: "100%",
            minWidth: { xs: 280, sm: 360 },
            maxWidth: 440,
            py: 1.75,
            pl: 2.5,
            pr: 1.5,
            borderRadius: "14px",
            border: `1px solid ${accent}59`,
            bgcolor: SURFACES[severity],
            color: "#E9EFEC",
            boxShadow: `0 18px 40px rgba(0,0,0,0.55), 0 0 32px ${accent}1F`,

            // Vạch màu bên trái
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 4,
              bgcolor: accent
            },

            "& .MuiAlert-icon": {
              p: 0,
              mr: 1.75,
              width: 34,
              height: 34,
              flexShrink: 0,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              color: accent,
              bgcolor: `${accent}26`
            },

            "& .MuiAlert-message": {
              flex: 1,
              p: 0,
              fontSize: 13,
              lineHeight: 1.5,
              color: "rgba(233,239,236,0.75)"
            },

            "& .MuiAlertTitle-root": {
              m: 0,
              mb: 0.25,
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 1.4,
              color: "#fff"
            },

            "& .MuiAlert-action": {
              p: 0,
              m: 0,
              ml: 2,
              alignItems: "center",
              alignSelf: "flex-start",
              color: "rgba(255,255,255,0.55)",

              "& .MuiIconButton-root:hover": {
                color: "#fff",
                bgcolor: "rgba(255,255,255,0.1)"
              }
            },

            // Tạm dừng thanh đếm ngược khi rê chuột (Snackbar cũng tạm dừng tự đóng)
            "&:hover .notification-progress": {
              animationPlayState: "paused"
            }
          }}
        >
          <AlertTitle>{TITLES[severity]}</AlertTitle>
          {message}

          {/* Thanh đếm ngược thời gian tự đóng */}
          <Box
            component="span"
            className="notification-progress"
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 3,
              bgcolor: accent,
              transformOrigin: "left",
              animation: `notificationProgress ${autoHideDuration}ms linear forwards`,
              "@media (prefers-reduced-motion: reduce)": { display: "none" }
            }}
          />
        </Alert>
      </Snackbar>
    </>
  );
};

export default Notification;