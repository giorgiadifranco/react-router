import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function AddPostForm(){

    const initialPosts = {

        "title": " ",
        "slug": " ",
        "content": " ",
        "image": ' ',
        "tags": [
            
        ]


    }

    const [formData, setFormData] = useState(initialPosts)
    const navigate = useNavigate()

    function handleFormSubmit(e){
        e.preventDefault()
        const newItem = {

            slug: Date.now(),
            ...formData
        }

        console.log(newItem);

        fetch('http://localhost:3001/posts', {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
              'Content-Type': 'application/json'
            }
        })

        .then(res => res.json())
        .then(response =>{
            console.log('Success:', response)

            navigate('/pizze')
            
        })
        .catch(error => console.error('Error:', error));


        setFormData(initialPosts)
    }

    function handleFormField(e){

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value 

        setFormData({

            ...formData,
            [e.target.name]: value
        })
    }


    return(

       
            <form onSubmit={handleFormSubmit} className="bg-light p-4 rounded">
              <h3 className="mb-4">Aggiungi un Nuovo Post</h3>
          
       
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Titolo</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  placeholder="Inserisci il titolo del post"
                  required
                  value={formData.title}
                  onChange={handleFormField}
                />
              </div>
          
            
              <div className="mb-3">
                <label htmlFor="image" className="form-label">URL Immagine</label>
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  id="image"
                  placeholder="https://esempio.com/immagine.jpg"
                  value={formData.image}
                  onChange={handleFormField}
                />
                <small className="form-text text-muted">Inserisci il link dell'immagine del post</small>
              </div>
          
           
              <div className="mb-3">
                <label htmlFor="content" className="form-label">Contenuto</label>
                <textarea
                  className="form-control"
                  name="content"
                  id="content"
                  rows="5"
                  placeholder="Scrivi il contenuto del post"
                  required
                  value={formData.content}
                  onChange={handleFormField}
                ></textarea>
              </div>
          
         
              <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tag</label>
                <input
                  type="text"
                  className="form-control"
                  name="tags"
                  id="tags"
                  placeholder="Inserisci i tag separati da virgola"
                  value={formData.tags.join(', ')}
                  onChange={(e) =>
                    handleFormField({
                      target: {
                        name: 'tags',
                        value: e.target.value.split(',').map((tag) => tag.trim()),
                      },
                    })
                  }
                />
                <small className="form-text text-muted">Separare i tag con una virgola (es. 'cucina, dolci, italiano')</small>
              </div>
          
              
              <div className="form-check mb-3">
                <input
                  id="is_available"
                  name="is_available"
                  type="checkbox"
                  className="form-check-input"
                  checked={formData.is_available || false}
                  onChange={handleFormField}
      />
      <label className="form-check-label" htmlFor="is_available">Post Pubblicato</label>
    </div>


    <button type="submit" className="btn btn-primary">
      <i className="bi bi-floppy"></i> Salva
    </button>
  </form>

    )



}