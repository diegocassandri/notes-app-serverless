import React, { useRef, useState } from "react";
import { FormGroup, FormControl, ControlLabel,Breadcrumb } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./NewNote.css";
import { API } from "aws-amplify";
import { s3Upload } from "../libs/awsLib";

export default function NewNote(props) {
  const file = useRef(null);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  async function handleSubmit(event) {
  event.preventDefault();

  if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
    alert(
      `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
        1000000} MB.`
    );
    return;
  }

  setIsLoading(true);

  try {
    const attachment = file.current
      ? await s3Upload(file.current)
      : null;

    await createNote({ content, attachment });
    props.history.push("/");
  } catch (e) {
    alert(e);
    setIsLoading(false);
  }
}

function createNote(note) {
  return API.post("notes", "/notes", {
    body: note
  });
}

  return (
    <div className="NewNote">
    <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
       
        <Breadcrumb.Item active>New Note</Breadcrumb.Item>
    </Breadcrumb>

      <form onSubmit={handleSubmit}>
        <FormGroup controlId="content">
          <FormControl
            value={content}
            componentClass="textarea"
            onChange={e => setContent(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="file">
          <ControlLabel>Attachment</ControlLabel>
          <FormControl onChange={handleFileChange} type="file" />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          bsStyle="primary"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Create
        </LoaderButton>
      </form>
    </div>
  );
}