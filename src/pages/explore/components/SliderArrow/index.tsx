import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { KeenSliderHooks, KeenSliderInstance } from 'keen-slider'
import { MutableRefObject } from 'react'

interface ArrowProps {
  type: 'left' | 'right'
  currentSlide: number
  slidesPerView: number
  instanceRef: MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>
}

export function SliderArrow({
  type,
  currentSlide,
  instanceRef,
  slidesPerView,
}: ArrowProps) {
  return (
    <button
      className={`h-[110%] w-9 absolute top-1/2 ${
        type === 'left' ? 'left-0' : 'right-0'
      } -translate-y-1/2 flex items-center justify-center ${
        type === 'left' ? 'bg-gradient-arrow-left' : 'bg-gradient-arrow-right'
      } disabled:hidden`}
      onClick={(e: any) =>
        type === 'left'
          ? e.stopPropagation() || instanceRef.current?.prev()
          : e.stopPropagation() || instanceRef.current?.next()
      }
      disabled={
        type === 'left'
          ? currentSlide === 0
          : currentSlide ===
            instanceRef.current!.track.details.slides.length - slidesPerView
      }
    >
      {type === 'left' ? (
        <CaretLeft size={18} weight="bold" />
      ) : (
        <CaretRight size={18} weight="bold" />
      )}
    </button>
  )
}
