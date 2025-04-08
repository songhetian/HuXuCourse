import Comments from "../components/comments";
import Members from "../components/members";


const MembersLayout = ({ children }) => {
    return (
        <div>
            <h1>{children}</h1>
            <div className="flex">
                <Members />
                <Comments />
            </div>
        </div>
    );
};

export default MembersLayout;