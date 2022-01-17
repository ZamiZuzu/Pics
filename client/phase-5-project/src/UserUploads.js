import { useState, useEffect } from "react";
import Card from './Card';

function UserUploads({user}){
    const [imageList] = useState(user.images)
    const [visibleList, setVisibleList] = useState([])
    const [currentFinalImage, setCurrentFinalImage] = useState(0)

    useEffect(()=> {
        if(imageList != null){
          let tempArray = []
          let remainingImages = (imageList.length - currentFinalImage)
          if(remainingImages >= 10){ 
            for(let i = currentFinalImage; i < (currentFinalImage + 10); i++){
              tempArray.push(imageList[i])
            }
          } else {
            for(let i = currentFinalImage; i < (currentFinalImage + remainingImages); i++){
              tempArray.push(imageList[i])
            }
          }
          setVisibleList(tempArray)
        }
      }, [imageList, currentFinalImage])


      const handleNextPage = () => {
        setCurrentFinalImage(currentFinalImage + 10)
      }
      const handlePrevPage = () => {
        if(currentFinalImage < 10){
          setCurrentFinalImage(0)
        }else{
          setCurrentFinalImage(currentFinalImage - 10)
        }
      }
          
      return (
        <>
          <div className="card-container">
            {visibleList.length === 0 ?
              <h1>Oops, no more Uploads!</h1>
                :
              visibleList.map((i) => {
                return(<Card url={i.url} key={i.id} title={i.title}/>
                )
              }) 
            }
          </div>
          <button onClick={handlePrevPage}>Previous Page</button>
          <h3>Page: {(currentFinalImage / 10)+1}</h3>
          <button onClick={handleNextPage}>Next Page</button>
        </>
      );
    }

export default UserUploads;