import { Spinner } from '@phosphor-icons/react'

import { CategoryDTO } from '@/dtos/CategoryDTO'
import { useCategories } from '@/hooks/useCategories'

import { CategoryCard } from './CategoryCard'

type Props = {
  activeCategory: CategoryDTO
  handleActiveCategory: (category: CategoryDTO) => void
}

export function CategoryList({ activeCategory, handleActiveCategory }: Props) {
  const { categories, hasError, isLoading } = useCategories()

  let content

  if (isLoading) {
    content = (
      <p className="flex items-center gap-1">
        <Spinner className="animate-spin" />
        Carregando...
      </p>
    )
  }

  if (hasError) {
    content = (
      <p className="text-sm text-red-500">
        Não foi possível carregar as categorias, tente mais tarde.
      </p>
    )
  }

  if (categories) {
    content = (
      <ul className="flex h-min w-full items-center gap-3 overflow-x-auto pb-1">
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <CategoryCard
                isActive={activeCategory.id === category.id}
                onClick={() => handleActiveCategory(category)}
              >
                {category.name}
              </CategoryCard>
            </li>
          )
        })}
      </ul>
    )
  }

  return <>{content}</>
}
