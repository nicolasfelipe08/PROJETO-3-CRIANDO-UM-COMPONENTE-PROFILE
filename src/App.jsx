import Profile from "./components/Profile/index.jsx"

export default function App (props){
  return(
    <div className="cor">
    <Profile 
    img={'./image.png'}
    name={'Nicolas'}
    bio={'Full-stack desenveloper at Acme Inc.'}
    phone={'+55 (85) 99227-4770'}
    email={'nicolasfelipe0308@gmail.com'}
    github={'github'}
    Linkedin={'Linkedin'}
    Figma={'Figma'}
    />
  </div>
  )
}
