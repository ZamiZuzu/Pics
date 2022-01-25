import { useState, useEffect } from "react";
import Card from './Card';

function UserUploads({user, setUser}){
    const [imageList, setImageList] = useState(user.images)
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
                return(<Card url={i.picture.url} 
                             key={i.id} 
                             title={i.title} 
                             id={i.id} 
                             delete_option={setImageList} 
                             imageList={imageList}
                             userid={user.id}
                             setUser={setUser}/>
                )
              }) 
            }
          </div>
          <div className="page-buttons">
            <button onClick={handlePrevPage}> &lt; </button>
            <p>{(currentFinalImage / 10)+1}</p>
            <button onClick={handleNextPage}> &gt; </button>
          </div>
        </>
      );
    }

export default UserUploads;