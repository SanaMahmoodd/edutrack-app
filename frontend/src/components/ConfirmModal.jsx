import {
  Overlay,
  ModalCard,
  ModalIcon,
  ModalTitle,
  ModalText,
  ModalActions,
  ModalButton,
} from "../ui/ConfirmModalUI";

export default function ConfirmModal({
  show,
  title,
  message,
  confirmText = "Delete",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) {
  if (!show) return null;

  return (
    <Overlay>
      <ModalCard>
        <ModalIcon>!</ModalIcon>

        <ModalTitle>{title}</ModalTitle>

        <ModalText>{message}</ModalText>

        <ModalActions>
          <ModalButton type="button" onClick={onCancel}>
            {cancelText}
          </ModalButton>

          <ModalButton type="button" $danger onClick={onConfirm}>
            {confirmText}
          </ModalButton>
        </ModalActions>
      </ModalCard>
    </Overlay>
  );
}