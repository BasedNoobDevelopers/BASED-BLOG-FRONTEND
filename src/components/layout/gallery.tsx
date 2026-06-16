import Image from "next/image";
import { InterestsImages } from "@/data/interestsData";

export default function GalleryPage() {
    return InterestsImages.map((src) => (
        <Image key={src} src={src} alt="Interest Images" />
    ))
}

