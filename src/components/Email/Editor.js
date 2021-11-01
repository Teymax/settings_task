import React, { useRef } from 'react';
import { Editor as TextEditor } from '@tinymce/tinymce-react';

import { useOptions } from '../hooks/useOptions'

export const Editor = ({item, index}) => {
  const editorRef = useRef(null);
  const { fillOptions, options } = useOptions();

  const handlerText = () => {
    const newOptions = {...options};

    if (editorRef.current) {
      newOptions.email.options[0].value[index].text = editorRef.current.getContent();
      fillOptions(newOptions);
    }
  };

  return (
    <>
      <TextEditor
        onInit={(evt, editor) => editorRef.current = editor}
        onChange={handlerText}
        initialValue={item.text}
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
      />
    </>
  );
}