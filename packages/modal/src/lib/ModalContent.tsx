import { cn } from "@bootwind/common"
import { ReactNode, useEffect } from "react"
import { createPortal } from "react-dom"
import { ModalBackdrop } from "./ModalBackdrop"
import { useModalContext } from "./ModalProvider"

interface ModalContentProps {
    children?: ReactNode | string
    isOpen?: boolean
    className?: string
    onModalOpen?: () => void
    onModalClose?: () => void
}

export const ModalContent = ({ isOpen = false, ...props }: ModalContentProps) => {
    const context = useModalContext()

    // Close or open modal reacting to the props
    useEffect(() => {
        if(isOpen) context.openModal()
        else context.closeModal()
    }, [isOpen])

    // Close or open modal reacting to the context
    useEffect(() => {
        if(context.isOpen && props.onModalOpen) props.onModalOpen()
        else if (!context.isOpen && props.onModalClose) props.onModalClose()
    }, [context.isOpen])
    
    return (
        createPortal(
            (
                <div className={cn("fixed inset-0 transition duration-200 [&:not(.show)]:opacity-0 [&:is(.show)]:opacity-100 [&:not(.show)]:invisible [&:is(.show)]:visible [&:is(.show)]:transition [&:is(.show)_.modal]:top-24 ", isOpen ? 'show' : '')}>
                    <div className="relative">
                        <div className="modal z-[100] top-20 bg-white absolute max-w-[600px] w-full mx-5 left-1/2 -translate-x-1/2 rounded-md">
                            {props.children}
                        </div>
                    </div>
                    <ModalBackdrop onClick={() => context.closeModal()}/>
                </div>
            ),
            document.body
        )
    )
}