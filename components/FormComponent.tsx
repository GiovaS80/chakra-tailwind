import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";

// export const createAction = async ({ request }) => {
//     const data = await request.formData()
//     const task = {
//         subject: data.get('subject')
//     }
//     console.log(task);

// }

interface ModelComponentProps {
    updateData: (data: any) => void,
    onClose: () => void
}

const FormComponent: FC<ModelComponentProps> = ({ updateData, onClose }) => {
    const [files, setFiles] = React.useState(null)
    const [enableDataSending, setEnableDataSending] = React.useState(false)
    const [requestType, setRequestType] = React.useState("")
    const [subject, setSubject] = React.useState("")
    const [textArea, setTextArea] = React.useState("")

    const inputRef = useRef(null)

    const dataForm = {
        data: {
            requestType: '',
            subject: '',
            textArea: ''
        },
        file: []
    }

    var arrayFiles = []
    if (files != null) {
        arrayFiles = (Object.values(files))
        console.log(arrayFiles);
    }
    const listFiles = arrayFiles.map((file, ind) =>
        <li key={ind}>{file.name}</li>
    )
    // const { register, handleSubmit } = useForm();

    const handleDragOver = (e) => {
        e.preventDefault();
        // console.log(e);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        // console.log(e.dataTransfer.files);
        setFiles(e.dataTransfer.files);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('*********=====CIAO DA SUBMIT=========*******');
        if (enableDataSending) {
            dataForm.data.requestType = requestType
            dataForm.data.subject = subject
            dataForm.data.textArea = textArea
            console.log("ti faccio passare");
            dataForm.file = arrayFiles
            // updateData(dataForm)
            // onClose()
        }
        else console.log("ti blocco");

    }

    const handleInputChange = (e, from) => {
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
                        <FormLabel>Request type</FormLabel>
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
                        <FormLabel>Subject</FormLabel>
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
                        <FormLabel>How can we help?</FormLabel>
                        <Textarea
                            name="textArea"
                            resize={"none"}
                            variant='filled'
                            onChange={e => handleInputChange(e, "textArea")}
                        />
                    </FormControl>

                    <FormControl className="mt-4">
                        <FormLabel>Attachments <span>Optional</span> </FormLabel>
                        <Box className="container h-40 border-2 border-orange-900">
                            {files && (
                                <Box>
                                    <Box className="text-center m-3">
                                        <ul> {listFiles} </ul>
                                    </Box>
                                    <Box className="text-center m-3">
                                        <Button onClick={() => setFiles(null)} >Cancel</Button>
                                    </Box>
                                </Box>
                            )}
                            {!files && (
                                <Box
                                    className="text-center h-full border-2 border-orange-900"
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                    onClick={() => inputRef.current.click()}
                                >
                                    <h1>Add up</h1>
                                    <input
                                        type="file"
                                        multiple
                                        onChange={(e) => setFiles(e.target.files)}
                                        hidden
                                        ref={inputRef}
                                    />
                                </Box>
                            )}
                            {/* end if files empty */}
                        </Box>
                    </FormControl>

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