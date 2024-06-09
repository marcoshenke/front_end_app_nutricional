import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';

import { theme } from 'Styles';

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
      PaperProps={{ sx: { backgroundColor: theme.palette.primary.light } }}
    >
      <DialogTitle id="max-width-dialog-title">
        <Typography variant="h5" fontWeight={700} color="secondary">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent backgroundColor={theme.palette.primary.light}>
        <DialogContentText>
          <Typography variant="h6" fontWeight={500} color="secondary">
            {subtitle}
          </Typography>
        </DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose} variant="contained">
          {closeButtonName}
        </Button>
        <Button color="secondary" onClick={actionButton} variant="contained">
          {actionButtonName}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
