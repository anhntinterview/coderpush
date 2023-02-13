import slug from 'slug';

export function slugify(title: string) {
    return (
        slug(title, { lower: true }) +
        '-' +
        ((Math.random() * Math.pow(36, 6)) | 0).toString(36)
    );
}
