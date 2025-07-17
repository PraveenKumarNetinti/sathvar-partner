import { useNotification } from "@/hooks/use-notification";

import Notification from "@/components/ui/notification";

const NotificationProvider = () => {
  const { notifications } = useNotification();

  return (
    <Notification.Provider>
      {notifications.map(({ id, ...rest }) => {
        return <Notification key={id} {...rest} />;
      })}
      <Notification.Viewport />
    </Notification.Provider>
  );
};

export default NotificationProvider;
