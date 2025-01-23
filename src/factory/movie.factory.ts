export function createMovie(title: string, description: string, minimumAge: number|null, favorite: boolean, imageURL: string, categoryId: number) {
    return {
        title: title,
        description: description,
        minimumAge: minimumAge,
        favorite: favorite,
        imageURL: imageURL,
        categoryId: categoryId
    };
}