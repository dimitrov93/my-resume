import React from "react";
import "../Add/addPortfolio.css";

const AddPortfolio = () => {
  return (
    <div class="add-page">
      <h1 class="add-page-title">Add Item</h1>
      <form action="#" class="add-page-form">
        <div class="form-group">
          <label for="title" class="form-label">
            Title:
          </label>
          <input type="text" id="title" name="title" class="form-input" />
        </div>

        <div class="form-group">
            <label for="image" class="form-label">
                Image:
            </label>
            <input type="text" id="image" name="image" class="form-input" />
        </div>

        <div class="form-group">
            <label for="github" class="form-label">
                Github:
            </label>
            <input type="text" id="github" name="github" class="form-input" />
        </div>

        <div class="form-group">
            <label for="demo" class="form-label">
                Demo:
            </label>
            <input type="text" id="demo" name="demo" class="form-input" />
        </div>

        <button type="submit" class="form-button">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;
