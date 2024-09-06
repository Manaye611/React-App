import Manaphoto from './Manaphoto.jpg'
function Lower(){
    return(
        <div className="lower"
        style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr',
            color:'#b0b6c1', backgroundColor:'#282c34'
        }}>

            <div className="column who">
                <h1>Who is manaye?</h1>
                <img src={Manaphoto} className="profile" alt='profile-image' />
                <p className="description">Manaye, 22, is an IT student at the University
                     of Dubai, where he earned a full scholarship for
                      his excellent performance in grade 12. He has a 
                      growing set of programming skills and a strong interest 
                      in technology. Manaye is dedicated to expanding his 
                      knowledge in the field of IT and exploring 
                      new opportunities for growth.</p>
            </div>

            <div className="column edu">
                <h1>Education and skills</h1>
                <h3>Lower Grades</h3>
                <ul>
                    <li>Grade 1-3: Dalacho primary school</li>
                    <li>Grade 4-8: Tullu Gana primary school</li>
                </ul>
                <h3>higher Grades</h3>
                <ul>
                    <li>Grade 9 & 10: Tullu Gana secondary school</li>
                    <li>Grade 11 & 12: Adet secondary school</li>
                </ul>
                <h3>University</h3>
                <ul>
                    <li>Fresh man courses: Bahirdar University</li>
                    <li>IT courses: University of Dubai in progress....</li>
                </ul>
            </div>

            <div className="column cont">
                <h1>contact</h1>
                <ul>
                    <li>Phone: +971 568049361</li>
                    <li>Email: manayeworkie611@gmail.com</li>
                    <li><a href="https://www.linkedin.com/in/manaye-habtie-0a0a46298/"
                            target="blank">linkedin</a></li>
                    <li><a href="https://www.facebook.com/mana611" target="blank">Facebook</a></li>
                </ul>
            </div>

        </div>
    );
};
export default Lower;