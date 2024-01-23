import { Meta } from '@storybook/react';
import Modal from '../lib/modal';
import { Button } from "@bootwind/button"
import { ModalTrigger } from '../lib/ModalTrigger';
import { ModalContent } from '../lib/ModalContent';
import { ModalHeader } from '../lib/ModalHeader';
import { ModalTitle } from '../lib/ModalTitle';
import { ModalBody } from '../lib/ModalBody';
import { ModalFooter } from '../lib/ModalFooter';
import { useState } from 'react';

export default {
    title: '❖ • UI Components/Modal',
    component: Modal,
    tags: ['autodocs'],
} as Meta;

export const Basic = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="test">
                <Modal>
                    <ModalTrigger>
                        <Button>Open Modal</Button>
                    </ModalTrigger>
                    <ModalContent isOpen={isOpen} onModalOpen={() => setIsOpen(true)} onModalClose={() => setIsOpen(false)}>
                        <ModalHeader>
                            <ModalTitle>Sign In</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia a, molestiae soluta cupiditate consequuntur ullam voluptates, commodi magnam unde amet similique quae! Nostrum ducimus veniam sed labore praesentium molestias.</p>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia a, molestiae soluta cupiditate consequuntur ullam voluptates, commodi magnam unde amet similique quae! Nostrum ducimus veniam sed labore praesentium molestias.</p>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia a, molestiae soluta cupiditate consequuntur ullam voluptates, commodi magnam unde amet similique quae! Nostrum ducimus veniam sed labore praesentium molestias.</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => setIsOpen(false)}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </>
    )
}