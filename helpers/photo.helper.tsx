export function getPhoto(photo: string | null): string {
    const defaultPhoto = '/logo.svg';

    if (!photo) return defaultPhoto;

    fetch(photo)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            return response.blob();
        })
        .then(_ => {
            return photo;
        })
        .catch(_ => {
            return defaultPhoto;
        });

    return defaultPhoto;
}