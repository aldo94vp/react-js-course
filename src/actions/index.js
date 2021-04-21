export const setMoviesList = movies => ({
  type: 'SET_MOVIES_LIST',
  payload: movies
});

export const setMovie = movie => ({
  type: 'SET_MOVIE',
  payload: movie
});

export const clearMovie = () => ({
  type: 'CLEAR_MOVIE'
});

export const openModalAdd = () => ({
  type: 'OPEN_MODAL_ADD'
});

export const openModalEdit = () => ({
  type: 'OPEN_MODAL_EDIT'
})

export const openModalDelete = () => ({
  type: 'OPEN_MODAL_DELETE'
})

export const closeModal = () => ({
  type: 'CLOSE_MODAL'
});

export const sortBy = sortOptions => ({
  type: 'SORT_BY',
  payload: {
    field: sortOptions.field,
    order: sortOptions.order ? 'asc' : 'desc'
  }
});

export const filterGenre = genre => ({
  type: 'FILTER_GENRE',
  payload: genre
})
