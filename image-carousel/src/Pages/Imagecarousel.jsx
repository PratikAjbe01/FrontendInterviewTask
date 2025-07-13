
import { useEffect, useState } from "react"
import "./page.css"

// Import your images (make sure these paths are correct)
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"

function ImageCarousel() {
  const [images] = useState([image1, image2, image3, image4]) // Removed SetImages since it's not needed
  const [index, setIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // Preload images to prevent loading issues
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = reject
          img.src = src
        })
      })

      try {
        await Promise.all(imagePromises)
        setIsLoading(false)
      } catch (error) {
        console.error("Error preloading images:", error)
        setIsLoading(false)
      }
    }

    preloadImages()
  }, [images])

  const goToPrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex)
  }

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading images...</p>
      </div>
    )
  }

  return (
    <div>
      {console.log("Current image:", images[index])}
      <div className="imagePage">
        <div
          className="imageDiv"
          style={{
            backgroundImage: `url(${images[index]})`, // Fixed: use backgroundImage instead of background
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "background-image 0.5s ease-in-out", // Increased transition time
          }}
        >
          <div className="left-right">
            <button onClick={goToPrevious} aria-label="Previous image">
              ⬅️
            </button>
            <button onClick={goToNext} aria-label="Next image">
              ➡️
            </button>
          </div>

          <div className="btn">
            <ul className="list">
              {images.map((_, i) => (
                <li
                  key={i}
                  className="li"
                  style={{
                    backgroundColor: index === i ? "black" : "white",
                    cursor: "pointer",
                  }}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
