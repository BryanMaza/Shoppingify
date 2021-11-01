import React from "react";
import { useState } from "react";

function AddProduct({ addItem, categories }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuCategories = () => {
    setIsMenuOpen(true);
  };

  const closeMenuCategories = () => {
    setIsMenuOpen(false);
  };

  const selectCategory = (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.add("selected");
    } else if (e.target.parentNode.tagName === "LI") {
      e.target.parentNode.classList.add("selected");
    }
  };

  return (
    <div className='addProduct'>
      <h2>Add a new item</h2>
      <form onSubmit={addItem.handleSubmit}>
        <div className='form-group'>
          {addItem.errors.name ? (
            <div className='error'>{addItem.errors.name}</div>
          ) : null}
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Enter a name'
            autoComplete='off'
            onChange={addItem.handleChange}
            value={addItem.values.name}
          />
          <label htmlFor='name'>Name</label>
        </div>
        <div className='form-group'>
          <textarea
            type='text'
            className='form-control'
            id='note'
            placeholder='Enter a note'
            onChange={addItem.handleChange}
            value={addItem.values.note}
          ></textarea>
          <label htmlFor='note'>Note (optional)</label>
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='image'
            placeholder='Enter a url'
            autoComplete='off'
            onChange={addItem.handleChange}
            value={addItem.values.image}
          />

          <label htmlFor='image'>Image</label>
        </div>
        <div className='form-group'>
          <div className={isMenuOpen ? "categories active" : "categories"}>
            {categories.categories ? (
              <ul>
                {categories.categories.map((category) => (
                  <li key={category._id} onClick={selectCategory}>
                    <span>{category.name}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {addItem.errors.category ? (
            <div className='error'>{addItem.errors.category}</div>
          ) : null}
          <input
            type='text'
            className='form-control'
            id='category'
            placeholder='Enter a category'
            onChange={addItem.handleChange}
            value={addItem.values.category}
            autoComplete='off'
            onClick={openMenuCategories}
          />
          <label htmlFor='category'>Category</label>
          <span
            className={
              isMenuOpen
                ? "close material-icons active"
                : "close material-icons"
            }
            onClick={closeMenuCategories}
          >
            close
          </span>
        </div>
        <div className='buttons'>
          <button type='submit' className='btn btn-danger'>
            Cancel
          </button>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
