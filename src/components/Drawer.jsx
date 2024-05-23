import React from "react";
import { Drawer } from "antd";

export const DrawerComp = ({ children, open, setOpen, title }) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        // title={title}
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        style={{ backgroundColor: "#171616", color: "white" }}
      >
        {children}
      </Drawer>
    </>
  );
};
