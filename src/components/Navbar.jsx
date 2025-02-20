
const Navbar = ({menuName}) => {
  return (
    <div>
        <ul>
            <MenuItem menu={menuName} />
        </ul>
    </div>
  )
}

const MenuItem = ({menu})=> {
return menu.map( (element) => <li>{element}</li>)
} 



export default Navbar