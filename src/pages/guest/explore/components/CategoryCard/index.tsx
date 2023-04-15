interface CategoryCardProps {
  name: string
  activeCategory: string
  handleActiveCategory: (event: any) => void
}

export function CategoryCard({
  name,
  activeCategory,
  handleActiveCategory,
}: CategoryCardProps) {
  return (
    <li
      className={`keen-slider__slide py-1 px-4 rounded-full text-center cursor-pointer ${
        activeCategory === name
          ? 'bg-purple-200 text-gray-100 border border-purple-200'
          : 'border border-purple-100 text-purple-100'
      }`}
      onClick={handleActiveCategory}
    >
      {name}
    </li>
  )
}
