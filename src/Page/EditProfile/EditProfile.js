import './EditProfile.css'
import { useState } from 'react'
import axios from 'axios'

function EditProfile(){

    const [profile, setProfile] = useState ("https://fakeimg.pl/200x200/")

    const handleFile = (e) => {
        let upload = e.target.files[0];
        setProfile(URL.createObjectURL(upload))
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('image', profile)
        axios({
            url: "http://localhost:3001/profile",
            method: "POST",
            data: formData
        }).then((res)=>{})
    }

    const handleCancel = () => {
        setProfile("https://fakeimg.pl/200x200/")
    }
    return(
        <div>
            <div className="Edit">
                <div className="edit-picture">
                    <img src={profile} className="temporary-img" />
                    <input type="file" className="edit-file" onChange={handleFile}/> 
                </div>
                <div className="edit-main">
                <form action="">
                    <table>
                        <tr className="table-section">
                            <td><label htmlFor="frist">Frist Name</label></td>
                            <td><input type="text" className="edit-input" id="frist" name="frist"/></td>
                        </tr>
                        <tr className="table-section">
                            <td><label htmlFor="LastName">Last Name</label></td>
                            <td><input type="text" className="edit-input"/></td>
                        </tr>
                        <tr className="table-section">
                            <td><label htmlFor="">Job</label></td>
                            <td><input type="text" className="edit-input" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Age</label></td>
                            <td><input type="number" className="edit-age" /></td>
                        </tr>
                        <tr>
                            <td className="label-radio"><label htmlFor="">Gender</label></td>
                            <td className="table-radio">
                                
                                <input type="radio" className="edit-radio" name="radAnswer" id="male" value="male"/>
                                <label>Male</label>
                                <input type="radio" className="edit-radio" name="radAnswer" id="female" value="female"/>
                                <label>Female</label>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Address</label></td>
                            <td><textarea name="" id="" maxlength="300" className="edit-input-area"></textarea></td>
                        </tr>
                    </table>
                    </form> 
                </div> 
            </div>
            <div className="btn-group">
                <button className="save-btn" onClick={handleSubmit}>Save</button>
                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
};

export default EditProfile;