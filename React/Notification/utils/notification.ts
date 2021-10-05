import { ReactNode } from 'react';
import { ToastOptions, Bounce, toast } from 'react-toastify';

type TNotificationVariants = 'info' | 'success' | 'warn' | 'error';

interface IOpenNotification {
  (
    message: string | ReactNode,
    variant?: TNotificationVariants,
    duration?: number,
    toastConfig?: ToastOptions,
  ): void;
}

export const openNotification: IOpenNotification = (
  message,
  variant = 'success',
  duration = 5000,
  toastConfig = {},
) =>
  toast[variant](message, {
    autoClose: duration,
    theme: 'colored',
    position: 'bottom-left',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Bounce,
    ...toastConfig,
  });
