

export interface HooksType {
  title: string;
  description: string;
  usage: any;
  hook: any;
};

export interface VariansType {
  name: string;
  preview: any;
  code: any;
};

export enum TOAST_TYPE {
  success = "success",
  warning = "warning",
  error = "error",
  info = "info",
};

export enum DEFAULT_MESSAGE {
  success = "Success",
  error = "Error",
  warning = "Warning",
  info = "Info"
}

export type ToastType = {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  description?: string;
  backgroundColor?: string;
  textColor?: string;
  duration?: number;
}