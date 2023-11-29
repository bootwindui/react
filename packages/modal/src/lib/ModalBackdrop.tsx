interface ModalBackdropProps {
    onClick?: () => void
}
export const ModalBackdrop = (props: ModalBackdropProps) => {
    return (
        <div className="modal-backdrop fixed inset-0 bg-gray-800/90 z-[99]" onClick={props.onClick}></div>
    )
}