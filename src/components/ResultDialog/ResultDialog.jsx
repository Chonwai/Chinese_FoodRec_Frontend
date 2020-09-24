import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DataTable from '../DataTable/DataTable';

export default function ResultDialog(props) {
    const [result, setResult] = React.useState([]);
    const [isShow, setIsShow] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClose = () => {
        setOpen(false);
        setIsShow(false);
        props.callback(false);
    };

    const descriptionElementRef = React.useRef(null);

    React.useEffect(() => {
        setIsShow(props.isShow);
        if (isShow) {
            setResult(props.data);
            setOpen(true);
        }
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    });

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth="lg"
            >
                <DialogTitle id="scroll-dialog-title">Results</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DataTable data={result}></DataTable>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
