import './Homepage.css';
import admin1 from '../../Aset/Admin-1.png';
import admin2 from '../../Aset/Admin-2.png';
import admin3 from '../../Aset/Admin-3.png';
import admin4 from '../../Aset/Admin-4.png';
function Homepage() {
    return (
        <div className="Homepage" id="Homepage">
            <section className="hero">
                <div className="hero-text">
                    <h1 className="title">Planetarium</h1>
                    <p className="sub-title">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </section>

            <section className="admin">
                <h1 className="admin-title">Admin</h1>
                <p className="sub-title">Amet minim mollit non deserunt ullamco est sit aliqua dolor do a</p>
                <div className="admin-list">
                    <div className="admin-card">
                        <img src={admin1} alt="Admin1" className="admin-img" />
                        <p className="admin-name">John</p>
                    </div>
                    <div className="admin-card">
                        <img src={admin2} alt="Admin2" className="admin-img" />
                        <p className="admin-name">Criss</p>
                    </div>
                    <div className="admin-card">
                        <img src={admin3} alt="Admin3" className="admin-img" />
                        <p className="admin-name">Jessica</p>
                    </div>
                    <div className="admin-card">
                        <img src={admin4} alt="Admin4" className="admin-img" />
                        <p className="admin-name">Robert</p>
                    </div>
                </div>
            </section>

            <section className="submit">
                <input type="text" className="input-name" placeholder="Submit Your Name"/>
                <br/>
                <button className="submit-name">Submit</button>
            </section>
        </div>
    );
}

export default Homepage;