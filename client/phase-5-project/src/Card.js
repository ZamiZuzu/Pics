

function CardContainer({url, title}) {

  return (
        <div className="img-card">
            <img src={url} className="preview-img" alt={title}/>
        </div>
    )
}

export default CardContainer;