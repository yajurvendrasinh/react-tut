function ProfileCard (props) {
    // const title = props.title
    // const handle = props.handle
    
    // fancy destructuring the above lines

    const {title, handle, image, desc} = props;

    /**
     * the above can also be written as
     * function ProfileCard ({title, handle})
     * as the first argument of any component is basically the props passed down from the parent
     * damn destructuring
     */



    return (
        // <div>
        //     {/* <h1>Profile Card</h1> */}
        //     <img alt={`logo for ` + title} src={image} />
        //     <section className="card-title">Title is : {title}</section>
        //     <section className="card-handle">Handle is: {handle}</section>
        // </div>
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image}  alt={`logo for ` + title}  />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    {/* <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={image}  alt={`logo for ` + title}  />
                        </figure>
                    </div> */}
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{handle}</p>
                    </div>
                </div>

                <div className="content">
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;