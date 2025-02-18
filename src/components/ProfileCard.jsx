export const ProfileCard = ({ name, age, job ,avatar,}) => {
    return (
        <div className="userr">
            <p>Name: {name}</p>
            <p>age: {age}</p>
            <p>jobs: {job}</p>
            <p>avatar: {avatar}</p>
        </div>
    )
}