import React from "react";
import ReferenceContent from "../components/ReferenceContent/ReferenceContent";
import ReferenceSidebar from "../components/ReferenceSidebar";

const ReferenceStorageBox = () => {
  return (
    <>
      <ReferenceSidebar />
      <div className="reference_storagebox_content">
        <ReferenceContent coinbox="reference_content_content_bottom_container_coinbox" />
        <ReferenceContent coinbox="reference_content_content_bottom_container_coinbox" />
        <ReferenceContent coinbox="reference_content_content_bottom_container_coinbox" />
        <ReferenceContent coinbox="reference_content_content_bottom_container_coinbox" />
        <ReferenceContent coinbox="reference_content_content_bottom_container_coinbox" />
        <ReferenceContent coinbox="reference_content_content_bottom_container_coinbox" />
        <ReferenceContent coinbox="reference_content_content_bottom_container_coinbox" />
        <ReferenceContent coinbox="reference_content_content_bottom_container_coinbox" />
      </div>
    </>
  );
};

export default ReferenceStorageBox;
