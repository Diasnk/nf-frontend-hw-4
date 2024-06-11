export const uploadFiles = async (files) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });
  
    const response = await fileService.post('/files/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  
    return response.data;
  };
  