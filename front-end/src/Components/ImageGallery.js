import React from 'react'
import Image from 'react-bootstrap/Image'



export default function Images(props) {

    let images = props.image

    let gallery = images.map((val, idx) => {
        let galleryImage = <Image thumbnail key={idx} src={val} />
        return galleryImage
    })

    return (
        <div>
            {gallery}
        </div>
    )
}