

export type InfoItem = {
    icon: string;
    text: string;
}
export type Item = {
    id: number;
    coverUrl: string;
    landlordAvatarUrl: string;
    landlordName: string;
    title: string;
    address: string;
    availability: string;
    rating: number;
    reviewsCount: number;
    price: number;
    infoItem: InfoItem[],
    landlordDescription: string
}