export function createRating(
    number: number,
    description: string,
    validated: boolean,
    movieId: number,
    userId: number
) {
    return {
        number: number,
        description: description,
        validated: validated,
        movieId: movieId,
        userId: userId
    };
}