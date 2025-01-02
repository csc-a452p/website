"use client"

import React, { useState } from "react";
import Image from "next/image";

interface ImagePopupProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  layout?: "fixed" | "intrinsic" | "responsive" | "fill";
  quality?: number;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  loading?: "lazy" | "eager";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  unoptimized?: boolean;
  className?: string;
  popupClassName?: string;
  overlayClassName?: string;
}

const ImagePopup: React.FC<ImagePopupProps> = ({
  src,
  alt = "",
  width,
  height,
  layout,
  quality,
  priority,
  placeholder,
  blurDataURL,
  loading,
  objectFit,
  objectPosition,
  unoptimized,
  className,
  popupClassName,
  overlayClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      {/* サムネイル画像 */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        loading={loading}
        objectFit={objectFit}
        objectPosition={objectPosition}
        unoptimized={unoptimized}
        onClick={handleOpen}
        className={`cursor-pointer max-w-xs ${className || ""}`}
      />

      {/* ポップアップ */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 ${overlayClassName || ""}`}
          onClick={handleClose}
        >
          <div
            className={`relative bg-white p-4 rounded-lg shadow-lg ${popupClassName || ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              layout={layout}
              quality={quality}
              priority={priority}
              placeholder={placeholder}
              blurDataURL={blurDataURL}
              loading={loading}
              objectFit={objectFit}
              objectPosition={objectPosition}
              unoptimized={unoptimized}
              className="max-w-full max-h-full"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-500"
              onClick={handleClose}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePopup;
