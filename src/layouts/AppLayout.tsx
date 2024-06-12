import { Outlet } from '@tanstack/react-router';
import { CustomToaster } from '../components/ui/Toaster/CustomToaster';

export const AppLayout = () => {
  return (
    <>
      <CustomToaster />
      <Outlet />
    </>
  );
};
