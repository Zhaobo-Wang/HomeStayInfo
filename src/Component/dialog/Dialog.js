import React from "react";
import { Modal } from "antd";

const Dialog = ({ openModal, setOpenModal }) => {
  console.log(openModal);
  function CancelEvent() {
    setOpenModal(false);
  }

  function OKEvent() {
    setOpenModal(false);
  }
  return (
    <Modal visible={openModal} onCancel={CancelEvent} onOk={OKEvent}>
      This is a model
    </Modal>
  );
};

export default Dialog;
