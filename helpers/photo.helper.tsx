export function getPhoto(photo: string | null): string {
    const defaultPhoto = '/logo.svg';

    if (!photo) return defaultPhoto;

    return `/api/photo?url=${encodeURIComponent(photo)}`;
}
