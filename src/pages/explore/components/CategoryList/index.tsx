import { MouseEvent, useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { CategoryCard } from '../CategoryCard'
import { SliderArrow } from '../SliderArrow'
import { prisma } from '@/lib/prisma'

type Category = {
  id: string
  name: string
}

interface CategoryListProps {
  categories: Category[]
  filterByCategory: (selectedCategory: string) => void
}

export function CategoryList({
  categories,
  filterByCategory,
}: CategoryListProps) {
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

  const [activeCategory, setActiveCategory] = useState('Todos')

  function handleActiveCategory(
    event: MouseEvent<HTMLLIElement>,
    categoryId: string
  ) {
    setActiveCategory(event.currentTarget.textContent!)
    filterByCategory(categoryId)
  }

  return (
    <div className="relative mb-12">
      <ul ref={sliderRef} className="keen-slider flex items-center">
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              name={category.name}
              activeCategory={activeCategory}
              onClick={(event) => handleActiveCategory(event, category.id)}
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
  )
}
