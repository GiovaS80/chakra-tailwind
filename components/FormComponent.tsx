import { Box, Button, FormControl, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import ModalComponent, { TestForm } from "./ModalComponent";

// export const createAction = async ({ request }) => {
//     const data = await request.formData()
//     const task = {
//         subject: data.get('subject')
//     }
//     console.log(task);

// }

interface IfirstChildProps {
    updateName: ( data:any) => void,
    onClose: () => void
}

const FormComponent: FC<IfirstChildProps> = ({ updateName, onClose }) => {
    const [files, setFiles] = React.useState(null)
    const inputRef = useRef(null)

    const dataForm = {
        data: {},
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
    const { register, handleSubmit } = useForm();

    const cancelForm = () => {
        console.log('sono cancel');
        TestForm()
        console.log(ModalComponent);
        console.log(TestForm);

    }

    const handleDragOver = (e) => {
        e.preventDefault();
        // console.log(e);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        console.log(e.dataTransfer.files);
        setFiles(e.dataTransfer.files);
    }


    const onSubmit = (data: unknown) => {
        console.log(data);
        dataForm.data = data
        dataForm.file = arrayFiles
        console.log(dataForm);
        updateName(dataForm)
        onClose()
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(e);
    // }
    const [firstChildName, setFirstChildName] = useState<string>('')

    


    return (
        <>

            <Box>
                <h1> {firstChildName} </h1>
                <button onClick={() => updateName(dataForm)}>first child</button>
            </Box>


            <Box>
                <form
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                // onSubmit={onSubmit}
                >
                    <FormControl>
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
                                    // onClick={clickTest}
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
                                    <button onClick={() => inputRef.current.click()}>Select Files</button>
                                </Box>
                            )}
                            {/* end if files empty */}
                        </Box>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Request type</FormLabel>
                        <Select
                            placeholder='Select request type'
                            name="requestType"
                            {...register('requestType')}
                        >
                            <option value='Pippo'>Pippo</option>
                            <option value='Paperino'>Paperino</option>
                            <option value='Pluto'>Pluto</option>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Subject</FormLabel>
                        <Input
                            type="text"
                            name="subject"
                            {...register('subject')}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>How can we help?</FormLabel>
                        <Textarea
                            name="textArea"
                            {...register('textArea')}
                        />
                    </FormControl>

                    {/* <FormControl>
                        <FormLabel>Attachments <span>Optional</span> </FormLabel>
                        <Input type="file" multiple={true} name="attachments" />
                        <Box>
                            <p>Drag and drop your file here or</p>
                            <button className="upload-button">Upload a file</button>
                        </Box>
                    </FormControl> */}

                    <Button m={3} type="submit">Submit</Button>
                    <Button m={3} type="button" onClick={onClose} >cancel</Button>
                </form>
            </Box>
        </>
    )
}//end FormComponent

export default FormComponent