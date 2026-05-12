import { NotificationWrapper } from "../ui/NotificationUI";

export default function Notification({
  show,
  message,
  type = "success",
}) {
  if (!show) return null;

  return (
    <NotificationWrapper $type={type}>
      {message}
    </NotificationWrapper>
  );
}