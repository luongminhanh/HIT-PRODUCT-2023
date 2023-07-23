import { Modal } from "react-bootstrap"
import Button from "../Button"

const ModalDeleteUser = ({ show, setShow }) => {
    const handleClose = () => setShow(false);
    
    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc muốn xóa người dùng này?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="primary">
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalDeleteUser