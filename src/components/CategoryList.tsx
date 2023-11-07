import { QUERY_KEYS } from '@/constants/queryKeys'
import { CategoryDTO } from '@/dtos/CategoryDTO'
import { getCategories } from '@/utils/https'
import { Spinner } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { CategoryCard } from './CategoryCard'

type Props = {
  activeCategory: CategoryDTO
  handleActiveCategory: (category: CategoryDTO) => void
}

export function CategoryList({ activeCategory, handleActiveCategory }: Props) {
  const { data, isPending, isError } = useQuery<CategoryDTO[]>({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: ({ signal }) => getCategories({ signal }),
  })

  let content

  if (isPending) {
    content = (
      <p className="flex items-center gap-1">
        <Spinner className="animate-spin" />
        Lading...
      </p>
    )
  }

  if (isError) {
    content = (
      <p className="text-sm text-red-500">
        Não foi possível carregar as categorias, tente mais tarde.
      </p>
    )
  }

  if (data) {
    content = (
      <ul className="flex h-min w-full items-center gap-3 overflow-x-auto pb-1">
        {data.map((category) => {
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
