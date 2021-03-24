import React,{useState} from 'react'

import { Conteiner, A , BoxUpload,ImagePreview} from "./styles"
import Button from '../../components/Button'
import Title from '../../components/Title'
import Camera from '../../assets/Camera.png'


import Main from '../../components/Main';
import Ola from '../../components/Ola'

import CloseIcon from "../../assets/CloseIcon.svg";
function Uploader() {
    const [image, setImage] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);
    const [typeFile, setTypeFile] = useState("");
  
    function handleImageChange(e) {
      if (e.target.files && e.target.files[0]) {
        setTypeFile(e.target.files[0].type);
        let reader = new FileReader();
  
        reader.onload = function (e) {
          setImage(e.target.result);
          setIsUploaded(true);
        };
  
        reader.readAsDataURL(e.target.files[0]);}
    }



        return (
            <Main>
<Conteiner>
                    <Ola/>
                    <Title title="Faça o reconhecimento facial" />
                   
                    <BoxUpload>
          <div className="image-upload">
            {!isUploaded ? (
              <>
                <label htmlFor="upload-input">
                  <img
                    src={Camera}
                    draggable={"false"}
                    alt="placeholder"
                    style={{ width: 300, height: 300 }}
                  />
                  <p style={{ color: "#444" }}>Click para Cadastra uma Imagem</p>
                </label>

                <input
                  id="upload-input"
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                  onChange={handleImageChange}
                />
              </>
            ) : (
              <ImagePreview>
                <img
                  className="close-icon"
                  src={CloseIcon}
                  alt="CloseIcon"
                  onClick={() => {
                    setIsUploaded(false);
                    setImage(null);
                  }}
                />
                {typeFile.includes("video") ? (
                  <video
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    controls
                    autoPlay
                    alt="uploaded-img"
                  />
                ) : (
                  <img
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    alt="uploaded-img"
                  />
                )}
              </ImagePreview>
            )}
          </div>
        </BoxUpload>
        {isUploaded ? <h2>Type is {typeFile}</h2> : null}

                   
                    <div className="col-md-6 offset-md-3">
                        <div > 
                            <Button><A href="/login-estufas">Cadastrar</A></Button>
                        
                        </div>
                    </div>


                </Conteiner>
            </Main>
           
        )
    }


export default Uploader;