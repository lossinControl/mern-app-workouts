// import axios from "axios";
import { useState, useEffect } from "react";

export const ImageUpload = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const res = await fetch('http://localhost:4000/api/image')
            const data = await res.json();
            if (res.ok) {
                setImages(data)
            }
        }
        fetchImages();
    }, [])

    return (
        <section>
        {
            images?.length ? images?.map((image, index) => {
                const base64String = btoa(
                    new Uint8Array(image?.img?.data?.data).reduce((data, byte) => {
                    return data + String.fromCharCode(byte);
                }, "")
            );
            return (
                <div key={index}>
                    <img src={`data:image/png;base64,${base64String}`} alt="" width="300" />
                </div>
            );
            }) : 'Loading...'
        }
        </section>
    );

}