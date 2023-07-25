"use client";

import ReactDOM from 'react-dom';
import { ToastType, DEFAULT_MESSAGE } from '../../interface';

import ToastNotification from '../../components/layouts/toast-notification';

const DEFAULT_DURATION = 3000;

const useToast = {
  success: (message: string, duration: number) => {
    showToast({
      type: 'success',
      message: message || DEFAULT_MESSAGE.success,
      duration: duration || DEFAULT_DURATION,
    });
  },
  error: (message: string, duration: number) => {
    showToast({
      type: 'error',
      message: message || DEFAULT_MESSAGE.error,
      duration: duration || DEFAULT_DURATION,
    });
  },
  warning: (message: string, duration: number) => {
    showToast({
      type: 'warning',
      message: message || DEFAULT_MESSAGE.warning,
      duration: duration || DEFAULT_DURATION,
    })
  },
  info: (message: string, duration: number) => {
    showToast({
      type: 'info',
      message: message || DEFAULT_MESSAGE.warning,
      duration: duration || DEFAULT_DURATION,
    })
  }
}

function showToast(toastNotification: ToastType) {
  const { duration } = toastNotification;

  const container = document.createElement('div');

  ReactDOM.render(<ToastNotification {...toastNotification} />, container);

  document.body.appendChild(container);

  duration && 
    setTimeout(() => {
      document.body.removeChild(container);
    }, duration);
};

export default useToast;