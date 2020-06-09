import DocumentPicker from 'react-native-document-picker';

export const pickDocument = async (callback)=>{

    try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images,DocumentPicker.types.pdf],
        });
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size
        );
    callback(res);  
    } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User cancelled the picker, exit any dialogs or menus and move on
        } else {
          throw err;
        }
      }

}