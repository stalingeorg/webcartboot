import React from 'react';
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images, CustomImage } from "./images";
import sectionLogo from'../assets/images/section1.jpg';

export default function Gallery1() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <>
     <section className='scroll_page' style={{minHeight: "100vh",background:"url('"+sectionLogo+"')",backgroundSize: "cover"}}> 
     <div className='container py-5'>
      <div className="row h-100 justify-content-center align-items-center pb-5" >
        <div className="col-md-12 text-center text-white">
        <h3 className='mb-4 h2 mt-5' >STREAMING, VIDEO CALLS, ONLINE GAMING & MORE</h3>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
          enableZoom={false}
        />
      )}
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
