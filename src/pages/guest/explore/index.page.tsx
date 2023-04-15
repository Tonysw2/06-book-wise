import { Sidebar } from '@/pages/components/Sidebar'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { books } from '../../../../prisma/constants/books'
import { categories } from '../../../../prisma/constants/categories'
import { BookCard } from './components/BookCard'
import { CategoryCard } from './components/CategoryCard'
import { Header } from './components/Header'
import { SliderArrow } from './components/SliderArrow'

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const slidesPerView = 7
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: slidesPerView,
      spacing: 12,
    },

    drag: false,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },

    created() {
      setLoaded(true)
    },
  })

  function handleActiveCategory(event: any) {
    setActiveCategory(event?.target!.textContent)
  }

  return (
    <div className="h-[100vh] relative">
      <Sidebar />

      <section className="h-full pt-20 pl-96 pr-5">
        <div className="max-w-5xl pb-5">
          <Header />

          <div className="relative">
            <ul
              ref={sliderRef}
              className="keen-slider mb-12 flex items-center overflow-auto list-scrollbar"
            >
              {categories.map(category => {
                return (
                  <CategoryCard
                    key={category.id}
                    name={category.name}
                    activeCategory={activeCategory}
                    handleActiveCategory={handleActiveCategory}
                  />
                )
              })}
            </ul>
            {loaded && instanceRef.current && (
              <>
                <SliderArrow
                  type="left"
                  currentSlide={currentSlide}
                  slidesPerView={slidesPerView}
                  instanceRef={instanceRef}
                />
                <SliderArrow
                  type="right"
                  currentSlide={currentSlide}
                  slidesPerView={slidesPerView}
                  instanceRef={instanceRef}
                />
              </>
            )}
          </div>

          <ul className="grid grid-cols-3 gap-y-5 gap-x-5">
            {books.map(book => {
              return <BookCard key={book.id} book={book} />
            })}
          </ul>
        </div>
      </section>
    </div>
  )
}
