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
      className="
        fixed top-0 left-0 right-0 flex items-center justify-center mx-auto w-full
      "
    >
      <div className="flex lg:max-w-2xl items-center border-t-2 border-t-indigo-400">
        <div className="">
          <IconComponent />
          <span className="sr-only">Icon Toast</span>
        </div>

        <p style={messageStyle} className="p-1 text-ellipsis sm:text-xs md:text-sm lg:text-lg">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ToastNotification;