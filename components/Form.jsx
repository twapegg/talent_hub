import React from "react";

// form for creating a job listing

export default function Form() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" required />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" required />
        </div>
        <div>
          <label htmlFor="salary">Salary</label>
          <input type="number" id="salary" name="salary" required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" required />
        </div>
        <div>
          <label htmlFor="industry">Industry</label>
          <input type="text" id="industry" name="industry" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
