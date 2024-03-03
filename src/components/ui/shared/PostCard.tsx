import { Models } from "appwrite";
import { Link } from "react-router-dom"

type PostCardProps = {
    post: Models.Document;
}

const PostCard = ({ }: PostCardProps) => {
  return (
    <div className="post-card">
        <div className="flex-between">
            <div className="flex items-center gap-3">
                <Link to={'/'}>
                    <img
                        src={ '/icons/profile-placeholder.svg'}
                        alt="creator"
                        className="rounded-full w-12 lg:h-12" 
                        />
                    </Link>
                    <div className="flex flex-col">
                        <p className="base-medium lg:body-bold text-light-1">
                            @KFlieder
                        </p>
                        <div className="flex-center gap-2 text-light-3">
                        <p className="subtle-semibold lf:small-regular">
                            Created 1 day ago
                        </p>
                        -
                        <p className="subtle-semibold lg:small-regular">
                            Location 
                        </p>
                        </div>
                    </div>
            </div>
            <img src="/icons/edit.svg" alt="edit" height={30} width={30} />
       </div>
       <div className="small-medium lg:base-medium py-5">
            <p>First week in mexico</p>
            <ul>
                <li>#Mexico</li>
            </ul>
       </div>
       <img src="/assets/images/selfie.jpeg" alt="post" className="post-card_img"/>
       <div className="flex justify-between items-center z-20">
       <div className="flex gap-2 mr-5">
       <img src="/icons/liked.svg" alt="liked" className="post-card_liked cursor-pointer" width={20} height={20} onClick={() => {}} />
       <p className="small-medium lg:base-medium">1</p>
       </div>
       <div className="flex gap-2 mr-5">
       <img src="/icons/save.svg" alt="save" className="post-card_liked cursor-pointer" width={20} height={20} onClick={() => {}} />

       </div>
       </div>
   </div>
  )
}

export default PostCard