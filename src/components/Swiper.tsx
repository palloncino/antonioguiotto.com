import { useEffect, useState } from 'react';
import './Swiper.css';

export default function Gallery({ displayImage, media }: { displayImage: (imgIndex: number) => JSX.Element, media: string[] }) {

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const getPreviewContainerClass = (isOpen: boolean) => {
    let className = 'Gallery-preview-container'
    if (isOpen) {
      className += " open"
    }
    return className;
  }

  useEffect(() => {
    if (isPreviewOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSelectedImage(0);
    }

    return () => {
      document.body.style.overflow = '';
      setSelectedImage(0);
    };
  }, [isPreviewOpen]);



  return (
    <div>
      <div
        onClick={() => setIsPreviewOpen(true)}
        className='Gallery-thumbnail-container'>
        <img src={media[selectedImage]} alt="" />
      </div>
      <div
        className={getPreviewContainerClass(isPreviewOpen)}
        onClick={() => setIsPreviewOpen(false)}>
        {displayImage(selectedImage)}
      </div>
    </div>
  )
}
