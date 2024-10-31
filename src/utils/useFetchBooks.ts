import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { BookProps } from '@/@types/book';
import { CategoryProps } from '@/@types/category';
import { handleAxiosError } from './handleAxiosError';

export function useFetchBooks(selectedCategory: CategoryProps | null, search: string) {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [isBooksFetchLoading, setIsBooksFetchLoading] = useState(false);

  const fetchBooks = useCallback(async () => {
    setIsBooksFetchLoading(true); // Comece a carregar os livros
    try {
      const response = await axios.get('http://localhost:8000/get-books', {
        params: {
          title: search,
          author: search,
          category_id: selectedCategory?.id ?? null,
        },
      });

      if (response?.data) {
        setBooks(response.data); // Atualiza os livros
      }
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setIsBooksFetchLoading(false); // Finaliza o carregamento
    }
  }, [selectedCategory, search]); // Atualize quando a categoria ou a pesquisa mudar

  useEffect(() => {
    fetchBooks(); // Carrega os livros ao montar o componente
  }, [fetchBooks]); // Dependência de fetchBooks para recarregar se mudar

  return { books, isBooksFetchLoading, refetchBooks: fetchBooks }; // Retorna a função de recarregamento
}
