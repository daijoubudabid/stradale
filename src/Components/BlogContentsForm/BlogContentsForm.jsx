import './BlogContentsForm.scss'

export const BlogContentsForm = () => {
  return (
    <div className="blog-contents-form">
      <h4>Leave a Comment</h4>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Name</label>
        <input type="text" />
        <label >Message</label>
        <textarea id="" cols="30" rows="6"></textarea>
        <button>SEND</button>
      </form>
    </div>
  );
};
