"use client";

import { TOAST_TYPE, ToastType } from "~/interface";
import Success from "../icons/success";
import Error from "../icons/error";
import Warning from "../icons/warning";
import { CSSProperties } from "react";
import Info from "../icons/info";

const typeToIconMap = {
  [TOAST_TYPE.success]: Success,
  [TOAST_TYPE.error]: Error,
  [TOAST_TYPE.warning]: Warning,
  [TOAST_TYPE.info]: Info
}

function ToastNotification({
  type,
  message,
  textColor,
  backgroundColor
}: ToastType) {
  const IconComponent = typeToIconMap[type];

  const notificationStyle: CSSProperties = {
    backgroundColor:
      backgroundColor || 
      (type === TOAST_TYPE.success
        ? '#fff'
        : type === TOAST_TYPE.error
        ? '#fb8f6d'
        : type === TOAST_TYPE.warning
        ? '#ffc107'
        : type === TOAST_TYPE.info
        ? '#17a2b8'
        : "#6c757d")
  }

  const messageStyle: CSSProperties = {
    color: 
      textColor || 
        (type === TOAST_TYPE.success
          ? '#000'
          : type === TOAST_TYPE.error
          ? '#fff'
          : type === TOAST_TYPE.warning
          ? '#fff'
          : type === TOAST_TYPE.info
          ? '#fff'
          : '#000')
  }

  return (
    <div
      style={notificationStyle}
      className="flex items-center p-3 fixed border-t-4 border-t-slate-300
      top-0 z-[999] md:right-[40%] sm:right-32 shadow mt-10 sm:max-w-lg md:max-w-2xl max-h-max mx-auto"
    >
      <div className="">
        <IconComponent />
      </div>

      <p style={messageStyle} className="p-1 text-ellipsis text-lg">
        {message}
      </p>
    </div>
  );
};

export default ToastNotification;