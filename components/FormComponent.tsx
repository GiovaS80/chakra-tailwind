import { Box, Button, FormControl, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";
import { FC } from "react";

export const createAction = async ({ request }) => {
    const data = await request.formData()
    const task = {
        subject: data.get('subject')
    }
    console.log(task);

}

const FormComponent: FC = () => {

    const sicboc = (e) => {
        e.preventDefault();
        console.log(e);

    }

    return (
        <>
            <Box>
                <form method="post" onSubmit={sicboc}>
                    <p>test</p>
                    <FormControl>
                        <FormLabel>Request type</FormLabel>
                        <Select placeholder='Select request type'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Subject</FormLabel>
                        <Input type="text" name="subject" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>How can we help?</FormLabel>
                        <Textarea />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Attachments <span>Optional</span> </FormLabel>
                        <Input type="file" multiple={true} name="attachments" />
                        <Box>
                            <p>Drag and drop your file here or</p>
                            <button className="upload-button">Upload a file</button>
                        </Box>
                    </FormControl>

                    <Button m={3} type="submit">Submit</Button>
                </form>
            </Box>
        </>
    )
}//end FormComponent

export default FormComponent