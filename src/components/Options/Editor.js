import React, { useRef } from 'react';
import { Editor as TextEditor } from '@tinymce/tinymce-react';

import { useOptions } from '../hooks/useOptions'

export const Editor = ({item, index}) => {
  const editorRef = useRef(null);
  const { fillOptions, options } = useOptions();
  const newOptions = {...options};

  const handlerText = () => {

    if (editorRef.current) {
      newOptions.options.email.options[0].values[index].text = editorRef.current.getContent();
    }
  };
  
  return (
    <>
      <TextEditor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={item.options[1].value}
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
        onPointerLeave={()=> fillOptions(newOptions)}
      />
    </>
  );
}