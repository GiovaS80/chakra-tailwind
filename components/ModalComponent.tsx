import { Modal, Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Flex, Box, Spacer } from "@chakra-ui/react"
import React from "react"
import { FC, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLeftAndUpRightToCenter, faEnvelope, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import FormComponent from "./FormComponent"

const ModalComponent: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')
    const [zoomIn, setZoomIn] = React.useState(false)


    const updateData = (data: any): void => {
        console.log(data);
    }

    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const resize = () => {
        setZoomIn(!zoomIn)
        if (zoomIn) setSize('3xl');
        else setSize('6xl');

    }

    return (
        <>
            <Box textAlign={'center'}>
                <Button
                    onClick={() => handleSizeClick('3xl')}
                    m={4}
                >{`Open Modal`}</Button>
            </Box>
            <Modal
                onClose={onClose}
                size={size}
                isOpen={isOpen}
            >
                <ModalOverlay />
                <ModalContent>
                    <Flex className="bg-sky-500 text-white" >
                        <Box>
                            <ModalHeader>Our Support Team is ready to help! </ModalHeader>
                        </Box>
                        <Spacer />
                        <Box p='2.5' >
                            <FontAwesomeIcon icon={zoomIn ? faDownLeftAndUpRightToCenter : faUpRightAndDownLeftFromCenter} onClick={() => resize()} />
                        </Box>
                    </Flex>
                    {/* <ModalCloseButton /> */}
                    <ModalBody>
                        <p> {size} </p>

                        <FormComponent
                            updateData={updateData}
                            onClose={onClose}
                        />

                    </ModalBody>
                    {/* <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </>
    )
    // return <h1>Sono Model aggiornato</h1>
}
//end Model

export default ModalComponent