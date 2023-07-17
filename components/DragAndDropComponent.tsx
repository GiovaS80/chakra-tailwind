import { Box, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { FC } from "react";

interface FormComponentProps {
    updateFile: (dataFile: any) => void
}

const DragAndDropComponent: FC<FormComponentProps> = ({updateFile}) => {
    const [filesAtt, setFiles] = React.useState(null)

    const inputRef = useRef(null)
    var arrayFiles = []
    if (filesAtt != null) {
        const regex = /(.png|.jpg|.jpeg|.gif|.tiff)/;
        Object.values(filesAtt).map((e: any) => {
            if (regex.test(e.name) && arrayFiles.length < 4) arrayFiles.push(e)
        })
        updateFile(arrayFiles)                
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
    
    return (
        <>
        <FormControl className="mt-4">
                        <FormLabel htmlFor="field-:r5:">Attachments <span className="text-gray-600 text-sm" >Optional</span> </FormLabel>
                        <Box className="container h-48 border-dashed border">
                            {filesAtt && (
                                <Box>
                                    <Box className="text-center m-3">
                                        <ul> {listFiles} </ul>
                                    </Box>
                                    <Box className="text-center m-3">
                                        <Button onClick={() => setFiles(null)} >Cancel</Button>
                                    </Box>
                                </Box>
                            )}
                            {!filesAtt && (
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
        </>
    )//end return
}//end DragAndDropComponent

export default DragAndDropComponent