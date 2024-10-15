export default function BlogMapComp(props) {
	return (

		<div className="blog-section">
			<div className="lin">
				<div className="triangle">
					<svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-code">
						<path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
					</svg>
				</div>
				<div className="blog-section-part-left"></div>

			</div>
			<div className="blog-section-part">
        
				<div>
					<img src={props.image}  id={props.id}/>
				</div>
				<div className="blog-section-part-right">
					<div className="blog-section-part-right-content">
						<h1>{props.heading}</h1>
						<div className="blog-section-part-right-about">
							{props.content}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}