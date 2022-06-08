import { useState } from 'react';

export default function NewPosts() {
  const [formData, setFormData] = useState({
    content: '',
    image: '',
  })

  return (
    <div>
      <h1>NewPosts</h1>
      <form>
        <input type="text" name="content" value={formData.content} />
      </form>
    </div>
  );
}
