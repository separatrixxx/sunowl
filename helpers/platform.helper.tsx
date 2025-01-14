export const isWebPlatform = (platform: string | undefined): boolean => {
    const platforms = ['weba', 'web', 'tdesktop'];

    return platforms.includes(platform || '');
};