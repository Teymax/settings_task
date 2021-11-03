import React, { useRef } from 'react';
import { Editor as TextEditor } from '@tinymce/tinymce-react';

import { useStates } from '../hooks/useStates';

export const Editor = ({item, index}) => {
  const editorRef = useRef(null);
  const { fillState, state } = useStates();

  // console.log(item);


  const handlerText = () => {
    if (editorRef.current) {
      state[item.name] = editorRef.current.getContent();
    }
  };

  return (
    <>
      <TextEditor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={item.value}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={handlerText}
        onPointerLeave={()=> fillState(state)}
      />
    </>
  );
}