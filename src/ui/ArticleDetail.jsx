import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";

const ArticleDetail = ({ open, handleToggle, content, title }) => {
  const handleClose = () => {
    handleToggle();
  };
  const ref = useRef(null);

  return (
    <Dialog
      open={open}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      className="modal article"
      onClose={handleClose}
      transitionDuration={500}
    >
      <DialogTitle className="articleTitle" id="scroll-dialog-title">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          key={`${title}`}
        >
          <Grid container className="center flex flex-col gap-4">
            <Grid item className="text-center font-title text-5xl font-bold">
              {title}
            </Grid>
            <Grid item>
              <Divider className="divider inverted" />
            </Grid>
          </Grid>
        </motion.div>
      </DialogTitle>

      <DialogContent
        ref={ref}
        tabIndex={-1}
        id="modalContent"
        className="articleContent"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          key={`articleContent`}
        >
          {content}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleDetail;
