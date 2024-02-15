import { QueryClient } from '@tanstack/react-query'

import { CategoryDTO } from '@/dtos/CategoryDTO'
import { api } from '@/lib/axios'

export const queryClient = new QueryClient()

export async function getLatestsReviews({ signal }: { signal: AbortSignal }) {
  const { data } = await api.get('/ratings/latests', {
    signal,
  })
  return data
}

export async function getPopularBooks({ signal }: { signal: AbortSignal }) {
  const { data } = await api.get('/books/popular', {
    signal,
  })
  return data
}

export async function getCategories({ signal }: { signal: AbortSignal }) {
  const { data } = await api.get('/books/categories', { signal })
  return data
}

export async function getBooksByCategory({
  signal,
  category,
}: {
  signal: AbortSignal
  category: CategoryDTO
}) {
  const { data } = await api.get(`/books/categories/${category.id}`, {
    signal,
  })
  return data
}

export async function getBookReviews({
  signal,
  bookId,
}: {
  signal: AbortSignal
  bookId: string
}) {
  const { data } = await api.get(`/books/reviews`, {
    signal,
    params: { bookId },
  })
  return data
}

export async function getLastRead({ signal }: { signal: AbortSignal }) {
  const { data } = await api.get('/books/last-read', { signal })
  return data
}

export async function getUserRatings({ signal }: { signal: AbortSignal }) {
  const { data } = await api.get(`/ratings/user`, { signal })
  return data
}

export async function createBookReview({
  data,
  bookId,
}: {
  bookId: string
  data: { rate: number; description: string }
}) {
  await api.post(`/ratings/books/${bookId}`, data)
}
