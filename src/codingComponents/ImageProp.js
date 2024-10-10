import React from 'react'

function ImageProp(props) {
  return (
    <div>
        <figure>
      <img src={props.src} alt= {props.alt}  />
      <figcaption>{props.figcaption}</figcaption>
        </figure>
    </div>
  )
}

export default ImageProp
