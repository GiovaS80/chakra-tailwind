import { Box, Button, FormControl, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";
import { FC } from "react";
import DragAndDropComponent from "./DragAndDropComponent"
import React from "react";

interface ModelComponentProps {
    updateData: (data: any) => void,
    onClose: () => void
}

const FormComponent: FC<ModelComponentProps> = ({ updateData, onClose }) => {
    const [requestType, setRequestType] = React.useState("")
    const [subject, setSubject] = React.useState("")
    const [textArea, setTextArea] = React.useState("")
    const [enableDataSending, setEnableDataSending] = React.useState(false)

    const updateFile = (dataFile: any): void => dataForm.file=dataFile;

    const dataForm = {
        data: {
            requestType: '',
            subject: '',
            textArea: ''
        },
        file: []
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (enableDataSending) {
            dataForm.data.requestType = requestType
            dataForm.data.subject = subject
            dataForm.data.textArea = textArea
            updateData(dataForm)
            onClose()
        }
        else alert("A problem occurred in the FORM")
    }

    const handleInputChange = (e: any, from: string) => {
        switch (from) {
            case "requestType":
                setRequestType(e.target.value)
                break
            case "subject":
                setSubject(e.target.value)
                break
            case "textArea":
                setTextArea(e.target.value)
                break
        }

        if (
            requestType !== "" &&
            subject.trim() !== "" &&
            textArea.trim() !== ""
        ) setEnableDataSending(true)
        else setEnableDataSending(false)
    }


    return (
        <>
            <Box>
                <form
                    method="post"
                    onSubmit={e => onSubmit(e)}
                >

                    <FormControl
                        isRequired
                        className="mt-4"
                    >
                        <FormLabel htmlFor="field-:r2:">Request type</FormLabel>
                        <Select
                            placeholder='Select request type'
                            name="requestType"
                            onChange={e => handleInputChange(e, "requestType")}
                        >
                            <option value='Pippo'>Pippo</option>
                            <option value='Paperino'>Paperino</option>
                            <option value='Pluto'>Pluto</option>
                        </Select>
                    </FormControl>

                    <FormControl
                        isRequired
                        className="mt-4"
                    >
                        <FormLabel htmlFor="field-:r3:">Subject</FormLabel>
                        <Input
                            type="text"
                            name="subject"
                            variant='filled'
                            onChange={e => handleInputChange(e, "subject")}
                        />
                    </FormControl>

                    <FormControl
                        isRequired
                        className="mt-4"
                    >
                        <FormLabel htmlFor="field-:r4:">How can we help?</FormLabel>
                        <Textarea
                            name="textArea"
                            resize={"none"}
                            variant='filled'
                            onChange={e => handleInputChange(e, "textArea")}
                        />
                    </FormControl>

                    <DragAndDropComponent 
                    updateFile={updateFile}
                    />

                    <Box className="text-right mt-4">
                        <Button
                            m={3}
                            type="button"
                            onClick={onClose}
                        >Cancel</Button>
                        <Button
                            colorScheme='purple'
                            isDisabled={!enableDataSending}
                            m={3} type="submit"
                        >Send</Button>
                    </Box>
                </form>
            </Box>
        </>
    )
}//end FormComponent

export default FormComponent