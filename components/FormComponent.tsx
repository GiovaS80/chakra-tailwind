import { Box, Button, FormControl, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { FC } from "react";

interface ModelComponentProps {
    updateData: (data: any) => void,
    onClose: () => void
}

const FormComponent: FC<ModelComponentProps> = ({ updateData, onClose }) => {
    const [requestType, setRequestType] = React.useState("")
    const [subject, setSubject] = React.useState("")
    const [textArea, setTextArea] = React.useState("")
    const [files, setFiles] = React.useState(null)
    const [enableDataSending, setEnableDataSending] = React.useState(false)

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
        const regex = /(.png|.jpg|.jpeg|.gif|.tiff)/;
        Object.values(files).map((e: any) => {
            if (regex.test(e.name) && arrayFiles.length < 4) arrayFiles.push(e)
        })
    }
    const listFiles = arrayFiles.map((file, ind) =>
        <li key={ind}>{file.name}</li>
    )

    const handleDragOver = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // console.log(e);
    }

    const handleDrop = (e: { preventDefault: () => void; dataTransfer: { files: any; }; }) => {
        e.preventDefault();
        setFiles(e.dataTransfer.files);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (enableDataSending) {
            dataForm.data.requestType = requestType
            dataForm.data.subject = subject
            dataForm.data.textArea = textArea
            dataForm.file = arrayFiles
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

                    <FormControl className="mt-4">
                        <FormLabel htmlFor="field-:r5:">Attachments <span>Optional</span> </FormLabel>
                        <Box className="container h-48 border-2 border-orange-900">
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
                                    className="flex justify-center items-center h-full "
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                    onClick={() => inputRef.current.click()}
                                >
                                    <FontAwesomeIcon icon={faImage} />
                                    <h1 className="m-3">Add up to 4 screenshot</h1>
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