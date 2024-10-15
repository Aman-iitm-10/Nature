import BlogMapComp from "./BlogMapComp.jsx";
import data from "./blogData.json";

export default function BlogCon(){
  return (
    <div className="blog-pag" id="blogPag">
      <div className="blog-main-image">
        <div className="Blog-image-title">Blogs</div>
        <div className="blog-buttons">
          <div className="blog-button">
            <a href="#research">
              <button>Research</button>
            </a>
          </div>
          <div className="blog-button">
            <a href="#medical">
              <button>Medical</button>
            </a>
          </div>
          <div className="blog-button">
            <a href="#ayurvedic">
              <button>Ayurvedic</button>
            </a>
          </div>
        </div>
      </div>
      <div className="blog-components">
      {data.map((blogData) => (
        <BlogMapComp
          key={blogData.id}
          id="blogopen"
          image={blogData.image}
          heading={blogData.heading}
          content={blogData.content}
        />
      ))}
      </div>
    </div>
  )
}