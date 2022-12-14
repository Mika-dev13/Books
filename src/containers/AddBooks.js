import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../redux/actions/actionAddBooks'

const AddBooks = ({ libraryData, addBook }) => {
  console.log(libraryData)
  const initialState = {
    title: '',
    author: '',
  }

  const [newData, setNewData] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(newData)
    addBook(newData)

    //vider le input

    setNewData(initialState)
  }
  return (
    <main role="main">
      <div className="container-fluid bg-light p-5 d-flex justify-content-center mb-4">
        <div className="col-8 text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>
          <form className="row justify-content-center" onSubmit={handleSubmit}>
            <div className="col">
              <input
                value={newData.title}
                type="text"
                className="form-control"
                placeholder="Titre"
                required
                onChange={(e) =>
                  setNewData({ ...newData, title: e.target.value })
                }
              />
            </div>
            <div className="col">
              <input
                value={newData.author}
                type="text"
                className="form-control"
                placeholder="Auteur"
                required
                onChange={(e) =>
                  setNewData({ ...newData, author: e.target.value })
                }
              />
            </div>
            <div className="col-3 d-grid">
              <button className="btn btn-outline-secondary">
                Ajouter un livre
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container" style={{ minHeight: '200px' }}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              <li className="list-group-item list-group-light d-flex justify-content-between">
                Livres enregistrés ici
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger mt-4 mb-5">
              Effacer tous les livres
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

const addStateToProps = (state) => {
  return {
    libraryData: state.library,
  }
}

const addDispatchToProps = (dispatch) => {
  return {
    addBook: (param) => dispatch(addBook(param)),
  }
}

export default connect(addStateToProps, addDispatchToProps)(AddBooks)
