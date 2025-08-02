
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div style={styles.container}>
      <video autoPlay muted loop style={styles.video}>
        <source src="/images/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}></div>
      <div style={styles.content}>{children}</div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    minWidth: "100%",
    minHeight: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
};
