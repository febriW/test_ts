export default interface Gift {
id: string;
type: string;
    attributes: {
        id: number;
        name: string;
        info: string;
        description: string;
        points: number;
        slug: string;
        stock: number;
        images: string[];
        isNew: number;
        rating: number;
        numOfReviews: number;
        isWishlist: number;
    };
}