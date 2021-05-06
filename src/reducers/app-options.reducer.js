const defaultOptions = {
  modal: {
    isOpen: false
  },
  sort: {
    genre: 'all',
    field: 'release_date',
    order: 'desc',
  }
}

const appOptions = (state = defaultOptions, action) => {
  switch (action.type) {
    case 'OPEN_MODAL_ADD':
      state = { ...state,
        modal: {
          isOpen: true,
          type: 'add'
        }
      }
      return state;
    case 'OPEN_MODAL_EDIT':
      state = { ...state,
        modal: {
          isOpen: true,
          type: 'edit'
        }
      }
      return state;
    case 'OPEN_MODAL_DELETE':
      state = { ...state,
        modal: {
          isOpen: true,
          type: 'delete'
        }
      }
      return state;
    case 'OPEN_MODAL_SUBMITTED':
      state = { ...state,
        modal: {
          isOpen: true,
          type: 'submitted'
        }
      }
      return state;
    case 'CLOSE_MODAL':
      state = { ...state,
        modal: {
          ...state.modal,
          isOpen: false
        }
      }
      return state;
    case 'SORT_BY':
      state = { ...state,
        sort: {
          ...state.sort,
          field: action.payload.field,
          order: action.payload.order
        }
      }
      return state;
    case 'FILTER_GENRE':
      state = { ...state,
        sort: {
          ...state.sort,
          genre: action.payload
        }
      }
      return state;
    default:
      return state;
  }
}

export default appOptions;
