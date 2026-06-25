

const userData = [
    {
        name: "Ivan",
        city: "Bangalore",
        description: "Software Developer",
        skills: ["Java", "Spring Boot", "React", "JavaScript", "MySQL"],
        online: false,
        profile: "images/user2.webp"
    },
    {
        name: "Arjun",
        city: "Chennai",
        description: "Full Stack Java Developer",
        skills: ["Java", "Spring Boot", "Hibernate", "MySQL", "React"],
        online: true,
        profile: "images/user1.webp"
    },
    {
        name: "Rahul",
        city: "Pune",
        description: "Backend Developer",
        skills: ["Java", "Spring Boot", "Microservices", "Docker", "PostgreSQL"],
        online: false,
        profile: "images/user3.jpeg"
    }
];


function User(props) {

    return (
        <div className="card-container">
            <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "Online" : "Offline"}</span>
            <img src={props.profile} alt="user" className="img" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>

            <div className="button">
                <button>Message</button>
                <button>Following</button>
            </div>
            <div className="skills">
                <h4>Skills</h4>
                <ul>
                    {props.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
const UserCard = () => {
    return (
        <>
            {userData.map((user, index) => (
                <User
                    key={index}
                    name={user.name}
                    city={user.city}
                    description={user.description}
                    skills={user.skills}
                    online={user.online}
                    profile={user.profile}
                />
            ))}
        </>
    )
}

export default UserCard

// <User name="Ivan" city="Banglore" description="Software Developer"
//     skills={["Java", "Spring Boot", "React", "JavaScript", "MySQL"]} online = {false} profile ="images/user2.webp"/>

