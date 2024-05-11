import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const CustomDialog = ({
  isOpen,
  handleClose,
  closeButtonName,
  actionButtonName,
  actionButton,
  title = '',
  subtitle = '',
  children,
}) => {
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{subtitle}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          {closeButtonName}
        </Button>
        <Button color="secondary" onClick={actionButton}>
          {actionButtonName}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
