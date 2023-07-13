import { Box, Button, FormControl, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";
import React, { useRef } from "react";
import { FC } from "react";

export const createAction = async ({ request }) => {
    const data = await request.formData()
    const task = {
        subject: data.get('subject')
    }
    console.log(task);

}

const FormComponent: FC = () => {
    const [files, setFiles] = React.useState(null)
    const inputRef = useRef(null)

    var arrayFiles = []
    if (files != null) {
        arrayFiles = (Object.values(files))
        console.log(arrayFiles);
    }
    const listFiles = arrayFiles.map((file, ind) =>
        <li key={ind}>{file.name}</li>
    )

    const sicboc = (e) => {
        e.preventDefault();
        console.log(e);
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

    const clickTest = (e) => {
        e.preventDefault();
        console.log("you click me " + e);
    }

    return (
        <>
            <Box>
                <form method="post" onSubmit={sicboc}>
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
                        <Select placeholder='Select request type' name="request">
                            <option value='Pippo'>Pippo</option>
                            <option value='Paperino'>Paperino</option>
                            <option value='Pluto'>Pluto</option>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Subject</FormLabel>
                        <Input type="text" name="subject" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>How can we help?</FormLabel>
                        <Textarea name="textarea" />
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
                </form>
            </Box>
        </>
    )
}//end FormComponent

export default FormComponent