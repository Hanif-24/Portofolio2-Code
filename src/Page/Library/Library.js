import './Library.css'
import FormImg from '../../Aset/Found.png'
import { useState, useEffect } from 'react';
import { getList } from '../../api';
import Image from '../../Aset/Mars.png';
import axios from 'axios';

function Library(){
    const [planet, setPlanet] = useState([
        
    ]);

    const [search, setSearch] = useState('')

    const [name, setName] = useState('')

    const [description, setDescrip] = useState ('')

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getList().then((res) => {setPlanet(res)})
    }, []);
    
    const handleSubmit = (e) => {
        const input = {name, description};

        setLoading(true)
        axios.post('http://localhost:3001/planets', input).then((respone)=>{
            setLoading(false)
        })
    }

    return(
        <div className="Library">
            <h1 className="main-title">Planet List</h1>
            <div className="new-planet-form">
                <img src={FormImg} alt="" className="form-img" />
                <h2 className="form-title">Found a New Planet ?</h2>
                <form action="" className="form-input">
                    <div>
                    <input type="text" className="form-name" placeholder="Planet's Name" value={name} onChange={({target})=>setName(target.value)}/>
                    <input type="file" className="form-file" />
                    <textarea name="" id="" cols="30" rows="10" maxLength="200" className="form-area" placeholder="Planet Description..." value={description} onChange={({target})=>setDescrip(target.value)}></textarea>
                    </div>
                    <button className="form-submit" type='submit' onClick={handleSubmit}>
                        {loading ? 'Wait..' : 'Share'}
                    </button>
                </form>
               
            </div>
            <div className="search">
                <input type="text" className="search-planet" placeholder="Search ..." onChange={({target}) => setSearch(target.value)}/>
            </div>
            <hr />

                {planet.filter((item) => { return search.toLocaleLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(search)})
                .map((list, i)=>(
                    <div className="planet-card" key={i}>
                        <h3 className="planet-name">{list.name}</h3>
                        <p className="planet-desc">{list.description}</p>
                        <img src={Image} alt="" className="planet-img" />
                    </div>
                ))}
        </div>
    )
};

export default Library;